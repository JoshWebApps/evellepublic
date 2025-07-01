function fadeInOut() {
  const duration = 1000;

  document.documentElement.getAnimations().forEach((animation) => {
    if (animation.pseudoElement?.includes("view-transition")) {
      animation.cancel();
    }
  });

  const oldPage = document.documentElement.animate(
    [
      { opacity: 1, filter: "blur(0px)" },
      { opacity: 0, filter: "blur(10px)" },
    ],
    {
      duration,
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  const newPage = document.documentElement.animate(
    [
      { opacity: 0, filter: "blur(10px)" },
      { opacity: 1, filter: "blur(0px)" },
    ],
    {
      duration,
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );

  Promise.all([oldPage.finished, newPage.finished]).catch(() => {
    document.documentElement.style.opacity = "1";
  });
}

export default fadeInOut;
