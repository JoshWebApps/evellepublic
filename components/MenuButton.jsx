"use client";
import React, { useLayoutEffect, useRef } from "react";
import HoverLink from "./Text/HoverLink";
import gsap from "gsap";
import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";
import fadeInOut from "@/libs/transitionAni";

export default function MenuButton({ hasScrolled }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = useRef(null);

  const router = useTransitionRouter();

  useLayoutEffect(() => {
    const menuContainer = containerRef.current;

    gsap.set(menuContainer, { height: "0vh" });
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    const menuContainer = containerRef.current;
    const links = menuContainer.querySelectorAll(".menuLink");
    const container = document.getElementById("menuContentContainer");

    gsap.set(links, {
      opacity: 1,
      pointerEvents: "auto",
    });

    gsap.set(container, {
      pointerEvents: "auto",
    });

    gsap.to(menuContainer, {
      height: "100%",
      duration: 1,
      ease: "power4.inOut",
    });
  };

  const handleClose = () => {
    setIsOpen(false);
    gsap.to(containerRef.current, {
      height: "0vh",
      duration: 1,
      ease: "power4.inOut",
    });
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className={`fixed right-[1.5vw]   top-5 text-3xl duration-500 ease-in-out mix-blend-difference font-bold z-50 ${
          hasScrolled
            ? "opacity-100 cursor-pointer"
            : "opacity-0 pointer-events-none"
        }`}
      >
        Menu
      </button>

      <div
        id="menuContainer"
        style={{ lineHeight: 1 }}
        ref={containerRef}
        className="fixed top-0 left-0 w-screen h-0 overflow-hidden z-[10000] bg-black text-primary font-bold"
      >
        <div
          id="menuContentContainer"
          className="h-screen w-screen pointer-events-none flex flex-col items-start justify-end gap-[17vh] p-4 md:p-8"
        >
          <button
            id="closeButton"
            onClick={handleClose}
            className="absolute top-5 right-5 text-[4vw] md:text-[2vw] h-fit overflow-hidden cursor-pointer z-[500]"
          >
            Close
          </button>

          <div className="flex flex-col text-[10vw] md:text-[4vw] -space-y-[0.9vw] ">
            {[
              { title: "Home", href: "/", pathname: "/" },
              { title: "Work", href: "/#work", pathname: "/" },
              { title: "House", href: "/#house", pathname: "/" },
              { title: "Runway", href: "/runway", pathname: "/runway" },
              { title: "Careers", href: "/#career", pathname: "/" },
            ].map((text) => (
              <Link
                onClick={() => {
                  const currentPath = window.location.pathname;
                  const targetUrl = new URL(text.href, window.location.origin);

                  if (currentPath === text.pathname) {
                    handleClose();
                  } else {
                    router.push(text.href, {
                      onTransitionReady: fadeInOut,
                    });
                  }
                }}
                key={text.title}
                href={text.href}
              >
                <HoverLink text={text.title} />
              </Link>
            ))}
          </div>

          <div className="font-bold flex flex-col text-[4vw] md:text-[1.5vw] gap-[0.5vw]">
            {["Instagram"].map((text) => (
              <div key={text} className="menuLink h-fit overflow-hidden">
                <HoverLink href="/terms" text={text} />
              </div>
            ))}
          </div>

          <div className="font-bold flex flex-col text-[4vw] md:text-[1.5vw]">
            {[
              { title: "Terms", href: "/terms" },
              { title: "Privacy", href: "/privacy" },
            ].map((text) => (
              <div key={text.title} className="menuLink h-fit overflow-hidden">
                <HoverLink href={text.href} text={text.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
