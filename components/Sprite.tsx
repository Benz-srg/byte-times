const PAL: Record<string, string> = {
  K: 'var(--ink)',
  S: 'var(--ink-soft)',
  C: 'var(--cyan)',
  P: 'var(--purple)',
  R: 'var(--pink)',
  G: 'var(--green)',
  Y: 'var(--amber)',
  W: 'var(--paper)',
  H: 'var(--paper-hi)',
};

const SPRITES: Record<string, string> = {
  chip: `.....KKKKKK.....
....KCCCCCCK....
...KCCCCCCCCK...
..KKKKKKKKKKKK..
.KKWWWWWWWWWWKK.
.KW.KW....WK.WK.
.KW.WK....KW.WK.
.KWWWWWWWWWWWWK.
KWWWWPWWWWPWWWWK
KWWWWPWWWWPWWWWK
KWWWWPPPPPPWWWWK
KWWWWWWWWWWWWWWK
.KWWWWWWWWWWWWK.
..KKKKKKKKKKKK..
....KK....KK....
....KK....KK....`,
  mux: `.......KKKK.....
......KYYYYK....
.....KYKKKKYK...
.....KYKPPKYK...
....KKYKPPKYKK..
...KSSKYYYYKSSK.
..KSSSSKYYKSSSS.
.KSSSSSSKKSSSSSK
KSKKKKKSSSSKKKKK
KSSSSSSSSSSSSSSK
.KKKKKKKKKKKKKK.
...KSSSSSSSSK...
...KSKKKKKKSK...
...KSSSSSSSSK...
...KKKKKKKKKK...
................`,
  aggy: `K...K.......K..K
.K.K.........K.K
..K...........K.
..KKKKKKKKKKKKK.
.KKWWWWWWWWWWWKK
KKWWWPPPPWWWWWWK
KWWWPPPPPPWWWWWK
KWWWPKKPPPWWWWWK
KWWWPKKPPPWWWWWK
KWWWPPPPPPWWWWWK
KWWWWPPPPWWWWWWK
.KKWWWWWWWWWWWKK
..KKKKKKKKKKKKK.
..K..K.....K..K.
.K..K.......K..K
K...K.......K...`,
  libby: `................
...KKKKKKKKKKK..
..KRRRKRRRRRRRK.
..KRWWKWWWWWWRK.
..KRWCCKCCCCWRK.
..KRWWWKWWWWWRK.
..KRWCCKCCCCWRK.
..KRWWWKWWWWWRK.
..KRWCCKCCCCWRK.
..KRWWWKWWWWWRK.
..KRWWWKWWWWWRK.
..KRRRKRRRRRRRK.
...KKKKKKKKKKK..
.....KYYK.......
......KYYK......
.......KKK......`,
  dex: `KKKKKKKKKKKKKKKK
KSSSSSSSSSSSSSSK
KSRRRRRRRRRRRRSK
KS............SK
KS.G.PPPPPPPP.SK
KS.G..........SK
KS.G.PPPPPP...SK
KS.G..........SK
KS.G.PPPP.....SK
KS.G.Y........SK
KS............SK
KSSSSSSSSSSSSSSK
KKKKKKKKKKKKKKKK
...KKKKKKKKKK...
..KKKKKKKKKKKK..
.KKKK......KKKK.`,
  scope: `KKKKKKKKKKKKKKKK
KSSSSSSSSSSSSSSK
KS..G.........SK
KS..G..G......SK
KS..G..G..G...SK
KS.GGG.G..GGG.SK
KS.GGG.GGGGGG.SK
KS.GGGGGGGGGGGSK
KS............SK
KS.....RR.....SK
KSSSSSSSSSSSSSSK
KKKKKKKKKKKKKKKK
.....KK..KK.....
.....KK..KK.....
....KKKKKKKK....
................`,
  hopper: `..K....K...K....
..K....K...K....
..K....K...K....
KKKKKKKKKKKKKKK.
KSSSSSSSSSSSSSK.
KSGCCGCCGCCGGSK.
KSGCCGCCGCCGGSK.
KSSSSSSSSSSSSSK.
KS.R...R...R.SK.
KSSSSSSSSSSSSSK.
KKKKKKKKKKKKKKK.
..K...........K.
..K...........K.
................
................
................`,
  grid: `................
...KKKKKKKKKK...
..KPPPPPPPPPPK..
.KPPPPPPPPPPPPK.
KPPWWPPWWPPWWPPK
KPPWWPPWWPPWWPPK
.KPPPPPPPPPPPPK.
..KKKKKKKKKKKK..
...KK......KK...
..KWWK....KWWK..
.KWWWWK..KWWWWK.
.KWWWWK..KWWWWK.
..KWWK....KWWK..
...KK......KK...
................
................`,
  globe: `.....KKKKKK.....
...KKCCCCCCKK...
..KCCKKKCCKKCK..
.KCCKWWWCWWWKCK.
.KCKWWWCCCWWWKK.
KCKCCCCCCCCCCKCK
KCKWCWWWCWWWCWCK
KCKKKKKCCCKKKKCK
KCKWCWWWCWWWCWCK
KCKCCCCCCCCCCKCK
.KCKWWWCCCWWWKK.
.KCCKWWWCWWWKCK.
..KCCKKKCCKKCK..
...KKCCCCCCKK...
.....KKKKKK.....
................`,
};

export type SpriteName = keyof typeof SPRITES;

function parseSprite(grid: string): { w: number; h: number; pixels: Array<{ x: number; y: number; color: string }> } {
  const rows = grid.split('\n').filter(Boolean);
  const w = Math.max(...rows.map((r) => r.length));
  const h = rows.length;
  const pixels: Array<{ x: number; y: number; color: string }> = [];
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const c = rows[y][x] ?? ' ';
      if (c === ' ' || c === '.') continue;
      const color = PAL[c];
      if (color) pixels.push({ x, y, color });
    }
  }
  return { w, h, pixels };
}

export function Sprite({ name, scale = 3 }: { name: SpriteName; scale?: number }) {
  const grid = SPRITES[name];
  if (!grid) return null;
  const { w, h, pixels } = parseSprite(grid);
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width={w * scale}
      height={h * scale}
      shapeRendering="crispEdges"
      style={{ display: 'block', position: 'relative', zIndex: 1 }}
    >
      {pixels.map(({ x, y, color }) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={color} />
      ))}
    </svg>
  );
}
