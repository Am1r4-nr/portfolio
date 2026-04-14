import Component from "@/components/ui/portfolio-hero";
import { CircularGallery, GalleryItem } from "@/components/ui/circular-gallery";
import ProgrammeShowcase from "@/components/ui/programme-showcase";
import CertButton from "@/components/ui/cert-button";
import ReadMoreBtn from "@/components/ui/read-more-btn";
import { ProjectCard } from "@/components/ui/project-card";

const galleryData: GalleryItem[] = [
  {
    common: 'GCTF 2024',
    binomial: 'Google Cybersecurity Tournament',
    photo: {
      url: '/CERT/CERT_GCTF24.png',
      text: 'GCTF 2024 Certificate',
      by: '2024'
    }
  },
  {
    common: 'GCTF 2025',
    binomial: 'Google Cybersecurity Tournament',
    photo: {
      url: '/CERT/CERT_GCTF25.png',
      text: 'GCTF 2025 Certificate',
      by: '2025'
    }
  },
  {
    common: 'CompTIA Security+',
    binomial: 'CompTIA',
    photo: {
      url: '/CERT/CompTIA%20Security%2B%20ce%20certificate.pdf',
      text: 'CompTIA Security+ Certificate',
      by: 'CompTIA',
      landscape: true
    }
  },
  {
    common: 'CCNA: Intro to Networks',
    binomial: 'Cisco Networking Academy',
    photo: {
      url: '/CERT/CCNA-_Introduction_to_Networks_certificate_nuramiranabila03-gmail-com_c80f40a6-5863-4a15-8231-bffadfa09bec.pdf',
      text: 'CCNA Introduction to Networks Certificate',
      by: 'Cisco',
      landscape: true
    }
  },
  {
    common: 'Preliminary Certificate',
    binomial: 'Nur Amira Nabila',
    photo: {
      url: '/CERT/Preliminary-Nur%20Amira%20Nabila%20Binti%20Mohd%20Ab%20Rahman.pdf',
      text: 'Preliminary Certificate',
      by: '2026'
    }
  },
  {
    common: 'Certificate',
    binomial: 'Nur Amira Nabila',
    photo: {
      url: '/CERT/cert_NUR_AMIRA_NABILA_BINTI_MOHD_AB_RAHMAN.pdf',
      text: 'Certificate',
      by: '2026'
    }
  },
  {
    common: 'GOMBAK 6th UIA',
    binomial: 'Competition Result',
    photo: {
      url: '/CERT/(Bulk%201)%2057%20GOMBAK%206th%20UIA%201-16.pdf',
      text: 'GOMBAK 6th UIA Certificate',
      by: '2026'
    }
  },
  {
    common: 'Certificate 1',
    binomial: 'Scanned Document',
    photo: {
      url: '/CERT/CamScanner%2004-12-2026%2023.51.pdf',
      text: 'Scanned Certificate',
      by: '2026'
    }
  },
  {
    common: 'Certificate 2',
    binomial: 'Scanned Document',
    photo: {
      url: '/CERT/CamScanner%2004-12-2026%2023.52.pdf',
      text: 'Scanned Certificate',
      by: '2026'
    }
  },
  {
    common: 'Certificate 3',
    binomial: 'Scanned Document',
    photo: {
      url: '/CERT/CamScanner%2004-12-2026%2023.56.pdf',
      text: 'Scanned Certificate',
      by: '2026'
    }
  },
  {
    common: 'Certificate 4',
    binomial: 'Scanned Document',
    photo: {
      url: '/CERT/CamScanner%2004-12-2026%2023.58.pdf',
      text: 'Scanned Certificate',
      by: '2026'
    }
  },
  {
    common: 'Certificate 5',
    binomial: 'Scanned Document',
    photo: {
      url: '/CERT/CamScanner%2004-13-2026%2000.00.pdf',
      text: 'Scanned Certificate',
      by: '2026'
    }
  },
];

export default function Home() {
  return (
    <div className="w-full">
      <Component />

      {/* About Me Section */}
      <section
        style={{ fontFamily: "'Space Mono', monospace" }}
        className="w-full min-h-screen flex items-center"
      >
        {/* Sidebar spacer — matches hero sidebar width */}
        <div style={{ width: 'calc(100vw / 16)', flexShrink: 0 }} />

        {/* Content — centered in remaining space, same padding as hero */}
        <div className="about-section-content" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '96px 40px', gap: 40 }}>

        {/* Left: text */}
        <div className="about-section-text" style={{ flexShrink: 0, width: 300 }}>
          {/* Heading */}
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl font-bold whitespace-nowrap" style={{ color: 'var(--p-heading)' }}>
              <span style={{ color: '#c084fc' }}>#</span>about-me
            </h2>
            <div className="h-px flex-1 max-w-[160px]" style={{ background: '#b8f000' }} />
          </div>

          <p className="mb-6 text-sm" style={{ color: 'var(--p-heading)' }}>Hello, I&apos;m Nabila!</p>

          <p className="text-xs leading-7 mb-6 max-w-sm" style={{ color: 'var(--p-text-muted)' }}>
            I&apos;m a cybersecurity student and front-end developer based in Malaysia.
            I can build responsive, modern interfaces from scratch and secure them with
            the latest best practices in information security.
          </p>

          <p className="text-xs leading-7 mb-10 max-w-sm" style={{ color: 'var(--p-text-muted)' }}>
            Transforming curiosity into expertise has been my drive. I&apos;ve competed in
            CTF tournaments, earned industry certifications, and continuously push to learn
            the newest technologies and frameworks in both development and cybersecurity.
          </p>

          <ReadMoreBtn />
        </div>

        {/* Right: skills grid */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            {[
              { title: 'Language Proficiency',  items: ['English — Fluent', 'Bahasa Melayu — Native / Fluent', 'Mandarin — Beginner'],                                  color: '#c084fc' },
              { title: 'Programming Languages', items: ['Python', 'HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel'],                                                        color: '#b8f000' },
              { title: 'Cybersecurity Tools',   items: ['Kali Linux', 'Burp Suite', 'Wireshark', 'Nmap', 'CyberChef', 'hashcat', 'RsaCtfTool', 'steghide', 'OpenSteg'], color: '#c084fc' },
              { title: 'Web & App Design',      items: ['Figma', 'Canva', 'Framer', 'Adobe Photoshop', 'React', 'React Native', 'Tailwind CSS', 'Bootstrap'],            color: '#b8f000' },
              { title: 'Productivity & Collab', items: ['Google Workspace', 'Microsoft Office', 'GitHub', 'Notion', 'WordPress'],                                        color: '#c084fc' },
            ].map(({ title, items, color }) => (
              <div key={title} style={{ border: `1.5px solid ${color}`, padding: '14px 18px', borderRadius: 2, background: `${color}18` }}>
                <div style={{ color, fontSize: 13, fontWeight: 700, marginBottom: 8, fontFamily: "'Space Mono', monospace" }}>
                  {title}
                </div>
                {title === 'Language Proficiency' ? (
                  <div style={{ fontFamily: "'Space Mono', monospace" }}>
                    {items.map((item, i) => (
                      <div key={i} style={{ color: 'var(--p-text-muted)', fontSize: 11, lineHeight: 2 }}>• {item}</div>
                    ))}
                  </div>
                ) : (
                  <div style={{ color: 'var(--p-text-muted)', fontSize: 11, lineHeight: 2, fontFamily: "'Space Mono', monospace" }}>
                    {items.join('  ')}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full py-20 px-6" style={{ fontFamily: "'Space Mono', monospace" }}>
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-4xl font-bold whitespace-nowrap" style={{ color: '#b8f000' }}>
              <span style={{ color: '#c084fc' }}>#</span>projects
            </h2>
            <div className="h-px flex-1 max-w-xs" style={{ background: '#b8f000' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="E-Doptcat"
              description="Real-time cat adoption & rescue management system for IIUM's Abu Hurairah Club. Features geospatial tracking, QR-based cat profiles, and secure FPX donation. Awarded 2nd Place for Real-World Impact at IIUM FYP Showcase."
              imgSrc="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop"
              link="/projects"
              linkText="Final Year Project"
            />
            <ProjectCard
              title="WordPress Research Website"
              description="Developed a WordPress website for IIUM's Research Unit 3: Information System, Internet and Governance. Delivered two full design proposals with distinct colour themes, sitemaps, and page layouts."
              imgSrc="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop"
              link="/projects"
              linkText="Web Development"
            />
            <ProjectCard
              title="CTF Competitions"
              description="Active CTF competitor since 2024 — Rank 17 at Girls in CTF 2024, Rank 50 at Girls in CTF 2025, and Rank 76 at UM CyberSecurity Summit CTF 2025. Competing under RE:HACK and Cyber Hacktics."
              imgSrc="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop"
              link="/projects"
              linkText="View Experience"
            />
          </div>

          {/* See more */}
          <div className="flex justify-center mt-12">
            <a
              href="/projects"
              className="ghost-btn"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 12,
                border: "1px solid",
                padding: "10px 28px",
                borderRadius: 2,
                textDecoration: "none",
                letterSpacing: "0.05em",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              see more →
            </a>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <div className="w-full bg-transparent h-[60vh] md:h-screen flex flex-col overflow-hidden">
        <div className="text-center pt-16 pb-4 shrink-0">
          <h2
            className="text-2xl md:text-4xl font-bold tracking-tight"
            style={{ color: '#b8f000', fontFamily: "'Space Mono', monospace" }}
          >
            CERTIFICATES
          </h2>
        </div>
        <div className="flex-1 min-h-0 w-full overflow-hidden relative">
          <CircularGallery items={galleryData} />
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <div className="pointer-events-auto">
              <CertButton />
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="w-full bg-transparent py-20 px-4">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold tracking-tight"
            style={{ color: '#b8f000', fontFamily: "'Space Mono', monospace" }}
          >
            PROGRAMMES
          </h2>
        </div>
        <ProgrammeShowcase />
      </div>
    </div>
  );
}
