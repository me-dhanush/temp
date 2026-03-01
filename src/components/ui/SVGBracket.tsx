"use client";
import React, { useState } from "react";

type MatchType = {
  id: string;
  p1: string;
  p2: string;
};

type RoundType = {
  id: string;
  matches: MatchType[];
};

interface Props {
  rounds: RoundType[];
}

export default function SVGBracket({ rounds }: Props) {
  const [hoveredMatch, setHoveredMatch] = useState<string | null>(null);

  const nodeWidth = 200;
  const nodeHeight = 70;
  const horizontalGap = 260;
  const paddingX = 60;
  const paddingY = 60;

  const firstRoundCount = rounds[0]?.matches.length ?? 0;

  const totalHeight = firstRoundCount * (nodeHeight + 60) + paddingY * 2;

  const totalWidth = rounds.length * horizontalGap + paddingX * 2;

  return (
    <div className="w-full overflow-x-auto overflow-y-hidden">
      <svg width={totalWidth} height={totalHeight}>
        {/* Glow Filter */}
        <defs>
          <filter id="glow">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="4"
              floodColor="#6366f1"
              floodOpacity="0.9"
            />
          </filter>
        </defs>

        {/* MATCH BOXES */}
        {rounds.map((round, roundIndex) => {
          const matchCount = round.matches.length;
          const freeSpace = totalHeight - matchCount * nodeHeight;
          const space = freeSpace / (matchCount + 1);

          return round.matches.map((match, matchIndex) => {
            const x = roundIndex * horizontalGap + paddingX;
            const y = space * (matchIndex + 1) + nodeHeight * matchIndex;

            const isHovered = hoveredMatch === match.id;

            return (
              <g
                key={match.id}
                onMouseEnter={() => setHoveredMatch(match.id)}
                onMouseLeave={() => setHoveredMatch(null)}
                style={{ cursor: "pointer" }}
              >
                <rect
                  x={x}
                  y={y}
                  width={nodeWidth}
                  height={nodeHeight}
                  rx="14"
                  fill="white"
                  stroke={isHovered ? "#6366f1" : "#e5e7eb"}
                  strokeWidth={isHovered ? 2.5 : 1.5}
                  filter={isHovered ? "url(#glow)" : undefined}
                  style={{ transition: "all 0.2s ease" }}
                />

                <text x={x + 14} y={y + 28} fontSize="14" fill="#374151">
                  {match.p1}
                </text>

                <text x={x + 14} y={y + 52} fontSize="14" fill="#374151">
                  {match.p2}
                </text>
              </g>
            );
          });
        })}

        {/* CONNECTORS */}
        {rounds.map((round, roundIndex) => {
          if (roundIndex === rounds.length - 1) return null;

          const currentCount = round.matches.length;
          const nextRound = rounds[roundIndex + 1];
          const nextCount = nextRound.matches.length;

          const currentFree = totalHeight - currentCount * nodeHeight;
          const currentSpace = currentFree / (currentCount + 1);

          const nextFree = totalHeight - nextCount * nodeHeight;
          const nextSpace = nextFree / (nextCount + 1);

          return round.matches.map((match, matchIndex) => {
            const nextMatchIndex = Math.floor(matchIndex / 2);

            const x1 = roundIndex * horizontalGap + paddingX + nodeWidth;

            const y1 =
              currentSpace * (matchIndex + 1) +
              nodeHeight * matchIndex +
              nodeHeight / 2;

            const x2 = (roundIndex + 1) * horizontalGap + paddingX;

            const y2 =
              nextSpace * (nextMatchIndex + 1) +
              nodeHeight * nextMatchIndex +
              nodeHeight / 2;

            const midX = x1 + 30;

            const isHovered = hoveredMatch === match.id;

            return (
              <path
                key={`${match.id}-connector`}
                d={`
                  M ${x1} ${y1}
                  H ${midX}
                  V ${y2}
                  H ${x2}
                `}
                fill="none"
                stroke={isHovered ? "#6366f1" : "#3f3f46"}
                strokeWidth={isHovered ? 3 : 2}
                filter={isHovered ? "url(#glow)" : undefined}
                style={{ transition: "all 0.2s ease" }}
              />
            );
          });
        })}
      </svg>
    </div>
  );
}
