#!/usr/bin/env node
// Build: data/*.js -> SEED_RACES u moje-trke.jsx -> dist/moje-trke.html
//
//   node scripts/build.js seed    samo regeneriše SEED_RACES iz data/
//   node scripts/build.js         seed + transpile + sklapanje HTML-a
//   node scripts/build.js android seed + www/index.html za Android (APK)
//
// Za HTML deo treba TypeScript (npx tsc). Seed deo radi sa golim Node-om.
// Android verzija radi bez interneta: React i Capacitor se ugrađuju u stranicu
// iz node_modules (npm install), umesto da se učitavaju sa CDN-a.

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "moje-trke.jsx");
const DIST = path.join(ROOT, "dist");

function loadRaces() {
  const files = ["data-rs-ba-me.js", "data-si-mk.js", "data-hr.js", "data-me-extra.js", "data-2027.js", "data-evropa.js"];
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
  const races = all.map(([id, name, city, country, type, date, dists]) => ({
    id, name, city, country, type, date,
    distances: dists.map(([km, gain]) => ({ km, gain })),
    ...(reg[id] ? { reg: reg[id] } : {}),
  }));
  const lines = races.map((r) => "  " + JSON.stringify(r) + ",");
  // Oznaka verzije kalendara: aplikacija sa interneta uzima races.json samo ako je noviji.
  const generated = new Date().toISOString().slice(0, 19) + "Z";

  let src = fs.readFileSync(SRC, "utf8").replace(/\r\n/g, "\n");
  const start = src.indexOf("const SEED_RACES = [");
  const end = src.indexOf("\n];", start) + 3;
  if (start < 0 || end < 3) throw new Error("SEED_RACES blok nije pronađen u moje-trke.jsx");
  src = src.slice(0, start) + "const SEED_RACES = [\n" + lines.join("\n") + "\n];" + src.slice(end);
  src = src.replace(/const SEED_GENERATED = "[^"]*";/, `const SEED_GENERATED = "${generated}";`);
  fs.writeFileSync(SRC, src.replace(/\n/g, "\r\n"));

  // Javni kalendar koji aplikacija povlači sa GitHub-a (bez nove instalacije).
  const body = races.map((r) => "  " + JSON.stringify(r)).join(",\n");
  fs.writeFileSync(path.join(ROOT, "races.json"), `{"generated": "${generated}", "count": ${races.length}, "races": [\n${body}\n]}\n`);

  console.log(`seed: ${lines.length} trka, ${Object.keys(reg).length} sa linkom za prijavu`);
}

function buildHtml(target) {
  const android = target === "android";
  const outDir = android ? path.join(ROOT, "www") : DIST;
  fs.mkdirSync(DIST, { recursive: true });
  fs.mkdirSync(outDir, { recursive: true });
  const tmp = path.join(DIST, ".tmp");
  fs.mkdirSync(tmp, { recursive: true });

  // JSX -> JS. Komponenta se izvozi kao default; u pregledaču nema modula,
  // pa import zamenjujemo globalnim React-om i dodajemo poziv za render.
  let s = fs.readFileSync(SRC, "utf8");
  s = s.replace(/^import React[^\n]*\n/, "const { useState, useEffect, useMemo, useCallback, useContext, useRef } = React;\n");
  s = s.replace("export default function App()", "function App()");
  s += `
if (ReactDOM.createRoot) { ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App)); }
else { ReactDOM.render(React.createElement(App), document.getElementById("root")); }
`;
  const tsx = path.join(tmp, "app.tsx");
  fs.writeFileSync(tsx, s);
  execSync(`npx tsc ${tsx} --jsx react --target es2017 --noCheck --outDir ${tmp}`, { stdio: "inherit" });

  const js = fs.readFileSync(path.join(tmp, "app.js"), "utf8");
  let shell = fs.readFileSync(path.join(__dirname, "shell.html"), "utf8");
  if (android) shell = androidShell(shell);
  const [head, tail] = shell.split("<!--APP-->");
  const out = path.join(outDir, android ? "index.html" : "moje-trke.html");
  fs.writeFileSync(out, head + js + tail);
  fs.rmSync(tmp, { recursive: true, force: true });
  console.log(`html: ${out} (${Math.round(fs.statSync(out).size / 1024)} KB)`);
}

// CDN skripte iz shell.html menja ugrađenim kopijama iz node_modules i dodaje
// most ka Capacitor dodacima (obaveštenja, dugme Nazad).
function androidShell(shell) {
  const nm = (rel) => path.join(ROOT, "node_modules", rel);
  const inline = (rel, required) => {
    const f = nm(rel);
    if (!fs.existsSync(f)) {
      if (required) throw new Error(`Nema ${rel} — pokreni "npm install".`);
      console.warn(`upozorenje: nema ${rel}, preskačem`);
      return "";
    }
    return `<script>\n${fs.readFileSync(f, "utf8").replace(/<\/script/gi, "<\\/script")}\n</script>\n`;
  };
  const start = shell.indexOf('<script src="https://cdnjs.cloudflare.com/ajax/libs/react/');
  const end = shell.indexOf("</head>");
  if (start < 0 || end < start) throw new Error("shell.html: ne nalazim React skripte");
  const scripts =
    inline("react/umd/react.production.min.js", true) +
    inline("react-dom/umd/react-dom.production.min.js", true) +
    inline("@capacitor/core/dist/capacitor.js", false) +
    inline("@capacitor/local-notifications/dist/plugin.js", false) +
    inline("@capacitor/app/dist/plugin.js", false) +
    `<script>
(function () {
  var C = window.Capacitor;
  if (!C || !C.isNativePlatform || !C.isNativePlatform()) return;
  var P = C.Plugins || {};
  var LN = (window.capacitorLocalNotifications && window.capacitorLocalNotifications.LocalNotifications) || P.LocalNotifications;
  var APP = (window.capacitorApp && window.capacitorApp.App) || P.App;
  if (LN) window.__nativeLN = LN;

  // Google AdMob baner na dnu ekrana. ID dolazi iz ADMOB_BANNER_ID (GitHub Secrets),
  // a bez njega se koristi Google-ov probni baner („Test Ad").
  var reg = (window.capacitorExports && window.capacitorExports.registerPlugin) || C.registerPlugin;
  var AD = P.AdMob || (reg ? reg("AdMob") : null);
  var BANNER = ${JSON.stringify(process.env.ADMOB_BANNER_ID || "ca-app-pub-3940256099942544/6300978111")};
  var TESTING = ${JSON.stringify(!process.env.ADMOB_BANNER_ID)};
  // Rezervna kopija: fajl se upiše u keš aplikacije i otvori se Android „Deli” (Drive, mejl, Viber…).
  var FS = P.Filesystem || (reg ? reg("Filesystem") : null);
  var SH = P.Share || (reg ? reg("Share") : null);
  if (FS && SH) {
    window.__nativeExport = function (name, text) {
      return FS.writeFile({ path: name, data: text, directory: "CACHE", encoding: "utf8" }).then(function (r) {
        return SH.share({ title: name, files: [r.uri], dialogTitle: name });
      });
    };
  }
  var setH = function (h) { document.documentElement.style.setProperty("--ad-h", (h || 0) + "px"); };
  if (AD) {
    AD.addListener("bannerAdSizeChanged", function (s) { setH(s && s.height); });
    AD.addListener("bannerAdFailedToLoad", function () { setH(0); });
    AD.initialize({ initializeForTesting: TESTING })
      .then(function () { return AD.requestConsentInfo ? AD.requestConsentInfo().catch(function () { return null; }) : null; })
      .then(function (c) {
        if (c && c.isConsentFormAvailable && c.status === "REQUIRED") {
          return AD.showConsentForm().catch(function () {}).then(function () {
            return AD.requestConsentInfo().catch(function () { return c; });
          });
        }
        return c;
      })
      .then(function (c) {
        // Korisnik iz EU mora moći da promeni saglasnost: dugme u podnožju aplikacije.
        if (c && c.privacyOptionsRequirementStatus === "REQUIRED" && AD.showPrivacyOptionsForm) {
          window.__adPrivacy = function () { return AD.showPrivacyOptionsForm().catch(function () {}); };
          window.dispatchEvent(new Event("adprivacy"));
        }
        return AD.showBanner({ adId: BANNER, adSize: "ADAPTIVE_BANNER", position: "BOTTOM_CENTER", margin: 0, isTesting: TESTING });
      })
      .catch(function () { setH(0); });
  }
  if (APP) APP.addListener("backButton", function () {
    // Nazad zatvara otvoren prozor ili obaveštenja (kao Esc), pa vraća na vrh, pa izlazi.
    if (document.querySelector('[aria-modal="true"], [data-testid="bell-panel"]')) {
      window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
    } else if (window.scrollY > 300) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      APP.exitApp();
    }
  });
})();
</script>
`;
  // Android (Capacitor 8, SystemBars "native"): bez viewport-fit=cover WebView ostaje
  // ispod statusne i navigacione trake, pa sadržaj ne ulazi pod njih.
  shell = shell.replace(", viewport-fit=cover", "");
  const start2 = shell.indexOf('<script src="https://cdnjs.cloudflare.com/ajax/libs/react/');
  const end2 = shell.indexOf("</head>");
  return shell.slice(0, start2) + scripts + shell.slice(end2);
}

writeSeed();
if (process.argv[2] !== "seed") buildHtml(process.argv[2]);
