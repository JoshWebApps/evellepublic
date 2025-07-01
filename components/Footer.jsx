"use client";
import Link from "next/link";
import React from "react";
import footer from "@/public/images/footer.webp";
import HoverLink from "./Text/HoverLink";
import { useTransitionRouter } from "next-view-transitions";
import fadeInOut from "@/libs/transitionAni";

export default function Footer() {
  const router = useTransitionRouter();

  return (
    <div
      id="footer"
      className="h-fit w-screen overflow-hidden bg-primary text-black pt-20 border-gray-300 border-t-1"
    >
      <div className="h-fit w-screen px-4 md:px-8 mb-[8vw] flex justify-between gap-10">
        <div className="flex gap-5 md:gap-20">
          <div className="h-[15vw] w-[15vw] bg-black">
            <img
              src={footer.src}
              alt="Footer Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col -space-y-[0.9vw] text-[6vw] md:text-[4vw] font-bold">
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
            >
              <HoverLink text={"Work"} />
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
            >
              <HoverLink text={"House"} />
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
            >
              <HoverLink text={"Runway"} />
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
            >
              <HoverLink text={"Careers"} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:gap-4 md:pr-[20vw]">
          <h3 className="text-2xl md:text-[3vw] font-bold">Contact</h3>
          <a
            href="https://maps.google.com/?q=Évelle Studio, 14 Rue du Vertbois, 75003 Paris, France"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <p>Évelle Studio</p>
            <p>14 Rue du Vertbois</p>
            <p>75003 Paris, France</p>
          </a>
          <a href="mailto:info@evellehouse.com" className="hover:underline">
            info@evellehouse.com
          </a>
          <a href="tel:+33 18 824 7309" className="hover:underline">
            +33 1 88 24 73 09
          </a>
        </div>
      </div>
      <div
        style={{ lineHeight: 0.8 }}
        className="text-[26.5vw] text- font-bold mt-[2vw]   "
      >
        <h1>ÉVELLE</h1>
      </div>
      <div className="w-full h-fit font-bold flex justify-between px-4 md:px-8 text-[3vw] md:text-[1vw]">
        <p>© 2025 ÉVELLE</p>

        <div className="space-x-1 pb-1 ">
          <HoverLink href="/terms" text="Terms," />
          <HoverLink href="/privacy" text="Privacy" />
        </div>
      </div>
    </div>
  );
}
