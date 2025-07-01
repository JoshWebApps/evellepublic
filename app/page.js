import React from "react";
import LandingTop from "@/components/Landing/LandingTop";
import Nav from "@/components/Nav";
import LandingLoader from "@/components/Landing/LandingLoader";
import Work from "@/components/Landing/Work";
import House from "@/components/Landing/House";
import LandingRunway from "@/components/Landing/LandingRunway";
import Careers from "@/components/Landing/Careers";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <div style={{ lineHeight: 1 }} className="">
      <Nav />
      <LandingLoader />
      <LandingTop />
      <div className="relative">
        <div
          className="fixed -bottom-[5vh] h-[15vh] w-full z-[40] blur-xl pointer-events-none "
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.5))",
          }}
        />
        <Work />
        <House />
        <LandingRunway />
        <Careers />
        <Footer />
      </div>
    </div>
  );
}
