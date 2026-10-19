// Veliki maratoni i polumaratoni u Evropi, narednih 12 meseci, plus trke iz BG, RO, HU, GR i AL.
// Izvor: finishers.com (stranice događaja, preuzeto 30.9.2026) — samo potvrđeni datumi.
// Sofijski maraton: spisaktrka.com.
// Višednevne trke vode se po prvom danu. Deonice: samo trčanje za odrasle (bez štafeta i dečjih trka).
// Izostavljeno jer datum nije potvrđen: Varšava (septembar 2027);
// Berlin 2027 još nije objavljen. Polumaratoni bez potvrđenog datuma: Prag, Kopenhagen, Istanbul,
// Atina, Porto, Bratislava, London Big Half. gain: 0 znači da uspon nije objavljen.

module.exports = [
  // --- 2026 ---
  ["sofia-marathon-2026", "Wizz Air Sofijski maraton", "Sofija", "BG", "city", "2026-10-10", [[42.195,0],[21.097,0],[10,0],[5,0]]],
  ["bucharest-marathon-2026", "Bucharest Marathon", "Bukurešt", "RO", "city", "2026-10-10", [[42.195,0],[21.097,0],[10,0]]],
  ["budapest-marathon-2026", "Budapest Marathon", "Budimpešta", "HU", "city", "2026-10-10", [[42.195,0],[30,0],[21.097,0],[14,0],[10,0],[5,0]]],
  ["lisbon-marathon-2026", "Lisbon Marathon", "Lisabon", "PT", "city", "2026-10-10", [[42.195,0],[21.097,0],[8.5,0]]],
  ["munich-marathon-2026", "München Marathon", "Minhen", "DE", "city", "2026-10-11", [[42.195,0],[21.097,0],[10,0]]],
  ["amsterdam-marathon-2026", "Amsterdam Marathon", "Amsterdam", "NL", "city", "2026-10-18", [[42.195,0],[21.097,0],[7.5,0]]],
  ["frankfurt-marathon-2026", "Frankfurt Marathon", "Frankfurt", "DE", "city", "2026-10-25", [[42.195,0]]],
  ["dublin-marathon-2026", "Dublin Marathon", "Dablin", "IE", "city", "2026-10-25", [[42.195,205]]],
  ["venice-marathon-2026", "Venicemarathon", "Venecija", "IT", "city", "2026-10-25", [[42.195,0],[21.097,0],[10,0]]],
  ["istanbul-marathon-2026", "Istanbul Marathon", "Istanbul", "TR", "city", "2026-11-01", [[42.195,0],[15.5,0]]],
  ["athens-marathon-2026", "Athens Marathon — The Authentic", "Maraton — Atina", "GR", "city", "2026-11-08", [[42.195,0],[10,0],[5,0]]],
  ["porto-marathon-2026", "Porto Marathon", "Porto", "PT", "city", "2026-11-08", [[42.195,0],[10,0],[6,0]]],
  ["florence-marathon-2026", "Firenze Marathon", "Firenca", "IT", "city", "2026-11-28", [[42.195,0],[10,0]]],
  ["valencia-marathon-2026", "Maratón Valencia", "Valensija", "ES", "city", "2026-12-06", [[42.195,0]]],

  // --- 2027 ---
  ["seville-marathon-2027", "Maratón de Sevilla", "Sevilja", "ES", "city", "2027-02-21", [[42.195,0]]],
  ["barcelona-marathon-2027", "Zurich Marató Barcelona", "Barselona", "ES", "city", "2027-03-14", [[42.195,0]]],
  ["rome-marathon-2027", "Maratona di Roma", "Rim", "IT", "city", "2027-03-14", [[42.195,0],[5,0]]],
  ["paris-marathon-2027", "Marathon de Paris", "Pariz", "FR", "city", "2027-04-04", [[42.195,0]]],
  ["milano-marathon-2027", "Milano Marathon", "Milano", "IT", "city", "2027-04-04", [[42.195,0]]],
  ["vienna-marathon-2027", "Vienna City Marathon", "Beč", "AT", "city", "2027-04-18", [[42.195,0],[21.097,0],[10,0],[5,0]]],
  ["london-marathon-2027", "London Marathon", "London", "GB", "city", "2027-04-25", [[42.195,0]]],
  ["madrid-marathon-2027", "Madrid Marathon", "Madrid", "ES", "city", "2027-04-25", [[42.195,370],[21.097,0],[10,0]]],
  ["hamburg-marathon-2027", "Hamburg Marathon", "Hamburg", "DE", "city", "2027-04-25", [[42.195,0],[21.097,0]]],
  ["prague-marathon-2027", "Prague Marathon", "Prag", "CZ", "city", "2027-05-02", [[42.195,0]]],
  ["copenhagen-marathon-2027", "Copenhagen Marathon", "Kopenhagen", "DK", "city", "2027-05-09", [[42.195,0]]],
  ["stockholm-marathon-2027", "Stockholm Marathon", "Stokholm", "SE", "city", "2027-05-29", [[42.195,0]]],

  // --- polumaratoni ---
  ["valencia-half-2026", "Medio Maratón Valencia", "Valensija", "ES", "city", "2026-10-25", [[21.097,0]]],
  ["boulogne-half-2026", "Semi-marathon de Boulogne-Billancourt", "Boulogne-Billancourt, Pariz", "FR", "city", "2026-11-15", [[21.097,0]]],
  ["seville-half-2026", "Medio Maratón de Sevilla", "Sevilja", "ES", "city", "2026-11-29", [[21.097,0]]],
  ["barcelona-half-2027", "Mitja Marató de Barcelona", "Barselona", "ES", "city", "2027-02-14", [[21.097,0]]],
  ["roma-ostia-2027", "Roma-Ostia Half Marathon", "Rim — Ostija", "IT", "city", "2027-02-28", [[21.097,0]]],
  ["paris-half-2027", "Semi-marathon de Paris", "Pariz", "FR", "city", "2027-03-07", [[21.097,0]]],
  ["lisbon-half-2027", "Lisbon Half Marathon", "Lisabon", "PT", "city", "2027-03-07", [[21.097,0],[10,0],[7,0]]],
  ["malaga-half-2027", "Medio Maratón de Málaga", "Malaga", "ES", "city", "2027-03-07", [[21.097,0]]],
  ["stramilano-2027", "Stramilano", "Milano", "IT", "city", "2027-03-21", [[21.097,0],[10,0],[5,0]]],
  ["berlin-half-2027", "Berliner Halbmarathon", "Berlin", "DE", "city", "2027-04-04", [[21.097,0]]],
  ["madrid-half-2027", "Medio Maratón de Madrid", "Madrid", "ES", "city", "2027-04-04", [[21.097,0]]],
  ["warsaw-half-2027", "Warsaw Half Marathon", "Varšava", "PL", "city", "2027-04-04", [[21.097,0],[5,0]]],
  ["budapest-half-2027", "Budapest Half Marathon", "Budimpešta", "HU", "city", "2027-09-05", [[21.097,0],[10,0]]],

  // --- Bugarska, Rumunija, Mađarska, Grčka, Albanija ---
  // finishers.com, samo trke čiji datum je na stranici potvrđen; Tirana: tiranamarathon.com.
  // Bugarska
  ["pirin-ultra-2026", "Pirin Extreme & Pirin Ultra", "Bansko", "BG", "trail", "2026-09-11", [[160.93,11000],[68,4400],[38,3300],[25,0],[15,0]]],
  ["burgas-marathon-2026", "Burgas Marathon", "Burgas", "BG", "city", "2026-11-15", [[42.195,0],[21.097,0],[10.5,0],[5,0]]],
  ["kodzha-kaya-2027", "Kodzha Kaya", "Bilka", "BG", "trail", "2027-04-24", [[74,4430],[41.9,2610],[25,1600],[14,1050],[3.6,500]]],
  ["varna-marathon-2027", "Varna Marathon", "Varna", "BG", "city", "2027-05-16", [[42.195,0],[21.097,0],[10.5,0]]],
  // Rumunija
  ["trunsylvania-brasov-2026", "tRUNsylvania 10K", "Brašov", "RO", "city", "2026-10-03", [[12,0],[10,0],[5,0]]],
  ["cluj-marathon-2027", "Wizz Air Cluj-Napoca Marathon", "Kluž-Napoka", "RO", "city", "2027-04-11", [[42.195,0],[21.097,0],[10,0]]],
  ["bucharest-half-2027", "Bucharest International Half Marathon", "Bukurešt", "RO", "city", "2027-04-25", [[21.097,0],[10,0],[3.5,0]]],
  // Mađarska
  ["tanuhegyek-trail-2026", "Tanúhegyek Trail", "Badacsonytomaj", "HU", "trail", "2026-11-14", [[41.9,1470],[21,880],[7.2,335]]],
  ["zuzmara-2027", "Zúzmara félmaraton", "Budimpešta", "HU", "city", "2027-01-24", [[21.097,0],[10,0]]],
  ["ipoly-marathon-2027", "Ipoly maraton", "Szob", "HU", "city", "2027-03-20", [[42.195,0],[21.097,0],[15,0],[8,0]]],
  ["vivicitta-budapest-2027", "Telekom Vivicittá polumaraton", "Budimpešta", "HU", "city", "2027-04-10", [[21.097,0],[10,0],[7,0],[6,0]]],
  // Grčka
  ["corfu-old-town-2026", "Corfu Old Town Trail", "Krf", "GR", "trail", "2026-09-12", [[14,0],[7,0]]],
  ["mythical-odyssey-2026", "Mythical Odyssey", "Meteori", "GR", "trail", "2026-09-20", [[150,6200]]],
  ["crete-half-2026", "Polumaraton Krita", "Arkalohori, Krit", "GR", "city", "2026-10-04", [[21.097,0],[10,0],[5,0]]],
  ["thessaloniki-night-half-2026", "Thessaloniki Night Half Marathon", "Solun", "GR", "city", "2026-10-17", [[21.097,0],[10,0],[5,0]]],
  ["olympia-marathon-2026", "Olympia Marathon", "Olimpija", "GR", "city", "2026-11-29", [[42.195,0],[21.097,0],[10,0]]],
  ["coast-to-coast-2027", "Coast to Coast Race", "Ijerapetra, Krit", "GR", "city", "2027-03-21", [[21.1,0],[5,0]]],
  ["rhodes-marathon-2027", "Rhodes Marathon", "Rodos", "GR", "city", "2027-04-18", [[42.195,0],[21.097,0],[10,0],[5,0]]],
  ["athens-half-2027", "Athens Half Marathon (Poseidon)", "Atina", "GR", "city", "2027-04-25", [[21.097,0],[10,0],[5,0]]],
  ["corfu-mountain-trail-2027", "Corfu Mountain Trail", "Krf", "GR", "trail", "2027-05-08", [[103,4200],[44,2200],[24,1200],[12,300]]],
  // Albanija
  ["tirana-marathon-2026", "Wizz Air Tirana Marathon", "Tirana", "AL", "city", "2026-10-25", [[42.195,0],[21.097,0],[10,0]]],

  // --- Austrija ---
  // finishers.com (Salzkammergut, Innsbruck) i zvanični sajtovi (Graz, Linz, Salzburg).
  // Salzburg: festival traje 16-23.5, maraton i polumaraton su 23.5 — vodi se po danu maratona.
  ["graz-marathon-2026", "Graz Marathon", "Grac", "AT", "city", "2026-10-09", [[42.195,0],[21.097,0],[10.55,0],[5,0]]],
  ["salzkammergut-marathon-2026", "Salzkammergut Marathon", "Salzkammergut", "AT", "city", "2026-10-18", [[42.195,0],[27,0],[10,0],[5.2,0]]],
  ["linz-marathon-2027", "Linz Marathon", "Linc", "AT", "city", "2027-04-11", [[42.195,0],[21.097,0],[10.55,0],[5,0]]],
  ["innsbruck-trailrun-2027", "Innsbruck Alpine Trailrun Festival", "Inzbruk", "AT", "trail", "2027-05-05", [[110,0],[85,0],[65,0],[42,0],[25,0],[15,0],[7,0]]],
  ["salzburg-marathon-2027", "Salzburg Marathon", "Salcburg", "AT", "city", "2027-05-23", [[42.195,0],[21.097,0],[10,0],[5.5,0]]],

  // --- Češka ---
  // finishers.com i runczech.com (Liberec Trail Run, Praški polumaraton, Valentýnský běh).
  // Liberec: finishers navodi 4.10, runczech.com 3.10 — uzet datum organizatora.
  ["nn-night-run-prague-2026", "NN Night Run Praha", "Prag", "CZ", "city", "2026-09-12", [[10,0],[5,0],[3,0]]],
  ["liberec-trail-run-2026", "Mattoni Liberec Trail Run", "Liberec", "CZ", "trail", "2026-10-03", [[22,900],[12,0]]],
  ["hradec-kralove-maraton-2026", "Hradecký maraton", "Hradec Kralove", "CZ", "city", "2026-10-04", [[42.195,0],[21.097,0],[10,0]]],
  ["run-the-forests-lednice-2026", "Run the Forests Lednice", "Lednice", "CZ", "trail", "2026-10-10", [[42,0],[21,0],[14,0],[7,0]]],
  ["okolo-pryglu-2026", "Okolo Prýglu", "Brno", "CZ", "trail", "2026-10-10", [[14.1,0]]],
  ["nn-night-run-cb-2026", "NN Night Run České Budějovice", "Češke Budjejovice", "CZ", "city", "2026-10-17", [[10,0],[5,0],[3,0]]],
  ["ostrava-golden-marathon-2026", "Emil Zátopek Ostrava Golden Marathon", "Ostrava", "CZ", "city", "2026-10-24", [[42.195,0],[21.097,0],[10,0]]],
  ["nn-night-run-olomouc-2026", "NN Night Run Olomouc", "Olomouc", "CZ", "city", "2026-10-24", [[10,0],[5,0],[3,0]]],
  ["jested-winter-skyrace-2026", "Leki Ještěd Winter SkyRace", "Liberec", "CZ", "trail", "2026-12-05", [[22,1180],[12,520],[6,220]]],
  ["valentine-run-prague-2027", "Valentýnský běh", "Prag", "CZ", "city", "2027-02-13", [[7,0]]],
  ["prague-half-2027", "Generali 1/2Maraton Praha", "Prag", "CZ", "city", "2027-04-03", [[21.097,0]]],

  // --- Slovačka ---
  // finishers.com; Bratislava maraton još nema potvrđen datum.
  ["kosice-marathon-2026", "Medzinárodný maratón mieru", "Košice", "SK", "city", "2026-10-04", [[42.195,0],[21.097,0]]],
  ["javornicka-stovka-2026", "Javornícka stovka", "Vysoká nad Kysucou", "SK", "trail", "2026-10-10", [[57,2450]]],
  ["psotka-memorial-2026", "Memoriál Psotku", "Štrbské Pleso", "SK", "trail", "2026-10-17", [[37.9,2490],[25.3,1540]]],
  ["kojsovska-hola-2027", "Kojšovská hoľa Spartan Trail", "Kojšov", "SK", "trail", "2027-04-03", [[50,0],[10,0]]],
  ["banska-bystrica-marathon-2027", "Maratón Banská Bystrica", "Banska Bistrica", "SK", "city", "2027-06-05", [[42.195,0],[21.097,0],[10,0],[5,0]]],

  // --- Kipar i Estonija (finishers.com, samo potvrđeni datumi) ---
  // Kiparski maraton: festival 27.2-2.3, maraton je 28.2 — vodi se po danu maratona.
  ["larnaca-marathon-2026", "Larnaca International Marathon", "Larnaka", "CY", "city", "2026-11-15", [[42.195,0],[21.097,0],[10,0],[5,0]]],
  ["nicosia-marathon-2027", "Nicosia Marathon", "Nikozija", "CY", "city", "2027-01-24", [[42.195,0],[21.097,0],[10,0],[5,0]]],
  ["cyprus-marathon-2027", "Cyprus Marathon", "Pafos", "CY", "city", "2027-02-28", [[42.195,0],[21.097,0],[10,0],[5,0],[4,0]]],
  ["tallinn-marathon-2026", "Tallinn Marathon", "Talin", "EE", "city", "2026-09-12", [[42.195,0],[21.097,0],[10,0],[5,0]]],
  ["tartu-city-marathon-2026", "Tartu City Marathon", "Tartu", "EE", "city", "2026-10-03", [[42.195,0],[21.097,0],[10,0]]],

  // --- Gruzija, Finska, Malta ---
  // finishers.com; Tbilisi maraton: tbilisimarathon.ge (AIMS). Višednevne trke po prvom danu.
  // Gruzija
  ["tbilisi-marathon-2026", "Tbilisi Marathon", "Tbilisi", "GE", "city", "2026-09-27", [[42.195,0],[21.097,0],[10,0]]],
  // Finska
  ["finlandia-marathon-2026", "Finlandia Marathon", "Jiveskile", "FI", "city", "2026-09-12", [[42.195,0],[21.097,0],[5,0]]],
  ["tampere-marathon-2026", "Tampere Marathon", "Tampere", "FI", "city", "2026-09-13", [[42.195,0],[21.097,0],[10.5,0]]],
  ["lapland-boreal-2027", "Lapland Boreal Winter Trail", "Ivalo", "FI", "trail", "2027-02-27", [[100,0],[65,0]]],
  ["arctic-wildmarathon-2027", "Arctic Wildmarathon", "Rovaniemi", "FI", "trail", "2027-04-04", [[42,0],[21,0],[10,0]]],
  ["helsinki-city-running-2027", "Helsinki City Running", "Helsinki", "FI", "city", "2027-05-07", [[63.3,0],[42.195,0],[21.097,0],[5,0]]],
  ["nuts-karhunkierros-2027", "NUTS Karhunkierros Trail", "Kuusamo", "FI", "trail", "2027-05-28", [[169.6,3910],[85.2,2040],[57,1640],[34.8,900]]],
  ["helsinki-half-2027", "Björn Borg Helsinki Half Marathon", "Helsinki", "FI", "city", "2027-06-12", [[21.097,0],[5,0]]],
  ["helsinki-marathon-2027", "Björn Borg Helsinki Marathon", "Helsinki", "FI", "city", "2027-08-28", [[42.195,0],[21.097,0],[10,0]]],
  // Malta
  ["ladies-running-club-2026", "Ladies Running Club 10K", "Siđijevi", "MT", "city", "2026-10-11", [[10,0]]],
  ["zurrieq-half-2026", "Żurrieq Half Marathon", "Žurijek", "MT", "city", "2026-11-15", [[21.097,0],[10,0]]],
  ["hopexchange-2026", "The HopeXchange", "Birkirkara", "MT", "city", "2026-12-13", [[10,0],[5,0]]],
  ["mdina-spinola-2026", "Mdina 2 Spinola Xmas Race", "Mdina — Spinola", "MT", "city", "2026-12-20", [[18.6,0]]],
  ["attard-10k-2027", "Attard 10K", "Birkirkara", "MT", "city", "2027-01-10", [[10,0]]],
  ["malta-marathon-2027", "Lifestar Malta Marathon", "Mdina", "MT", "city", "2027-02-28", [[42.195,0],[21.097,0],[5,0]]],

  // --- Island (finishers.com, samo potvrđeni datumi) ---
  ["reykjavik-marathon-2026", "Reykjavik Marathon", "Rejkjavik", "IS", "city", "2026-08-22", [[42.195,0],[21.097,0],[10,0]]],
  ["northern-light-run-2027", "The Northern Light Run", "Rejkjavik", "IS", "city", "2027-02-06", [[5,0]]],
  ["hengill-ultra-2027", "Hengill Ultra-Trail", "Hveragerdi", "IS", "trail", "2027-06-04", [[161.7,5550],[106,3890],[53,1930],[26,630],[10,0],[5,0]]],
  ["midnight-sun-run-2027", "Suzuki Midnight Sun Run", "Rejkjavik", "IS", "city", "2027-06-24", [[21.097,0],[10,0],[5,0]]],

  // --- Litvanija, Letonija, Lihtenštajn, Luksemburg ---
  // Vilnius 2026: finishers.com. Kaunas 2027: marathons.com (finishers još nema tačan dan).
  // Riga 2027: rimirigamarathon.com (15-16.5, po prvom danu). Lihtenštajn 2026: runthealps.com.
  // Luksemburg: ing-night-marathon.lu. Monako: nijedna trka nema potvrđen datum.
  ["lgt-alpin-marathon-2026", "LGT Alpin Marathon", "Bendern", "LI", "trail", "2026-06-13", [[42,1870],[25,720]]],
  ["vilnius-marathon-2026", "Vilnius Marathon", "Vilnjus", "LT", "city", "2026-09-13", [[42.195,0],[21.097,0],[10,0],[5,0]]],
  ["kaunas-marathon-2027", "Kaunas Marathon", "Kaunas", "LT", "city", "2027-04-25", [[42.195,0],[21.097,0],[10,0],[5,0]]],
  ["ing-night-marathon-2027", "ING Night Marathon Luxembourg", "Luksemburg", "LU", "city", "2027-05-08", [[42.195,0],[21.097,0],[5,0],[4.2,0]]],
  ["riga-marathon-2027", "Rimi Riga Marathon", "Riga", "LV", "city", "2027-05-15", [[42.195,0],[21.097,0],[10,0],[5,0]]],

  // --- Turska ---
  // turkeysforlife.com, kalendar trka 2026 (finishers.com nema stranicu za Tursku). Istanbul maraton već postoji.
  ["bodrum-half-2026", "Bodrum Yarı Maratonu", "Bodrum", "TR", "city", "2026-10-04", [[21.097,0],[10,0],[5,0]]],
  ["eker-i-run-2026", "Eker I Run", "Uludağ, Bursa", "TR", "trail", "2026-10-04", [[42,0],[15,0],[5,0]]],
  ["runkara-2026", "Runkara", "Ankara", "TR", "city", "2026-10-11", [[21.097,0],[10.4,0],[4.2,0]]],
  ["cappadocia-ultra-2026", "Cappadocia Ultra-Trail", "Irgup, Kapadokija", "TR", "trail", "2026-10-16", [[119,0],[63,0],[38,0]]],
  ["kas-half-2026", "Kaş Yarı Maratonu", "Kaš", "TR", "city", "2026-10-24", [[21.097,0],[12,0],[6,0]]],
  ["lykos-half-2026", "Lykos Yarı Maratonu", "Pamukale", "TR", "city", "2026-10-25", [[21.097,0],[10,0],[5,0]]],
  ["fethiye-ultra-2026", "Fethiye Ultra Trail", "Fetije", "TR", "trail", "2026-10-31", [[25,0],[10,0]]],
  ["st-nicholas-half-2026", "St. Nicholas Half Marathon", "Demre", "TR", "city", "2026-12-05", [[21.097,0],[12,0],[5,0]]],

  // --- Irska (finishers.com, samo potvrđeni datumi; Dablinski maraton već postoji) ---
  ["dublin-half-2026", "Dublin Half Marathon", "Dablin", "IE", "city", "2026-09-20", [[21.097,0]]],
  ["connemara-marathon-2027", "Connemara Marathon", "Maam Cross", "IE", "city", "2027-04-25", [[63,0],[42.195,0],[21.097,0]]],
  ["great-limerick-run-2027", "Great Limerick Run", "Limerik", "IE", "city", "2027-05-02", [[42.195,0],[21.097,0],[10,0]]],
  ["cork-marathon-2027", "Cork City Marathon", "Kork", "IE", "city", "2027-06-06", [[42.195,0],[21.097,0],[10,0]]],

  // --- Maratoni i polumaratoni: SE, NO, GB, ES, IT, DE, FR, PT, DK ---
  // Izvor: AIMS (aims-worldrunning.org, stranice zemalja — "next confirmed event"), dopuna finishers.com
  // (Manchester, Royal Parks, Run in Lyon). Deonice: AIMS navodi samo tip trke, pa je upisana
  // samo glavna dužina gde druge nisu potvrđene.
  // Danska
  ["hc-andersen-marathon-2026", "H.C. Andersen Marathon", "Odense", "DK", "city", "2026-09-27", [[42.195,0],[21.097,0],[10,0],[4.2,0]]],
  ["copenhagen-half-2026", "Copenhagen Half Marathon", "Kopenhagen", "DK", "city", "2026-09-20", [[21.097,0]]],
  // Danska, dopuna sa finishers.com (provera 1.10.2026, samo potvrđeni datumi)
  ["skagen-marathon-2026", "Marathon in Skagen", "Skagen", "DK", "city", "2026-10-03", [[42.195,0],[30,0],[21.097,0],[10,0],[5,0]]],
  ["esbjerg-half-2026", "Esbjerg City Half Marathon", "Esbjerg", "DK", "city", "2026-10-04", [[21.097,0],[10,0]]],
  ["hammer-trail-winter-2027", "Salomon Hammer Trail Winter", "Sandvig, Bornholm", "DK", "trail", "2027-01-30", [[84,3770],[63,2830],[42,1880],[21,940]]],
  ["hegnet-half-2027", "Hegnet Half", "Liseleje", "DK", "trail", "2027-03-06", [[21.097,0]]],
  ["hammer-trail-2027", "Salomon Hammer Trail", "Sandvig, Bornholm", "DK", "trail", "2027-05-01", [[79,2890],[52,1930],[33,1300],[25,965]]],
  ["odense-city-half-2027", "Odense City Half", "Odense", "DK", "city", "2027-05-30", [[21.097,0],[10,0],[5,0]]],
  ["copenhagen-half-2027", "Copenhagen Half Marathon (WRRC)", "Kopenhagen", "DK", "city", "2027-09-19", [[21.097,0]]],
  // Švedska, Norveška
  ["stockholm-half-2027", "adidas Stockholm Half Marathon", "Stokholm", "SE", "city", "2027-08-21", [[21.097,0]]],
  ["stavanger-marathon-2026", "Stavanger Marathon", "Stavanger", "NO", "city", "2026-08-29", [[42.195,0],[21.097,0],[5,0]]],
  ["polarnight-marathon-2027", "PolarNight Marathon", "Tromse", "NO", "city", "2027-01-09", [[42.195,0],[21.097,0],[10,0],[5,0]]],
  ["bergen-marathon-2027", "Fjordkraft Bergen City Marathon", "Bergen", "NO", "city", "2027-04-24", [[42.195,0],[21.097,0],[5,0]]],
  ["midnight-sun-marathon-2027", "Midnight Sun Marathon", "Tromse", "NO", "city", "2027-06-19", [[42.195,0],[21.097,0],[10,0],[5,0]]],
  // Švedska i Norveška, dopuna 1.10.2026: finishers.com (potvrđeni datumi) i goteborgsvarvet.se.
  // Frozen Lake: polumaraton i maraton 20.3, fun run 5 km dan ranije — vodi se po danu maratona.
  ["stockholm-half-2026", "adidas Stockholm Half Marathon", "Stokholm", "SE", "city", "2026-08-29", [[21.097,0]]],
  ["uppsala-marathon-2026", "Uppsala Marathon", "Upsala", "SE", "city", "2026-10-17", [[42.195,0],[21.097,0]]],
  ["goteborgsvarvet-2027", "Göteborgsvarvet", "Geteborg", "SE", "city", "2027-05-22", [[21.097,0]]],
  ["oslo-marathon-2026", "Oslo Maraton", "Oslo", "NO", "city", "2026-09-12", [[42.195,0],[21.097,0],[10,0]]],
  ["hytteplanmila-2026", "Hytteplanmila", "Hole", "NO", "trail", "2026-10-17", [[10,0]]],
  ["stavanger-three-lakes-2026", "Stavanger Three Lakes Run", "Stavanger", "NO", "city", "2026-11-07", [[21.097,0]]],
  ["frozen-lake-marathon-2027", "Frozen Lake Marathon", "Gol", "NO", "trail", "2027-03-20", [[42,0],[21,0],[5,0]]],
  // Velika Britanija
  ["loch-ness-marathon-2026", "Baxters Loch Ness Marathon", "Invernes, Škotska", "GB", "city", "2026-09-27", [[42.195,0]]],
  ["royal-parks-half-2026", "Royal Parks Half Marathon", "London", "GB", "city", "2026-10-11", [[21.097,0]]],
  ["swansea-half-2027", "Swansea Half Marathon", "Svonsi, Vels", "GB", "city", "2027-03-21", [[21.097,0]]],
  ["manchester-marathon-2027", "Manchester Marathon", "Mančester", "GB", "city", "2027-04-18", [[42.195,0]]],
  ["belfast-marathon-2027", "Belfast City Marathon", "Belfast, S. Irska", "GB", "city", "2027-05-02", [[42.195,0]]],
  ["milton-keynes-marathon-2027", "Milton Keynes Marathon & Half Marathon", "Milton Kins", "GB", "city", "2027-05-03", [[42.195,0],[21.097,0]]],
  // Španija
  ["palma-marathon-2026", "TUI Palma Marathon Mallorca", "Palma, Majorka", "ES", "city", "2026-10-18", [[42.195,0]]],
  ["santa-pola-half-2027", "Mitja Marató Vila de Santa Pola", "Santa Pola", "ES", "city", "2027-01-24", [[21.097,0]]],
  // Italija
  ["udine-half-2026", "Maratonina Città di Udine", "Udine", "IT", "city", "2026-09-20", [[21.097,0]]],
  ["trento-half-2026", "Trento Half Marathon", "Trento", "IT", "city", "2026-09-27", [[21.097,0]]],
  ["ravenna-marathon-2026", "Ravenna Marathon City of Art", "Ravena", "IT", "city", "2026-11-08", [[42.195,0]]],
  ["verona-marathon-2026", "Verona Run Marathon", "Verona", "IT", "city", "2026-11-15", [[42.195,0]]],
  ["milano-half-2026", "Powerade Milano Half Marathon", "Milano", "IT", "city", "2026-11-22", [[21.097,0]]],
  ["romeo-giulietta-half-2027", "Romeo&Giulietta Run Half Marathon", "Bovolone, Verona", "IT", "city", "2027-02-14", [[21.097,0]]],
  ["napoli-half-2027", "Napoli City Half Marathon", "Napulj", "IT", "city", "2027-02-21", [[21.097,0]]],
  ["terni-marathon-2027", "Maratona di San Valentino", "Terni", "IT", "city", "2027-02-21", [[42.195,0]]],
  ["padova-marathon-2027", "Padova Marathon", "Padova", "IT", "city", "2027-04-18", [[42.195,0]]],
  ["moonlight-half-2027", "Moonlight Half Marathon", "Mestre, Venecija", "IT", "city", "2027-05-22", [[21.097,0]]],
  // Nemačka
  ["altotting-half-2026", "Halbmarathon Altötting", "Altetting", "DE", "city", "2026-09-20", [[21.097,0]]],
  ["berlin-marathon-2026", "BMW Berlin-Marathon", "Berlin", "DE", "city", "2026-09-27", [[42.195,0]]],
  ["cologne-marathon-2026", "Generali Köln Marathon", "Keln", "DE", "city", "2026-10-04", [[42.195,0]]],
  ["hamburg-half-2026", "hella hamburg halbmarathon", "Hamburg", "DE", "city", "2026-10-25", [[21.097,0]]],
  ["bad-fussing-marathon-2027", "Johannesbad Thermen-Marathon", "Bad Fising", "DE", "city", "2027-01-31", [[42.195,0]]],
  ["hannover-marathon-2027", "ADAC Marathon Hannover", "Hanover", "DE", "city", "2027-04-11", [[42.195,0]]],
  ["wurzburg-marathon-2027", "WVV Marathon Würzburg", "Vircburg", "DE", "city", "2027-05-23", [[42.195,0]]],
  ["munster-marathon-2027", "Volksbank-Münster-Marathon", "Minster", "DE", "city", "2027-09-12", [[42.195,0]]],
  // Francuska
  ["run-in-lyon-2026", "Run in Lyon", "Lion", "FR", "city", "2026-10-04", [[42.195,0],[21.097,0],[10,0],[5,0]]],
  ["nice-cannes-2026", "French Riviera Marathon Nice-Cannes", "Nica — Kan", "FR", "city", "2026-11-08", [[42.195,0]]],
  ["la-rochelle-marathon-2026", "Marathon de La Rochelle", "La Rošel", "FR", "city", "2026-11-29", [[42.195,0]]],
  // Portugal (Lisabonski polumaraton 11.10 je deo postojećeg unosa Lisbon Marathon)
  ["porto-half-2026", "Hyundai Porto Half Marathon", "Porto", "PT", "city", "2026-09-13", [[21.097,0]]],
  ["discoveries-half-2026", "Discoveries Half Marathon", "Lisabon", "PT", "city", "2026-11-29", [[21.097,0]]],
  ["funchal-marathon-2027", "Funchal Marathon", "Funšal, Madeira", "PT", "city", "2027-01-31", [[42.195,0]]],
  ["cascais-half-2027", "Meia Maratona de Cascais", "Kaškaiš", "PT", "city", "2027-02-07", [[21.097,0]]],

  // --- Holandija i Belgija: maratoni i polumaratoni ---
  // AIMS (Eindhoven, Enschede, Leiden, Rotterdam, Antwerpen) i finishers.com (potvrđeni datumi).
  // Rotterdam: AIMS 10-11.4.2027, maraton u nedelju 11.4. Leiden 8-9.5 — po prvom danu.
  // Holandija
  ["eindhoven-marathon-2026", "ASML Marathon Eindhoven", "Ajndhoven", "NL", "city", "2026-10-11", [[42.195,0],[21.097,0],[15,0],[10,0],[5,0]]],
  ["gouda-half-2026", "Halve Marathon Gouda", "Gauda", "NL", "city", "2026-11-08", [[21.097,0],[10,0]]],
  // provera 1.10.2026 sa zvaničnih sajtova: Venloop ima i maraton, Roterdam 10 km (ne 10.55).
  ["egmond-half-2027", "NN Egmond Halve Marathon", "Egmond an Ze", "NL", "city", "2027-01-10", [[21.097,0],[10.55,0]]],
  ["cpc-den-haag-2027", "NN CPC Loop Den Haag", "Hag", "NL", "city", "2027-03-14", [[21.097,0],[10,0],[5,0]]],
  ["amstelveen-marathon-2027", "KPMG Amstelveen Spring Marathon", "Amstelven", "NL", "city", "2027-03-21", [[42.195,0],[21.097,0],[10,0],[5,0]]],
  ["venloop-2027", "Arrow Venloop", "Venlo", "NL", "city", "2027-03-21", [[42.195,0],[21.097,0],[10,0]]],
  ["rotterdam-marathon-2027", "NN Marathon Rotterdam", "Roterdam", "NL", "city", "2027-04-11", [[42.195,0],[10,0],[4.2,0]]],
  ["enschede-marathon-2027", "Enschede Marathon", "Enshede", "NL", "city", "2027-04-11", [[42.195,0],[21.097,0],[10,0],[5,0]]],
  ["leiden-marathon-2027", "Leiden Marathon", "Lajden", "NL", "city", "2027-05-08", [[42.195,0],[21.097,0],[10,0],[5,0]]],
  // Belgija
  ["antwerp-great-half-2026", "Great Half Antwerpen", "Antverpen", "BE", "city", "2026-09-20", [[21.097,0]]],
  ["bruges-marathon-2026", "Athora Bruges Marathon", "Brige", "BE", "city", "2026-10-11", [[42.195,0],[21.097,0],[8,0]]],
  ["antwerp-marathon-2026", "TREK Antwerp Marathon", "Antverpen", "BE", "city", "2026-10-18", [[42.195,0],[21.097,0],[10,0]]],
  ["ghent-marathon-2027", "Ghent Marathon", "Gent", "BE", "city", "2027-03-21", [[42.195,0],[21.097,0]]],
  ["kortrijk-marathon-2027", "Skylux Marathon Kortrijk", "Kortrajk", "BE", "city", "2027-04-25", [[42.195,0],[21.097,0]]],
  ["charleroi-marathon-2027", "Charleroi International Marathon", "Šarloa", "BE", "city", "2027-04-25", [[42.195,0],[21.097,0],[10,0],[5,0]]],
  ["roeselare-marathon-2027", "Marathon Roeselare", "Ruselare", "BE", "city", "2027-05-16", [[42.195,0],[21.097,0],[12,0],[6,0]]],

  // --- Andora ---
  // Andorra Marathon: letsdothis.com. Comapedrosa: carrerasdemontana.com. Dynafit Andorra Trail:
  // avaibooksports.com (9-11.10, po prvom danu; deonice i usponi sa finishers.com, ranije "La Sportiva").
  // Trail 100 Andorra 2027: campus.coach (11.6.2027), usponi sa finishers.com.
  ["andorra-marathon-2026", "Andorra Marathon", "Andora la Velja", "AD", "city", "2026-05-16", [[42.195,0]]],
  ["comapedrosa-skyrace-2026", "Skyrace Comapedrosa", "Arinsal", "AD", "trail", "2026-07-25", [[36,3300],[24,2375],[19,1456],[8,1483]]],
  ["andorra-trail-2026", "Dynafit Andorra Trail", "Escaldes-Engordany", "AD", "trail", "2026-10-09", [[47,3350],[26,1890],[17,1200],[5,260]]],
  ["trail-100-andorra-2027", "Trail 100 Andorra by UTMB", "Ordino", "AD", "trail", "2027-06-11", [[105.9,6900],[79,3900],[50,3400],[24.9,1350],[10,500]]],

  // --- Moldavija ---
  // Kišinjev maraton 2026: sporter.md. OM Half Marathon 2027: worldsmarathons.com.
  // Letonija: AIMS nema članice, finishers.com nema potvrđen datum za Siguldu — samo Riga.
  ["chisinau-marathon-2026", "maib Chișinău Marathon", "Kišinjev", "MD", "city", "2026-09-13", [[42.195,0],[21.097,0],[10.5,0],[5,0]]],
  ["om-half-chisinau-2027", "OM Half Marathon", "Kišinjev", "MD", "city", "2027-04-25", [[21.097,0],[10,0],[5,0]]],

  // --- Kraj 2026: Italija, Španija, Francuska, Nemačka, Portugal, Poljska (provera 8.10.2026) ---
  // Datumi sa zvaničnih sajtova ili finishers.com / worldsmarathons / AIMS. Višednevni: prvi dan,
  // osim kad izvor navodi glavni dan trke. Izostavljeno: Bottwartal (nejasan dan), Grand Raid Réunion (van Evrope).
  // Italija
  ["valdambra-trail-2026", "Valdambra Trail by UTMB", "Badia Agnano", "IT", "trail", "2026-10-09", [[110,4700],[64,2800],[45,2100],[31,1500],[15,700]]],
  ["neapolis-marathon-2026", "Neapolis Marathon", "Napulj", "IT", "city", "2026-10-18", [[42.195,38],[21.097,0]]],
  ["parma-marathon-2026", "Parma Marathon", "Parma", "IT", "city", "2026-10-18", [[42.195,0],[32,0],[24,0],[10,0]]],
  ["chianti-ecomarathon-2026", "EcoMaratona del Chianti Classico", "Castelnuovo Berardenga", "IT", "trail", "2026-10-18", [[42,1180],[21,490],[15,350]]],
  ["valtellina-wine-trail-2026", "Valtellina Wine Trail", "Sondrio", "IT", "trail", "2026-11-07", [[42,1750],[21,900],[13,550]]],
  ["lago-maggiore-marathon-2026", "Lago Maggiore Marathon", "Arona", "IT", "city", "2026-11-08", [[42.195,0],[33,0],[21.097,0],[10,0]]],
  ["palermo-marathon-2026", "Maratona di Palermo", "Palermo", "IT", "city", "2026-11-15", [[42.195,0],[21.097,0]]],
  ["torino-marathon-2026", "FIAT Torino City Marathon", "Torino", "IT", "city", "2026-11-29", [[42.195,0],[21.097,0]]],
  ["reggio-emilia-marathon-2026", "Maratona di Reggio Emilia", "Ređo Emilija", "IT", "city", "2026-12-13", [[42.195,0],[21.097,0]]],
  ["pisa-marathon-2026", "Maratona di Pisa", "Piza", "IT", "city", "2026-12-20", [[42.195,96],[21.097,60]]],
  ["we-run-rome-2026", "We Run Rome", "Rim", "IT", "city", "2026-12-31", [[10,0]]],
  ["boclassic-2026", "BOclassic Alto Adige", "Bolcano", "IT", "city", "2026-12-31", [[10,0],[5,0]]],
  // Španija
  ["bilbao-night-run-2026", "TotalEnergies Bilbao Night Running Fest", "Bilbao", "ES", "city", "2026-10-17", [[21.097,0],[10,0]]],
  ["malaga-marathon-2026", "Generali Maratón Málaga", "Malaga", "ES", "city", "2026-11-08", [[42.195,117],[21.097,59]]],
  ["behobia-san-sebastian-2026", "Behobia / San Sebastián", "San Sebastijan", "ES", "city", "2026-11-08", [[20,226]]],
  ["costa-blanca-trails-2026", "Costa Blanca Trails", "Finestrat", "ES", "trail", "2026-11-13", [[102,6217],[67,4053],[41,2885],[20,1400],[17,926]]],
  ["toledo-marathon-2026", "Maratón Imperial de Toledo", "Toledo", "ES", "city", "2026-11-15", [[42.195,0]]],
  ["tenerife-half-2026", "Media Maratón Internacional Santa Cruz de Tenerife", "Santa Kruz de Tenerife", "ES", "city", "2026-11-15", [[21.097,0],[8,0]]],
  ["san-sebastian-marathon-2026", "Zurich Maratón Donostia / San Sebastián", "San Sebastijan", "ES", "city", "2026-11-22", [[42.195,0],[10,0]]],
  ["lanzarote-marathon-2026", "Lanzarote International Marathon", "Lanzarote", "ES", "city", "2026-12-05", [[42.195,301],[21.097,0],[10,0]]],
  ["san-silvestre-vallecana-2026", "San Silvestre Vallecana", "Madrid", "ES", "city", "2026-12-31", [[10,0]]],
  ["cursa-dels-nassos-2026", "Cursa dels Nassos", "Barselona", "ES", "city", "2026-12-31", [[10,0]]],
  // Francuska
  ["20km-paris-2026", "20 km de Paris", "Pariz", "FR", "city", "2026-10-11", [[20,0]]],
  ["euro-marathon-metz-2026", "Euro Marathon Metz", "Mec", "FR", "city", "2026-10-11", [[42.195,0],[21.097,0],[10,0]]],
  ["templiers-2026", "Festival des Templiers", "Mijo", "FR", "trail", "2026-10-18", [[101.8,4309],[80.4,3443],[58.7,2689],[48.1,2224],[34.9,1578],[18,669]]],
  ["marathon-vert-rennes-2026", "Marathon Vert Rennes", "Ren", "FR", "city", "2026-10-18", [[42.195,140],[10,0]]],
  ["marseille-cassis-2026", "Marseille-Cassis", "Marselj", "FR", "city", "2026-10-25", [[20,340]]],
  ["toulouse-run-experience-2026", "Toulouse Métropole Run Expérience", "Tuluz", "FR", "city", "2026-11-01", [[42.195,0],[21.097,0],[10,0]]],
  ["marathon-cognac-2026", "Marathon du Cognac", "Konjak", "FR", "city", "2026-11-14", [[42.195,230],[21.097,170],[10.5,0]]],
  ["marathon-beaujolais-2026", "Marathon International du Beaujolais", "Božole", "FR", "city", "2026-11-21", [[42.195,0],[21.097,253],[13,129]]],
  ["saintelyon-2026", "SaintéLyon", "Lion", "FR", "trail", "2026-11-28", [[160,3888],[80,1944],[45,797],[35,650],[24,337],[13,187]]],
  ["corrida-noel-issy-2026", "Corrida de Noël d'Issy-les-Moulineaux", "Isi le Mulino", "FR", "city", "2026-12-13", [[10,66],[5,0]]],
  ["corrida-houilles-2026", "Corrida de Houilles", "Uj", "FR", "city", "2026-12-27", [[10,0],[5,0]]],
  // Nemačka
  ["harz-gebirgslauf-2026", "Harz-Gebirgslauf (Brocken-Marathon)", "Vernigerode", "DE", "trail", "2026-10-10", [[42.2,1180],[22.5,530],[11.2,280]]],
  ["essen-marathon-2026", "Westenergie Marathon Essen „Rund um den Baldeneysee”", "Esen", "DE", "city", "2026-10-11", [[42.195,0],[18.6,0]]],
  ["dresden-marathon-2026", "Dresden-Marathon", "Drezden", "DE", "city", "2026-10-25", [[42.195,139],[21.097,113],[10,0],[5,0]]],
  ["roentgenlauf-2026", "Röntgenlauf Remscheid", "Remšajd", "DE", "trail", "2026-10-25", [[63.3,0],[42.195,0],[21.097,0],[10,0]]],
  ["rursee-marathon-2026", "Rursee-Marathon", "Rursee", "DE", "trail", "2026-11-07", [[52,0],[42.195,0],[16.5,0]]],
  ["nikolauslauf-tuebingen-2026", "LBS-Nikolauslauf Tübingen", "Tibingen", "DE", "city", "2026-12-06", [[21.097,0]]],
  ["siebengebirgsmarathon-2026", "Siebengebirgsmarathon", "Bad Honef", "DE", "trail", "2026-12-06", [[42.195,0],[21.1,0]]],
  ["berliner-silvesterlauf-2026", "Berliner Silvesterlauf", "Berlin", "DE", "city", "2026-12-31", [[10.2,0],[6.3,0],[4,0]]],
  ["silvesterlauf-trier-2026", "Internationaler Silvesterlauf Trier", "Trir", "DE", "city", "2026-12-31", [[5,0]]],
  ["silvesterlauf-werl-soest-2026", "Silvesterlauf Werl-Soest", "Verl", "DE", "city", "2026-12-31", [[15,0],[5,0]]],
  ["bietigheimer-silvesterlauf-2026", "Bietigheimer Silvesterlauf", "Bitighajm-Bisingen", "DE", "city", "2026-12-31", [[10.5,0]]],
  // Portugal
  ["meia-maratona-lisboa-vasco-da-gama-2026", "Hyundai Meia Maratona Ponte Vasco da Gama", "Lisabon", "PT", "city", "2026-10-11", [[21.097,0]]],
  ["meia-maratona-famalicao-2026", "Q8 Meia Maratona de Famalicão", "Vila Nova de Famalicão", "PT", "city", "2026-10-18", [[21.097,0],[10,0]]],
  ["ultra-x-madeira-2026", "Ultra X Madeira", "Madeira", "PT", "trail", "2026-10-31", [[110,0],[60,0],[50,0],[25,0]]],
  ["cascais-oeiras-lisboa-2026", "Cascais Oeiras Lisboa — Meia Maratona & 10 km da Marginal", "Kaškaiš", "PT", "city", "2026-11-08", [[21.097,0],[10,0]]],
  ["corrida-sporting-2026", "Corrida Sporting", "Lisabon", "PT", "city", "2026-11-15", [[10,0]]],
  ["maratona-do-algarve-2026", "Maratona do Algarve", "Vilamura", "PT", "city", "2026-12-06", [[42.195,253],[21.097,113],[10,45]]],
  ["sao-silvestre-porto-2026", "São Silvestre do Porto", "Porto", "PT", "city", "2026-12-20", [[10,0]]],
  ["sao-silvestre-lisboa-2026", "Lidl São Silvestre de Lisboa", "Lisabon", "PT", "city", "2026-12-26", [[10,0]]],
  ["sao-silvestre-amadora-2026", "Corrida São Silvestre da Amadora", "Amadora", "PT", "city", "2026-12-31", [[10,0]]],
  // Poljska
  ["ultrakotlina-2026", "UltraKotlina", "Šklarska Poremba", "PL", "trail", "2026-10-10", [[144,0],[108,0],[82,0],[58,0],[35,0],[15,0]]],
  ["cracovia-polmaraton-2026", "PKO Cracovia Półmaraton Królewski", "Krakov", "PL", "city", "2026-10-11", [[21.097,0]]],
  ["lemkowyna-ultra-trail-2026", "Łemkowyna Ultra-Trail", "Komanča", "PL", "trail", "2026-10-17", [[150,5500],[100,3830],[70,2510],[48,1410],[30,0],[10,750]]],
  ["maraton-debno-2026", "Maraton Dębno", "Dembno", "PL", "city", "2026-10-18", [[42.195,0],[21.097,0],[10,0]]],
  ["bieg-niepodleglosci-warszawa-2026", "Bieg Niepodległości", "Varšava", "PL", "city", "2026-11-11", [[10,0]]],
  ["krakowski-bieg-niepodleglosci-2026", "Krakowski Bieg Niepodległości", "Krakov", "PL", "city", "2026-11-11", [[11,0]]],
  ["bieg-niepodleglosci-gdansk-2026", "Bieg Niepodległości z Portem Gdańsk", "Gdanjsk", "PL", "city", "2026-11-11", [[10,0]]],
  ["gdynski-bieg-niepodleglosci-2026", "Gdyński Bieg Niepodległości", "Gdinja", "PL", "city", "2026-11-11", [[10,0]]],
  ["wroclawski-bieg-niepodleglosci-2026", "Wrocławski Bieg Niepodległości z Wąsem", "Vroclav", "PL", "city", "2026-11-11", [[10,0],[5,0]]],
  ["krakowski-bieg-sylwestrowy-2026", "Krakowski Bieg Sylwestrowy", "Krakov", "PL", "city", "2026-12-31", [[10,0],[5,0]]],

  // --- Do maja 2027: Italija, Austrija, Velika Britanija, Španija, Francuska (provera 17.10.2026) ---
  // Datumi sa zvaničnih sajtova ili finishers.com (potvrđen datum) / worldsmarathons / ahotu.
  // Višednevni: prvi dan, osim kad izvor navodi glavni dan. Izostavljeno zbog slabog izvora:
  // Wiener Silvesterlauf, Brighton Half, Marathon du Mont-Saint-Michel.
  // Italija
  ["s1-trail-2027", "S1 Trail – La Corsa della Bora", "Trst", "IT", "trail", "2027-01-10", [[116.2,3930],[61.2,2323],[55,1594],[35.8,787],[23,693]]],
  ["corsa-di-miguel-2027", "La Corsa di Miguel", "Rim", "IT", "city", "2027-01-17", [[10,0],[5,0]]],
  ["maga-circe-2027", "Maratona Maga Circe", "Sabaudia", "IT", "city", "2027-02-07", [[42.195,0],[10.6,0]]],
  ["bologna-marathon-2027", "Termal Bologna Marathon", "Bolonja", "IT", "city", "2027-03-07", [[42.195,0],[30,0],[21.097,0]]],
  ["brescia-art-marathon-2027", "Brescia Art Marathon", "Breša", "IT", "city", "2027-03-14", [[42.195,134],[21.097,105],[10,0]]],
  ["chianti-ultra-trail-2027", "Chianti Ultra Trail by UTMB", "Radda in Chianti", "IT", "trail", "2027-03-20", [[123,5200],[73,3000],[46,1650],[20,920],[10,400]]],
  ["sciacchetrail-2027", "SciaccheTrail", "Monterosso al Mare", "IT", "trail", "2027-03-20", [[47,2600]]],
  ["ultrabericus-2027", "Ultrabericus Trail", "Vičenca", "IT", "trail", "2027-03-20", [[65,2500],[45,1500],[21,700]]],
  ["lake-garda-42-2027", "Lake Garda 42", "Limone sul Garda", "IT", "city", "2027-04-11", [[42.195,0],[21.097,0]]],
  ["rimini-marathon-2027", "Rimini Marathon", "Rimini", "IT", "city", "2027-04-18", [[42.195,0],[21.097,0],[16,0]]],
  ["trieste-spring-run-2027", "Trieste Spring Run", "Trst", "IT", "city", "2027-05-02", [[42.195,0],[21.097,0]]],
  ["elba-marathon-2027", "Maratona dell'Isola d'Elba", "Marina di Campo", "IT", "city", "2027-05-09", [[42.195,100],[21.097,0],[10,0]]],
  // Austrija
  ["vienna-trail-run-2026", "Vienna Trail Run", "Beč", "AT", "trail", "2026-10-18", [[24.7,1000],[16,550],[7.5,300]]],
  ["kaernten-marathon-2026", "Int. Kärnten Marathon", "Feldkirchen in Kärnten", "AT", "city", "2026-10-25", [[42.195,0],[21.097,0]]],
  ["gaisbergtrail-2026", "Salomon Gaisbergtrail (Salzburg Trailrunning Festival)", "Salcburg", "AT", "trail", "2026-10-25", [[24.6,1280],[5.1,820]]],
  ["silvesterlauf-peuerbach-2026", "Int. Silvesterlauf Peuerbach", "Peuerbach", "AT", "city", "2026-12-31", [[6.8,0]]],
  ["silvesterlauf-linz-2026", "HYPO Silvesterlauf Linz", "Linc", "AT", "city", "2026-12-31", [[6,0],[3,0]]],
  ["graz-halbmarathon-2027", "Graz Halbmarathon", "Grac", "AT", "city", "2027-04-04", [[21.097,0],[10.55,0],[5.5,0]]],
  ["welschlauf-2027", "WelschLauf Südsteiermark", "Ehrenhausen", "AT", "city", "2027-05-01", [[42.195,1440],[21.097,0],[12.3,0],[5.6,0]]],
  ["woerthersee-trail-2027", "Wörthersee Trail Festival", "Pörtschach am Wörthersee", "AT", "trail", "2027-05-08", [[65,1800],[32,800],[14,320]]],
  ["mondsee-halbmarathon-2027", "Mondseeland Halbmarathon", "Mondsee", "AT", "city", "2027-05-29", [[21.097,0],[10,0],[5,0]]],
  // Velika Britanija
  ["yorkshire-marathon-2026", "Yorkshire Marathon", "Jork", "GB", "city", "2026-10-18", [[42.195,147]]],
  ["abingdon-marathon-2026", "Abingdon Marathon", "Abingdon", "GB", "city", "2026-10-18", [[42.195,0]]],
  ["marathon-eryri-2026", "Marathon Eryri (Snowdonia Marathon)", "Llanberis", "GB", "city", "2026-10-24", [[42.195,788]]],
  ["beachy-head-marathon-2026", "Beachy Head Marathon", "Istborn", "GB", "trail", "2026-10-24", [[42.195,0]]],
  ["brass-monkey-half-2027", "York Brass Monkey Half Marathon", "Jork", "GB", "city", "2027-01-17", [[21.097,0]]],
  ["cambridge-half-2027", "Cambridge Half Marathon", "Kembridž", "GB", "city", "2027-03-14", [[21.097,0]]],
  ["bath-half-2027", "GetPRO Bath Half", "Bat", "GB", "city", "2027-03-14", [[21.097,0]]],
  ["liverpool-half-2027", "BTR Liverpool Half Marathon & 10 Mile", "Liverpul", "GB", "city", "2027-03-14", [[21.097,144],[16.09,0]]],
  ["reading-half-2027", "Green Park Reading Half Marathon", "Reding", "GB", "city", "2027-03-21", [[21.097,0]]],
  ["brighton-marathon-2027", "Brighton Marathon", "Brajton", "GB", "city", "2027-04-04", [[42.195,152],[10,26]]],
  ["london-landmarks-half-2027", "London Landmarks Half Marathon", "London", "GB", "city", "2027-04-04", [[21.097,73]]],
  ["newport-marathon-2027", "ABP Newport Wales Marathon", "Njuport", "GB", "city", "2027-04-18", [[42.195,0]]],
  ["leeds-marathon-2027", "Rob Burrow Leeds Marathon", "Lids", "GB", "city", "2027-05-09", [[42.195,0]]],
  ["hackney-half-2027", "HOKA Hackney Half", "London", "GB", "city", "2027-05-16", [[21.097,0]]],
  ["edinburgh-marathon-2027", "Edinburgh Marathon", "Edinburg", "GB", "city", "2027-05-30", [[42.195,0],[21.097,0]]],
  // Španija
  ["10k-valencia-2027", "10K Valencia Ibercaja", "Valensija", "ES", "city", "2027-01-10", [[10,0]]],
  ["mitja-granollers-2027", "La Mitja Marató Internacional de Granollers", "Granoljers", "ES", "city", "2027-01-24", [[21.097,0]]],
  ["maraton-murcia-2027", "TotalEnergies Maratón Murcia Costa Cálida", "Mursija", "ES", "city", "2027-02-07", [[42.195,0],[21.097,0]]],
  ["marato-castello-2027", "Marató bp Castelló", "Kasteljon", "ES", "city", "2027-02-14", [[42.195,0],[10,0]]],
  ["transgrancanaria-2027", "The North Face Transgrancanaria", "Gran Kanarija", "ES", "trail", "2027-02-24", [[125,6764],[81.8,4314],[46,1784]]],
  ["mitja-terrassa-2027", "Mitja Marató Internacional de Terrassa", "Terasa", "ES", "city", "2027-02-28", [[21.097,0]]],
  ["ibiza-marathon-2027", "Santa Eulària Ibiza Marathon", "Ibica", "ES", "city", "2027-04-10", [[42.195,0],[22,0],[12,0]]],
  ["maraton-zaragoza-2027", "Maratón de Zaragoza", "Saragosa", "ES", "city", "2027-04-18", [[42.195,0],[10,0]]],
  ["penyagolosa-trails-2027", "Asics Penyagolosa Trails", "Kasteljon", "ES", "trail", "2027-04-24", [[110,0],[60,0]]],
  ["transvulcania-2027", "Transvulcania", "La Palma", "ES", "trail", "2027-05-06", [[73,0]]],
  ["maraton-vitoria-2027", "EDP Maratón Vitoria-Gasteiz Martín Fiz", "Vitorija", "ES", "city", "2027-05-16", [[42.195,137],[21.097,51],[10,44]]],
  // Francuska
  ["promclassic-nice-2027", "Prom'Classic", "Nica", "FR", "city", "2027-01-10", [[10,0]]],
  ["marathon-golfe-saint-tropez-2027", "Marathon du Golfe de Saint-Tropez", "Sent Maksim", "FR", "city", "2027-03-14", [[42.195,0],[19,0],[10,0]]],
  ["ecotrail-paris-2027", "EcoTrail Paris", "Pariz", "FR", "trail", "2027-03-20", [[80,1255],[45,724],[30,380]]],
  ["marathon-cheverny-2027", "Marathon de Cheverny", "Ševerni", "FR", "city", "2027-04-04", [[42.195,0],[21.1,0]]],
  ["marathon-nantes-2027", "Abalone Marathon de Nantes", "Nant", "FR", "city", "2027-04-25", [[42.195,0],[21.097,0]]],
  ["trail-haute-provence-2027", "Trail de Haute Provence", "Forkalkje", "FR", "trail", "2027-05-07", [[160,7000],[120,5500],[80,3400],[50,1700],[20,800]]],
  ["maxi-race-annecy-2027", "MaXi-Race du Lac d'Annecy", "Ansi", "FR", "trail", "2027-05-28", [[100,5300],[55,3200],[38,1600],[19,410]]],
];
