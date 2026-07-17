import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full bg-background">
      <div className="w-full h-300 max-w-[1200px] px-10 mx-auto">
        {/* Hero */}
        <div className="py-20 w-full grid grid-cols-1 md:grid-cols-2 gap-6 ">
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
      </div>
    </div>
  );
}
