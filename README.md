# Moje trke

Lični trkački kalendar za Srbiju i region. Prati šta te zanima, na šta si prijavljen i šta si istrčao — bez naloga, bez servera, bez praćenja korisnika.

Jedna React komponenta koja radi kao web stranica, PWA i Android aplikacija.

---

## Kalendar

655 trka iz 40 zemalja: region, susedne zemlje i veliki evropski maratoni i polumaratoni, sezona 2026. plus prve objavljene trke za 2027.

| Zemlja | Ukupno | Predstojećih |
|---|---|---|
| Srbija | 105 | 20 |
| Hrvatska | 81 | 53 |
| Bosna i Hercegovina | 75 | 16 |
| Slovenija | 43 | 18 |
| Italija | 40 | 37 |
| Španija | 32 | 32 |
| Francuska | 24 | 21 |
| Nemačka | 23 | 17 |
| Velika Britanija | 22 | 20 |
| Crna Gora | 18 | 3 |
| Severna Makedonija | 18 | 5 |
| Portugal | 16 | 13 |
| Austrija | 15 | 14 |
| Češka | 12 | 7 |
| Poljska | 11 | 9 |
| Danska | 10 | 6 |
| Grčka | 10 | 7 |
| Holandija | 10 | 9 |
| Turska | 9 | 5 |
| Finska | 8 | 6 |
| Norveška | 8 | 6 |
| Belgija | 7 | 5 |
| Mađarska | 6 | 5 |
| Malta | 6 | 5 |
| Bugarska | 5 | 3 |
| Irska | 5 | 4 |
| Slovačka | 5 | 3 |
| Švedska | 5 | 4 |
| Andora | 4 | 1 |
| Island | 4 | 3 |
| Rumunija | 4 | 2 |
| Kipar | 3 | 3 |
| Estonija | 2 | 0 |
| Litvanija | 2 | 1 |
| Moldavija | 2 | 1 |
| Albanija | 1 | 1 |
| Gruzija | 1 | 0 |
| Letonija | 1 | 1 |
| Lihtenštajn | 1 | 0 |
| Luksemburg | 1 | 1 |

182 predstojećih trka ima link za prijavu (stanje 17.10.2026) — dugme se ne prikazuje kad trka prođe.

### Odakle podaci

Sve je prepisano sa objavljenih kalendara i sajtova organizatora. **Ništa nije procenjivano.**

| Izvor | Šta daje |
|---|---|
| [trci.rs](https://trci.rs/kalendar-trka/) | RS, BA, ME, HR, MK — datumi, dužine, usponi |
| [runners.hr](https://runners.hr/utrke/) | HR — predstojeće trke za 2026. i 2027, datumi i dužine |
| [trki.mk](https://trki.mk/mk) | MK — gradske trke sa potvrđenim datumom |
| [trk.ba](https://trk.ba/kalendar/) | BiH — trail kalendar; dužine i usponi sa stranica prijave |
| [ontime-timing.com](https://ontime-timing.com/) | BiH — gradske trke, 2026. i najave za 2027. |
| [spisaktrka.com](https://www.spisaktrka.com/trke) | gradske trke i polumaratoni u Srbiji, Sofijski maraton |
| [finishers.com](https://www.finishers.com/en/destinations) | veliki evropski maratoni i polumaratoni, BG/RO/HU/GR, provera regiona — samo potvrđeni datumi |
| [gb3timing.com](https://gb3timing.com/kalendar), [mostar.run](https://mostar.run/) | BiH — gradske trke i polumaratoni |
| [runczech.com](https://www.runczech.com/en/events) | Češka — Prag, Liberec |
| [turkeysforlife.com](https://www.turkeysforlife.com/running-events-marathons-races-ultras.html) | Turska — kalendar trka |
| [protime.si](https://protime.si/), [timingljubljana.si](https://www.timingljubljana.si/Koledar.aspx) | Slovenija — deonice |
| [AIMS](https://aims-worldrunning.org/directory.html) | maratoni i polumaratoni — SE, NO, GB, ES, IT, DE, FR, PT, DK, NL, BE |
| [mountain-race.rs](https://mountain-race.rs/kalendar-trka/) | sezona 2027, linkovi za prijavu, ispravke |
| [hac.si](https://hac.si/koledar-in-seznam-vseh-tekov-2026-v-sloveniji/) | Slovenija — datumi i mesta |
| ljubljanskimaraton.si, zagreb-marathon.com, skopskimaraton.com.mk, podgorica.run, bokamarathon.com, utrka.com | veliki maratoni, direktno sa izvora |

---

## Šta aplikacija radi

**Praćenje sezone** — svakoj trci daješ status `zanima me`, `prijavljen` ili `istrčano`. Za istrčane upisuješ vreme i biraš deonicu; aplikacija računa tempo po kilometru.

**Statistika** — broj istrčanih, broj prijava, ukupni kilometri i uspon. U zbir ulaze samo trke sa upisanim vremenom.

**Filteri** — pretraga po nazivu i mestu, zemlja, mesec, pa iza linka „Filteri": podloga, `Moja sezona`, `Zanima me`, `Prošle trke`. Link nosi brojač aktivnih filtera da se ne desi da gledaš filtriranu listu ne znajući zašto.

**Podsetnici** — zvonce prikazuje trke u narednih 7 dana sa statusom `zanima me` ili `prijavljen`, uz opciono sistemsko obaveštenje, jednom po trci.

**Tvoje izmene** — dodaj svoju trku sa proizvoljnim brojem deonica, ili ispravi datum, mesto, deonice i link za prijavu postojeće. Link nije obavezan i mora da počinje sa `http://` ili `https://`; prazno polje u ispravci uklanja dugme `Prijava`. Ispravke se čuvaju odvojeno od originala, pa se dugmetom `Vrati original` poništavaju.

**Dva jezika** — srpski i engleski, prekidač `EN` / `SR` u zaglavlju pored zvonceta. Prvo otvaranje bira jezik po pregledaču: srpski, hrvatski i bosanski dobijaju srpski, ostali engleski. Izbor se pamti pod posebnim ključem `trke-lang`, pa ga `Obriši sve` ne resetuje. Nazivi trka i mesta se ne prevode — to su vlastita imena.

**Greben na kartici** — generisan SVG čija strmina odgovara najtežoj deonici. Determinističan je, iz hasha ID-ja, pa je ista trka uvek isti oblik.

---

## Podaci korisnika

Sve lokalno, u jednom ključu `trke-srb:v2`:

```js
{
  tracking: {
    "vlasina": { status: "done", result: { secs: 15000, km: 35.4, gain: 1186 } }
  },
  custom:   [ /* tvoje trke, id oblika "mine-<timestamp>" */ ],
  edits:    { "rajac": { date, city, distances } },
  notified: { "povlen-trail": "2026-10-15" }
}
```

Nema sinhronizacije između uređaja. Brisanje podataka pregledača briše i sezonu.

---

## Build

Kalendar živi u `data/` kao obične JS liste, odvojeno od koda. `scripts/build.js` ih validira, upisuje u `SEED_RACES` unutar `moje-trke.jsx` i sklapa samostalan HTML u `dist/`.

```bash
node scripts/build.js seed   # samo regeneriši kalendar
node scripts/build.js        # kalendar + HTML (traži npx tsc)
```

Build puca na dupliranom ID-u, lošem datumu ili tipu, negativnoj dužini i linku koji pokazuje na trku koja ne postoji — bolje nego da greška tiho prođe u podatke.

**Dodavanje trke** u `data/<zemlja>.js`, format `[id, naziv, mesto, zemlja, tip, datum, [[km, uspon], ...]]`. Link za prijavu u `data/data-prijave.js`, po ID-u.

### Pokretanje

Komponenta se izvozi kao `export default function App()` i traži React 18. Očekuje globalni `window.storage` — asinhroni key-value sloj sa `get`, `set`, `delete`, `list`. U pregledaču je to omotač nad `localStorage`; `scripts/shell.html` ga već sadrži. Bez njega se aplikacija i dalje otvara, ali javlja da čuvanje ne radi.

Kao Android aplikacija: vidi [Android (APK)](#android-apk).

## Android (APK)

Capacitor omotač (`appId` `rs.mojetrke.app`). APK pravi GitHub Actions (`.github/workflows/android.yml`) — na računaru ne treba ništa da se instalira.

1. **Jednom:** u GitHub-u, `Settings → Secrets and variables → Actions`, upiši 4 tajna podatka za potpis: `ANDROID_KEYSTORE_BASE64`, `ANDROID_KEYSTORE_PASSWORD`, `ANDROID_KEY_ALIAS`, `ANDROID_KEY_PASSWORD`. Ključ (`moje-trke.jks`) čuvaj van repozitorijuma — bez njega nova verzija ne može da se instalira preko stare. Bez tajnih podataka pravi se debug APK; on radi, ali za svaku novu verziju staru treba obrisati (gube se oznake i vremena).
2. **Svaki put:** pošalji izmene (push). Za trku, link ili kod, Actions sam pravi novi APK, ili ga pokreni ručno: `Actions → Android APK → Run workflow`.
3. **Na telefonu:** `Releases → Moje trke 1.0.N → moje-trke.apk`, preuzmi i instaliraj (prvi put Android traži dozvolu „Instaliraj nepoznate aplikacije”).

Šta je drugačije u APK-u:

- radi bez interneta: React i Capacitor su ugrađeni u stranicu (`node scripts/build.js android` → `www/index.html`), umesto da se vuku sa CDN-a;
- podsetnici su prava Android obaveštenja: u 9 ujutru, nedelju dana i dan pre trke označene sa „Zanima me” ili „Prijavljen”, i kad je aplikacija zatvorena;
- dugme Nazad zatvara otvoren prozor, pa vraća na vrh, pa izlazi;
- Google AdMob baner na dnu ekrana (samo u APK-u, web verzija je bez oglasa). Bez tajnih podataka `ADMOB_APP_ID` i `ADMOB_BANNER_ID` u GitHub Secrets prikazuje se Google-ov probni baner „Test Ad”; kad ih upišeš, idu pravi oglasi. Ako je potrebno (EU), Google pre prvog oglasa pita za saglasnost;
- linkovi za prijavu se otvaraju u pregledaču telefona;
- ikonica i splash se prave iz `assets/` (`icon-only.png`, `icon-foreground.png`, `icon-background.png`, `splash.png`), ikonica obaveštenja je `assets/android/ic_stat_trke.png`.

Lokalno, sa Android Studiom (nije potrebno za Actions):

```bash
npm install
npm run build:android
npm run android:init      # jednom: pravi android/ i ikonice
npx cap sync android
npm run android:open      # otvara Android Studio → Build → Build APK
```

`www/` i `android/` se ne čuvaju u repozitorijumu, prave se pri svakom buildu.

---

## Testiranje

Logika filtriranja se testira izvlačenjem stvarnog koda iz `moje-trke.jsx` i puštanjem nad seed podacima, uz veštačke trke na granicama (juče, danas, sutra, pre 60 dana) — jer prave prošle trke padaju u tekući mesec i ne otkrivaju greške oko granice meseca.

Interaktivni elementi imaju `data-testid`:

| Grupa | Primer |
|---|---|
| Filteri | `f-toggle`, `f-all`, `f-trail`, `f-city`, `f-mine`, `f-interested`, `f-past`, `f-reset`, `f-country`, `f-month` |
| Status trke | `int-<id>`, `reg-<id>`, `done-<id>`, `save-<id>`, `clear-<id>`, `prijava-<id>` |
| Dodavanje | `add-name`, `add-date`, `add-country`, `add-km-0`, `add-gain-0`, `add-reg`, `add-add-row`, `add-submit` |
| Ispravka | `edit-date`, `edit-reg`, `edit-km-0`, `edit-add-row`, `edit-submit`, `edit-reset`, `del-race` |
| Greške | `err-name`, `err-date`, `err-dist`, `err-reg`, `edit-err` |
| Jezik | `lang-toggle` |
