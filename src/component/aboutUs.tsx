
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const sectionRef = useRef(null);
  const bgTextRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;
    const bgText = bgTextRef.current;

    // Pin the section longer to slow down the effect
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top top",
        end: "+=1000", // Increased to make it hold longer
        pin: true,
        scrub: 3, // Higher scrub value for slower motion
        anticipatePin: 1,
      },
    });

    // Slow down "WebNest" movement by starting further away and increasing scroll range
    gsap.fromTo(
      bgText,
      { x: "100vw", opacity: 0 }, // Starts even further right
      {
        x: "0vw", // Moves to center
        opacity: 0.1,
        scrollTrigger: {
          trigger: element,
          start: "top 100%", // Start moving when section is fully visible
          end: "top 10%", // Ends later to make it slower
          scrub: 4, // Higher scrub makes the movement very smooth & slow
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-gradient-to-t from-[#0a192f] to-black flex flex-col items-center justify-center text-white text-center overflow-hidden"
    >
      {/* Animated Background Text */}
      <div
        ref={bgTextRef}
        className="absolute text-[18vw] font-[900] text-white opacity-10 tracking-wide whitespace-nowrap"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        webnest
      </div>

      {/* Foreground Content */}
      <h2 className="text-5xl font-bold relative z-10">About Us</h2>
      <p className="mt-4 max-w-2xl text-lg relative z-10">
        We are passionate developers creating awesome web experiences. Our mission is to build modern, scalable, and high-performance web applications.
      </p>
      <Image
             src="/astro.png"
             alt="Hot Tech"
             width={5000}
             height={5000}
             className="w-[200px] md:w-[350px] relative right-0 md:right-[50px] bottom-[80px] md:bottom-0 rounded-[350px] md:rounded-[28px] border-[6px] md:border-[0px] border-[#ffffff9e] hover:scale-[1.02] transition-all cursor-pointer"
         />
    </section>
  );
}
