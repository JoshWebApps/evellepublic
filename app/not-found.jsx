"use client";
import React from "react";
import { SplitText } from "gsap/all";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import HoverLink from "@/components/Text/HoverLink";

export default function notFound() {
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

    const splitText = SplitText.create("#titleText", {
      type: "lines, words, chars",
    });

    const link = document.querySelector(".not-found-link");

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6 });

    gsap.set(link, {
      opacity: 1,
      y: "100%",
    });

    gsap.set(splitText.chars, {
      y: "100%",
    });

    gsap.set("#titleText", {
      opacity: 1,
    });

    gsap.to(link, {
      y: "0%",
      duration: 1,
      ease: "power4.inOut",
      delay: 0.3,
    });

    tl.to(splitText.chars, {
      y: "0%",
      duration: 1,
      ease: "power4.inOut",
      stagger: {
        amount: 0.3,
        from: "start",
      },
    });
    tl.to(
      splitText.chars,
      {
        y: "-100%",
        duration: 1,
        ease: "power4.inOut",
        stagger: {
          amount: 0.3,
          from: "start",
        },
      },
      "-=0.3"
    );

    tl.to(splitText.chars, {
      opacity: 0,
      filter: "blur(20px)",
      duration: 0.8,
      ease: "power4.inOut",
    });
  }, []);
  return (
    <div className="bg-black w-screen h-screen overflow-hidden font-helvetica">
      <div
        id="loadingContainer"
        className="fixed top-0 left-0 z-[100000] w-screen h-screen bg-black flex items-start text-primary"
      >
        <div className="w-full h-[100svh] flex flex-col items-center justify-end">
          <div className=" overflow-hidden h-fit    ">
            <HoverLink
              href="/"
              text="ÉVELLE"
              className="text-[4vw] font-bold not-found-link opacity-0 py-2"
            />
          </div>
          <div className="text-[40.5vw] font-bold mt-[2vw] relative text-primary  -mb-[9vw] overflow-hidden  h-[49.6vw] select-none ">
            <h1
              style={{ lineHeight: 1.35 }}
              className="opacity-0"
              id="titleText"
            >
              404
            </h1>
            <h1 style={{ lineHeight: 1.35 }} id="titleText">
              404
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
