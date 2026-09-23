#!/usr/bin/env node
// Build: data/*.js -> SEED_RACES u moje-trke.jsx -> dist/moje-trke.html
//
//   node scripts/build.js seed    samo regeneriše SEED_RACES iz data/
//   node scripts/build.js         seed + transpile + sklapanje HTML-a
//
// Za HTML deo treba TypeScript (npx tsc). Seed deo radi sa golim Node-om.

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "moje-trke.jsx");
const DIST = path.join(ROOT, "dist");

function loadRaces() {
  const files = ["data-rs-ba-me.js", "data-si-mk.js", "data-hr.js", "data-me-extra.js", "data-2027.js"];
  const all = files.flatMap((f) => require(path.join(ROOT, "data", f)));
  const reg = require(path.join(ROOT, "data", "data-prijave.js"));

  const ids = all.map((r) => r[0]);
  const dup = ids.filter((x, i) => ids.indexOf(x) !== i);
  if (dup.length) throw new Error("Duplirani id: " + dup.join(", "));

  for (const [id, name, city, country, type, date, dists] of all) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error(`${id}: loš datum ${date}`);
    if (!["trail", "city"].includes(type)) throw new Error(`${id}: loš tip ${type}`);
    if (!name || !city || !country) throw new Error(`${id}: nedostaje polje`);
    for (const [km, gain] of dists) {
      if (!(km > 0)) throw new Error(`${id}: loša dužina ${km}`);
      if (!(gain >= 0)) throw new Error(`${id}: loš uspon ${gain}`);
    }
  }

  const known = new Set(ids);
  for (const [id, url] of Object.entries(reg)) {
    if (!known.has(id)) throw new Error(`Link za nepostojeću trku: ${id}`);
    if (!/^https?:\/\//.test(url)) throw new Error(`${id}: loš url ${url}`);
  }

  all.sort((a, b) => a[5].localeCompare(b[5]) || a[1].localeCompare(b[1]));
  return { all, reg };
}

function writeSeed() {
  const { all, reg } = loadRaces();
  const lines = all.map(([id, name, city, country, type, date, dists]) => {
    const ds = dists.map(([km, gain]) => `{ km: ${km}, gain: ${gain} }`).join(", ");
    const r = reg[id] ? `, reg: "${reg[id]}"` : "";
    return `  { id: "${id}", name: "${name}", city: "${city}", country: "${country}", type: "${type}", date: "${date}", distances: [${ds}]${r} },`;
  });

  const src = fs.readFileSync(SRC, "utf8");
  const start = src.indexOf("const SEED_RACES = [");
  const end = src.indexOf("\n];", start) + 3;
  if (start < 0 || end < 3) throw new Error("SEED_RACES blok nije pronađen u moje-trke.jsx");

  fs.writeFileSync(SRC, src.slice(0, start) + "const SEED_RACES = [\n" + lines.join("\n") + "\n];" + src.slice(end));
  console.log(`seed: ${lines.length} trka, ${Object.keys(reg).length} sa linkom za prijavu`);
}

function buildHtml() {
  fs.mkdirSync(DIST, { recursive: true });
  const tmp = path.join(DIST, ".tmp");
  fs.mkdirSync(tmp, { recursive: true });

  // JSX -> JS. Komponenta se izvozi kao default; u pregledaču nema modula,
  // pa import zamenjujemo globalnim React-om i dodajemo poziv za render.
  let s = fs.readFileSync(SRC, "utf8");
  s = s.replace(/^import React[^\n]*\n/, "const { useState, useEffect, useMemo, useCallback, useRef } = React;\n");
  s = s.replace("export default function App()", "function App()");
  s += `
if (ReactDOM.createRoot) { ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App)); }
else { ReactDOM.render(React.createElement(App), document.getElementById("root")); }
`;
  const tsx = path.join(tmp, "app.tsx");
  fs.writeFileSync(tsx, s);
  execSync(`npx tsc ${tsx} --jsx react --target es2017 --noCheck --outDir ${tmp}`, { stdio: "inherit" });

  const js = fs.readFileSync(path.join(tmp, "app.js"), "utf8");
  const shell = fs.readFileSync(path.join(__dirname, "shell.html"), "utf8");
  const [head, tail] = shell.split("<!--APP-->");
  const out = path.join(DIST, "moje-trke.html");
  fs.writeFileSync(out, head + js + tail);
  fs.rmSync(tmp, { recursive: true, force: true });
  console.log(`html: ${out} (${Math.round(fs.statSync(out).size / 1024)} KB)`);
}

writeSeed();
if (process.argv[2] !== "seed") buildHtml();
