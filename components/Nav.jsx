"use client";
import React, { useLayoutEffect } from "react";
import MenuButton from "./MenuButton";
import Link from "next/link";
import fadeInOut from "@/libs/transitionAni";
import { useTransitionRouter } from "next-view-transitions";

export default function Nav() {
  const [hasScrolled, setHasScrolled] = React.useState(false);

  const router = useTransitionRouter();

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY > window.innerHeight / 2 ||
        window.innerWidth < 768 ||
        window.location.pathname !== "/"
      ) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      <Link
        onClick={() => {
          const currentPath = window.location.pathname;
          const targetUrl = new URL("/", window.location.origin);
          if (currentPath === "/") {
            return;
          } else {
            router.push("/", {
              onTransitionReady: fadeInOut,
            });
          }
        }}
        href="/"
        className={` ${
          hasScrolled ? "mix-blend-difference text-gray-300" : "text-primary"
        } fixed top-5 left-[1.5vw] transiiton duration-500 z-[1000000]  font-bold text-3xl`}
      >
        ÉVELLE
      </Link>

      <MenuButton hasScrolled={hasScrolled} />
    </>
  );
}
