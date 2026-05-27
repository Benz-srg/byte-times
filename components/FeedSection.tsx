'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Sprite, SpriteName } from './Sprite';

export type Post = {
  id: string;
  cat: string;
  sprite: SpriteName;
  svgl?: string;
  svglDay?: string;
  logoVariant?: 'white';
  time: string;
  readTime: string;
  title: string;
  summary: string;
  author: string;
  desk: string;
  href: string;
};

type Props = {
  posts: Post[];
  chips: Array<{ filter: string; label: string; count: number }>;
};

const imgStyle: React.CSSProperties = {
  objectFit: 'contain',
  imageRendering: 'auto',
  width: '100%',
  height: '100%',
};

function ThumbLogo({ post }: { post: Post }) {
  if (post.svgl) {
    const wrapStyle: React.CSSProperties = {
      position: 'relative',
      zIndex: 1,
      width: 56,
      height: 56,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 4,
    };
    if (post.svglDay) {
      return (
        <div style={wrapStyle}>
          {/* night-only: white logo */}
          <Image src={post.svgl} alt="" width={56} height={56} className="logo-night" style={imgStyle} unoptimized />
          {/* day-only: dark logo */}
          <Image src={post.svglDay} alt="" width={56} height={56} className="logo-day" style={{ ...imgStyle, position: 'absolute', inset: 4 }} unoptimized />
        </div>
      );
    }
    return (
      <div style={wrapStyle}>
        <Image
          src={post.svgl}
          alt=""
          width={56}
          height={56}
          className={post.logoVariant ? `logo-${post.logoVariant}` : undefined}
          style={imgStyle}
          unoptimized
        />
      </div>
    );
  }
  return <Sprite name={post.sprite} scale={3} />;
}

export function FeedSection({ posts, chips }: Props) {
  const [active, setActive] = useState('all');
  const [done, setDone] = useState(false);

  const visible = posts.filter((p) => active === 'all' || p.cat === active);

  return (
    <>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', paddingInline: 'var(--pad-x)' }}>
        <nav className="chips" aria-label="Filter by sector">
          {chips.map((c) => (
            <button
              key={c.filter}
              className={`chip${active === c.filter ? ' active' : ''}`}
              onClick={() => setActive(c.filter)}
            >
              <span className="hash">#</span>
              {c.label}
              <span className="count">{c.count}</span>
            </button>
          ))}
        </nav>
      </div>

      <section className="feed">
        <div className="feed-inner">
          {visible.map((p) => (
            <article key={p.id} className="post" data-cat={p.cat}>
              <div className="post-thumb" data-logo-variant={p.logoVariant ?? (p.svglDay ? 'dual' : undefined)}>
                <ThumbLogo post={p} />
              </div>
              <div className="post-body">
                <div className="post-meta">
                  <span className="cat">{p.cat.toUpperCase()}</span>
                  <span className="sep">·</span>
                  <span>{p.time}</span>
                  <span className="sep">·</span>
                  <span>{p.readTime}</span>
                </div>
                <h2>{p.title}</h2>
                <p>{p.summary}</p>
                <div className="post-foot">
                  <span className="by">{p.author}</span>
                  <span className="sep">·</span>
                  <span>{p.desk}</span>
                  <a href={p.href} target="_blank" rel="noopener noreferrer">Read →</a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="more">
          <button
            className="btn"
            disabled={done}
            onClick={() => setDone(true)}
          >
            {done ? '✓ caught up — check back tomorrow' : '▸ Load older stories'}
          </button>
        </div>
      </section>
    </>
  );
}
