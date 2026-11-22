#!/usr/bin/env node
// Firebase za Android (poziva ga admob-manifest.js posle „cap copy”):
//  1. kopira assets/android/google-services.json u android/app/ (Capacitor-ov app/build.gradle
//     tada sam uključuje com.google.gms.google-services dodatak),
//  2. u android/variables.gradle uključuje Google prijavu za @capacitor-firebase/authentication.
// Bez google-services.json ne radi ništa (nalog se tada ne prikazuje u aplikaciji).
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const src = path.join(root, "assets", "android", "google-services.json");
const appDir = path.join(root, "android", "app");
if (!fs.existsSync(src) || !fs.existsSync(appDir)) {
  console.log("Firebase: nema google-services.json — preskačem");
  return;
}
fs.copyFileSync(src, path.join(appDir, "google-services.json"));

const vars = path.join(root, "android", "variables.gradle");
if (fs.existsSync(vars)) {
  let g = fs.readFileSync(vars, "utf8");
  const add = { rgcfaIncludeGoogle: "true", androidxCredentialsVersion: "'1.3.0'" };
  for (const [k, v] of Object.entries(add)) {
    const re = new RegExp(`^\\s*${k}\\s*=.*$`, "m");
    if (re.test(g)) g = g.replace(re, `    ${k} = ${v}`);
    else g = g.replace(/ext\s*\{/, (m) => `${m}\n    ${k} = ${v}`);
  }
  fs.writeFileSync(vars, g);
}

// Capacitor šablon: root build.gradle ima classpath za google-services, a app/build.gradle
// ga primenjuje kad postoji google-services.json. Proveri, za svaki slučaj.
const appGradle = path.join(appDir, "build.gradle");
if (fs.existsSync(appGradle)) {
  let g = fs.readFileSync(appGradle, "utf8");
  if (!/com\.google\.gms\.google-services/.test(g)) {
    g += `\napply plugin: 'com.google.gms.google-services'\n`;
    fs.writeFileSync(appGradle, g);
  }
}
const rootGradle = path.join(root, "android", "build.gradle");
if (fs.existsSync(rootGradle)) {
  let g = fs.readFileSync(rootGradle, "utf8");
  if (!/com\.google\.gms:google-services/.test(g)) {
    g = g.replace(/dependencies\s*\{/, (m) => `${m}\n        classpath 'com.google.gms:google-services:4.4.2'`);
    fs.writeFileSync(rootGradle, g);
  }
}
console.log("Firebase: google-services.json i Google prijava uključeni");
