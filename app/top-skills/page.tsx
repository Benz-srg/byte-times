import { HeaderTools } from '@/components/HeaderTools';

export const revalidate = 86400;

type Skill = {
  source: string;
  skillId: string;
  installs: number;
  weeklyInstalls: number[];
  isOfficial: boolean;
};

const FALLBACK: Skill[] = [
  { source: 'vercel-labs/skills', skillId: 'find-skills', installs: 1533544, weeklyInstalls: [100113, 116613, 115950, 102724, 94569, 101582, 116305, 37369], isOfficial: true },
  { source: 'anthropics/skills', skillId: 'frontend-design', installs: 421749, weeklyInstalls: [33429, 31868, 29995, 26231, 19072, 26733, 30547, 9776], isOfficial: true },
  { source: 'vercel-labs/agent-skills', skillId: 'vercel-react-best-practices', installs: 389227, weeklyInstalls: [24397, 23125, 22235, 20052, 16807, 18139, 18329, 5996], isOfficial: true },
  { source: 'microsoft/azure-skills', skillId: 'azure-ai', installs: 324542, weeklyInstalls: [20580, 21758, 21574, 22284, 20804, 21359, 20386, 2046], isOfficial: true },
  { source: 'microsoft/azure-skills', skillId: 'azure-validate', installs: 323823, weeklyInstalls: [20575, 21638, 21541, 22253, 18012, 21278, 20359, 5001], isOfficial: true },
  { source: 'microsoft/azure-skills', skillId: 'appinsights-instrumentation', installs: 323699, weeklyInstalls: [20564, 21709, 21515, 22243, 20747, 21359, 20340, 2046], isOfficial: true },
  { source: 'microsoft/azure-skills', skillId: 'microsoft-foundry', installs: 323247, weeklyInstalls: [19672, 21891, 18141, 22501, 20787, 21576, 20844, 4260], isOfficial: true },
  { source: 'microsoft/azure-skills', skillId: 'entra-app-registration', installs: 318878, weeklyInstalls: [20564, 21736, 15676, 22228, 17160, 21276, 20332, 7010], isOfficial: true },
  { source: 'vercel-labs/agent-skills', skillId: 'web-design-guidelines', installs: 317672, weeklyInstalls: [19752, 17487, 16530, 15180, 13618, 15079, 15802, 5365], isOfficial: true },
  { source: 'microsoft/azure-skills', skillId: 'azure-storage', installs: 317067, weeklyInstalls: [19434, 21710, 21287, 22237, 18070, 19856, 20424, 5007], isOfficial: true },
];

async function fetchTopSkills(): Promise<Skill[]> {
  try {
    const res = await fetch('https://www.skills.sh/', {
      next: { revalidate: 86400 },
      headers: { 'User-Agent': 'Byte-Times/1.0' },
    });
    const html = await res.text();

    const KEY = '\\"initialSkills\\":[';
    const start = html.indexOf(KEY);
    if (start < 0) return FALLBACK;

    const raw = html.slice(start + KEY.length);
    let bracket = 1;
    let end = 0;
    for (let i = 0; i < raw.length; i++) {
      if (raw[i] === '[') bracket++;
      else if (raw[i] === ']') {
        if (--bracket === 0) { end = i + 1; break; }
      }
    }

    const json = '[' + raw.slice(0, end).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
    const all: Skill[] = JSON.parse(json);
    return all.slice(0, 10);
  } catch {
    return FALLBACK;
  }
}

function fmt(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toString();
}

function Sparkline({ values }: { values: number[] }) {
  const w = 72, h = 26, pad = 2;
  const max = Math.max(...values, 1);
  const pts = values
    .map((v, i) => {
      const x = pad + (i / (values.length - 1)) * (w - pad * 2);
      const y = h - pad - (v / max) * (h - pad * 2);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden="true">
      <polyline
        points={pts}
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  );
}

function OrgIcon({ source }: { source: string }) {
  const org = source.split('/')[0];
  const initials = org
    .split(/[-_]/)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .slice(0, 2)
    .join('');
  return (
    <div
      style={{
        width: 40,
        height: 40,
        background: 'var(--accent-soft)',
        border: '1.5px solid var(--accent)',
        display: 'grid',
        placeItems: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        fontWeight: 700,
        color: 'var(--accent)',
        letterSpacing: '0.04em',
        borderRadius: 0,
      }}
    >
      {initials}
    </div>
  );
}

export default async function TopSkillsPage() {
  const skills = await fetchTopSkills();

  return (
    <>
      <div className="crt" aria-hidden="true" />

      <header className="header">
        <div className="header-inner">
          <a href="/" className="brand">
            <span className="brand-sq">BT</span>
            <span className="brand-name">BYTE<span>.</span>TIMES</span>
          </a>
          <HeaderTools />
        </div>
      </header>

      <main className="page-main">
        <section className="lead">
          <div className="lead-inner">
            <div className="kicker">
              <span className="dot" />
              skills.sh · Leaderboard
            </div>
            <h1>Top 10 AI agent skills</h1>
            <p className="sub">
              Most-installed skills from{' '}
              <a href="https://www.skills.sh" target="_blank" rel="noopener noreferrer">
                skills.sh
              </a>
              . Updated daily.
            </p>
          </div>
        </section>

        <section className="feed">
          <div className="feed-inner">
            {skills.map((skill, i) => (
              <a
                key={skill.skillId}
                href={`https://www.skills.sh/${skill.source}/${skill.skillId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="post skills-post"
              >
                <div className="post-thumb skills-rank">
                  <span className="rank-num">{i + 1}</span>
                  <OrgIcon source={skill.source} />
                </div>
                <div className="post-body">
                  <div className="post-meta">
                    <span className="cat">{skill.source.split('/')[0]}</span>
                    <span className="sep">·</span>
                    <span>{skill.source}</span>
                    {skill.isOfficial && <span className="official-badge">✓ official</span>}
                  </div>
                  <h2>{skill.skillId}</h2>
                  <p className="install-cmd">
                    <code>claude install {skill.source}/{skill.skillId}</code>
                  </p>
                  <div className="post-foot">
                    <span className="by">{fmt(skill.installs)} installs</span>
                    <span className="sep">·</span>
                    <span style={{ color: 'var(--ink-fade)', fontSize: 11 }}>8-wk trend</span>
                    <span style={{ marginLeft: 'auto' }}>
                      <Sparkline values={skill.weeklyInstalls} />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <span className="colophon">Byte.Times · est. 2026</span>
          <span className="grow" />
          <a href="https://www.skills.sh" target="_blank" rel="noopener noreferrer">
            skills.sh
          </a>
          <a href="/">← Home</a>
        </div>
      </footer>
    </>
  );
}
