// seedRandom.ts

// Converts any string into a 128-bit hash integer array
function cyrb128(str: string): number[] {
  let h1 = 1779033703, h2 = 3024734481, h3 = 3362453659, h4 = 2149449117;
  for (let i = 0, k; i < str.length; i++) {
    k = str.charCodeAt(i);
    h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
    h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
    h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
    h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
  }
  h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
  h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
  h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
  h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);
  return [(h1^h2^h3^h4)>>>0, (h2^h1)>>>0, (h3^h1)>>>0, (h4^h1)>>>0];
}

// Simple 32-bit generator
function mulberry32(a: number): () => number {
  return function() {
    let t = a += 0x6D2B79F5;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }
}

// Main initialization function
export function createGenerator(userSeed: string) {
  const seedHex = cyrb128(userSeed);
  const nextFloat = mulberry32(seedHex[0]); // Use first 32-bit block

  return {
    // Float between 0 and 1
    next: () => nextFloat(),
    // Integer inside range
    rangeInt: (min: number, max: number) => Math.floor(nextFloat() * (max - min + 1)) + min,
    // Pick from array
    pick: <T>(arr: T[]): T => arr[Math.floor(nextFloat() * arr.length)],
     pickEnum: <E extends Record<string, any>>(enumObj: E): E[keyof E] => {
      const keys = Object.keys(enumObj).filter(key => isNaN(Number(key)));
      const randomKey = keys[Math.floor(nextFloat() * keys.length)];
      return enumObj[randomKey];
    }
  };

}
