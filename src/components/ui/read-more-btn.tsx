'use client';

export default function ReadMoreBtn() {
  return (
    <a
      href="/about"
      style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: 12,
        color: 'var(--p-heading)',
        border: '1px solid var(--p-border)',
        padding: '10px 22px',
        borderRadius: 2,
        textDecoration: 'none',
        letterSpacing: '0.04em',
        transition: 'all 0.2s',
        display: 'inline-block',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget;
        el.style.borderColor = '#b8f000';
        el.style.color = '#b8f000';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget;
        el.style.borderColor = 'var(--p-border)';
        el.style.color = 'var(--p-heading)';
      }}
    >
      Read more →
    </a>
  );
}
