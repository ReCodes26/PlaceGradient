// app/api/[size]
import { randomInt } from 'crypto';
import { NextRequest } from 'next/server';

type RouteContext = {
  params: Promise<{ size?: string[] }>;
};


export async function GET(request: NextRequest, context: RouteContext) {
  // Await the dynamic parameters (size)
  let { size } = await context.params;

  // Get the optional parameters (color, seed, theory)
  const searchParams = request.nextUrl.searchParams;
  const color = searchParams.get('color');
  const seed = searchParams.get('seed');
  const theory = searchParams.get('theory');


  if (!size || size.length === 0) {
    size = ["400","400"];
  }

   // 2. Destructure the array values
  const [widthStr, heightStr] = size;
  
  const width = parseInt(widthStr, 10);
  const height = heightStr ? parseInt(heightStr, 10) : width;

  // Generate SVG here

  const svg = {
   width: width,
   height: height,
   color: color ?? "pink",
   seed:  seed ? parseInt(seed, 10): randomInt(1000),
    theory: theory ?? "Complementary"

  };

  // Return the data as a clean JSON response
  return Response.json(svg);
}
