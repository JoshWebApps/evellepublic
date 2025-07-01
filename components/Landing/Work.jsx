import React from "react";
import work from "@/public/images/landing/workimage.webp";
import AnimatedCopy from "../Text/AnimatedCopy";

export default function Work() {
  return (
    <div id="work" className="h-fit w-screen bg-primary relative">
      <div className="h-fit w-full text-black">
        <div className="w-full flex justify-between items-center px-4 md:px-8 font-bold py-20 ">
          <div className="border-[0.4vw] pt-[0.7vw] pb-[0.2vw] px-[2vw] rounded-full text-[2.5vw] ">
            01
          </div>
          <h1 className="text-[12vw]  w-4/5  md:w-1/2 lg:w-3/5">Work</h1>
        </div>
        <div className="flex justify-end px-4 md:px-8 pb-[130px] pt-15">
          <div className=" w-4/5  md:w-1/2 lg:w-3/5">
            <AnimatedCopy className=" line  text-[5vw] md:text-[3vw] font-bold  ">
              EVELLE is a fashion house crafting statement pieces at the
              intersection of{" "}
              <span className="underline">
                sculpture, emotion, and rebellion.
              </span>
            </AnimatedCopy>
          </div>
        </div>
      </div>
      <div className="h-fit bg-[#8C8C8C] relative pb-[20vh]">
        <div className="flex justify-end px-4 md:px-8">
          <div className=" w-4/5  md:w-1/2 lg:w-3/5 mb-[40px]">
            <div className="w-fit h-[55vh] -mt-[90px] pb-[40px]">
              <img
                src={work.src}
                alt="Work image"
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <AnimatedCopy className=" text-[5vw] md:text-[3vw] font-bold md:pr-5">
                We work with visionaries, performers, and boundary-pushers to
                design collections that speak in volume visually commanding,
                unapologetically bold, and grounded in intent.{" "}
              </AnimatedCopy>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
