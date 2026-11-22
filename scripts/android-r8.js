#!/usr/bin/env node
// Uključuje R8 (smanjivanje i maskiranje koda) za release verziju Android aplikacije.
// Google Play traži maskiranje ≥ 25 % (Android vitals / optimizacija DEX koda).
// Capacitor 8.6 šablon ima minifyEnabled false; noviji Capacitor ga već uključuje
// (minifyEnabled true + proguard-android-optimize.txt), pa ovde radimo isto.
// Pravila za Capacitor dodatke dolaze iz samih biblioteka (consumer proguard rules),
// a ispod su dodata i za sigurnost. Mapping fajl ide u AAB, pa ga Play koristi sam.
const fs = require("fs");
const path = require("path");

const app = path.join(__dirname, "..", "android", "app");
const gradle = path.join(app, "build.gradle");
if (!fs.existsSync(gradle)) process.exit(0);

let g = fs.readFileSync(gradle, "utf8");
g = g.replace(/(release\s*\{[^}]*?)minifyEnabled\s+false/, "$1minifyEnabled true");
g = g.replace("getDefaultProguardFile('proguard-android.txt')", "getDefaultProguardFile('proguard-android-optimize.txt')");
fs.writeFileSync(gradle, g);

const rulesFile = path.join(app, "proguard-rules.pro");
const MARK = "# --- Moje trke: R8 pravila ---";
let rules = fs.existsSync(rulesFile) ? fs.readFileSync(rulesFile, "utf8") : "";
if (!rules.includes(MARK)) {
  rules += `
${MARK}
# Capacitor most i dodaci (poziva ih JavaScript po imenu)
-keep class com.getcapacitor.** { *; }
-keep @com.getcapacitor.annotation.CapacitorPlugin public class * { *; }
-keep public class * extends com.getcapacitor.Plugin { *; }
-keepclassmembers class * { @android.webkit.JavascriptInterface <methods>; }
-keep class com.capacitorjs.plugins.** { *; }
-keep class com.getcapacitor.community.admob.** { *; }
-keep class io.capawesome.capacitorjs.plugins.firebase.** { *; }
# Firebase prijava: koristimo samo Google; SDK-ovi ostalih provajdera (Facebook…) nisu uključeni
-dontwarn com.facebook.**
-dontwarn com.google.android.gms.games.**
# Čitljivi izveštaji o rušenju (brojevi linija)
-keepattributes SourceFile,LineNumberTable,*Annotation*,Signature,InnerClasses,EnclosingMethod
-renamesourcefileattribute SourceFile
`;
  fs.writeFileSync(rulesFile, rules);
}
console.log("R8:", /minifyEnabled\s+true/.test(g) ? "uključen" : "NIJE pronađen release blok");
