import { useCallback, useEffect, useRef, useState } from "react";
import ponty from "@/assets/fish-ponty.jpg";
import csuka from "@/assets/fish-csuka.jpg";
import harcsa from "@/assets/fish-harcsa.jpg";
import suger from "@/assets/fish-suger.jpg";
import fogas from "@/assets/fish-fogas.jpg";
import ProcessingBench from "@/components/ProcessingBench";
import { FISH, type Fish } from "@/data/fish";

const IMG: Record<string, string> = {
  ponty,
  csuka,
  harcsa,
  suger,
  fogas,
};

const FLIP_MS = 900;
const OPEN_MS = 1250;

function huf(n: number) {
  return `${n.toLocaleString("hu-HU")} $`;
}

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
          src={IMG[fish.id]}
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

function MarketPage({ fish, no }: { fish: Fish; no: number }) {
  const best = fish.cuts.reduce((a, b) => (b.total > a.total ? b : a), fish.cuts[0]);
  return (
    <div className="book-page-inner">
      <div className="flex items-baseline justify-between border-b border-ink/25 pb-2">
        <h3 className="font-display text-xl leading-none text-ink">
          {fish.name} — értékesítés
        </h3>
        <span className="font-body text-[0.6rem] uppercase tracking-[0.25em] text-ink-faded">
          Fol. {no}
        </span>
      </div>

      <p className="mt-2 font-body text-[0.7rem] leading-relaxed text-ink">
        Egészben a halászcéh {huf(fish.wholePrice)} árat fizet érte. Aki kést fog, többet keres —
        alább a feldolgozási módok haszna.
      </p>

      <table className="mt-3 w-full border-collapse font-body text-[0.65rem] text-ink">
        <thead>
          <tr className="border-b border-ink/30 text-[0.52rem] uppercase tracking-[0.18em] text-ink-faded">
            <th className="py-1 text-left font-normal">Mód</th>
            <th className="py-1 text-left font-normal">Kimenet</th>
            <th className="py-1 text-right font-normal">Érték</th>
          </tr>
        </thead>
        <tbody>
          {fish.cuts.map((c) => (
            <tr key={c.id} className="border-b border-ink/12 align-top">
              <td className="py-1 pr-2">
                {c.label}
                <span className="block text-[0.52rem] uppercase tracking-[0.16em] text-ink-faded">
                  {c.tool} · {c.time}s
                </span>
              </td>
              <td className="py-1 pr-2">
                {c.yield}× {c.output}
              </td>
              <td className="py-1 text-right whitespace-nowrap">{huf(c.total)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="mt-3 font-body text-[0.68rem] leading-relaxed text-ink">
        Legjobb haszon: <em>{best.label}</em> — {huf(best.total)} (
        {Math.round((best.total / fish.wholePrice - 1) * 100)}% többlet). Rontott vágás esetén a
        hús egy része odavész.
      </p>

      <p className="mt-auto pt-3 font-body text-[0.6rem] uppercase tracking-[0.25em] text-ink-faded">
        Romlandóság — {fish.spoil}
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
        csalik, fogási módok és feldolgozás szerint.
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
        Öt faj, öt türelem-próba. A pénz nem a parton, hanem a vágódeszkán terem — nyisd meg a
        feldolgozó pultot a könyv alatt.
      </p>
      <p className="mt-auto font-body text-[0.55rem] uppercase tracking-[0.3em] text-ink-faded">
        Csukd be a könyvet
      </p>
    </div>
  );
}

const PAGES = [
  <TitlePage key="t" />,
  ...FISH.flatMap((f, i) => [
    <FishPage key={`${f.id}-a`} fish={f} no={i * 2 + 1} />,
    <MarketPage key={`${f.id}-b`} fish={f} no={i * 2 + 2} />,
  ]),
  <EndPage key="e" />,
];

const SHEETS = Array.from({ length: Math.ceil(PAGES.length / 2) }, (_, i) => ({
  front: PAGES[i * 2],
  back: PAGES[i * 2 + 1] ?? null,
}));

export default function FishingBook() {
  const [phase, setPhase] = useState<"closed" | "opening" | "open">("closed");
  const [flipped, setFlipped] = useState(0);
  // what the static pages under the sheets should show — only updated
  // once the flip animation has actually finished
  const [settled, setSettled] = useState(0);
  const [busy, setBusy] = useState(false);
  const timers = useRef<number[]>([]);

  const later = useCallback((fn: () => void, ms: number) => {
    timers.current.push(window.setTimeout(fn, ms));
  }, []);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const open = () => {
    if (phase !== "closed" || busy) return;
    setBusy(true);
    setPhase("opening"); // 1. the book widens to a spread
    later(() => setPhase("open"), 420); // 2. only then the cover swings over
    later(() => setBusy(false), OPEN_MS);
  };

  const close = () => {
    if (busy) return;
    setBusy(true);
    setFlipped(0);
    setSettled(0);
    setPhase("opening");
    later(() => setPhase("closed"), 480);
    later(() => setBusy(false), OPEN_MS);
  };

  const go = (dir: 1 | -1) => {
    if (busy) return;
    const next = Math.min(SHEETS.length, Math.max(0, flipped + dir));
    if (next === flipped) return;
    setBusy(true);
    setFlipped(next);
    later(() => {
      setSettled(next);
      setBusy(false);
    }, FLIP_MS);
  };

  const isOpen = phase === "open";

  return (
    <div className="book-stage">
      <div className={`book ${phase !== "closed" ? "is-spread" : ""} ${isOpen ? "is-open" : ""}`}>
        <div className="book-body">
          <div className="book-left-page">
            {settled > 0 ? (
              <div className="book-page-inner opacity-95">{SHEETS[settled - 1]?.back}</div>
            ) : (
              <div className="book-page-inner items-center justify-center text-center">
                <p className="font-body text-[0.6rem] uppercase tracking-[0.3em] text-ink-faded">
                  Ex libris
                </p>
                <p className="mt-2 font-display text-lg text-ink/70">Halászcéh</p>
              </div>
            )}
          </div>
          <div className="book-right-page">
            {settled >= SHEETS.length && (
              <div className="book-page-inner items-center justify-center">
                <p className="font-body text-[0.6rem] uppercase tracking-[0.3em] text-ink-faded">
                  Finis
                </p>
              </div>
            )}
          </div>
          <div className="book-gutter" />

          {SHEETS.map((sheet, i) => {
            const isFlipped = i < flipped;
            return (
              <div
                key={i}
                className={`sheet ${isFlipped ? "is-flipped" : ""}`}
                style={{ zIndex: isFlipped ? 20 + i : 20 + (SHEETS.length - i) }}
              >
                <div className="sheet-face sheet-front">{sheet.front}</div>
                <div className="sheet-face sheet-back">{sheet.back}</div>
                <span className="sheet-shade" />
              </div>
            );
          })}
        </div>

        <button
          type="button"
          onClick={open}
          aria-label="Könyv kinyitása"
          className="book-cover"
          disabled={phase !== "closed"}
        >
          <span className="cover-leather" />
          <span className="cover-frame">
            <span className="cover-corner tl" />
            <span className="cover-corner tr" />
            <span className="cover-corner bl" />
            <span className="cover-corner br" />
            <span className="cover-crest">
              <svg viewBox="0 0 64 64" aria-hidden="true">
                <path
                  d="M6 32c9-11 20-16 30-16s18 5 22 16c-4 11-12 16-22 16S15 43 6 32Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path d="M46 22 58 12v40L46 42" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="20" cy="29" r="1.8" fill="currentColor" />
                <path d="M22 38c6 3 12 3 18 0" fill="none" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </span>
            <span className="cover-kicker">Halászcéh · Anno 1924</span>
            <span className="cover-title">
              Horgászási
              <br />
              Technikák
            </span>
            <span className="cover-rule" />
            <span className="cover-sub">Halismeret &amp; feldolgozás</span>
            <span className="cover-hint">Kattints a kinyitáshoz</span>
          </span>
          <span className="cover-spine">
            <span className="spine-band" />
            <span className="spine-band" />
            <span className="spine-band" />
          </span>
        </button>
      </div>

      {isOpen && (
        <div className="book-controls">
          <button type="button" className="tool-btn" disabled={busy || flipped === 0} onClick={() => go(-1)}>
            ← Vissza
          </button>
          <span className="font-body text-[0.6rem] uppercase tracking-[0.3em] text-parchment/70">
            {flipped} / {SHEETS.length}
          </span>
          <button
            type="button"
            className="tool-btn"
            disabled={busy || flipped === SHEETS.length}
            onClick={() => go(1)}
          >
            Lapozás →
          </button>
          <button type="button" className="tool-btn" onClick={close} disabled={busy}>
            Becsukás
          </button>
        </div>
      )}

      <ProcessingBench />
    </div>
  );
}
