"use client";
import { SplitText } from "gsap/all";
import React, { useLayoutEffect } from "react";
import gsap from "gsap";

export default function LandingLoader() {
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

    const splitText = SplitText.create("#titleText", {
      type: "lines, words, chars",
    });

    const tl = gsap.timeline();

    const loadingTimeline = gsap.timeline();

    gsap.set(splitText.chars, {
      y: "100%",
    });

    gsap.set("#titleText", {
      opacity: 1,
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

    loadingTimeline.set("#loadingProgress", {
      width: "0%",
    });

    loadingTimeline.to("#loadingProgress", {
      width: "68%",
      duration: 1.5,
      ease: "power4.inOut",
    });

    loadingTimeline.to(
      "#loadingProgress",
      {
        width: "100%",
        duration: 1,
        ease: "power4.inOut",
        onComplete: () => {
          window.scrollTo(0, 0);
        },
      },
      "-=0.2"
    );

    loadingTimeline.to("#loadingContainer", {
      opacity: 0,
      duration: 1.2,
      ease: "power4.inOut",
      onComplete: () => {
        document.getElementById("loadingContainer").style.display = "none";
      },
    });
  }, []);

  return (
    <div
      id="loadingContainer"
      className="fixed top-0 left-0 z-[1000000000] w-screen h-screen bg-black flex items-start text-primary  "
    >
      <div className="w-full h-[100svh] flex items-end">
        <div
          id="loadingProgress"
          className="absolute top-0 left-0 h-2 bg-primary"
        />
        <div className="absolute top-8 right-8">
          <div
            className="inline-block h-6 w-6 animate-spin  rounded-full border-3 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          ></div>
        </div>
        <div className="text-[26.5vw] font-bold mt-[2vw] relative  -mb-[9vw] overflow-hidden  h-[35.6vw] ">
          <h1 style={{ lineHeight: 1.35 }} className="opacity-0" id="titleText">
            ÉVELLE
          </h1>
          <h1 style={{ lineHeight: 1.35 }} id="titleText">
            ÉVELLE
          </h1>
        </div>
      </div>
    </div>
  );
}
