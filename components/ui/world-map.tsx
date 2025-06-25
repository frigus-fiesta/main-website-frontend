"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";
import { useTheme } from "next-themes";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

export default function WorldMap({
  dots = [
    // Mumbai to London
    { start: { lat: 19.0760, lng: 72.8777, label: "Mumbai" }, end: { lat: 51.5074, lng: -0.1278, label: "London" } },
    // Mumbai to New York
    { start: { lat: 19.0760, lng: 72.8777, label: "Mumbai" }, end: { lat: 40.7128, lng: -74.0060, label: "New York" } },
    // Mumbai to Tokyo
    { start: { lat: 19.0760, lng: 72.8777, label: "Mumbai" }, end: { lat: 35.6895, lng: 139.6917, label: "Tokyo" } },
    // Mumbai to Sydney
    { start: { lat: 19.0760, lng: 72.8777, label: "Mumbai" }, end: { lat: -33.8688, lng: 151.2093, label: "Sydney" } },
    // Mumbai to Cape Town
    { start: { lat: 19.0760, lng: 72.8777, label: "Mumbai" }, end: { lat: -33.9249, lng: 18.4241, label: "Cape Town" } },
    // Mumbai to Moscow
    { start: { lat: 19.0760, lng: 72.8777, label: "Mumbai" }, end: { lat: 55.7558, lng: 37.6173, label: "Moscow" } },
    // Mumbai to San Francisco
    { start: { lat: 19.0760, lng: 72.8777, label: "Mumbai" }, end: { lat: 37.7749, lng: -122.4194, label: "San Francisco" } },
    // Mumbai to Cairo
    { start: { lat: 19.0760, lng: 72.8777, label: "Mumbai" }, end: { lat: 30.0444, lng: 31.2357, label: "Cairo" } },
    // Mumbai to Rio de Janeiro
    { start: { lat: 19.0760, lng: 72.8777, label: "Mumbai" }, end: { lat: -22.9068, lng: -43.1729, label: "Rio" } },
    // Mumbai to Beijing
    { start: { lat: 19.0760, lng: 72.8777, label: "Mumbai" }, end: { lat: 39.9042, lng: 116.4074, label: "Beijing" } },
  ],
  lineColor = "#0ea5e9",
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const map = new DottedMap({ height: 100, grid: "diagonal" });
  const { theme } = useTheme();

  // Use the actual SVG width/height from DottedMap for perfect alignment
  const svgWidth = map.image.width;
  const svgHeight = map.image.height;

  const svgMap = map.getSVG({
    radius: 0.22,
    color: theme === "dark" ? "#FFFFFF40" : "#00000040",
    shape: "circle",
    backgroundColor: theme === "dark" ? "black" : "white",
  });

  // Project lat/lng to SVG coordinates using equirectangular projection
  const projectLatLng = (lat: number, lng: number) => {
    const x = ((lng + 180) / 360) * svgWidth;
    const y = ((90 - lat) / 180) * svgHeight;
    
return { x, y };
  };

  // Use projected coordinates for overlays
  const getPixel = (lat: number, lng: number) => {
    return projectLatLng(lat, lng);
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    // Make the curve height proportional to the distance
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const curveHeight = Math.max(Math.abs(dx), Math.abs(dy)) * 0.35 + 30;
    const midX = (start.x + end.x) / 2;
    const midY = (start.y + end.y) / 2 - curveHeight;
    
return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  // Responsive aspect ratio container
  return (
    <div
      className="relative mx-auto w-full max-w-2xl overflow-hidden rounded-lg bg-white dark:bg-black"
      style={{ aspectRatio: `${svgWidth} / ${svgHeight}` }}
    >
      <div
        className="pointer-events-none absolute inset-0 size-full select-none"
        dangerouslySetInnerHTML={{ __html: svgMap }}
      />
      <svg
        ref={svgRef}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        width="100%"
        height="100%"
        className="pointer-events-none absolute inset-0 size-full select-none"
        style={{ display: 'block' }}
      >
        {dots.map((dot, i) => {
          const startPoint = getPixel(dot.start.lat, dot.start.lng);
          const endPoint = getPixel(dot.end.lat, dot.end.lng);
          
return (
  <g key={`path-group-${i}`}>
    <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="#FFD700"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="100 100"
                initial={{ strokeDashoffset: 100 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{
                  duration: 1.5,
                  delay: 0.5 * i,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
  </g>
);
        })}
        {dots.map((dot, i) => {
          const startPoint = getPixel(dot.start.lat, dot.start.lng);
          const endPoint = getPixel(dot.end.lat, dot.end.lng);
          
return (
  <g key={`points-group-${i}`}> 
    <g key={`start-${i}`}>
      <circle
                  cx={startPoint.x}
                  cy={startPoint.y}
                  r="4"
                  fill={lineColor}
                  stroke="#fff"
                  strokeWidth="1"
                />
      <circle
                  cx={startPoint.x}
                  cy={startPoint.y}
                  r="4"
                  fill={lineColor}
                  opacity="0.4"
                >
        <animate
                    attributeName="r"
                    from="4"
                    to="10"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
        <animate
                    attributeName="opacity"
                    from="0.4"
                    to="0"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
      </circle>
    </g>
    <g key={`end-${i}`}>
      <circle
                  cx={endPoint.x}
                  cy={endPoint.y}
                  r="4"
                  fill={lineColor}
                  stroke="#fff"
                  strokeWidth="1"
                />
      <circle
                  cx={endPoint.x}
                  cy={endPoint.y}
                  r="4"
                  fill={lineColor}
                  opacity="0.4"
                >
        <animate
                    attributeName="r"
                    from="4"
                    to="10"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
        <animate
                    attributeName="opacity"
                    from="0.4"
                    to="0"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
      </circle>
    </g>
  </g>
);
        })}
      </svg>
    </div>
  );
} 