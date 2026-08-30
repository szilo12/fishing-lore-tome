export type Cut = {
  id: string;
  label: string;
  output: string;
  yield: number;
  unit: number;
  total: number;
  tool: string;
  time: number;
  /** difficulty of the mini-game, 1 = easy */
  difficulty: 1 | 2 | 3;
};

export type Fish = {
  id: string;
  name: string;
  latin: string;
  weight: string;
  season: string;
  bait: string;
  spot: string;
  rarity: string;
  spoil: string;
  wholePrice: number;
  text: string;
  cuts: Cut[];
};

const cut = (
  id: string,
  label: string,
  output: string,
  y: number,
  unit: number,
  tool: string,
  time: number,
  difficulty: 1 | 2 | 3,
): Cut => ({ id, label, output, yield: y, unit, total: y * unit, tool, time, difficulty });

export const FISH: Fish[] = [
  {
    id: "ponty",
    name: "Ponty",
    latin: "Cyprinus carpio",
    weight: "2 – 18 kg",
    season: "Május – Szeptember",
    bait: "Kukorica, bojli",
    spot: "Tavak, holtágak",
    rarity: "Gyakori",
    spoil: "40 perc jég nélkül",
    wholePrice: 320,
    text: "A vizek csendes óriása. Óvatos, gyanakvó hal — a türelmetlen horgász sosem fogja ki. Etesd meg a helyet, majd várj mozdulatlanul.",
    cuts: [
      cut("filet", "Filézés", "pontyfilé", 4, 120, "Filéző kés", 6, 1),
      cut("patko", "Patkózás", "ponty patkó", 6, 105, "Bárd", 8, 2),
      cut("fustolt", "Füstölés", "füstölt ponty", 3, 260, "Füstölő", 20, 2),
    ],
  },
  {
    id: "csuka",
    name: "Csuka",
    latin: "Esox lucius",
    weight: "3 – 12 kg",
    season: "Március – November",
    bait: "Villantó, élő csali",
    spot: "Nádasok szegélye",
    rarity: "Ritka",
    spoil: "30 perc jég nélkül",
    wholePrice: 540,
    text: "A sekélyes ragadozója, mozdulatlanul les a hínár között. Támadása villámgyors; acélelőke nélkül elveszíted a zsinórt és a halat is.",
    cuts: [
      cut("filet", "Szálkátlan filé", "csukafilé", 4, 210, "Filéző kés", 9, 2),
      cut("vagdalt", "Vagdalt hús", "csuka vagdalt", 8, 115, "Húsdaráló", 7, 1),
      cut("fustolt", "Füstölés", "füstölt csuka", 3, 430, "Füstölő", 22, 3),
    ],
  },
  {
    id: "harcsa",
    name: "Harcsa",
    latin: "Silurus glanis",
    weight: "10 – 70 kg",
    season: "Június – Augusztus",
    bait: "Kagyló, giliszta-csomó",
    spot: "Mély gödrök, folyómeder",
    rarity: "Nagyon ritka",
    spoil: "60 perc jég nélkül",
    wholePrice: 1450,
    text: "Éjszaka jár zsákmány után a meder legmélyén. Kifárasztása órákig tarthat — erős bot és hideg vér szükségeltetik hozzá.",
    cuts: [
      cut("filet", "Filézés", "harcsafilé", 8, 260, "Filéző kés", 12, 2),
      cut("szelet", "Szeletelés", "harcsaszelet", 12, 205, "Bárd", 14, 2),
      cut("paprikas", "Konyhai csomag", "harcsapaprikás alap", 5, 610, "Konyhapult", 25, 3),
    ],
  },
  {
    id: "suger",
    name: "Sügér",
    latin: "Perca fluviatilis",
    weight: "0,2 – 1,5 kg",
    season: "Egész évben",
    bait: "Giliszta, kis wobbler",
    spot: "Kikötők, kövezés",
    rarity: "Nagyon gyakori",
    spoil: "25 perc jég nélkül",
    wholePrice: 90,
    text: "Csapatban vadászik, mohó és bátor. Ha egyet fogtál, ne mozdulj onnan: a raj még ott van a horog alatt.",
    cuts: [
      cut("filet", "Filézés", "sügérfilé", 2, 70, "Filéző kés", 4, 1),
      cut("rantott", "Rántani való", "sügér tál", 1, 190, "Konyhapult", 10, 1),
      cut("csali", "Csalinak vágás", "vágott csali", 6, 35, "Filéző kés", 3, 1),
    ],
  },
  {
    id: "fogas",
    name: "Fogassüllő",
    latin: "Sander lucioperca",
    weight: "1 – 9 kg",
    season: "Szeptember – Április",
    bait: "Gumihal, keszeg",
    spot: "Kőszórás, hídlábak",
    rarity: "Ritka",
    spoil: "35 perc jég nélkül",
    wholePrice: 780,
    text: "Szürkületi vadász, tiszta vizet és kemény meder-aljzatot kedvel. Kapása alig érezhető — figyelj a zsinór apró rezdülésére.",
    cuts: [
      cut("filet", "Éttermi filé", "süllőfilé", 4, 320, "Filéző kés", 10, 2),
      cut("bor", "Bőrös szelet", "bőrös süllő", 6, 240, "Filéző kés", 12, 3),
      cut("kaviar", "Ikra kinyerés", "süllőikra", 2, 780, "Precíziós kés", 18, 3),
    ],
  },
];
