// app/api/[size]
import colorString from "color-string";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { ColorTheory } from "@/lib/colorTheoryGenerator";
import { GenerateGradient } from "@/lib/gradient";
import { generateRandomNumericString } from "@/lib/randomNumberString";

type RouteContext = {
  params: Promise<{ size?: string[] }>;
};

const searchParamsSchema = z.object({
  color: z
    .string()
    .optional()
    .refine(
      (val) => {
        if (!val) return true;
        // Check if the lowercase string exists in the CSS named colors database
        return colorString.get.rgb(val.toLowerCase()) !== null;
      },
      {
        message:
          "Must be a valid CSS color name (e.g., 'blue', 'green', 'tomato')",
      },
    ),
  seed: z.string().max(20).optional(),
  theory: z.enum(ColorTheory).optional(),
});

const parameterSchema = z
  .preprocess(
    (val) => (val === undefined ? ["400", "400"] : val),
    z.array(z.string()),
  )
  // Reject anything with more than 2 elements immediately
  .refine((strs) => strs.length >= 1 && strs.length <= 2, {
    message:
      "URL must contain at most 2 parameters (width and optional height)",
  })
  // Convert strings to integers
  .transform((strs) => strs.map((str) => parseInt(str, 10)))
  .refine((nums) => nums.every((num) => !isNaN(num) && Number.isInteger(num)), {
    message: "All parameters must be valid integers",
  })
  // Mirror the value if it is a single number (square)
  .transform((nums): [number, number] => {
    if (nums.length === 1) {
      return [nums[0], nums[0]];
    }
    return [nums[0], nums[1]];
  })
  // Enforce final tuple shape and constraints
  .pipe(
    z.tuple([
      z
        .number()
        .int()
        .min(1, "Width must be at least 1")
        .max(4000, "Width cannot exceed 4000"),
      z
        .number()
        .int()
        .min(1, "Height must be at least 1")
        .max(4000, "Height cannot exceed 4000"),
    ]),
  );

export async function GET(request: NextRequest, context: RouteContext) {
  try {
    // Await the dynamic parameters (size)
    const { size } = await context.params;

    // Extract and convert search parameters to a plain object
    const optionalParams = Object.fromEntries(
      request.nextUrl.searchParams.entries(),
    );

    const sizeParsed = parameterSchema.safeParse(size);
    const searchParams = searchParamsSchema.safeParse(optionalParams);

    // Handle validation errors
    if (!searchParams.success || !sizeParsed.success) {
      return NextResponse.json(
        {
          error: "Invalid query parameters",
        },
        { status: 400 },
      );
    }

    const [width, height] = sizeParsed.data;
    const { color, seed, theory } = searchParams.data;

    if (!seed) {
      const randomSeed = generateRandomNumericString(7); // generate new random seed

      // Construct the new URL containing the seed
      const redirectUrl = new URL(request.url);
      redirectUrl.searchParams.set("seed", randomSeed);

      // Redirect the browser. Tell CDNs NOT to cache this redirect.
      return NextResponse.redirect(redirectUrl, {
        status: 307, // 307 Temporary Redirect.
        headers: {
          "Cache-Control":
            "private, no-cache, no-store, max-age=0, must-revalidate",
        },
      });
    }

    // Generate SVG 
    const svg = GenerateGradient(
      width.toString(),
      height.toString(),
      seed,
      theory,
      color,
    );

    return new NextResponse(svg, {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control":
          "public, max-age=31536000, s-maxage=31536000, immutable",
        "Content-Security-Policy":
          "default-src 'none'; style-src 'unsafe-inline';",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
