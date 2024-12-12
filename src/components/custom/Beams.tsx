"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { Rubik_Microbe, Black_Han_Sans, Albert_Sans } from "next/font/google";
import Link from "next/link";

const rubikMicrobe = Rubik_Microbe({ subsets: ["latin"], weight: "400" });
const blackHansSans = Black_Han_Sans({ subsets: ["latin"], weight: "400" });
const albertSans = Albert_Sans({ subsets: ["latin"], weight: "400" });

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[90vh] w-full rounded-mdd bg-neutral-950 relative flex flex-col justify-center antialiased">
      <div className="ma-w-2xl mx-auto p- borde">
        <h1
          className={`relative z-1 text-lg md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600
             font-sans font-bod ${blackHansSans.className} w-ful`}
        >
          WELCOME TO
        </h1>
        <Link href="/" className="text-white text-[30px]">Home</Link>

        <h1
          className={`relative z-1 text-lg md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-red-300 to-red-700
            ${rubikMicrobe.className}`}
        >
          SCRAPYARD LOUNGE - NEWCASTLE
        </h1>
      </div>
      <p
        className={`${albertSans.className} text-neutral-500 mx-auto text-center text-sm md:text-[35px] w-fll`}
      >
        Your ultimate destination for food, fun, drinks and more!
      </p>
      <BackgroundBeams />
    </div>
  );
}
