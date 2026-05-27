import { HeaderTools } from '@/components/HeaderTools';
import { FeedSection, Post } from '@/components/FeedSection';

const POSTS: Post[] = [
  {
    id: '1',
    cat: 'llm',
    sprite: 'chip',
    svgl: 'https://svgl.app/library/claude-ai-icon.svg',
    time: '05:00Z',
    readTime: '6 min read',
    title: 'Claude Opus 4.7 launches with 1M-token context and extended thinking mode',
    summary: "Anthropic's latest flagship ships with a 1M-token context window, hybrid reasoning that toggles between fast and deep thinking, and a new computer-use API v2 that finally handles dynamic UIs reliably.",
    author: 'Chip Hopper',
    desk: 'Neural Desk',
    href: 'https://www.anthropic.com/news',
  },
  {
    id: '2',
    cat: 'code',
    sprite: 'dex',
    svgl: 'https://svgl.app/library/anthropic_white.svg',
    time: '1 hr ago',
    readTime: '4 min read',
    title: 'Claude Code passes 1M active developers — Anthropic opens a free tier',
    summary: "The CLI agent that writes PRs, runs tests, and fixes its own mistakes hit the milestone quietly. Anthropic responded with a free 20-req/day tier and SDK docs that are actually readable.",
    author: 'J. Lin',
    desk: 'Code Floor',
    href: 'https://claude.ai/code',
  },
  {
    id: '3',
    cat: 'mcp',
    sprite: 'mux',
    svgl: 'https://svgl.app/library/anthropic_white.svg',
    time: '2 hr ago',
    readTime: '5 min read',
    title: 'MCP 1.5 spec lands: auth, streaming, and typed tool schemas',
    summary: 'Anthropic dropped the 1.5 spec with OAuth 2.1 flows, server-sent-event streaming for long tools, and a JSON Schema layer that makes hallucinated tool calls detectable at parse time.',
    author: 'R. Connor',
    desk: 'MCP Desk',
    href: 'https://modelcontextprotocol.io',
  },
  {
    id: '4',
    cat: 'llm',
    sprite: 'scope',
    svgl: 'https://svgl.app/library/gemini.svg',
    time: '3 hr ago',
    readTime: '5 min read',
    title: 'Google Gemini 2.5 Ultra breaks MMLU-Pro, bumps context to 2M tokens',
    summary: 'DeepMind quietly updated the leaderboard entry while everyone slept. 2M-token context ships in API preview; the free Flash tier gets 1M. Code eval is now within 3 points of Claude.',
    author: 'Chip Hopper',
    desk: 'Neural Desk',
    href: 'https://deepmind.google/technologies/gemini/',
  },
  {
    id: '5',
    cat: 'agents',
    sprite: 'aggy',
    svgl: 'https://cdn.simpleicons.org/langchain',
    time: '4 hr ago',
    readTime: '6 min read',
    title: 'LangGraph Cloud exits beta — hosted agent persistence with one-line deploy',
    summary: "LangChain's managed runtime for stateful agents leaves beta. Checkpointing, human-in-the-loop pause/resume, and streaming traces now work out of the box. The local OSS version stays free.",
    author: 'M. Abe',
    desk: 'Agent Lab',
    href: 'https://www.langchain.com/langgraph',
  },
  {
    id: '6',
    cat: 'code',
    sprite: 'dex',
    svgl: 'https://svgl.app/library/cursor_dark.svg',
    time: '5 hr ago',
    readTime: '4 min read',
    title: 'Cursor 1.0 goes GA: full-repo agents, background tasks, instant apply',
    summary: "Cursor ships its 1.0 release with background agents that run in the cloud while you sleep, a new instant-apply diff engine that's 10× faster, and a composer that can refactor across 500 files.",
    author: 'J. Lin',
    desk: 'Code Floor',
    href: 'https://cursor.com',
  },
  {
    id: '7',
    cat: 'rag',
    sprite: 'libby',
    svgl: 'https://svgl.app/library/postgresql.svg',
    time: '6 hr ago',
    readTime: '7 min read',
    title: 'pgvector 0.8 ships HNSW reranking — Postgres becomes a serious vector DB',
    summary: "The Postgres extension adds hybrid BM25+vector reranking, IVFFlat compression, and a quantization path that cuts index size by 4×. Pinecone and Weaviate quietly updated their \"why not Postgres\" FAQs.",
    author: 'S. Rao',
    desk: 'Index Desk',
    href: 'https://github.com/pgvector/pgvector',
  },
  {
    id: '8',
    cat: 'agents',
    sprite: 'grid',
    svgl: 'https://cdn.simpleicons.org/crewai',
    time: '7 hr ago',
    readTime: '5 min read',
    title: 'CrewAI 3.0 ships a visual builder and enterprise auth — multi-agent goes mainstream',
    summary: 'CrewAI adds a drag-and-drop crew designer, role-based access for teams, and a managed cloud runner. The OSS core stays MIT. Enterprise waitlist filled in under 48 hours.',
    author: 'M. Abe',
    desk: 'Agent Lab',
    href: 'https://www.crewai.com',
  },
  {
    id: '9',
    cat: 'proxy',
    sprite: 'hopper',
    svgl: 'https://avatars.githubusercontent.com/BerriAI?s=64',
    time: '9 hr ago',
    readTime: '4 min read',
    title: 'LiteLLM 2.0 goes OpenTelemetry-native — route 200+ models, trace everything',
    summary: "BerriAI's proxy layer ships v2 with first-class OTEL support, per-request budget caps, and a new virtual-key system for team spend isolation. Self-hosted Docker image drops to 120MB.",
    author: 'D. Kavanagh',
    desk: 'Infra Desk',
    href: 'https://litellm.ai',
  },
  {
    id: '10',
    cat: 'llm',
    sprite: 'chip',
    svgl: 'https://svgl.app/library/meta.svg',
    time: '11 hr ago',
    readTime: '8 min read',
    title: "Meta's Llama 4 Maverick: 400B MoE, Apache 2.0, and a surprise coding score",
    summary: "Meta drops the Maverick weights under Apache 2.0. The 400B mixture-of-experts model activates 52B parameters per forward pass, beats GPT-4o on HumanEval, and runs on 8×H100 in full precision.",
    author: 'Chip Hopper',
    desk: 'Neural Desk',
    href: 'https://ai.meta.com/llama/',
  },
  {
    id: '11',
    cat: 'browser',
    sprite: 'globe',
    svgl: 'https://avatars.githubusercontent.com/browserbase?s=64',
    time: '13 hr ago',
    readTime: '4 min read',
    title: 'Stagehand 1.0 goes open source — browser agents with persistent sessions',
    summary: "Browserbase open-sources Stagehand, their Playwright-based browser agent framework. Highlights: persistent session replay, local-LLM support via Ollama, and a computer-vision fallback when the DOM is unreadable.",
    author: 'P. Nakhre',
    desk: 'Web Desk',
    href: 'https://github.com/browserbase/stagehand',
  },
  {
    id: '12',
    cat: 'mcp',
    sprite: 'mux',
    svgl: 'https://svgl.app/library/openrouter_dark.svg',
    time: '16 hr ago',
    readTime: '3 min read',
    title: 'OpenRouter crosses 2B daily tokens — adds MCP gateway and model health scores',
    summary: "OpenRouter hits 2B daily routed tokens and ships an MCP-compatible gateway so any MCP client can call any model. New health-score dashboard shows per-model latency, error rate, and TTFT in real time.",
    author: 'R. Connor',
    desk: 'MCP Desk',
    href: 'https://openrouter.ai',
  },
];

const CHIPS = [
  { filter: 'all', label: 'all', count: 12 },
  { filter: 'llm', label: 'llm', count: 3 },
  { filter: 'code', label: 'code', count: 2 },
  { filter: 'mcp', label: 'mcp', count: 3 },
  { filter: 'agents', label: 'agents', count: 2 },
  { filter: 'rag', label: 'rag', count: 1 },
  { filter: 'proxy', label: 'proxy', count: 1 },
  { filter: 'browser', label: 'browser', count: 1 },
];

export default function Page() {
  return (
    <>
      <div className="crt" aria-hidden="true" />

      <header className="header">
        <div className="header-inner">
          <a href="#top" className="brand">
            <span className="brand-sq">BT</span>
            <span className="brand-name">BYTE<span>.</span>TIMES</span>
          </a>
          <HeaderTools />
        </div>
      </header>

      <main className="page-main">
        <section id="top" className="lead">
          <div className="lead-inner">
            <div className="kicker">
              <span className="dot" />
              Today · AI news
            </div>
            <h1>Daily dispatches from the AI grid</h1>
            <p className="sub">
              A simple, quiet reading board for AI news. One scroll, one cup of coffee. Updated every morning.
            </p>
          </div>
        </section>

        <FeedSection posts={POSTS} chips={CHIPS} />
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <span className="colophon">Byte.Times · est. 2026</span>
          <span className="grow" />
          <a href="#">About</a>
          <a href="#">RSS</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </>
  );
}
