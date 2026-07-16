import { HSL } from "./colorConversion";
import { createGenerator } from "./seedRandom";

export const Colors: Record<string, HSL> = {
  red: { h: 0, s: 100, l: 50 },
  orange: { h: 39, s: 100, l: 50 },
  yellow: { h: 60, s: 100, l: 50 },
  chartreuse: { h: 90, s: 100, l: 50 },
  green: { h: 120, s: 100, l: 25 },
  lime: { h: 120, s: 100, l: 50 },
  springGreen: { h: 150, s: 100, l: 50 },
  cyan: { h: 180, s: 100, l: 50 },
  azure: { h: 210, s: 100, l: 50 },
  blue: { h: 240, s: 100, l: 50 },
  indigo: { h: 275, s: 100, l: 25 },
  purple: { h: 300, s: 100, l: 25 },
  magenta: { h: 300, s: 100, l: 50 },
  pink: { h: 350, s: 100, l: 88 },
  crimson: { h: 348, s: 83, l: 47 },
  salmon: { h: 14, s: 93, l: 70 },
  gold: { h: 43, s: 100, l: 49 },
  olive: { h: 60, s: 100, l: 25 },
  teal: { h: 180, s: 100, l: 25 },
  navy: { h: 240, s: 100, l: 25 }
};

type ColorKey = keyof typeof Colors;
type ColorValue = (typeof Colors)[ColorKey];

export function getRandomColor(nextNum: number): ColorValue {
  const values = Object.values(Colors);
  const randomIndex = Math.floor(nextNum * values.length);
  return values[randomIndex];
}