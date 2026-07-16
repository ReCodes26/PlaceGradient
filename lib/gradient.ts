import { HSL } from "./colorConversion";
import { ColorTheory } from "./colorTheoryGenerator";
import { NameToHSL, toCSS } from "./colorConversion";
import {
  generateAnalogous,
  generateComplementary,
  generateMonochromatic,
} from "./colorTheoryGenerator";
import { Colors, getRandomColor } from "./colors";
import { createGenerator } from "./seedRandom";
import { generateRandomNumericString } from "./randomNumberString";

interface GradientStop {
  offset: string; // e.g., "0%" or "1"
  color: string; // e.g., "#ff0000" or "red"
}

interface GradientOptions {
  id: string;
  width: string;
  height: string;
  x1?: string;
  y1?: string;
  x2?: string;
  y2?: string;
  stops: GradientStop[];
}

function generateLinearGradientSvg(options: GradientOptions): string {
  const {
    id,
    x1 = "0%",
    y1 = "0%",
    x2 = "100%",
    y2 = "0%",
    stops,
    width,
    height,
  } = options;

  // 1. Generate the individual color stops
  const stopElements = stops
    .map((stop) => {
      return `    <stop offset="${stop.offset}" stop-color="${stop.color}" />`;
    })
    .join("\n");

  // 2. Wrap stops inside the linearGradient defs and return the full SVG string
  return `<svg xmlns="http://w3.org" viewBox="0 0 100 100" width="${width}" height="${height}">
  <defs>
    <linearGradient id="${id}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}">
  ${stopElements}
    </linearGradient>
  </defs>
  <rect width="100" height="100" fill="url(#${id})" />
</svg>`;
}

export function GenerateGradient(
  width: string,
  height: string,
  userColorTheory?: ColorTheory,
  mainColor?: string,
  userSeed?: string,
) {
  // Fill in any defaults
  let hslMainColor: HSL | undefined;
  let seed: string;
  let theory: ColorTheory;

  if (!userSeed) {
    seed = generateRandomNumericString(7); // Generate a random seed
  } else {
    seed = userSeed; // Use the user seed
  }

  const rng = createGenerator(seed); // Setup RNG

  if (!userColorTheory) {
    theory = rng.pickEnum(ColorTheory); // Select random enum based on seed
  } else {
    theory = userColorTheory; // Use the given color theory
  }

  if (!mainColor) {
    hslMainColor = getRandomColor(rng.next()); // Select random color
  } else {
    // Convert the user given color
    hslMainColor = NameToHSL(mainColor);
  }

  if (hslMainColor === undefined)
    // Could not find color string
    return undefined;

  // Next, find alternate colors according to the color theory
  let colorArray: HSL[] = [];

  switch (theory) {
    case "comp":
      colorArray = generateComplementary(hslMainColor);
      break;
    case "analog":
      colorArray = generateAnalogous(hslMainColor);
      break;
    case "mono":
      colorArray = generateMonochromatic(hslMainColor);
      break;
  }

  // Generate gradients with these colors

  // Determine random angles
  const angleDegrees = rng.next() * 360;
  const angleRadians = (angleDegrees * Math.PI) / 180;

  // 2. Calculate direction vectors from the center (50%, 50%)
  const cos = Math.cos(angleRadians);
  const sin = Math.sin(angleRadians);

  // 3. Project the line completely across the 0-100% bounding box
  const x1 = Math.round(50 - 50 * cos).toString() + "%";
  const y1 = Math.round(50 - 50 * sin).toString() + "%";
  const x2 = Math.round(50 + 50 * cos).toString() + "%";
  const y2 = Math.round(50 + 50 * sin).toString() + "%";


  // Determine gradient stops
  let gradientStops: GradientStop[];

  if (colorArray.length === 2) {
    gradientStops = [
      { offset: "0%", color: toCSS(colorArray[0]) },
      { offset: "100%", color: toCSS(colorArray[1]) },
    ];
  } else {
    gradientStops = [
      { offset: "0%", color: toCSS(colorArray[0]) },
      { offset: "50%", color: toCSS(colorArray[1]) },
      { offset: "100%", color: toCSS(colorArray[2]) },
    ];
  }

  const gradientOptions: GradientOptions = {
    id: "place-gradient",
    width: width,
    height: height,
    x1: x1,
    x2: x2,
    y1: y1,
    y2: y2,
    stops: gradientStops,
  };

  const gradient = generateLinearGradientSvg(gradientOptions); // Generate the gradient

  return gradient;
}


function generateRandomGradientAnlge() {
  // 1. Pick a truly random angle between 0 and 360 degrees
  const angleDegrees = Math.random() * 360;
  const angleRadians = (angleDegrees * Math.PI) / 180;

  // 2. Calculate direction vectors from the center (50%, 50%)
  const cos = Math.cos(angleRadians);
  const sin = Math.sin(angleRadians);

  // 3. Project the line completely across the 0-100% bounding box
  const x1 = Math.round(50 - 50 * cos);
  const y1 = Math.round(50 - 50 * sin);
  const x2 = Math.round(50 + 50 * cos);
  const y2 = Math.round(50 + 50 * sin);

  return { x1: `${x1}%`, y1: `${y1}%`, x2: `${x2}%`, y2: `${y2}%` };
}