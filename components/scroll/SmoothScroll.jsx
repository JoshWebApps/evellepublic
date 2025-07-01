"use client";

import ReactLenis from "lenis/react";
import React from "react";

const Lenis = ReactLenis;

function SmoothScroll({ children }) {
  return <Lenis root>{children}</Lenis>;
}

export default SmoothScroll;
