"use client";

import React, { useEffect, useRef, useState } from "react";

export default function TournamentBracket() {
  const containerRef = useRef<HTMLDivElement>(null);

  const qf1 = useRef<HTMLDivElement>(null);
  const qf2 = useRef<HTMLDivElement>(null);
  const qf3 = useRef<HTMLDivElement>(null);
  const qf4 = useRef<HTMLDivElement>(null);

  const sf1 = useRef<HTMLDivElement>(null);
  const sf2 = useRef<HTMLDivElement>(null);

  const finalRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen  flex items-center justify-center p-20 overflow-x-auto">
      <div ref={containerRef} className="relative flex gap-32">
        {/* Quarter Finals */}
        <Round>
          <Match ref={qf1} p1="Magnus Carlsen" p2="Hikaru Nakamura" />
          <Match ref={qf2} p1="Fabiano Caruana" p2="Alireza Firouzja" />
          <Match ref={qf3} p1="Ding Liren" p2="Ian Nepomniachtchi" />
          <Match ref={qf4} p1="Anish Giri" p2="Levon Aronian" />
        </Round>

        {/* Semi Finals */}
        <Round>
          <Match ref={sf1} p1="Magnus Carlsen" p2="Fabiano Caruana" />
          <Match ref={sf2} p1="Ding Liren" p2="Anish Giri" />
        </Round>

        {/* Final */}
        <Round>
          <FinalMatch ref={finalRef} p1="Magnus Carlsen" p2="Anish Giri" />
        </Round>

        {/* CONNECTORS */}
        <Connector
          containerRef={containerRef}
          fromTop={qf1}
          fromBottom={qf2}
          to={sf1}
        />
        <Connector
          containerRef={containerRef}
          fromTop={qf3}
          fromBottom={qf4}
          to={sf2}
        />
        <Connector
          containerRef={containerRef}
          fromTop={sf1}
          fromBottom={sf2}
          to={finalRef}
          highlight
        />
      </div>
    </div>
  );
}

/* ----------------- ROUND ----------------- */

function Round({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col justify-around h-[650px] ${className}`}>
      {children}
    </div>
  );
}

/* ----------------- MATCH ----------------- */

const Match = React.forwardRef<
  HTMLDivElement,
  {
    p1: string;
    p2: string;
    p1Score?: 0 | 1;
    p2Score?: 0 | 1;
  }
>(({ p1, p2, p1Score = 0, p2Score = 0 }, ref) => {
  const p1Winner = p1Score === 1;
  const p2Winner = p2Score === 1;

  return (
    <div
      ref={ref}
      className="w-64 bg-white rounded-3xl border border-gray-200 shadow-md overflow-hidden"
    >
      {/* Player 1 */}
      <div
        className={`flex justify-between items-center px-5 py-4 transition-all ${
          p1Winner ? "bg-emerald-100" : "bg-white"
        }`}
      >
        <span
          className={`text-base ${
            p1Winner ? "text-emerald-700 font-semibold" : "text-gray-700"
          }`}
        >
          {p1}
        </span>

        <div
          className={`w-9 h-9 flex items-center justify-center rounded-xl text-sm font-bold transition-all ${
            p1Winner
              ? "bg-emerald-500 text-white scale-105"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {p1Score}
        </div>
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-gray-100"></div>

      {/* Player 2 */}
      <div
        className={`flex justify-between items-center px-5 py-4 transition-all ${
          p2Winner ? "bg-emerald-100" : "bg-white"
        }`}
      >
        <span
          className={`text-base ${
            p2Winner ? "text-emerald-700 font-semibold" : "text-gray-700"
          }`}
        >
          {p2}
        </span>

        <div
          className={`w-9 h-9 flex items-center justify-center rounded-xl text-sm font-bold transition-all ${
            p2Winner
              ? "bg-emerald-500 text-white scale-105"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {p2Score}
        </div>
      </div>
    </div>
  );
});

Match.displayName = "Match";

/* ----------------- FINAL ----------------- */

const FinalMatch = React.forwardRef<
  HTMLDivElement,
  {
    p1: string;
    p2: string;
    p1Score?: 0 | 1;
    p2Score?: 0 | 1;
  }
>(({ p1, p2, p1Score = 0, p2Score = 0 }, ref) => {
  const p1Winner = p1Score === 1;
  const p2Winner = p2Score === 1;

  return (
    <div
      ref={ref}
      className="w-64 bg-white rounded-3xl border border-gray-200 shadow-md overflow-hidden"
    >
      {/* Player 1 */}
      <div
        className={`flex justify-between items-center px-5 py-4 transition-all ${
          p1Winner ? "bg-emerald-100" : "bg-white"
        }`}
      >
        <span
          className={`text-base ${
            p1Winner ? "text-emerald-700 font-semibold" : "text-gray-700"
          }`}
        >
          {p1}
        </span>

        <div
          className={`w-9 h-9 flex items-center justify-center rounded-xl text-sm font-bold transition-all ${
            p1Winner
              ? "bg-emerald-500 text-white scale-105"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {p1Score}
        </div>
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-gray-100"></div>

      {/* Player 2 */}
      <div
        className={`flex justify-between items-center px-5 py-4 transition-all ${
          p2Winner ? "bg-emerald-100" : "bg-white"
        }`}
      >
        <span
          className={`text-base ${
            p2Winner ? "text-emerald-700 font-semibold" : "text-gray-700"
          }`}
        >
          {p2}
        </span>

        <div
          className={`w-9 h-9 flex items-center justify-center rounded-xl text-sm font-bold transition-all ${
            p2Winner
              ? "bg-emerald-500 text-white scale-105"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {p2Score}
        </div>
      </div>
    </div>
  );
});

FinalMatch.displayName = "FinalMatch";

/* ----------------- PLAYER ----------------- */

function Player({ name, winner }: { name: string; winner?: boolean }) {
  return (
    <div
      className={`flex justify-between items-center ${
        winner ? "text-emerald-400 font-semibold" : "text-zinc-300"
      }`}
    >
      <span>{name}</span>
      {winner && <span className="text-xs">✔</span>}
    </div>
  );
}

/* ----------------- CONNECTOR ----------------- */

function Connector({
  containerRef,
  fromTop,
  fromBottom,
  to,
  highlight,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
  fromTop: React.RefObject<HTMLDivElement | null>;
  fromBottom: React.RefObject<HTMLDivElement | null>;
  to: React.RefObject<HTMLDivElement | null>;
  highlight?: boolean;
}) {
  const [lines, setLines] = useState<
    { x1: number; y1: number; x2: number; y2: number }[]
  >([]);

  useEffect(() => {
    function update() {
      if (
        !containerRef.current ||
        !fromTop.current ||
        !fromBottom.current ||
        !to.current
      )
        return;

      const containerRect = containerRef.current.getBoundingClientRect();

      const top = fromTop.current.getBoundingClientRect();
      const bottom = fromBottom.current.getBoundingClientRect();
      const target = to.current.getBoundingClientRect();

      const startX = top.right - containerRect.left;
      const endX = target.left - containerRect.left;

      const topY = top.top - containerRect.top + top.height / 2;
      const bottomY = bottom.top - containerRect.top + bottom.height / 2;
      const targetY = target.top - containerRect.top + target.height / 2;

      const midX = startX + 40;
      const midY = (topY + bottomY) / 2;

      setLines([
        { x1: startX, y1: topY, x2: midX, y2: topY },
        { x1: startX, y1: bottomY, x2: midX, y2: bottomY },
        { x1: midX, y1: topY, x2: midX, y2: bottomY },
        { x1: midX, y1: midY, x2: endX, y2: targetY },
      ]);
    }

    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update);

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update);
    };
  }, [containerRef, fromTop, fromBottom, to]);

  const stroke = highlight ? "#facc15" : "#3f3f46";

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none">
      {lines.map((line, i) => (
        <line
          key={i}
          {...line}
          stroke={stroke}
          strokeWidth={highlight ? 3 : 2}
        />
      ))}
    </svg>
  );
}