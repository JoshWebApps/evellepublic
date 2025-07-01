"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const AnimatedCopy = ({
  children,
  className = "",
  delay = 0,
  duration = 1,
  ease = "power4.out",
  stagger = 0.05,
  lineSelector = "",
  animateOnScroll = true,
  direction = "bottom",
  tag = "p",
}) => {
  const copyRef = useRef(null);
  const [copyId, setCopyId] = useState("");
  const [isInitialized, setIsInitialized] = useState(false);
  const splitInstance = useRef(null);

  useEffect(() => {
    setCopyId(`copy-${Math.floor(Math.random() * 10000)}`);
  }, []);

  useEffect(() => {
    if (!copyId || !copyRef.current) return;

    const split = new SplitText(copyRef.current, {
      type: "lines",
      linesClass: `line-${copyId}`,
    });
    splitInstance.current = split;

    const selector = lineSelector || `.${split.linesClass}`;
    const lines = lineSelector
      ? document.querySelectorAll(selector)
      : split.lines;

    lines.forEach((line) => {
      const content = line.innerHTML;
      line.style.overflow = "hidden";
      line.innerHTML = `<span class=\"line-inner-${copyId}\">${content}</span>`;
    });

    const initialY = direction === "top" ? "-100%" : "100%";
    gsap.set(`.line-inner-${copyId}`, {
      y: initialY,
      display: "block",
    });

    gsap.set(copyRef.current, {
      opacity: 1,
      duration: 0,
    });

    setIsInitialized(true);

    return () => {
      split.revert();
    };
  }, [copyId, lineSelector, direction]);

  useGSAP(
    () => {
      if (!isInitialized || !copyRef.current) return;

      const tl = gsap.timeline({
        defaults: { ease, duration },
        ...(animateOnScroll
          ? {
              scrollTrigger: {
                trigger: copyRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          : {}),
      });

      tl.to(`.line-inner-${copyId}`, {
        y: "0%",
        stagger,
        delay,
      });

      return () => {
        if (animateOnScroll) {
          ScrollTrigger.getAll()
            .filter((st) => st.vars.trigger === copyRef.current)
            .forEach((st) => st.kill());
        }
      };
    },
    {
      scope: copyRef,
      dependencies: [
        isInitialized,
        animateOnScroll,
        delay,
        duration,
        ease,
        stagger,
        direction,
      ],
    }
  );

  const Tag = tag;
  return (
    <Tag
      ref={copyRef}
      className={`animated-copy ${className} opacity-0`}
      data-copy-id={copyId}
    >
      {children}
    </Tag>
  );
};

export default AnimatedCopy;
