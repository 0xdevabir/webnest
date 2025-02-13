
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
      <div className="md:flex justify-between flex-wrap w-[100vw]">
            <div className="flex justify-center items-start sm:items-center w-[100%] h-[100vh] md:w-[50%] md:text-left absolute sm:relative px-[20px] sm:px-[0] text-left">
                <div className="mt-[3vh] sm:mt-[0vh] w-[100%] pl-[0vw] sm:pl-[6vw] ">
                    <h2 className="text-[32px] sm:text-[52px] font-bold relative z-10">About Us</h2>
                    <p className="mt-[5px] sm:mt-[20px]  text-[15px] sm:text-[22px] relative z-10 opacity-[0.9] tracking-[1px] sm:tracking-[1.5px]">
                    Welcome to WebNest, where creativity meets technology! We&apos;re passionate about building beautiful, high-performance websites that help brands shine online. Whether you&apos;re launching a new business or upgrading your existing site, we&apos;re here to make your digital dreams a reality.</p>
                    <div className="">
                        <h2 className="text-[22px] sm:text-[40px] font-bold relative z-10 mt-[3vh]">Our Vision</h2>    
                            <p className="mt-4 text-[15px] sm:text-[22px] relative z-10 opacity-[0.9] tracking-[1px] sm:tracking-[1.5px]">At WebNest, we aim to create stunning, high-performance websites that make a lasting impact. Our vision is to empower businesses with innovative web solutions, ensuring every brand stands out in the digital world. 🚀✨</p>
 
                        <h2 className="text-[22px] sm:text-[40px] font-bold relative z-10 mt-[3vh]">Why WebNest?</h2>
                            <p className="mt-4 max-w-2xl text-[15px] sm:text-[22px] relative z-10 opacity-[0.9] tracking-[1px] sm:tracking-[1.5px]">🚀 Modern & Eye-Catching Designs</p>
                            <p className="mt-4 max-w-2xl text-[15px] sm:text-[22px] relative z-10 opacity-[0.9] tracking-[1px] sm:tracking-[1.5px]">⚡ Fast, Secure & SEO-Optimized</p>

                            <p className="mt-4 max-w-2xl text-[15px] sm:text-[22px] relative z-10 opacity-[0.9] tracking-[1px] sm:tracking-[1.5px]">📱 Fully Responsive for All Devices</p>
                            <p className="mt-4 max-w-2xl text-[15px] sm:text-[22px] relative z-10 opacity-[0.9] tracking-[1px] sm:tracking-[1.5px]">❤️ Dedicated to Your Success</p>
                   </div>
                </div>
            </div>
            <div className="h-[100vh] flex items-end">
                <div className="flex justify-end w-[100vw] sm:w-[100%]">
                    <Image
                            src="/astro.png"
                            alt="Hot Tech"
                            width={5000}
                            height={5000}
                            className="animate-pulse opacity-[0.8] w-[300px] md:w-[450px] "
                        />
                </div>
            </div>
      </div>
    </section>
  );
}
