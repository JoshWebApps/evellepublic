"use client";
import React, { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedCopy from "../Text/AnimatedCopy";

import { useTransitionRouter } from "next-view-transitions";
import fadeInOut from "@/libs/transitionAni";
import HoverLink from "../Text/HoverLink";
import runway from "@/libs/runway";

export default function LandingRunway() {
  const runwayContainerRef = useRef(null);
  const imagesContainerRef = useRef(null);
  const runwayStickyContainer = useRef(null);
  const [scrollPercent, setScrollPercent] = React.useState(0);

  const router = useTransitionRouter();

  const runwayData = runway;

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    let totalWidth, vw, xEnd, containerHeight;

    let lastInnerH = window.innerHeight;

    const container = runwayContainerRef.current;
    const imagesContainer = imagesContainerRef.current;
    const stickyContainer = runwayStickyContainer.current;

    function calcSizes() {
      totalWidth = imagesContainer.scrollWidth;
      vw = window.innerWidth;
      xEnd = vw - totalWidth;
      containerHeight = container.offsetHeight;
    }

    calcSizes();

    gsap.to(imagesContainer, {
      x: () => xEnd,
      scrollTrigger: {
        trigger: stickyContainer,
        start: () => `top+=${containerHeight} bottom`,
        end: "bottom bottom",
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const pct =
            Math.round(
              (self.progress.toFixed(2) * 100 + Number.EPSILON) * 100
            ) / 100;
          setScrollPercent(pct);
        },
      },
    });

    const onResize = () => {
      const newH = window.innerHeight;
      if (Math.abs(newH - lastInnerH) < 200) return;
      lastInnerH = newH;
      calcSizes();
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", onResize);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const paddedNumber = (num) => num.toString().padStart(2, "0");

  return (
    <div
      id="runway"
      ref={runwayStickyContainer}
      className="w-screen h-[500vh] relative flex flex-col justify-end"
    >
      <div
        ref={runwayContainerRef}
        className="w-screen h-fit bg-[#8C8C8C] overflow-hidden sticky bottom-0"
      >
        <h1 className="w-screen font-bold text-[25.8vw] pt-20 pb-10">Runway</h1>

        <div className="w-full flex justify-between items-start px-4 md:px-8 font-bold py-20">
          <div className="border-[0.4vw] pt-[0.7vw] pb-[0.2vw] px-[2vw] rounded-full text-[2.5vw]">
            03
          </div>
          <div className="w-4/5 md:w-1/2 lg:w-3/5 space-y-[8vw] md:space-y-[4vw]">
            <AnimatedCopy className=" text-[5vw] md:text-[3vw] font-bold">
              EVELLE approaches the runway as a stage for distortion, ritual,
              and reveal. Our shows are less presentations than interventions
              designed environments where garments move through sound, light,
              and bodies with intent.
            </AnimatedCopy>
            <AnimatedCopy className=" text-[5vw] md:text-[3vw] font-bold">
              Whether staged in raw industrial spaces or intimate performance
              settings, each runway moment is built to unsettle, seduce, and
              confront. We treat every show as an extension of the collection’s
              psyche: a live transmission of EVELLE’s mood, meaning, and form.
            </AnimatedCopy>
          </div>
        </div>

        <div
          ref={imagesContainerRef}
          className="h-fit w-fit flex px-4 md:px-8 gap-[2vh] z-10 relative"
        >
          {runwayData.map((item, index) => (
            <div className="flex flex-col items-start gap-[1.5vh]" key={index}>
              <div className="w-[30vh] h-[40vh] ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="font-bold text-[2.5vh]">{item.title}</h2>
            </div>
          ))}
        </div>

        <div className="px-4 md:px-8 w-full flex justify-between my-15 text-[2vh] font-bold">
          <p>Scroll down to explore ({paddedNumber(scrollPercent)}%)</p>
          <Link
            onClick={() => {
              const currentPath = window.location.pathname;
              const targetUrl = new URL("/runway", window.location.origin);
              if (currentPath === "/runway") {
                return;
              } else {
                router.push("/runway", {
                  onTransitionReady: fadeInOut,
                });
              }
            }}
            href="/runway"
          >
            <HoverLink text={"Explore all"} />
          </Link>
        </div>

        {/* SVG FILTER */}
        {/* <svg
          width="100%"
          height="100%"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 w-full h-full z-0"
        >
          <filter id="noise" x="0" y="0" width="1" height="1">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.3"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect
            width="100%"
            height="100%"
            filter="url(#noise)"
            opacity="0.15"
          />
        </svg> */}
        {/* SVG FILTER END */}
      </div>
    </div>
  );
}
