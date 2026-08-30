import { useState } from "react";
import ponty from "@/assets/fish-ponty.jpg";
import csuka from "@/assets/fish-csuka.jpg";
import harcsa from "@/assets/fish-harcsa.jpg";
import suger from "@/assets/fish-suger.jpg";
import fogas from "@/assets/fish-fogas.jpg";

type Fish = {
  name: string;
  latin: string;
  img: string;
  weight: string;
  season: string;
  bait: string;
  spot: string;
  text: string;
  rarity: string;
};

const FISH: Fish[] = [
  {
    name: "Ponty",
    latin: "Cyprinus carpio",
    img: ponty,
    weight: "2 – 18 kg",
    season: "Május – Szeptember",
    bait: "Kukorica, bojli",
    spot: "Tavak, holtágak",
    rarity: "Gyakori",
    text: "A vizek csendes óriása. Óvatos, gyanakvó hal — a türelmetlen horgász sosem fogja ki. Etesd meg a helyet, majd várj mozdulatlanul.",
  },
  {
    name: "Csuka",
    latin: "Esox lucius",
    img: csuka,
    weight: "3 – 12 kg",
    season: "Március – November",
    bait: "Villantó, élő csali",
    spot: "Nádasok szegélye",
    rarity: "Ritka",
    text: "A sekélyes ragadozója, mozdulatlanul les a hínár között. Támadása villámgyors; acélelőke nélkül elveszíted a zsinórt és a halat is.",
  },
  {
    name: "Harcsa",
    latin: "Silurus glanis",
    img: harcsa,
    weight: "10 – 70 kg",
    season: "Június – Augusztus",
    bait: "Kagyló, giliszta-csomó",
    spot: "Mély gödrök, folyómeder",
    rarity: "Nagyon ritka",
    text: "Éjszaka jár zsákmány után a meder legmélyén. Kifárasztása órákig tarthat — erős bot és hideg vér szükségeltetik hozzá.",
  },
  {
    name: "Sügér",
    latin: "Perca fluviatilis",
    img: suger,
    weight: "0,2 – 1,5 kg",
    season: "Egész évben",
    bait: "Giliszta, kis wobbler",
    spot: "Kikötők, kövezés",
    rarity: "Nagyon gyakori",
    text: "Csapatban vadászik, mohó és bátor. Ha egyet fogtál, ne mozdulj onnan: a raj még ott van a horog alatt.",
  },
  {
    name: "Fogassüllő",
    latin: "Sander lucioperca",
    img: fogas,
    weight: "1 – 9 kg",
    season: "Szeptember – Április",
    bait: "Gumihal, keszeg",
    spot: "Kőszórás, hídlábak",
    rarity: "Ritka",
    text: "Szürkületi vadász, tiszta vizet és kemény meder-aljzatot kedvel. Kapása alig érezhető — figyelj a zsinór apró rezdülésére.",
  },
];

function FishPage({ fish, no }: { fish: Fish; no: number }) {
  return (
    <div className="book-page-inner">
      <div className="flex items-baseline justify-between border-b border-ink/25 pb-2">
        <h3 className="font-display text-2xl leading-none text-ink">{fish.name}</h3>
        <span className="font-body text-[0.6rem] uppercase tracking-[0.25em] text-ink-faded">
          Fol. {no}
        </span>
      </div>
      <p className="mt-1 font-body text-xs italic text-ink-faded">{fish.latin}</p>

      <div className="plate mt-3">
        <img
          src={fish.img}
          alt={`${fish.name} metszet`}
          loading="lazy"
          width={768}
          height={576}
          className="w-full"
        />
      </div>

      <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5 font-body text-[0.68rem] text-ink">
        {[
          ["Súly", fish.weight],
          ["Idény", fish.season],
          ["Csali", fish.bait],
          ["Élőhely", fish.spot],
        ].map(([k, v]) => (
          <div key={k} className="flex flex-col">
            <dt className="text-[0.55rem] uppercase tracking-[0.2em] text-ink-faded">{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-3 font-body text-[0.72rem] leading-relaxed text-ink first-letter:float-left first-letter:mr-1 first-letter:font-display first-letter:text-3xl first-letter:leading-[0.85]">
        {fish.text}
      </p>

      <p className="mt-auto pt-3 font-body text-[0.6rem] uppercase tracking-[0.25em] text-ink-faded">
        Előfordulás — {fish.rarity}
      </p>
    </div>
  );
}

function TitlePage() {
  return (
    <div className="book-page-inner items-center justify-center text-center">
      <p className="font-body text-[0.6rem] uppercase tracking-[0.35em] text-ink-faded">
        Anno MCMXXIV
      </p>
      <div className="my-4 h-px w-24 bg-ink/30" />
      <h2 className="font-display text-3xl leading-tight text-ink">
        Horgászási
        <br />
        Technikák
      </h2>
      <p className="mt-3 font-body text-[0.7rem] italic text-ink-faded">
        A hazai vizek halainak jegyzéke,
        <br />
        csalik és fogási módok szerint rendezve.
      </p>
      <div className="my-5 h-px w-24 bg-ink/30" />
      <p className="max-w-[16rem] font-body text-[0.68rem] leading-relaxed text-ink">
        „Nem a hal a jutalom, hanem a csend, amíg vársz reá."
      </p>
      <p className="mt-auto font-body text-[0.55rem] uppercase tracking-[0.3em] text-ink-faded">
        Lapozz tovább →
      </p>
    </div>
  );
}

function EndPage() {
  return (
    <div className="book-page-inner items-center justify-center text-center">
      <h3 className="font-display text-2xl text-ink">A jegyzék vége</h3>
      <div className="my-4 h-px w-20 bg-ink/30" />
      <p className="max-w-[16rem] font-body text-[0.72rem] leading-relaxed text-ink">
        Öt faj, öt türelem-próba. A többi lap üresen maradt — hagyd, hogy a saját fogásaid
        töltsék meg.
      </p>
      <p className="mt-auto font-body text-[0.55rem] uppercase tracking-[0.3em] text-ink-faded">
        Csukd be a könyvet
      </p>
    </div>
  );
}

const PAGES = [
  <TitlePage key="t" />,
  ...FISH.map((f, i) => <FishPage key={f.name} fish={f} no={i + 1} />),
  <EndPage key="e" />,
];

// sheets: each sheet holds two pages (front + back)
const SHEETS = Array.from({ length: Math.ceil(PAGES.length / 2) }, (_, i) => ({
  front: PAGES[i * 2],
  back: PAGES[i * 2 + 1] ?? null,
}));

export default function FishingBook() {
  const [open, setOpen] = useState(false);
  const [flipped, setFlipped] = useState(0);

  const close = () => {
    setFlipped(0);
    setOpen(false);
  };

  return (
    <div className="book-stage">
      <div className={`book ${open ? "is-open" : ""}`}>
        {/* back cover / body */}
        <div className="book-body">
          <div className="book-left-page">
            {flipped > 0 ? (
              <div className="book-page-inner opacity-95">{SHEETS[flipped - 1].back}</div>
            ) : (
              <div className="book-page-inner items-center justify-center">
                <p className="font-body text-[0.6rem] uppercase tracking-[0.3em] text-ink-faded">
                  Ex libris
                </p>
              </div>
            )}
          </div>
          <div className="book-right-page" />
          <div className="book-gutter" />

          {SHEETS.map((sheet, i) => (
            <div
              key={i}
              className={`sheet ${i < flipped ? "is-flipped" : ""}`}
              style={{ zIndex: i < flipped ? i : SHEETS.length - i }}
            >
              <div className="sheet-face sheet-front">{sheet.front}</div>
              <div className="sheet-face sheet-back">{sheet.back}</div>
            </div>
          ))}
        </div>

        {/* front cover */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Könyv kinyitása"
          className="book-cover"
        >
          <span className="cover-frame">
            <span className="cover-emblem">⚓</span>
            <span className="cover-title">
              Horgászási
              <br />
              Technikák
            </span>
            <span className="cover-rule" />
            <span className="cover-sub">Halismereti jegyzék</span>
          </span>
          <span className="cover-spine" />
        </button>
      </div>

      {open && (
        <div className="book-controls">
          <button
            type="button"
            className="tool-btn"
            disabled={flipped === 0}
            onClick={() => setFlipped((f) => Math.max(0, f - 1))}
          >
            ← Vissza
          </button>
          <span className="font-body text-[0.6rem] uppercase tracking-[0.3em] text-parchment/70">
            {flipped} / {SHEETS.length}
          </span>
          <button
            type="button"
            className="tool-btn"
            disabled={flipped === SHEETS.length}
            onClick={() => setFlipped((f) => Math.min(SHEETS.length, f + 1))}
          >
            Lapozás →
          </button>
          <button type="button" className="tool-btn" onClick={close}>
            Becsukás
          </button>
        </div>
      )}
    </div>
  );
}
