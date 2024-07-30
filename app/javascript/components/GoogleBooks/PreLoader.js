import React, { useEffect } from "react";
import gsap from "gsap";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Ewerton Rosendo</span>
        <span>Da Silva</span>
      </div>
    </div>
  );
};

export default PreLoader;

// Declare a general timeline to use in all the animation functions.
const tl = gsap.timeline();

// Preloader Animation
export const preLoaderAnim = () => {
  tl.to("body", {
    duration: 0.02, // Even shorter duration
    css: { overflowY: "hidden" },
    ease: "power3.inOut",
  })
    .to(".landing", {
      duration: 0.02, // Even shorter duration
      css: { overflowY: "hidden", height: "90vh" },
    })
    .to(".texts-container", {
      duration: 0.1, // Short duration
      opacity: 1,
      ease: "Power3.easeOut",
    })
    .from(".texts-container span", {
      duration: 0.4, // Very short duration
      delay: 0.2, // Short delay
      y: 50, // Reduced y value
      skewY: 5, // Reduced skew
      stagger: 0.1, // Very short stagger
      ease: "Power3.easeOut",
    })
    .to(".texts-container span", {
      duration: 0.3, // Short duration
      y: 50,
      skewY: -10, // Reduced skew
      stagger: 0.1, // Very short stagger
      ease: "Power3.easeOut",
    })
    .to(".landing", {
      duration: 0.02, // Even shorter duration
      css: { overflowY: "hidden", height: "unset" },
    })
    .to("body", {
      duration: 0.02, // Even shorter duration
      css: { overflowY: "scroll" },
      ease: "power3.inOut",
    })
    .from(".landing__top .sub", {
      duration: 0.3, // Short duration
      opacity: 0,
      y: 40, // Reduced y value
      ease: "expo.easeOut",
    })
    .to(
      ".preloader",
      {
        duration: 0.5, // Short duration
        height: "0vh",
        ease: "Power3.easeOut",
        onComplete: mobileLanding(),
      },
      "-=0.5", // Adjusted overlap
    )
    .from(".landing__main .text", {
      duration: 0.6, // Very short duration
      y: 5, // Reduced y value
      opacity: 0,
      stagger: {
        amount: 0.5, // Short amount
      },
      ease: "power3.easeInOut",
    })
    .from(".links .item", {
      duration: 0.2, // Very short duration
      opacity: 0,
      delay: window.innerWidth < 763 ? -0.5 : -0.2, // Short delay
      stagger: {
        amount: 0.2, // Short amount
      },
      ease: "expo.easeOut",
      onComplete: animateMainShape(),
    })
    .from(".main-circle", {
      duration: 0.3, // Short duration
      opacity: 0,
      ease: "power3.easeInOut",
      onComplete: animateShapes(),
    })
    .from(".shapes .shape", {
      duration: 0.3, // Short duration
      opacity: 0,
      delay: -0.2, // Short delay
      ease: "power3.easeInOut",
      stagger: 0.3, // Short stagger
    })
    .to(".preloader", {
      duration: 0.1, // Short duration
      css: { display: "none" },
    });
};

export const openMenu = () => {
  const tl = gsap.timeline();
  tl.to("body", {
    duration: 0.01, // Short duration
    css: { overflowY: "hidden" },
    ease: "power3.out",
  })
    .to(".hamburger-menu", {
      duration: 0.01, // Short duration
      css: { display: "block" },
    })
    .to(".header-item", {
      duration: 0.01, // Short duration
      css: { background: "none" },
    })
    .to(".cls-1", {
      duration: 0.01, // Short duration
      delay: 0.05, // Short delay
      css: { fill: "#ffffff" },
    })
    .to(
      [".nav-secondary", ".nav-primary"],
      {
        duration: 0.1, // Short duration
        height: "100%",
        transformOrigin: "right top",
        stagger: {
          amount: 0.05, // Short amount
        },
        ease: "power3.inOut",
      },
      "-=.2", // Adjusted overlap
    )
    .from(
      ".nav-link",
      {
        duration: 0.01, // Very short duration
        x: -80,
        opacity: 0,
        stagger: {
          amount: 0.01, // Short amount
        },
        ease: "Power3.in",
      },
      "-=.1", // Adjusted overlap
    );

  // Optional: Adjust cursor animations if needed
};

export const closeMenu = () => {
  const tl = gsap.timeline();
  tl.to("body", {
    duration: 0.02, // Short duration
    css: { overflowY: "scroll" },
    ease: "power3.inOut",
  })
    .to([".nav-primary", ".nav-secondary"], {
      duration: 0.4, // Short duration
      height: "0",
      transformOrigin: "right top",
      stagger: {
        amount: 0.05, // Short amount
      },
      ease: "power3.inOut",
    })
    .to(".cls-1", {
      duration: 0.02, // Short duration
      delay: -0.1, // Short delay
      css: { fill: "#08e7f3" },
    })
    .to(".header-item", {
      duration: 0.2, // Short duration
      css: { background: "rgba(11,11,15,.8)" },
    })
    .to(".hamburger-menu", {
      duration: 0.02, // Short duration
      css: { display: "none" },
    });

  // Optional: Adjust cursor animations if needed
};

// Recurrent animations
export const fadeUp = (el, delay = 0) => {
  tl.from(el, {
    y: 150,
    duration: 0.4, // Very short duration
    delay,
    opacity: 0,
    ease: "power3.Out",
  });
};

export const mobileLanding = () => {
  window.innerWidth < 763 &&
    tl.from(".landing__main2", {
      duration: 0.4, // Very short duration
      delay: 0,
      opacity: 0,
      y: 40, // Reduced y value
      ease: "expo.easeOut",
    });
};

const animateShapes = () => {
  const infiniteTl = gsap.timeline({
    repeat: -1,
  });
  infiniteTl
    .to(".shapes .shape", {
      duration: 1.5, // Short duration
      rotate: 360,
      delay: -0.5, // Short delay
      ease: "power3.easeInOut",
      stagger: 1, // Short stagger
    })
    .to(".shapes .shape-3", {
      duration: 0.5, // Short duration
      rotate: 360,
      delay: -1, // Short delay
      ease: "power3.easeInOut",
    })
    .to(".shapes .shape", {
      duration: 1, // Short duration
      rotate: 0,
      ease: "power3.easeInOut",
      stagger: 0.5, // Short stagger
    })
    .to(".shapes .shape", {
      duration: 0.5, // Short duration
      opacity: 0,
      delay: -0.5, // Short delay
      ease: "power3.easeInOut",
      stagger: 0.5, // Short stagger
    })
    .to(".shapes .shape", {
      duration: 0.75, // Short duration
      opacity: 1,
      ease: "power3.easeInOut",
      stagger: 0.5, // Short stagger
    });
};

const animateMainShape = () => {
  const infiniteTl = gsap.timeline({
    repeat: -1,
  });
  infiniteTl
    .to(".shapes .main-circle", {
      duration: 1, // Short duration
      x: -30,
      y: -50,
      ease: "expo.easeOut",
    })
    .to(".shapes .main-circle", {
      duration: 1, // Short duration
      x: -30,
      y: 50,
      ease: "expo.easeOut",
    })
    .to(".shapes .main-circle", {
      duration: 0.75, // Short duration
      x: 0,
      y: 0,
      ease: "expo.easeOut",
    });
};

export const boxHover = (e) => {
  const tl = gsap.timeline();
  window.innerWidth >= 986 &&
    tl
      .to(e.target.querySelector(".link"), {
        duration: 0.02, // Short duration
        opacity: 1,
      })
      .from(e.target.querySelectorAll(".box-anim"), {
        duration: 0.2, // Short duration
        opacity: 0,
        y: 20, // Reduced y value
        stagger: 0.05, // Very short stagger
        ease: "Power3.easeOut",
      });
};

export const boxExit = (e) => {
  window.innerWidth >= 986 &&
    gsap.to(e.target.querySelector(".link"), {
      duration: 0.02, // Short duration
      opacity: 0,
    });
};

export const fadeIn = (el) => {
  gsap.to(el, {
    duration: 1, // Short duration
    opacity: 1,
    y: -40, // Reduced y value
    ease: "power4.out",
  });
};

export const fadeOut = (el) => {
  gsap.to(el, {
    duration: 0.5, // Short duration
    opacity: 0,
    y: -10, // Reduced y value
    ease: "power4.out",
  });
};
