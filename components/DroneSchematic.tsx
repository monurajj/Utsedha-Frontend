"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { gsap, prefersReducedMotion, registerGsap } from "@/lib/gsap";

function tetherPath(
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  offsetX = 0,
) {
  const x = fromX + offsetX;
  const hangY = fromY + Math.max(48, (toY - fromY) * 0.4);
  return `M${x} ${fromY} L${x} ${hangY} C${x} ${hangY + 34}, ${toX + 42} ${toY - 4}, ${toX} ${toY}`;
}

const GROUND_JOINT = { x: 140, y: 282 };
const ATTACH_LOCAL = { x: 286, y: 148 };

export function DroneSchematic({ className = "" }: { className?: string }) {
  const floatRef = useRef<SVGGElement>(null);
  const hoseRef = useRef<SVGPathElement>(null);
  const powerRef = useRef<SVGPathElement>(null);

  const center = { x: 286, y: 118 };

  const props: [number, number][] = [
    [286, 48],
    [356, 78],
    [356, 158],
    [286, 188],
    [216, 158],
    [216, 78],
  ];

  useEffect(() => {
    registerGsap();
    const floatEl = floatRef.current;
    const hose = hoseRef.current;
    const power = powerRef.current;
    if (!floatEl || !hose || !power) return;

    const writeTether = (dx: number, dy: number) => {
      const ax = ATTACH_LOCAL.x + dx;
      const ay = ATTACH_LOCAL.y + dy;
      hose.setAttribute("d", tetherPath(ax, ay, GROUND_JOINT.x, GROUND_JOINT.y, 0));
      power.setAttribute(
        "d",
        tetherPath(ax, ay, GROUND_JOINT.x + 5, GROUND_JOINT.y, 5),
      );
    };

    // Rest pose
    writeTether(0, 0);
    gsap.set(floatEl, { x: 0, y: 0, rotation: 0, transformOrigin: "286px 130px" });

    if (prefersReducedMotion()) return;

    const state = { x: 0, y: 0, rotation: 0 };
    const tween = gsap.to(state, {
      keyframes: [
        { x: 8, y: -12, rotation: 1, duration: 1.1 },
        { x: -5, y: -4, rotation: -0.7, duration: 1.1 },
        { x: 10, y: -15, rotation: 0.9, duration: 1.1 },
        { x: -3, y: -8, rotation: -0.4, duration: 1.1 },
        { x: 0, y: 0, rotation: 0, duration: 1.1 },
      ],
      ease: "sine.inOut",
      repeat: -1,
      onUpdate: () => {
        gsap.set(floatEl, {
          x: state.x,
          y: state.y,
          rotation: state.rotation,
        });
        writeTether(state.x, state.y);
      },
    });

    return () => {
      tween.kill();
      gsap.set(floatEl, { clearProps: "transform" });
    };
  }, []);

  return (
    <svg
      viewBox="0 0 640 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* Facade wall — paneled high-rise face */}
      <g className="hero-facade">
        <rect
          className="hero-draw"
          x="548"
          y="28"
          width="72"
          height="300"
          stroke="currentColor"
          strokeWidth="1.25"
          opacity="0.55"
        />
        {[70, 112, 154, 196, 238, 280].map((y) => (
          <path
            key={y}
            className="hero-draw"
            d={`M548 ${y}h72`}
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.35"
          />
        ))}
        <path
          className="hero-draw"
          d="M584 28v300"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.3"
        />
        <rect
          className="hero-paint-stripe"
          x="552"
          y="108"
          width="10"
          height="40"
          rx="1"
          fill="#E8ECF3"
          opacity="0.22"
        />
      </g>

      {/* Ground unit — joint stays fixed */}
      <rect
        className="hero-draw"
        x="40"
        y="248"
        width="118"
        height="68"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        className="hero-draw"
        d="M58 270h82M58 286h58M58 302h40"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <circle
        className="hero-draw"
        cx={GROUND_JOINT.x}
        cy={GROUND_JOINT.y}
        r="11"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle
        cx={GROUND_JOINT.x}
        cy={GROUND_JOINT.y}
        r="3"
        fill="#F2A73B"
      />

      {/* Tethers: drone end tracks flight, ground joint is pinned */}
      <path
        ref={hoseRef}
        d={tetherPath(
          ATTACH_LOCAL.x,
          ATTACH_LOCAL.y,
          GROUND_JOINT.x,
          GROUND_JOINT.y,
          0,
        )}
        stroke="#7C89A3"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        ref={powerRef}
        d={tetherPath(
          ATTACH_LOCAL.x,
          ATTACH_LOCAL.y,
          GROUND_JOINT.x + 5,
          GROUND_JOINT.y,
          5,
        )}
        stroke="#F2A73B"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="6 5"
      />

      {/* Air unit — floats as one attached assembly (drawn above tethers) */}
      <g className="hero-air-float" ref={floatRef}>
        {props.map(([cx, cy], i) => (
          <path
            key={`arm-${i}`}
            className="hero-draw"
            d={`M${center.x} ${center.y} L${cx} ${cy}`}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        ))}

        <path
          className="hero-draw"
          d="M262 100 L310 100 L324 118 L310 136 L262 136 L248 118 Z"
          stroke="currentColor"
          strokeWidth="1.75"
          fill="#0A0F1A"
        />
        <rect
          className="hero-draw"
          x="268"
          y="108"
          width="36"
          height="20"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.25"
          fill="#0A0F1A"
        />

        {props.map(([cx, cy], i) => (
          <g key={`prop-${i}`}>
            <circle cx={cx} cy={cy} r="17" fill="#0A0F1A" />
            <circle
              className="hero-draw"
              cx={cx}
              cy={cy}
              r="16"
              stroke="#D6293E"
              strokeWidth="1.5"
              fill="#0A0F1A"
            />
            <circle
              cx={cx}
              cy={cy}
              r="17"
              stroke="#D6293E"
              strokeWidth="0.75"
              opacity="0.25"
            />
            <g
              className={`hero-prop-spin ${i % 2 === 0 ? "" : "hero-prop-spin-ccw"}`}
              style={{ transformOrigin: `${cx}px ${cy}px` }}
            >
              <line
                x1={cx - 13}
                y1={cy}
                x2={cx + 13}
                y2={cy}
                stroke="#D6293E"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1={cx}
                y1={cy - 13}
                x2={cx}
                y2={cy + 13}
                stroke="#D6293E"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1={cx - 9}
                y1={cy - 9}
                x2={cx + 9}
                y2={cy + 9}
                stroke="#D6293E"
                strokeWidth="1.25"
                strokeLinecap="round"
                opacity="0.65"
              />
              <line
                x1={cx + 9}
                y1={cy - 9}
                x2={cx - 9}
                y2={cy + 9}
                stroke="#D6293E"
                strokeWidth="1.25"
                strokeLinecap="round"
                opacity="0.65"
              />
              <circle cx={cx} cy={cy} r="3" fill="#D6293E" />
            </g>
          </g>
        ))}

        {/* Landing gear */}
        <path
          className="hero-draw"
          d="M268 136 L250 198"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          className="hero-draw"
          d="M304 136 L322 198"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          className="hero-draw"
          d="M258 136 L242 192"
          stroke="currentColor"
          strokeWidth="1.25"
          opacity="0.8"
        />
        <path
          className="hero-draw"
          d="M314 136 L330 192"
          stroke="currentColor"
          strokeWidth="1.25"
          opacity="0.8"
        />
        <rect
          className="hero-draw"
          x="236"
          y="196"
          width="28"
          height="6"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <rect
          className="hero-draw"
          x="310"
          y="196"
          width="28"
          height="6"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.25"
        />

        {/* Short stub under hub — meets the dynamic tether */}
        <path
          d="M286 136 L286 148"
          stroke="#7C89A3"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M291 136 L291 148"
          stroke="#F2A73B"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeDasharray="6 5"
        />

        {/* Short single nozzle — paint emits from tip */}
        <g className="hero-spray-rig">
          <path
            className="hero-draw"
            d="M324 128 H400"
            stroke="#4FD8C4"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="400" cy="128" r="2.5" fill="#4FD8C4" />

          <g className="hero-paint-spray">
            {[0, 1, 2, 3, 4, 5, 6].map((n) => (
              <circle
                key={n}
                className="hero-paint-drop"
                cx={400}
                cy={128}
                r={n % 2 === 0 ? 2 : 1.3}
                fill="#E8ECF3"
                style={
                  {
                    animationDelay: `${n * 0.1}s`,
                    animationDuration: `${0.7 + (n % 3) * 0.08}s`,
                    "--paint-x": `${90 + (n % 4) * 12}px`,
                    "--paint-y": `${((n % 5) - 2) * 4}px`,
                  } as CSSProperties
                }
              />
            ))}
          </g>

          <path
            className="hero-paint-cone"
            d="M400 128 L548 116"
            stroke="#E8ECF3"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
          <path
            className="hero-paint-cone"
            d="M400 128 L548 128"
            stroke="#E8ECF3"
            strokeWidth="1.35"
            strokeLinecap="round"
            style={{ animationDelay: "0.15s" }}
          />
          <path
            className="hero-paint-cone"
            d="M400 128 L548 140"
            stroke="#E8ECF3"
            strokeWidth="1.1"
            strokeLinecap="round"
            style={{ animationDelay: "0.3s" }}
          />
        </g>
      </g>
    </svg>
  );
}
