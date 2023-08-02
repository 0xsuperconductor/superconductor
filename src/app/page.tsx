"use client";

import { useCallback, useState } from "react";
import Particles, { IParticlesProps } from "react-particles";
import { loadSlim } from "tsparticles-slim";
import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function Home() {
  const options: IParticlesProps["options"] = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#a1da45",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.49716301422833176,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3.945738208161363,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#357c71",
        opacity: 1,
        width: 4,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };

  const [loaded, setLoaded] = useState(false);

  return (
    <main className="relative w-screen h-screen">
      <Image
        src="/bg.jpeg"
        fill
        alt=""
        onLoad={(e) => {
          console.log(e);
        }}
      />
      <Particles options={options} className="w-full h-full bg-transparent" init={loadSlim} />
      <div className="absolute p-4 -translate-x-1/2 top-1/3 left-1/2 [&>div]:text-center">
        <Typewriter
          options={{
            wrapperClassName: "text-5xl font-bold",
            cursorClassName: "text-5xl",
            loop: false,
          }}
          onInit={(typewriter) => {
            typewriter.typeString("SUPER CONDUCTORS").start();
          }}
        />
      </div>

      <div className="absolute grid items-center grid-flow-col gap-8 text-white -translate-x-1/2 w-fit bottom-8 left-1/2">
        <a href="https://t.me/superconductorcommunity" target="_blank" rel="noopener noreferrer">
          <Image src={"/tg.svg"} width={24} height={24} alt="telegram" />
        </a>
        <a href="https://twitter.com/0xasmc" target="_blank" rel="noopener noreferrer">
          <Image src={"/twitter.svg"} width={24} height={24} alt="twitter" />
        </a>
        <a
          href="https://app.uniswap.org/#/tokens/ethereum/0x0ec0ab80b384d8b51ddde0e3f663cb94be5637b7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={"/uniswap.svg"} width={24} height={24} alt="uniswap" />
        </a>
      </div>
    </main>
  );
}
