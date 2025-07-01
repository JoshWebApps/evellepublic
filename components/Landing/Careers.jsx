import React from "react";

export default function Careers() {
  const openings = [
    {
      title: "Studio Assistant",
      type: "Full Time",
      date: "September 25'",
      level: "Entry-level",
    },
    {
      title: "Archive & Col. Registrar",
      type: "Part Time",
      date: "December 25’",
      level: "Senior Level",
    },
    {
      title: "Production Coordinator",
      type: "Part Time",
      date: "September 25'",
      level: "Industry Exp.",
    },
    {
      title: "Fashion Technician",
      type: "Single Event",
      date: "September 25'",
      level: "Entry-level",
    },
  ];

  return (
    <div id="career" className="text-black bg-primary px-4 md:px-8 ">
      <div className="w-full flex justify-between items-center font-bold py-20 ">
        <div className="border-[0.4vw] pt-[0.7vw] pb-[0.2vw] px-[2vw] rounded-full text-[2.5vw] ">
          04
        </div>
        <h1 className="text-[12vw]  w-4/5  md:w-1/2 lg:w-3/5">Careers</h1>
      </div>

      <div className="text-black/50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-[15vh] justify-self-center md:justify-self-auto  text-[4vw]  md:text-[2vw] mt-20 pb-[20vh]   ">
        {openings.map((opening, index) => (
          <div
            key={opening.title}
            className="text-black/50 group hover:text-black cursor-pointer hover:underline"
          >
            <h1 className="text-black font-bold ">{opening.title}</h1>
            <p>{opening.type}</p>
            <p>{opening.date}</p>
            <p>{opening.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
