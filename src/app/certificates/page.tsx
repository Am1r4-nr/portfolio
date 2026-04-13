import Link from 'next/link';

const certs = [
  { name: 'GCTF 2024', issuer: 'Google Cybersecurity Tournament', url: '/CERT/CERT_GCTF24.png', type: 'image' },
  { name: 'GCTF 2025', issuer: 'Google Cybersecurity Tournament', url: '/CERT/CERT_GCTF25.png', type: 'image' },
  { name: 'CompTIA Security+', issuer: 'CompTIA', url: '/CERT/CompTIA%20Security%2B%20ce%20certificate.pdf', type: 'pdf' },
  { name: 'CCNA: Intro to Networks', issuer: 'Cisco Networking Academy', url: '/CERT/CCNA-_Introduction_to_Networks_certificate_nuramiranabila03-gmail-com_c80f40a6-5863-4a15-8231-bffadfa09bec.pdf', type: 'pdf' },
  { name: 'Preliminary Certificate', issuer: 'Nur Amira Nabila', url: '/CERT/Preliminary-Nur%20Amira%20Nabila%20Binti%20Mohd%20Ab%20Rahman.pdf', type: 'pdf' },
  { name: 'Certificate', issuer: 'Nur Amira Nabila', url: '/CERT/cert_NUR_AMIRA_NABILA_BINTI_MOHD_AB_RAHMAN.pdf', type: 'pdf' },
  { name: 'GOMBAK 6th UIA', issuer: 'Competition Result', url: '/CERT/(Bulk%201)%2057%20GOMBAK%206th%20UIA%201-16.pdf', type: 'pdf' },
  { name: 'Certificate 1', issuer: 'Scanned Document', url: '/CERT/CamScanner%2004-12-2026%2023.51.pdf', type: 'pdf' },
  { name: 'Certificate 2', issuer: 'Scanned Document', url: '/CERT/CamScanner%2004-12-2026%2023.52.pdf', type: 'pdf' },
  { name: 'Certificate 3', issuer: 'Scanned Document', url: '/CERT/CamScanner%2004-12-2026%2023.56.pdf', type: 'pdf' },
  { name: 'Certificate 4', issuer: 'Scanned Document', url: '/CERT/CamScanner%2004-12-2026%2023.58.pdf', type: 'pdf' },
  { name: 'Certificate 5', issuer: 'Scanned Document', url: '/CERT/CamScanner%2004-13-2026%2000.00.pdf', type: 'pdf' },
];

export default function CertificatesPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16" style={{ fontFamily: "'Space Mono', monospace" }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Link
            href="/"
            className="text-neutral-500 hover:text-white transition-colors text-sm"
          >
            ← back
          </Link>
          <h1 className="text-3xl font-bold" style={{ color: '#b8f000' }}>
            ALL CERTIFICATES
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert) => (
            <a
              key={cert.url}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all overflow-hidden"
            >
              <div className="aspect-[3/4] overflow-hidden bg-neutral-900">
                {cert.type === 'image' ? (
                  <img
                    src={cert.url}
                    alt={cert.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <iframe
                    src={cert.url}
                    title={cert.name}
                    className="w-full h-full border-0"
                  />
                )}
              </div>
              <div className="p-4">
                <p className="font-semibold text-sm text-white">{cert.name}</p>
                <p className="text-xs text-neutral-500 mt-1">{cert.issuer}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
