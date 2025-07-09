"use client";
import * as React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {clsx} from "clsx";

export interface PinContainerProps {
  title?: string;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export const PinContainer = React.forwardRef<HTMLDivElement, PinContainerProps>(
  ({ title, href, children, className }, ref) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [0, 1], [8, -8]);
    const rotateY = useTransform(x, [0, 1], [-8, 8]);

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
      const rect = e.currentTarget.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      x.set(px);
      y.set(py);
    }

    function handleMouseLeave() {
      x.set(0.5);
      y.set(0.5);
    }

    React.useEffect(() => {
      x.set(0.5);
      y.set(0.5);
    }, [x, y]);

    const content = (
      <motion.div
        ref={ref}
        className={clsx(
          "relative flex flex-col items-center justify-center rounded-2xl border border-slate-800 bg-gradient-to-br from-[#1e293b] to-[#312e81] shadow-xl transition-transform duration-300 hover:shadow-2xl",
          className
        )}
        style={{
          perspective: 1000,
          rotateX,
          rotateY,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
        {title && (
          <div className="absolute bottom-2 left-2 text-xs text-slate-400 opacity-80">
            {title}
          </div>
        )}
      </motion.div>
    );

    if (href) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block">
          {content}
        </a>
      );
    }

    return content;
  }
);
PinContainer.displayName = "PinContainer"; 