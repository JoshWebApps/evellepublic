"use client";
import gsap from "gsap";
import React, { useRef, useEffect } from "react";

export default function HoverLink({
  text,
  href,
  className = "",
  newWindow = false,
}) {
  const linkRef = useRef(null);

  useEffect(() => {
    const bottom = linkRef.current.querySelector(".bottom");
    gsap.set(bottom, { y: "100%" });
  }, []);

  const handleMouseEnter = () => {
    const top = linkRef.current.querySelector(".top");
    const bottom = linkRef.current.querySelector(".bottom");

    gsap.to(top, {
      y: "-100%",
      duration: 0.4,
      ease: "power4.out",
    });

    gsap.to(bottom, {
      y: "0%",
      duration: 0.4,
      ease: "power4.out",
    });
  };

  const handleMouseLeave = () => {
    const top = linkRef.current.querySelector(".top");
    const bottom = linkRef.current.querySelector(".bottom");

    gsap.to(top, {
      y: "0%",
      duration: 0.4,
      ease: "power4.out",
    });

    gsap.to(bottom, {
      y: "100%",
      duration: 0.4,
      ease: "power4.out",
    });
  };

  return (
    <div
      ref={linkRef}
      onClick={() => {
        if (href) {
          window.open(href, newWindow ? "_blank" : "_self");
        }
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${className} relative inline-block overflow-hidden cursor-pointer`}
    >
      <span className="top inline-block">{text}</span>

      <span className="bottom inline-block absolute inset-0">{text}</span>
    </div>
  );
}
