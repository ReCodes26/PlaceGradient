interface GradientStop {
  offset: string; // e.g., "0%" or "1"
  color: string;  // e.g., "#ff0000" or "red"
}

interface GradientOptions {
  id: string;
  x1?: string;
  y1?: string;
  x2?: string;
  y2?: string;
  stops: GradientStop[];
}

function generateLinearGradientSvg(options: GradientOptions): string {
  const { id, x1 = "0%", y1 = "0%", x2 = "100%", y2 = "0%", stops } = options;

  // 1. Generate the individual color stops
  const stopElements = stops
    .map((stop) => {

      return `    <stop offset="${stop.offset}" stop-color="${stop.color}" />`;
    })
    .join("\n");

  // 2. Wrap stops inside the linearGradient defs and return the full SVG string
  return `<svg xmlns="http://w3.org" viewBox="0 0 100 100" width="100%" height="100%">
  <defs>
    <linearGradient id="${id}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}">
  ${stopElements}
    </linearGradient>
  </defs>
  <rect width="100" height="100" fill="url(#${id})" />
</svg>`;
}


const myStops: GradientStop[] = [
  { offset: "0%", color: "#ff7e5f" },
  { offset: "50%", color: "#feb47b" },
  { offset: "100%", color: "#feb47b" }
];

const svgString = generateLinearGradientSvg({
  id: "sunset-gradient",
  x1: "70%",  // Left-to-right direction
  y1: "30%",
  x2: "20%",
  y2: "0%",
  stops: myStops
});

console.log(svgString);