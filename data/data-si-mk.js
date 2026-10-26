// Slovenija i Severna Makedonija.
// SI predstojeće: koledar tekaških prireditev (hac.si, izvor Tekaški forum) — datum i mesto potvrđeni, staze uglavnom nisu objavljene.
// SI/MK odrađene: trci.rs — sa dužinama i usponima.
// SI deonice (dopuna 30.9.2026): sajtovi organizatora, protime.si, timingljubljana.si, belakrajina.si.
// Izbačeno: 24 ur Šmarne gore i Goricatlon (trke na vreme / 6h štafeta).
// Ljubljanski maraton: datum sa zvaničnog sajta. Skopski maraton: datum sa skopskimaraton.com.mk.
// MK gradske trke: trki.mk (stranice događaja, preuzeto 30.9.2026) — samo one sa potvrđenim datumom.
// gain: 0 znači da uspon nije objavljen. Ništa nije procenjivano.

module.exports = [
  // --- Slovenija, predstojeće ---
  ["polhove-stopinje", "Tek po polhovih stopinjah", "Kozarišče", "SI", "trail", "2026-09-26", []],
  ["vzpon-hlevise", "Vzpon na Hleviše", "Idrija", "SI", "trail", "2026-09-26", []],
  ["medvoski-tek", "Medvoški tek", "Medvode", "SI", "city", "2026-09-26", []],
  ["rekord-smarne-gore", "Rekord Šmarne gore", "Tacen pod Šmarno goro", "SI", "trail", "2026-09-26", []],
  ["konjiski-maraton", "Konjiški maraton", "Slovenske Konjice", "SI", "city", "2026-09-27", []],
  ["tek-na-smarno-goro", "Tek na Šmarno goro", "Tacen pod Šmarno goro", "SI", "trail", "2026-09-27", []],
  ["zlati-tek", "Zlati tek — Irenin tek", "Zlatoličje", "SI", "city", "2026-09-27", []],
  ["tek-za-kranj", "Tek za Kranj — Memorial Vincenca Drakslerja", "Kranj", "SI", "city", "2026-10-02", [[5,0]]],
  ["tek-celjskih-knezov", "Tek celjskih knezov", "Celje", "SI", "city", "2026-10-03", [[10,0],[5,0]]],
  ["kras-kros", "Kras kros trail run — tek 11 črnih vrhov", "Cerje", "SI", "trail", "2026-10-03", []],
  ["tek-za-krof", "Tek za krof", "Krašnja", "SI", "city", "2026-10-04", []],
  ["prekmurski-mali", "Prekmurski mali maraton", "Moravske Toplice", "SI", "city", "2026-10-04", [[21,0],[11,0],[5.5,0]]],
  ["zmajev-tek", "Zmajev tek", "Ljubljana", "SI", "city", "2026-10-10", []],
  ["dobrepoljski-tek", "Dobrepoljski tek", "Videm", "SI", "city", "2026-10-10", [[10,0]]],
  ["backyard-ljubljana", "Backyard Ultra Ljubljana", "Ljubljana", "SI", "trail", "2026-10-10", [[6.7,0]]],
  ["grad-podsreda", "Tek na grad Podsreda", "Podsreda", "SI", "trail", "2026-10-11", []],
  ["vinska-cesta", "Tek po vinski cesti", "Bušeča vas", "SI", "city", "2026-10-11", []],
  ["pod-storzic", "Tek pod Storžič", "Grahovše", "SI", "trail", "2026-10-11", []],
  ["tek-miru", "Tek miru", "Slovenj Gradec", "SI", "city", "2026-10-11", []],
  ["biba-planina", "Tek na Bibo planino", "Okrog pri Motniku", "SI", "trail", "2026-10-11", []],
  ["nocni-portoroz", "Nočni tek Portorož", "Portorož", "SI", "city", "2026-10-13", [[10,0],[5,0]]],
  ["lj-maraton-10k", "NLB Ljubljanski maraton — Garmin tek 10 km", "Ljubljana", "SI", "city", "2026-10-17", [[10,0]]],
  ["lj-maraton", "NLB Ljubljanski maraton", "Ljubljana", "SI", "city", "2026-10-18", [[42.2,0],[21.1,0]]],
  ["nocni-tek-kalvarija-2026", "Nočni tek na Kalvarijo", "Maribor", "SI", "trail", "2026-10-09", []],
  ["vipavskih-nocnih-7", "Vipavskih nočnih 7", "Vipava", "SI", "trail", "2026-10-24", []],
  ["obala-ultra", "Obala ultra trail", "Lonka, Izola", "SI", "trail", "2026-11-06", [[108,4000],[64,2000],[35,1000],[17,450],[11,200]]],
  ["pozdrav-jeseni-kras", "Tekaški pozdrav jeseni na Krasu", "Lipica", "SI", "trail", "2026-11-07", [[10,0],[6,0]]],
  ["go4trail", "GO4trail", "Solkan", "SI", "trail", "2026-11-07", [[64,0],[28,0],[10,0]]],
  ["lahinja-trail", "Lahinja trail", "Dragatuš", "SI", "trail", "2026-11-07", [[30,546],[18,298],[10,152]]],
  ["celjski-mali-maraton", "Celjski mali maraton", "Celje", "SI", "city", "2026-11-08", [[21,0],[14,0],[11,0],[6.2,0]]],
  ["novo-mesto-polmaraton", "Novo mesto 1/2 maraton", "Novo mesto", "SI", "city", "2026-11-14", [[21.097,0],[10,0],[5,0]]],
  ["movember-tek", "Movember tek", "Ljubljana", "SI", "city", "2026-11-28", []],
  ["zimski-jamatlon", "Zimski jamatlon", "Hrastnik", "SI", "trail", "2026-11-28", []],
  ["miklavzev-tek", "Miklavžev tek", "Snovik", "SI", "trail", "2026-12-05", []],
  ["stanjelski-tek", "Štanjelski tek", "Hruševica", "SI", "trail", "2026-12-05", []],
  ["bozickov-tek", "Božičkov tek", "Ljubljana", "SI", "city", "2026-12-17", []],
  ["bozickov-brezovica", "Dobrodelni Božičkov tek", "Brezovica pri Ljubljani", "SI", "city", "2026-12-19", []],
  ["novoletni-stari-trg", "Dobrodelni novoletni tek in hoja", "Stari trg pri Ložu", "SI", "city", "2026-12-26", []],

  // --- Slovenija, odrađene ---
  ["julian-alps-utmb", "Julian Alps Trail Run by UTMB", "Kranjska Gora", "SI", "trail", "2026-09-18", [[124,5893],[80,3826],[50,3058],[25,1028],[15,553],[10,319]]],
  ["triglav-trail-run", "Triglav Trail Run", "Mojstrana, TNP", "SI", "trail", "2026-08-22", [[101,6200],[44,2600],[26,1100],[14,450]]],
  ["kocevsko-outdoor", "Kočevsko Outdoor Festival", "Jezero Kočevje", "SI", "trail", "2026-05-29", [[61.5,1916],[31.7,1000],[14,304],[10,220],[5.9,71]]],

  // --- Severna Makedonija ---
  ["strumica-na-ulica-2026", "Polumaraton Strumica na ulica", "Strumica", "MK", "city", "2026-11-01", [[21.097,0]]],
  ["skopski-maraton", "Wizz Air Skopski maraton", "Skoplje", "MK", "city", "2026-10-04", [[42.195,0],[21.097,0],[5,0]]],
  ["sos-humanitarna-2026", "SOS humanitarna trka", "Gradski park, Skoplje", "MK", "city", "2026-09-19", [[4,0]]],
  ["ljuboten-skyrace", "Ljuboten Skyrace", "Staro Selo, Šar planina", "MK", "trail", "2026-09-13", [[23.5,1680]]],
  ["rostushe-trails", "Rostushe Trails", "Rostuše", "MK", "trail", "2026-08-15", [[27,1700],[11,520]]],
  ["krushevo-challenge", "Krushevo Trail Challenge", "Kruševo", "MK", "trail", "2026-06-26", [[42,0],[21,1030],[13,530],[8,320]]],
  ["bidi-svoja-2026", "Bidi svoja — noćna ženska trka", "Bitolj", "MK", "city", "2026-06-20", []],
  ["titov-vrv", "Titov Vrv Skyrace", "Popova Šapka", "MK", "trail", "2026-06-21", [[20,1900]]],
  ["trcame-za-racin-2026", "Trčame za Racin", "Veles", "MK", "city", "2026-05-31", [[10,0],[5,0]]],
  ["ohrid-ultra", "Ohrid Ultra Trail", "Ohrid", "MK", "trail", "2026-05-22", [[105,4800],[65.5,3350],[42,1950],[21,1100],[10,350]]],
  ["vodno-matka", "Vodno Matka Trail Marathon", "Skoplje", "MK", "trail", "2026-04-05", [[52,3014],[31.6,1600],[18.7,973]]],
  ["vodno-10k-2026", "Vodno 10K", "Sredno Vodno, Skoplje", "MK", "city", "2026-03-29", [[10,0]]],
  ["krali-marko", "Krali Marko Trails", "Varoš, Prilep", "MK", "trail", "2026-03-08", [[40,2300],[23,1400],[13,730]]],
  ["chupino-vertical", "Chupino Winter Vertical", "Blatec", "MK", "trail", "2026-02-22", [[5,1000]]],
  // --- Nedeljno ažuriranje 26.10.2026 ---
  ["vinotek-2026", "VinoTek — prvi čezmejni vinski tek", "Svečina", "SI", "trail", "2026-10-31", [[22,750],[12,350]]],
  ["martinov-tek-secovlje-2026", "Martinov tek Sečovlje", "Sečovlje", "SI", "city", "2026-11-14", [[12,0],[6,0]]],
  ["mini-martinov-tek-2026", "Mini Martinov tek (dečja trka)", "Sečovlje", "SI", "city", "2026-11-14", [[1,0],[0.8,0],[0.6,0],[0.4,0],[0.2,0]]],
  ["stafetni-tek-sv-barbare-2026", "Štafetni tek Sv. Barbare (štafeta 3×2,4 km)", "Velenje", "SI", "city", "2026-11-29", [[7.2,0]]],
  ["velenje-trail-2026", "Velenje Trail", "Velenje", "SI", "trail", "2026-12-05", [[36,2200],[18,800],[10,300]]],
  ["knap-trail-2027", "Knap Trail", "Trbovlje", "SI", "trail", "2027-01-09", [[51,2620],[30,1550],[16,990]]],
  ["trail-po-kraskih-klancih-2027", "Trail po kraških klancih", "Križ, Sežana", "SI", "trail", "2027-03-07", [[19.5,390],[12.3,170]]],
  ["kriska-gora-trail-2027", "Kriška gora Trail", "Križe", "SI", "trail", "2027-05-22", [[50,2951],[20,1855],[10,990]]],
  ["k24-ultra-trail-2027", "K24 Ultra Trail", "Črna na Koroškem", "SI", "trail", "2027-08-06", [[100,0],[50,0],[24,0],[10,0]]],
  // Vraćeno iz izmena od 21.10.2026 (OCR, triatlon/duatlon, trke na vreme, ženske i dečje trke).
  ["markoton-backyard-2027", "Markoton Backyard Ultra", "Bukovci", "SI", "city", "2027-03-19", [[6.7,0]]],
  ["spartan-kope-2027", "Spartan Trifecta Kope (OCR)", "Kope, Pohorje", "SI", "trail", "2027-05-22", [[21,0],[10,0],[5,0]]],
  ["sri-chinmoy-skopje-24h-2027", "Sri Chinmoy 24-12-6 Hour Race (6h / 12h / 24h)", "Skoplje", "MK", "city", "2027-05-29", []],
  ["tek-obcine-menges-2026", "11. Tek Občine Mengeš", "Mengeš", "SI", "city", "2026-11-14", [[10,0],[5,0]]],
  ["kros-duatlon-ljubljana-2026", "Kros duatlon Ljubljana (kros duatlon)", "Ljubljana", "SI", "trail", "2026-12-19", []],
  ["parenzana-ultra-trail-2027", "5. Parenzana Ultra Trail", "Portorož", "SI", "trail", "2027-02-13", [[88,0],[50,0],[30,0]]],
  ["7-ur-slivnice-2027", "7 ur Slivnice (trka na 7 sati)", "Cerknica", "SI", "trail", "2027-02-20", []],
  ["mali-kraski-maraton-2027", "Mali kraški maraton", "Sežana", "SI", "city", "2027-03-21", [[21.097,0]]],
  ["kras-trail-2027", "Kras Trail", "Senožeče", "SI", "trail", "2027-03-27", [[52,2000],[29,1100],[10,200]]],
];
