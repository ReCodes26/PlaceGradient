import { HSL } from "./colorConversion"

export enum ColorTheory {
  Analogous = "analog",
  Complementary = "comp",
  Monochromatic = "mono",
}

const clampHue = (h: number): number => {
  return (h % 360 + 360) % 360;
};

export const generateComplementary = (base: HSL): HSL[] => {
  const complementaryHue = clampHue(base.h + 180);
  
  return [
    { ...base }, // Original color
    { h: complementaryHue, s: base.s, l: base.l } // Opposite color
  ];
};

export const generateAnalogous = (base: HSL, angleOffset: number = 30): HSL[] => {
  return [
    { h: clampHue(base.h - angleOffset), s: base.s, l: base.l }, // Left neighbor
    { ...base },                                                // Original color
    { h: clampHue(base.h + angleOffset), s: base.s, l: base.l }  // Right neighbor
  ];
};

export const generateMonochromatic = (base: HSL, totalColors: number = 3): HSL[] => {
  const palette: HSL[] = [];
  
  // Calculate distinct increments for lightness across the spectrum
  const step = 80 / (totalColors - 1); 

  for (let i = 0; i < totalColors; i++) {
    // Distribute lightness smoothly between 10% (dark) and 90% (light)
    const targetLightness = Math.round(10 + (i * step));
    
    // Slightly lower saturation on extremely dark/light values for realistic shading
    const targetSaturation = targetLightness < 20 || targetLightness > 80 
      ? Math.max(10, base.s - 20) 
      : base.s;

    palette.push({
      h: base.h,
      s: targetSaturation,
      l: targetLightness,
    });
  }

  return palette;
};