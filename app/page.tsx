import Image from "next/image";

export default function Home() {
  return (
   <div className="w-full">
    <h1 className="text-3xl font-bold text-center">PlaceGradient</h1>
    <img className="w-32 h-32" src="/api?color=BlueViolet" alt="placeholder"  crossOrigin="anonymous" />
    <img className="w-32 h-32" src="/api?color=Pink" alt="placeholder"  crossOrigin="anonymous" />
    <img className="w-32 h-32" src="/api" alt="placeholder"  crossOrigin="anonymous" />
   </div>
  );
}
