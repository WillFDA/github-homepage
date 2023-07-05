import Image from "next/image";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

export default function Home() {
  return (
    <div>
      <div className="relative z-50">
        <div className="absolute w-screen">
          <Navbar />
        </div>
      </div>
      <div>
        <div className="overflow-hidden">
          <div className="relative">
            <Image
              className="absolute top-0 transition ease-in duration-200 max-xl:right-[-1050px] xl:right-[-970px] image"
              width={4377}
              height={1}
              src="/hero-bg.webp"
              alt=""
            />
          </div>
          <div className="Hero-section px-3">
            <Hero />
          </div>
        </div>
      </div>
    </div>
  );
}
