"use client";
import React from "react";
import AnimatedCopy from "../Text/AnimatedCopy";
import gsap from "gsap";

const services = [
  { number: "01", title: "Editorial Styling" },
  { number: "02", title: "Creative Direction" },
  { number: "03", title: "Collection Production" },
  { number: "04", title: "Concept Styling" },
  { number: "05", title: "Visual Archiving" },
  { number: "06", title: "One-off Pieces" },
];

const handleMouseEnter = (e) => {
  gsap.to(e.currentTarget, {
    opacity: 1,
    duration: 0,
    overwrite: true,
  });
};
const handleMouseLeave = (e) => {
  gsap.to(e.currentTarget, {
    opacity: 0.2,
    duration: 1,
    ease: "power4.out",
  });
};

export default function House() {
  const [activeChoice, setActiveChoice] = React.useState(null);
  return (
    <div id="house" className="w-full bg-primary text-black">
      <div className="w-full flex justify-between items-center px-4 md:px-8 font-bold py-20 ">
        <div className="border-[0.4vw] pt-[0.7vw] pb-[0.2vw] px-[2vw] rounded-full text-[2.5vw] ">
          02
        </div>
        <h1 className="text-[11vw]  w-4/5   md:w-3/5 whitespace-nowrap">
          The House
        </h1>
      </div>
      <div className="flex justify-end px-4 md:px-8 pb-[130px] pt-15">
        <div className=" w-4/5   md:w-3/5 space-y-[8vw] md:space-y-[4vw]">
          <AnimatedCopy className="  text-[5vw] md:text-[3vw] font-bold ">
            EVELLE is a fashion house driven by the pursuit of radical form and
            expressive design. Each collection is a study in contrast structure
            and softness, chaos and control crafted to evoke instinct before
            interpretation.
          </AnimatedCopy>
          <AnimatedCopy className="  text-[5vw] md:text-[3vw] font-bold ">
            Drawing from performance, sculpture, and subculture, EVELLE creates
            garments that are not just worn but inhabited. Our work rejects
            neutrality in favour of silhouettes that speak loudly,
            unapologetically, and with purpose.
          </AnimatedCopy>
        </div>
      </div>
      <div className="px-4 md:px-8 pb-20 md:pb-40 text-[5vw] md:text-[3vw] font-bold ">
        {services.map((service) => (
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`flex justify-between py-[1vw] md:py-[0.5vw] opacity-20  `}
            key={service.number}
            id={`service-${service.number}`}
          >
            <h2>{service.number}</h2>
            <h2>{service.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
