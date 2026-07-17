import { CopyText } from "@/components/ui/copy-text";
import {
  Bean,
  Circle,
  Dot,
  LucideCircleQuestionMark,
  PaintRollerIcon,
  Plus,
  Rainbow,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const colorTheoryParams = [
  {
    theory: "Complementary",
    parameter: "comp",
    usage: "http://localhost:3000/api?theory=comp",
    description: "Opposite colors; high contrast.",
  },
  {
    theory: "Monochromatic",
    parameter: "mono",
    usage: "http://localhost:3000/api?theory=mono",
    description: "One color; varying shades",
  },
  {
    theory: "Analogous",
    parameter: "analog",
    usage: "http://localhost:3000/api?theory=analog",
    description: "Neighboring colors; smooth harmony.",
  },
];

export default function Home() {
  return (
    <div className="w-full bg-background">
      {/* Hero */}
      <div className="py-20 w-full grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1200px] px-10 mx-auto">
        <div className="flex flex-col gap-4 my-auto">
          <span className="flex flex-row font-bold  border-2 rounded-full py-1 px-3 w-fit border-blue-400 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 bg-clip-text text-transparent">
            PlaceGradient
          </span>
          <h1 className="text-5xl font-bold">
            Simple{" "}
            <span className="bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 bg-clip-text text-transparent">
              Gradient
            </span>{" "}
            Placeholder Image API
          </h1>
          <h2 className="text-xl font-light tracking-wide">
            Generate beautiful SVG gradient placeholder images instantly with a
            simple, free API. Perfect for web development, UI mockups,
            prototypes, and responsive applications.
          </h2>
        </div>
        <img
          src="/api?color=DodgerBlue"
          alt="Placeholder Gradient"
          className="w-full h-90 rounded-xl shadow-black/20 shadow-xl transition-transform duration-300 hover:scale-102"
        />
      </div>

      {/* Quick Start */}
      <div className="w-full bg-zinc-200 ">
        <div className="py-20 w-full flex flex-col gap-6 justify-center items-center max-w-[1200px] px-10 mx-auto">
          <h2 className="text-center text-3xl font-bold">
            Easily Generate Placeholder SVG Gradient
          </h2>
          <p className="font-light text-center">
            Use the URL to get a random SVG gradient with a default size of
            400x400.
          </p>
          <div className="w-full max-w-[70%]">
            <CopyText value="http://localhost:3000/api" />
          </div>
          <p className="font-light text-center">
            To get a specified size, just add width and height to the URL.
          </p>
          <div className="w-full max-w-[70%] flex flex-col">
            <CopyText value="http://localhost:3000/api/600" />
            <div className="relative flex py-3 items-center w-full">
              <div className="flex-grow border-t border-slate-500" />
              <span className="flex-shrink mx-4 text-muted-foreground text-sm uppercase tracking-wider">
                Or
              </span>
              <div className="flex-grow border-t border-slate-500" />
            </div>
            <CopyText value="http://localhost:3000/api/600/400" />
          </div>
        </div>
      </div>

      {/* Colors */}
      <div className="py-20 w-full grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1200px] px-10 mx-auto">
        <img
          src="/api?color=DarkMagenta"
          alt="Placeholder Gradient"
          className="w-full h-90 rounded-xl shadow-black/20 shadow-xl transition-transform duration-300 hover:scale-102"
        />
        <div className="flex flex-col gap-4 my-auto">
          <PaintRollerIcon size={30} />
          <h3 className="text-3xl font-bold">Custom CSS Colors</h3>
          <p className=" font-light">
            PlaceGradient supports over 140 CSS color names, such as blue,
            crimson, cyan, and more. To use a color for a gradient, type{" "}
            <span className="font-bold">?color= </span>
            and type a color.{" "}
            <a
              className="text-blue-500 underline"
              href="https://www.w3schools.com/cssref/css_colors.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here
            </a>{" "}
            for a full list of available CSS colors.
            <br />
            <br />
            NOTE: PlaceGradient supports only color names at the moment. Hex
            colors will not work.
          </p>
          <div className="w-full md:max-w-xl">
            <CopyText value="http://localhost:3000/api?color=DarkMagenta" />
          </div>
        </div>
      </div>

      {/* Seeds */}
      <div className="py-20 w-full grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1200px] px-10 mx-auto">
        <div className="flex flex-col gap-4 my-auto">
          <Bean size={30} />
          <h3 className="text-3xl font-bold">Using Seeds</h3>
          <p className=" font-light">
            You can use seeds to get a predictable gradient every time. To use
            seeds for a gradient, type <span className="font-bold">?seed=</span>{" "}
            and input either numbers or letters. Your seed cannot be more than
            20 characters long.
          </p>
          <div className="w-full md:max-w-xl">
            <CopyText value="http://localhost:3000/api?seed=hello" />
          </div>
        </div>
        <img
          src="/api?seed=hello"
          alt="Placeholder Gradient"
          className="w-full h-90 rounded-xl shadow-black/20 shadow-xl transition-transform duration-300 hover:scale-102"
        />
      </div>

      {/* Color Theory */}
      <div className="py-20 w-full grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1200px] px-10 mx-auto">
        <img
          src="/api?theory=comp"
          alt="Placeholder Gradient"
          className="w-full h-90 rounded-xl shadow-black/20 shadow-xl transition-transform duration-300 hover:scale-102"
        />

        <div className="flex flex-col gap-4 my-auto">
          <Rainbow size={30} />
          <h3 className="text-3xl font-bold">Gradient Color Theory</h3>
          <p className=" font-light">
            PlaceGradient uses color theory to create stunning gradients. You
            can customize your color theory using the{" "}
            <span className="font-bold">?theory= </span>parameter. Choose from
            complementary, monochromatic, or analogous options for your
            gradient. The acceptable parameter values are listed below.
          </p>
          <div className="w-full md:max-w-xl">
            <CopyText value="http://localhost:3000/api?theory=comp" />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Theory</TableHead>

                <TableHead>Parameter</TableHead>
                <TableHead>Usage</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {colorTheoryParams.map((theories, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    {theories.theory}
                  </TableCell>
                  <TableCell className="font-bold">
                    {theories.parameter}
                  </TableCell>
                  <TableCell>{theories.usage}</TableCell>
                  <TableCell>{theories.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Combining */}
      <div className="py-20 w-full grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1200px] px-10 mx-auto">
        <div className="flex flex-col gap-4 my-auto">
          <Plus size={30} />
          <h3 className="text-3xl font-bold">Combining Parameters</h3>
          <p className=" font-light">
            You can mix and match parameters to create unique, personalized
            gradients. For each additional parameter, use{" "}
            <span className="font-bold">&</span> followed by the parameter name
            and value.
          </p>
          <div className="w-full md:max-w-xl">
            <CopyText value="http://localhost:3000/api/400/200?theory=analog&color=MediumSlateBlue&seed=happy" />
          </div>
        </div>

        <img
          src="/api/400/200?theory=analog&color=MediumSlateBlue&seed=happy"
          alt="Placeholder Gradient"
          className="w-full h-90 rounded-xl shadow-black/20 shadow-xl transition-transform duration-300 hover:scale-102"
        />
      </div>

      {/* Usage */}
      <div className="py-20 w-full grid grid-cols-1 max-w-[1200px] px-10 mx-auto">
        <div className="flex flex-col gap-4 my-auto">
          <LucideCircleQuestionMark size={30} />
          <h3 className="text-3xl font-bold">Where to use</h3>
          <p className=" font-light">
            PlaceGradient can be used whenever you need a placeholder image for
            your website or a simple linear gradient image. Each generated image
            is an SVG, keeping your site running fast. You can use PlaceGradient
            inside an image or as a background.
            <br />
            <br />
            <span className="font-bold">Note: </span>When using a gradient with
            NextJS's Image component, you must add{" "}
            <span className="font-bold ">unoptimized </span> to your component,
            or else your gradient will not work.
          </p>
        </div>
      </div>

      {/* Open Source */}
      <div className="py-20 w-full grid grid-cols-1 max-w-[1200px] px-10 mx-auto">
        <div className="flex flex-col gap-4 my-auto">
          <img
            width={30}
            height={30}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
          />
          <h3 className="text-3xl font-bold">Free & Open Source</h3>
          <p className=" font-light">
            PlaceGradient is fully open-source and hosted on GitHub. If you have
            an issue, bugs, suggestions, or a question, feel free to contribute
            or open an issue on GitHub.
            <br />
            <br />
            If PlaceGradient helped you, show support by ⭐ starring the project
            on GitHub and sharing the tools with others. Thank you for using
            PlaceGradient!
          </p>

          <a
            href="https://github.com/ReCodes26/PlaceGradient"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "default", size: "default" }),
              "w-fit",
            )}
          >
            View on GitHub
          </a>
        </div>
      </div>
      <footer className="w-full border-t border-zinc-300 bg-zinc-200 backdrop-blur">
        <div className="min-h-20 px-10 mx-auto items-center max-w-[1200px] flex-row flex justify-between">
          <p className="text-zinc-500">
            🩶 Created By{" "}
            <a
              rel="noopener"
              target="_blank"
              href="https://recodes26.dev/"
              className="underline text-zinc-700"
            >
              Ariana
            </a>{" "}
            (ReCodes26)
          </p>
          <a
            className="transition-transform duration-300 hover:scale-110"
            href="https://github.com/ReCodes26/PlaceGradient"
            target="_blank"
            rel="noopener"
          >
            <img
              width={20}
              height={20}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
