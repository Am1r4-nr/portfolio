'use client';

import React, { useEffect, useRef, useState, HTMLAttributes } from 'react';

const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
}

export interface GalleryItem {
  common: string;
  binomial: string;
  photo: {
    url: string;
    text: string;
    pos?: string;
    by: string;
    landscape?: boolean;
  };
}

interface CircularGalleryProps extends HTMLAttributes<HTMLDivElement> {
  items: GalleryItem[];
  radius?: number;
  autoRotateSpeed?: number;
}

const CircularGallery = React.forwardRef<HTMLDivElement, CircularGalleryProps>(
  ({ items, className, radius = 600, autoRotateSpeed = 0.02, ...props }, ref) => {
    const rotationRef = useRef(0);
    const innerDivRef = useRef<HTMLDivElement>(null);
    const itemRefsRef = useRef<(HTMLDivElement | null)[]>([]);
    const animationFrameRef = useRef<number | null>(null);

    const [cardW, setCardW] = useState(300);
    const [cardH, setCardH] = useState(400);
    const [dynRadius, setDynRadius] = useState(radius);

    useEffect(() => {
      const updateSize = () => {
        const vw = window.innerWidth;
        if (vw < 480) {
          setCardW(140); setCardH(185); setDynRadius(200);
        } else if (vw < 768) {
          setCardW(180); setCardH(240); setDynRadius(280);
        } else {
          setCardW(300); setCardH(400); setDynRadius(radius);
        }
      };
      updateSize();
      window.addEventListener('resize', updateSize);
      return () => window.removeEventListener('resize', updateSize);
    }, [radius]);

    const anglePerItem = 360 / items.length;

    useEffect(() => {
      const autoRotate = () => {
        rotationRef.current += autoRotateSpeed;
        const rotation = rotationRef.current;

        if (innerDivRef.current) {
          innerDivRef.current.style.transform = `rotateY(${rotation}deg)`;
        }

        itemRefsRef.current.forEach((el, i) => {
          if (!el) return;
          const itemAngle = i * anglePerItem;
          const relativeAngle = (itemAngle + rotation % 360 + 360) % 360;
          const normalizedAngle = Math.abs(relativeAngle > 180 ? 360 - relativeAngle : relativeAngle);
          el.style.opacity = String(Math.max(0.3, 1 - normalizedAngle / 180));
        });

        animationFrameRef.current = requestAnimationFrame(autoRotate);
      };

      animationFrameRef.current = requestAnimationFrame(autoRotate);

      return () => {
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      };
    }, [autoRotateSpeed, anglePerItem]);

    return (
      <div
        ref={ref}
        role="region"
        aria-label="Circular 3D Gallery"
        className={cn("relative w-full h-full flex items-center justify-center", className)}
        style={{ perspective: '2000px' }}
        {...props}
      >
        <div
          ref={innerDivRef}
          className="relative w-full h-full"
          style={{ transform: 'rotateY(0deg)', transformStyle: 'preserve-3d' }}
        >
          {items.map((item, i) => (
            <div
              key={item.photo.url}
              ref={el => { itemRefsRef.current[i] = el; }}
              role="group"
              aria-label={item.common}
              className="absolute"
              style={{
                width: cardW,
                height: cardH,
                transform: `rotateY(${i * anglePerItem}deg) translateZ(${dynRadius}px)`,
                left: '50%',
                top: '50%',
                marginLeft: -cardW / 2,
                marginTop: -cardH / 2,
                opacity: 0.3,
              }}
            >
              <div className="relative w-full h-full rounded-lg shadow-2xl overflow-hidden group border border-white/10 bg-white/5 backdrop-blur-lg">
                {item.photo.url.endsWith('.pdf') ? (
                  <div className="absolute inset-0 overflow-hidden">
                    <iframe
                      src={item.photo.url}
                      title={item.photo.text}
                      className="border-0 absolute"
                      style={item.photo.landscape ? {
                        width: '400px',
                        height: '300px',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%) rotate(90deg)',
                      } : {
                        width: '100%',
                        height: '100%',
                        top: 0,
                        left: 0,
                      }}
                    />
                  </div>
                ) : (
                  <img
                    src={item.photo.url}
                    alt={item.photo.text}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: item.photo.pos || 'center' }}
                  />
                )}
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <h2 className="text-xl font-bold">{item.common}</h2>
                  <em className="text-sm italic opacity-80">{item.binomial}</em>
                  <p className="text-xs mt-2 opacity-70">Photo by: {item.photo.by}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

CircularGallery.displayName = 'CircularGallery';

export { CircularGallery };
