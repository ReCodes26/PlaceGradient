import { CopyText } from "@/components/ui/copy-text";

export default function Home() {
  return (
    <div className="w-full bg-background">
      <div className="py-20 w-full grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1200px] px-10 mx-auto">
        <div className="flex flex-col gap-4 my-auto">
          <h1 className="text-5xl font-bold">
            Simple{" "}
            <span className="bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 bg-clip-text text-transparent">
              Gradient
            </span>{" "}
            Placeholder Image API
          </h1>
          <h2 className="text-xl font-light tracking-wide">
            Lorem ipsum dolar sit amet.
          </h2>
        </div>
        <img
          src="/api?color=DodgerBlue"
          alt="Placeholder Gradient"
          className="w-full h-100 rounded-xl shadow-black/20 shadow-xl"
        />
      </div>
      <div className="w-full bg-slate-100 ">
        <div className="py-20 w-full flex flex-col gap-6 justify-center items-center max-w-[1200px] px-10 mx-auto">
          <h2 className="text-center text-3xl font-bold">
            Easily Generate Placeholder Gradient SVG's
          </h2>
          <p className="text-lg font-light tracking-wide text-center">
            Use the URL to get a random gradient SVG with a default size of
            400x400.
          </p>
          <div className="w-full md:max-w-xl">
            <CopyText value="http://localhost:3000/api" />
          </div>
          <p className="text-lg font-light tracking-wide text-center">
            To get a specified size, just add width and height to the URL.
          </p>
          <div className="w-full md:max-w-xl flex flex-col">
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
    </div>
  );
}
