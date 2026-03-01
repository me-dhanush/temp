type Player = {
  name: string;
  rating: number;
};

type Match = {
  id: string;
  players: [Player | null, Player | null];
  scores: [number | null, number | null];
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function pairing(players: Player[]) {
  if (players.length % 2 !== 0) {
    throw new Error("Players must be even for knockout.");
  }

  // Step 1: Sort by rating (high to low)
  const sorted = [...players].sort((a, b) => b.rating - a.rating);

  const bandSize = Math.ceil(sorted.length / 4);

  const band1 = sorted.slice(0, bandSize);
  const band2 = sorted.slice(bandSize, bandSize * 2);
  const band3 = sorted.slice(bandSize * 2, bandSize * 3);
  const band4 = sorted.slice(bandSize * 3);

  const pairs: [Player, Player][] = [];

  // Shuffle inside bands so pairing isn't predictable
  const b1 = shuffle(band1);
  const b2 = shuffle(band2);
  const b3 = shuffle(band3);
  const b4 = shuffle(band4);

  // Pair Band1 vs Band3
  for (let i = 0; i < Math.min(b1.length, b3.length); i++) {
    pairs.push([b1[i], b3[i]]);
  }

  // Pair Band2 vs Band4
  for (let i = 0; i < Math.min(b2.length, b4.length); i++) {
    pairs.push([b2[i], b4[i]]);
  }

  return shuffle(pairs);
}

export function generateRound1Matches(players: Player[]): Match[] {
  const pairs = pairing(players);

  return pairs.map(([p1, p2], index) => ({
    id: `r0-m${index}`,
    players: [p1, p2],
    scores: [null, null],
  }));
}