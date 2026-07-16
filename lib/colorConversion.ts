import colorString from "color-string";
import convert from "color-convert";

export interface HSL {
  h: number; // 0 to 360
  s: number; // 0 to 100
  l: number; // 0 to 100
}

export const toCSS = (color: HSL): string => {
  return `hsl(${color.h} ${color.s}% ${color.l}%)`;
};


export function NameToHSL(colorName: string) {
  const rgbaColor = colorString.get.rgb(colorName);

  if (rgbaColor === null) {
    console.log(`Could not find color ${colorName}.`);
    return undefined;
  }

  // Convert to HSL
  const hslArray = convert.rgb.hsl(
    rgbaColor.slice(0, 3) as [number, number, number],
  );

  const hsl: HSL = { h: hslArray[0], s: hslArray[1], l: hslArray[2] };

  return hsl;
}
