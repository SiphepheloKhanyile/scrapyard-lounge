import Image from "next/image";
import { Protest_Revolution } from "next/font/google";
import Link from "next/link";
// import { BackgroundBeams } from "../ui/background-beams";

const protestRevolution = Protest_Revolution({
  subsets: ["latin"],
  weight: "400",
});

function NavBarComponent() {
  return (
    <div className="flex bg-back bg-neutral-950 antialiased brder">
      <div className="borde flex items-center">
        <Image
          className="borde h-[10vh] w-[10vh] bordexr rounded-full"
          src="/scrapyard_logo.png"
          alt="Scrapyard Lounge Logo"
          width={70}
          height={70}
        />

        <span
          className={`text-[#FC0000] text-[14px] md:text-[25px] pr-2 ${protestRevolution.className}`}
        >
          Scrapyard Lounge Newcatsle
        </span>
      </div>

      <nav className="ml-auto borde mr-2 flex text-gray-500 text-[13px] md:text-[20px] font- sel-end self-center">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className=" relative z-2 text-[#FC0000] underline underline-offset-4">Home</Link>
          </li>
          <li>
            <Link href="/book" >Book</Link>
          </li>
          <li>
            <Link href={"/directions"}>Directions</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      {/* <BackgroundBeams /> */}
    </div>
  );
}

export default NavBarComponent;
