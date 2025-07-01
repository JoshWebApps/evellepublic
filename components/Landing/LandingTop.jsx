"use client";
import React, { useEffect } from "react";
import background1 from "@/public/images/landing/background1.webp";
import background2 from "@/public/images/landing/background2.webp";
import background3 from "@/public/images/landing/background3.webp";
import fadeInOut from "@/libs/transitionAni";
import Link from "next/link";
import AnimatedCopy from "../Text/AnimatedCopy";
import gsap from "gsap";
import HoverLink from "../Text/HoverLink";
import { useTransitionRouter } from "next-view-transitions";

export default function LandingTop() {
  const [activeChoice, setActiveChoice] = React.useState(null);
  const aniDelay = 3;

  const router = useTransitionRouter();

  const images = [background1.src, background2.src, background3.src];

  useEffect(() => {
    if (typeof window === "undefined") return;

    const choices = document.querySelectorAll("#choice");
    const navas = document.querySelectorAll(".nav-link");
    const contact = document.getElementById("navContact");
    const container = document.getElementById("topContainer");

    gsap.to("#landingBackgroundImage", {
      y: "-20%",
      opacity: 0.3,
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.set(choices, {
      opacity: 1,
      y: "100%",
    });

    gsap.set(navas, {
      opacity: 1,
      y: "100%",
    });

    gsap.set(contact, {
      y: "100%",
    });

    gsap.to("#landingBackgroundImage", {
      scale: 1,
      filter: "blur(0px)",
      duration: 2,
      ease: "power4.inOut",
      delay: 2.2,
    });

    gsap.to(choices, {
      y: "0%",
      duration: 0.7,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
        from: "start",
      },
      delay: aniDelay + 0.2,
    });

    gsap.to(navas, {
      y: "0%",
      duration: 1,
      ease: "power4.out",
      stagger: {
        amount: 0.1,
        from: "start",
      },
      delay: aniDelay + 0.3,
    });

    gsap.to(contact, {
      y: "0%",
      duration: 1,
      ease: "power4.out",
      delay: aniDelay + 0.5,
    });

    setTimeout(() => {
      setActiveChoice(0);
    }, [aniDelay * 1000]);
  }, []);

  return (
    <div
      id="topContainer"
      className="w-screen h-[100svh] relative overflow-hidden bg-black    flex flex-col justify-between "
    >
      <div className="w-full h-full fixed top-0 left-0  ">
        <img
          id="landingBackgroundImage"
          src={images[activeChoice] || images[0]}
          className="object-cover w-full h-full scale-125 blur-[2px]"
          alt="Landing Image"
        />
      </div>
      <div className="absolute top-5 h-fit overflow-hidden right-[1.5vw] md:flex items-center text-[2vh] gap-[10vw] hidden">
        <div className="space-x-[0.4vh] flex h-fit overflow-hidden z-20">
          <Link
            onClick={() => {
              const currentPath = window.location.pathname;
              const targetUrl = new URL("/#work", window.location.origin);

              if (currentPath === "/") {
                return;
              } else {
                router.push("/#work", {
                  onTransitionReady: fadeInOut,
                });
              }
            }}
            href="/#work"
            className="nav-link"
          >
            <HoverLink className=" " text="Work," />
          </Link>
          <Link
            onClick={() => {
              const currentPath = window.location.pathname;
              const targetUrl = new URL("/#house", window.location.origin);
              if (currentPath === "/") {
                return;
              } else {
                router.push("/#house", {
                  onTransitionReady: fadeInOut,
                });
              }
            }}
            href="/#house"
            className="nav-link"
          >
            <HoverLink text={"House,"} />
          </Link>

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
            className="nav-link"
          >
            <HoverLink text={"Runway,"} />
          </Link>

          <Link
            onClick={() => {
              const currentPath = window.location.pathname;
              const targetUrl = new URL("/#career", window.location.origin);
              if (currentPath === "/") {
                return;
              } else {
                router.push("/#career", {
                  onTransitionReady: fadeInOut,
                });
              }
            }}
            href="/#career"
            className="nav-link"
          >
            <HoverLink text={"Careers"} />
          </Link>
        </div>
        <a
          id="navContact"
          href="/#footer"
          className="border-2 px-[1vh] pt-[0.5vh] pb-[0.3vh] z-20 rounded-full cursor-pointer "
        >
          <HoverLink className=" -mb-1" text="Contact" />
        </a>
      </div>
      <div
        style={{ lineHeight: 1.1 }}
        className="w-full px-[1.5vw] text-[5.5vh] font-bold z-10 pt-25"
      >
        <div className="w-full ">
          <AnimatedCopy delay={aniDelay}>Clothing</AnimatedCopy>
        </div>
        <div className="w-full">
          {" "}
          <AnimatedCopy delay={aniDelay + 0.05}>as</AnimatedCopy>
        </div>
        <div className="w-full flex text-[2vh] items-center justify-between ">
          {" "}
          <div className="flex items-center justify-between w-[36vh]">
            <AnimatedCopy delay={aniDelay + 0.1} className="text-[5.5vh]">
              Statement,
            </AnimatedCopy>
            <div className="h-fit overflow-hidden">
              <div
                id="choice"
                onClick={() => setActiveChoice(0)}
                className={`  border-2 px-[1.5vh] cursor-pointer  pt-[0.5vh] pb-[0.2vh]  rounded-full ${
                  activeChoice === 0
                    ? " bg-primary text-gray-400"
                    : "bg-transparent text-primary"
                } border-primary   `}
              >
                <h1 className=" ">01</h1>
              </div>
            </div>
          </div>
          {activeChoice === 0 && (
            <div className="flex gap-[15vw]">
              <AnimatedCopy
                delay={0.2}
                className="hidden md:block whitespace-nowrap "
              >
                Vichada Campaign 24’
              </AnimatedCopy>
              <AnimatedCopy delay={0.4} className="whitespace-nowrap">
                Freedom Walk
              </AnimatedCopy>
            </div>
          )}
        </div>
        <div className="w-full flex text-[2vh] items-center justify-between ">
          {" "}
          <div className="flex items-center justify-between w-[36vh] ">
            <AnimatedCopy delay={aniDelay + 0.15} className="text-[5.5vh]">
              Form,
            </AnimatedCopy>
            <div className="h-fit overflow-hidden">
              <div
                id="choice"
                onClick={() => setActiveChoice(1)}
                className={`  border-2 px-[1.5vh] border-primary cursor-pointer  pt-[0.5vh] pb-[0.2vh] h-fit overflow-hidden rounded-full ${
                  activeChoice === 1
                    ? " bg-primary text-gray-500"
                    : "bg-transparent text-primary"
                }`}
              >
                02
              </div>
            </div>
          </div>
          {activeChoice === 1 && (
            <div className="flex gap-[15vw] ">
              <AnimatedCopy
                delay={0.2}
                className="hidden md:block whitespace-nowrap"
              >
                Saint Sélure 20’
              </AnimatedCopy>
              <AnimatedCopy delay={0.4} className="whitespace-nowrap">
                Peet Col
              </AnimatedCopy>
            </div>
          )}
        </div>
        <div className="w-full">
          {" "}
          <AnimatedCopy delay={aniDelay + 0.2}>and</AnimatedCopy>
        </div>
        <div className="w-full flex text-[2vh] items-center justify-between ">
          {" "}
          <div className="flex items-center justify-between  w-[36vh]">
            <AnimatedCopy delay={aniDelay + 0.25} className="text-[5.5vh]">
              Force.
            </AnimatedCopy>
            <div className="h-fit overflow-hidden">
              <div
                id="choice"
                onClick={() => setActiveChoice(2)}
                className={` border-2 px-[1.5vh] border-primary cursor-pointer  pt-[0.5vh] h-fit overflow-hidden pb-[0.2vh] rounded-full ${
                  activeChoice === 2
                    ? " bg-primary text-black"
                    : "bg-transparent text-primary"
                }`}
              >
                03
              </div>
            </div>
          </div>
          {activeChoice === 2 && (
            <div className="flex gap-[15vw] ">
              <AnimatedCopy
                delay={0.2}
                className="hidden md:block whitespace-nowrap"
              >
                Louis Savior 22’
              </AnimatedCopy>
              <AnimatedCopy delay={0.4} className="whitespace-nowrap">
                New Fashion
              </AnimatedCopy>
            </div>
          )}
        </div>
      </div>
      <div className="text-[26.5vw] text- font-bold mt-[2vw] z-10 -mb-[4.5vw]  ">
        <h1>ÉVELLE</h1>
      </div>
    </div>
  );
}
