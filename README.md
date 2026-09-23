# Moje trke

Lični trkački kalendar za Srbiju i region. Prati šta te zanima, na šta si prijavljen i šta si istrčao — bez naloga, bez servera, bez praćenja korisnika.

Jedna React komponenta koja radi kao web stranica, PWA i Android aplikacija.

---

## Kalendar

194 trke iz šest zemalja, sezona 2026. plus prve objavljene trke za 2027.

| Zemlja | Ukupno | Predstojećih |
|---|---|---|
| Srbija | 96 | 24 |
| Slovenija | 42 | 39 |
| Crna Gora | 18 | 3 |
| Hrvatska | 14 | 5 |
| Bosna i Hercegovina | 14 | 4 |
| Severna Makedonija | 10 | 2 |

45 predstojećih trka ima direktan link za prijavu.

### Odakle podaci

Sve je prepisano sa objavljenih kalendara i sajtova organizatora. **Ništa nije procenjivano.**

| Izvor | Šta daje |
|---|---|
| [trci.rs](https://trci.rs/kalendar-trka/) | RS, BA, ME, HR, MK — datumi, dužine, usponi |
| [mountain-race.rs](https://mountain-race.rs/kalendar-trka/) | sezona 2027, linkovi za prijavu, ispravke |
| [hac.si](https://hac.si/koledar-in-seznam-vseh-tekov-2026-v-sloveniji/) | Slovenija — datumi i mesta |
| ljubljanskimaraton.si, zagreb-marathon.com, skopskimaraton.com.mk, podgorica.run, bokamarathon.com, utrka.com | veliki maratoni, direktno sa izvora |

---

## Šta aplikacija radi

**Praćenje sezone** — svakoj trci daješ status `zanima me`, `prijavljen` ili `istrčano`. Za istrčane upisuješ vreme i biraš deonicu; aplikacija računa tempo po kilometru.

**Statistika** — broj istrčanih, broj prijava, ukupni kilometri i uspon. U zbir ulaze samo trke sa upisanim vremenom.

**Filteri** — pretraga po nazivu i mestu, zemlja, mesec, pa iza linka „Filteri": podloga, `Moja sezona`, `Zanima me`, `Prošle trke`. Link nosi brojač aktivnih filtera da se ne desi da gledaš filtriranu listu ne znajući zašto.

**Podsetnici** — zvonce prikazuje trke u narednih 7 dana sa statusom `zanima me` ili `prijavljen`, uz opciono sistemsko obaveštenje, jednom po trci.

**Tvoje izmene** — dodaj svoju trku sa proizvoljnim brojem deonica, ili ispravi datum, mesto i deonice postojeće. Ispravke se čuvaju odvojeno od originala, pa se dugmetom `Vrati original` poništavaju.

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

Kao Android aplikacija: Capacitor omotač, `appId` `rs.mojetrke.app`, web sadržaj u `assets/public`, `window.storage` se postavlja u `index.html` pre učitavanja.

---

## Testiranje

Logika filtriranja se testira izvlačenjem stvarnog koda iz `moje-trke.jsx` i puštanjem nad seed podacima, uz veštačke trke na granicama (juče, danas, sutra, pre 60 dana) — jer prave prošle trke padaju u tekući mesec i ne otkrivaju greške oko granice meseca.

Interaktivni elementi imaju `data-testid`:

| Grupa | Primer |
|---|---|
| Filteri | `f-toggle`, `f-all`, `f-trail`, `f-city`, `f-mine`, `f-interested`, `f-past`, `f-reset`, `f-country`, `f-month` |
| Status trke | `int-<id>`, `reg-<id>`, `done-<id>`, `save-<id>`, `clear-<id>`, `prijava-<id>` |
| Dodavanje | `add-name`, `add-date`, `add-country`, `add-km-0`, `add-gain-0`, `add-add-row`, `add-submit` |
| Ispravka | `edit-date`, `edit-km-0`, `edit-add-row`, `edit-submit`, `edit-reset`, `del-race` |
| Greške | `err-name`, `err-date`, `err-dist` |
| Jezik | `lang-toggle` |
