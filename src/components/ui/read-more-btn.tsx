'use client';

export default function ReadMoreBtn() {
  return (
    <a
      href="/about"
      style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: 12,
        color: '#e8eaf0',
        border: '1px solid #555',
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
        el.style.borderColor = '#555';
        el.style.color = '#e8eaf0';
      }}
    >
      Read more →
    </a>
  );
}
