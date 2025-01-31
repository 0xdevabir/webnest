"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      // Pin the section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=2000", // Hold for 1000px of scrolling
        pin: true,
        scrub: 2,
      });

      // Animate text moving left to right
      gsap.fromTo(
        textRef.current,
        { x: "-100vw" }, // Start off-screen (left)
        {
          x: "0vw", // Move to right off-screen
          duration: 3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=1000",
            scrub: 2,
          },
        }
      );
    }
  }, []);

  return (
    <div className="">
        <div className="h-[300vh] bg-gray-900 flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl py-10">Scroll Down 👇</h1>

        <section
          ref={sectionRef}
          className="h-[100vh] flex items-center justify-center bg-blue-600 w-full"
        >
          {/* Moving Text */}
          <h2
            ref={textRef}
            className="text-white text-[300px] font-bold absolute"
          >
            webnest
          </h2>
        </section>

        <h1 className="text-white text-4xl py-10 h-[110vh]">Keep Scrolling... 🚀</h1>
      </div>
      <div className="h-[100vh]">
        <p>hello</p>
      </div>
    </div>
  );
}
