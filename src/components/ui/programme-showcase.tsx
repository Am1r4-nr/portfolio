'use client';

import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Programme {
  id: string;
  name: string;
  org: string;
  year: string;
  image: string;
  url?: string;
}

const DEFAULT_PROGRAMMES: Programme[] = [
  {
    id: '1',
    name: 'Google CTF',
    org: 'Google Cybersecurity Tournament',
    year: '2024',
    image: '/programmes/gctf-2024.jpg',
    url: '#',
  },
  {
    id: '2',
    name: 'Google CTF',
    org: 'Google Cybersecurity Tournament',
    year: '2025',
    image: '/programmes/gctf-2025.jpg',
    url: '#',
  },
  {
    id: '3',
    name: 'CompTIA Security+',
    org: 'CompTIA',
    year: '2026',
    image: '/programmes/comptia-securityplus.jpg',
    url: '#',
  },
  {
    id: '4',
    name: 'CCNA: Intro to Networks',
    org: 'Cisco Networking Academy',
    year: '2026',
    image: '/programmes/ccna-intro-networks.jpg',
    url: '#',
  },
  {
    id: '5',
    name: 'GOMBAK 6th UIA',
    org: 'Universiti Islam Antarabangsa',
    year: '2026',
    image: '/programmes/gombak-uia.jpg',
    url: '#',
  },
  {
    id: '6',
    name: 'Cybersecurity Programme',
    org: '',
    year: '2026',
    image: '/programmes/cybersecurity-programme.jpg',
    url: '#',
  },
];

interface ProgrammeShowcaseProps {
  programmes?: Programme[];
}

export default function ProgrammeShowcase({ programmes = DEFAULT_PROGRAMMES }: ProgrammeShowcaseProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const col1 = programmes.filter((_, i) => i % 3 === 0);
  const col2 = programmes.filter((_, i) => i % 3 === 1);
  const col3 = programmes.filter((_, i) => i % 3 === 2);

  return (
    <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10 lg:gap-14 select-none w-full max-w-5xl mx-auto py-8 px-4 md:px-6" style={{ fontFamily: "'Space Mono', monospace" }}>
      {/* Photo grid */}
      <div className="flex gap-2 md:gap-3 flex-shrink-0 overflow-x-auto pb-1 md:pb-0">
        <div className="flex flex-col gap-2 md:gap-3">
          {col1.map((prog) => (
            <PhotoCard
              key={prog.id}
              programme={prog}
              className="w-[110px] h-[120px] sm:w-[130px] sm:h-[140px] md:w-[155px] md:h-[165px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
        <div className="flex flex-col gap-2 md:gap-3 mt-[48px] sm:mt-[56px] md:mt-[68px]">
          {col2.map((prog) => (
            <PhotoCard
              key={prog.id}
              programme={prog}
              className="w-[122px] h-[132px] sm:w-[145px] sm:h-[155px] md:w-[172px] md:h-[182px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
        <div className="flex flex-col gap-2 md:gap-3 mt-[22px] sm:mt-[26px] md:mt-[32px]">
          {col3.map((prog) => (
            <PhotoCard
              key={prog.id}
              programme={prog}
              className="w-[115px] h-[125px] sm:w-[136px] sm:h-[146px] md:w-[162px] md:h-[172px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
      </div>

      {/* Programme list */}
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-col gap-4 md:gap-5 pt-0 md:pt-2 flex-1 w-full">
        {programmes.map((prog) => (
          <ProgrammeRow
            key={prog.id}
            programme={prog}
            hoveredId={hoveredId}
            onHover={setHoveredId}
          />
        ))}
      </div>
    </div>
  );
}

function PhotoCard({
  programme,
  className,
  hoveredId,
  onHover,
}: {
  programme: Programme;
  className: string;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === programme.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl cursor-pointer flex-shrink-0 transition-opacity duration-400',
        className,
        isDimmed ? 'opacity-60' : 'opacity-100',
      )}
      onMouseEnter={() => onHover(programme.id)}
      onMouseLeave={() => onHover(null)}
    >
      <img
        src={programme.image}
        alt={programme.name}
        className="w-full h-full object-cover transition-[filter] duration-500"
        style={{
          filter: isActive ? 'grayscale(0) brightness(1)' : 'grayscale(1) brightness(0.77)',
        }}
      />
    </div>
  );
}

function ProgrammeRow({
  programme,
  hoveredId,
  onHover,
}: {
  programme: Programme;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === programme.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        'cursor-pointer transition-opacity duration-300',
        isDimmed ? 'opacity-50' : 'opacity-100',
      )}
      onMouseEnter={() => onHover(programme.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="flex items-center gap-2.5">
        <span
          className={cn(
            'w-4 h-3 rounded-[5px] flex-shrink-0 transition-all duration-300',
            isActive ? 'w-5' : '',
          )}
          style={{ backgroundColor: isActive ? '#C3E41D' : 'rgba(255,255,255,0.25)' }}
        />
        <span
          className={cn(
            'text-base md:text-[18px] font-semibold leading-none tracking-tight transition-colors duration-300',
            isActive ? 'text-white' : 'text-white/80',
          )}
        >
          {programme.name}
        </span>

        {programme.url && (
          <div
            className={cn(
              'flex items-center ml-0.5 transition-all duration-200',
              isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 pointer-events-none',
            )}
          >
            <a
              href={programme.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-1 rounded text-white/50 hover:text-white hover:bg-white/10 transition-all duration-150 hover:scale-110"
              title="Visit programme"
            >
              <ExternalLink size={11} />
            </a>
          </div>
        )}
      </div>

      <div className="mt-1.5 pl-[27px] flex items-center gap-2">
        <p className="text-[7px] md:text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
          {programme.org}
        </p>
        <span className="text-white/20 text-[8px]">·</span>
        <p
          className="text-[7px] md:text-[10px] font-medium tracking-[0.1em]"
          style={{ color: '#C3E41D', opacity: 0.7 }}
        >
          {programme.year}
        </p>
      </div>
    </div>
  );
}
