"use client";
import Image from "next/image";
import React, { useState } from "react";

type Props = {};

const Hero = (props: Props) => {
  const [hover, setHover] = useState<Boolean>(false);
  const [hover2, setHover2] = useState<Boolean>(false);
  return (
    <div className="relative max-w-[1280px] lg:pt-32 md:px-10 pt-16">
      <Image
        className="absolute hero-drone top-28 w-1/4 h-auto right-0 xl:right-0"
        src="/hero-drone.webp"
        alt="Hero Drone"
        width={500}
        height={32}
      />
      <div className="flex">
        <div className="relative">
          <Image
            src="/lines-hero.svg"
            alt="Little Drone"
            width={437}
            height={637}
          />
          <div className="mx-auto my-3">
            <span className="relative z-[11]">
              <svg
                aria-hidden="true"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                version="1.1"
                width="24"
                data-view-component="true"
                className=" text-white"
              >
                <path d="M15.22 4.97a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L21.19 12l-5.97-5.97a.75.75 0 0 1 0-1.06Zm-6.44 0a.75.75 0 0 1 0 1.06L2.81 12l5.97 5.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.5-6.5a.75.75 0 0 1 0-1.06l6.5-6.5a.75.75 0 0 1 1.06 0Z"></path>
              </svg>
              <span
                className="absolute left-0 top-0 w-6 h-full  home-campaign-glowing-icon-glow "
                style={{
                  backgroundColor: "var(--mktg-accent-primary)",
                  filter: "blur(17px)",
                }}
              ></span>
            </span>
          </div>
          <div
            style={{
              background:
                "linear-gradient(#d2a8ff, #a371f7 10%, #196c2e 70%, #2ea043 80%, #56d364)",
              marginLeft: "11px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
