"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const COLORS = [
  "#b8f000",
  "#c084fc",
  "#b8f000cc",
  "#c084fccc",
  "#b8f00088",
  "#c084fc88",
];

const getRandomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  // Size boxes to fill ~1920×1080; each cell is 64×32px
  const cols = new Array(32).fill(1);   // 32 × 64px = 2048px wide
  const rows = new Array(36).fill(1);   // 36 × 32px = 1152px tall

  return (
    <div
      className={cn(
        "absolute inset-0 w-full h-full overflow-hidden",
        className
      )}
      {...rest}
    >
      <div className="flex w-full h-full">
        {cols.map((_, i) => (
          <div
            key={`col-${i}`}
            style={{ borderLeftColor: 'var(--p-grid-line)', borderLeftWidth: '1px', borderLeftStyle: 'solid' }}
            className="flex flex-col flex-1"
          >
            {rows.map((_, j) => (
              <motion.div
                key={`cell-${j}`}
                whileHover={{
                  backgroundColor: getRandomColor(),
                  transition: { duration: 0 },
                }}
                animate={{ transition: { duration: 2 } }}
                style={{ borderBottomColor: 'var(--p-grid-line)', borderBottomWidth: '1px', borderBottomStyle: 'solid' }}
                className="flex-1 relative"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
