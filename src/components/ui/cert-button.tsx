'use client';

export default function CertButton() {
  return (
    <a
      href="/certificates"
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium border text-white rounded-full bg-black transition-colors"
      style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.963rem', padding: '0.55rem 1.65rem', borderColor: 'rgba(255,255,255,0.2)' }}
      onMouseEnter={e => {
        const el = e.currentTarget;
        el.style.backgroundColor = '#b8f000';
        el.style.color = '#000';
        el.style.borderColor = '#b8f000';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget;
        el.style.backgroundColor = '#000';
        el.style.color = '#fff';
        el.style.borderColor = 'rgba(255,255,255,0.2)';
      }}
    >
      see all cert →
    </a>
  );
}
