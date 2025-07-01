"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import Nav from "@/components/Nav";
import runway from "@/libs/runway";

export default function Page() {
  const containerRef = useRef(null);

  useEffect(() => {
    document.body.style.overscrollBehavior = "none";
    document.documentElement.style.overscrollBehavior = "none";

    gsap.registerPlugin(Observer);

    const container = containerRef.current;
    if (!container) return;

    const lengthMedia = container
      .querySelector(".content")
      .querySelectorAll(".media").length;
    const randomValues = [];
    for (let i = 0; i < lengthMedia; i++) {
      randomValues.push([
        (Math.random() - 0.5) * 90,
        (Math.random() - 0.5) * 90,
      ]);
    }
    container.querySelectorAll(".content").forEach((content) => {
      content.querySelectorAll(".media").forEach((el, index) => {
        gsap.set(el, {
          xPercent: randomValues[index][0],
          yPercent: randomValues[index][1],
        });
      });
    });

    let halfX = 0;
    let halfY = 0;
    let xTo, yTo;
    let incrX = 0;
    let incrY = 0;
    let observer;

    const tl = gsap.timeline();
    const images = container.querySelectorAll(".media");

    gsap.set(images, {
      filter: "blur(10px)",
    });

    gsap.to(images, {
      opacity: 1,
      filter: "blur(0px)",
      duration: 2,
      stagger: {
        amount: 0.5,
        from: "start",
      },
      ease: "power4.inOut",
    });

    function initializeScrolling() {
      const currentTransform = gsap.getProperty(container, "transform");
      const matrix = new DOMMatrix(currentTransform);

      halfX = container.clientWidth / 2;
      halfY = container.clientHeight / 2;

      const wrapX = gsap.utils.wrap(-halfX, 0);
      const wrapY = gsap.utils.wrap(-halfY, 0);

      const currentX = matrix.e;
      const currentY = matrix.f;

      const wrappedX = wrapX(currentX);
      const wrappedY = wrapY(currentY);

      incrX = wrappedX;
      incrY = wrappedY;

      gsap.set(container, {
        x: wrappedX,
        y: wrappedY,
      });

      xTo = gsap.quickTo(container, "x", {
        duration: 1.5,
        ease: "power4",
        modifiers: {
          x: gsap.utils.unitize(wrapX),
        },
      });

      yTo = gsap.quickTo(container, "y", {
        duration: 1.5,
        ease: "power4",
        modifiers: {
          y: gsap.utils.unitize(wrapY),
        },
      });
    }

    function handleResize() {
      clearTimeout(handleResize.timeout);
      handleResize.timeout = setTimeout(() => {
        initializeScrolling();
      }, 16); // ~60fps
    }

    initializeScrolling();

    window.addEventListener("resize", handleResize);

    observer = Observer.create({
      target: window,
      type: "wheel,touch,pointer",
      onChangeX: (self) => {
        if (self.event.type === "wheel") incrX -= self.deltaX;
        else incrX += self.deltaX * 2;
        xTo(incrX);
      },
      onChangeY: (self) => {
        if (self.event.type === "wheel") incrY -= self.deltaY;
        else incrY += self.deltaY * 2;
        yTo(incrY);
      },
    });

    handleResize.cleanup = () => {
      clearTimeout(handleResize.timeout);
      window.removeEventListener("resize", handleResize);
    };

    tl.to("#mainDiv", {
      opacity: 1,
      duration: 0.01,
    });

    return () => {
      if (typeof handleResize?.cleanup === "function") {
        handleResize.cleanup();
      }

      if (observer) {
        observer.kill();
      }

      gsap.killTweensOf(container);
      gsap.killTweensOf(images);
      tl.kill();
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen  overflow-hidden overscroll-none">
      <Nav />
      <div
        id="mainDiv"
        className="h-screen w-full overflow-hidden bg-white   opacity-0 cursor-pointer"
      >
        <div
          ref={containerRef}
          className="grid grid-cols-2 w-max will-change-transform   "
        >
          {[...Array(4)].map((_, idx) => (
            <div
              key={idx}
              className="grid grid-cols-5 gap-[40vw] p-[10vw] w-max content select-none pointer-events-none max-lg:gap-[60vw] max-lg:p-[15vw]"
              aria-hidden={idx > 0}
            >
              {runway.map((num) => (
                <div
                  key={num + Math.random()}
                  className="w-[20vw] max-lg:w-[40vw] aspect-square media opacity-0  user-select-none text-black"
                >
                  <div className="w-fit h-full object-contain relative">
                    <img
                      src={num.image}
                      alt=""
                      className="w-full h-full object-contain block"
                    />
                    <h1 className="pt-3 font-bold text-[3vw] md:text-[1.5vw] absolute -bottom-[7vw] md:-bottom-[3vw]">
                      {num.title}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
