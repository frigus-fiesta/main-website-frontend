"use client";
import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const CardContainer = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`[perspective:1000px] ${className}`}>{children}</div>;

export const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ children, className = "", style, ...props }, ref) => {
    const x = useMotionValue(0.5);
    const y = useMotionValue(0.5);
    const rotateX = useTransform(y, [0, 1], [12, -12]);
    const rotateY = useTransform(x, [0, 1], [-12, 12]);

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

    return (
      <motion.div
        ref={ref}
        className={`relative flex flex-col items-center justify-center rounded-xl border bg-white shadow-xl transition-transform duration-300 hover:shadow-2xl ${className}`}
        style={{
          ...style,
          transformStyle: "preserve-3d",
          rotateX,
          rotateY,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        {...(props as any)}
      >
        {children}
      </motion.div>
    );
  }
);
CardBody.displayName = "CardBody";

export const CardItem = ({
  children,
  className = "",
  as: Comp = "div",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  as?: any;
  [key: string]: any;
}) => (
  <Comp className={className} {...props}>
    {children}
  </Comp>
);
