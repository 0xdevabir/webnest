'use client';

import { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import { Code, Globe, Users, Zap, Cloud } from 'lucide-react';

export default function Home() {
  const cursorEffectRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      // Animation duration in ms
      easing: 'ease-in-out', // Easing type
      once: false,           // Animation happens only once
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 2.5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      if (cursorEffectRef.current) {
        cursorEffectRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.2) 1%, rgba(0, 0, 0, 1) 30%)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAboutVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('about-section');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [isLoading]);

  const features = [
    {
      icon: <Globe className="text-[#00d5ff]" />,
      title: "Global Deployment",
      description: "Deploy your web applications worldwide with just a few clicks."
    },
    {
      icon: <Zap className="text-[#96eefb]" />,
      title: "Lightning Fast",
      description: "Experience blazing fast load times with our optimized infrastructure."
    },
    {
      icon: <Code className="text-[#00d5ff]" />,
      title: "Developer Friendly",
      description: "Intuitive tools and workflows designed for modern web developers."
    },
    {
      icon: <Cloud className="text-[#96eefb]" />,
      title: "Cloud Native",
      description: "Built on cutting-edge cloud technologies for ultimate reliability."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      {/* Initial "Hello" message */}
      {isLoading ? (
        <div
          className="text-[40px] sm:text-[70px] font-[900] text-center opacity-100 transition-opacity duration-1000 text-white"
          data-aos="fade-up"
        >
          <p className='text-[250px] md:text-[400px] text-[gray]'>wn</p>
        </div>
      ) : (
        <div
          className="relative h-[screen] w-full overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/heroBg.jpg)' }}
        >
          {/* H   E   A   D */}
          <div className="h-[100vh] bg-[#000000dc] z-50">
            <div className="h-[80vh] leading-[100px] relative">
              <div className="absolute left-[50%] top-[60%] translate-x-[-50%] translate-y-[-50%] z-10">
                <p
                  className="text-white text-[20vw] sm:text-[15vw] md:text-[10vw] leading-[0px] sm:leading-[100px] font-[800] text-center cursor-pointer"
                  data-aos="fade-up"
                >
                  <span className="text-[#00d5ff]">web</span>
                  <span className="text-[#96eefb]">ne</span>st
                </p>
                {/* <p
                  className="text-center text-white text-[2.2vw] leading-[90px] sm:leading-[90px] sm:text-[1.4vw] font-[500] sm:font-[300] tracking-[2.5px] sm:tracking-[6px] cursor-pointer"
                  data-aos="fade-up"
                >
                  &apos;Elevate Your Online Presence with WebNest&apos;
                </p> */}
                <p className='text-white text-[2.5vw] sm:text-[1.4vw] md:text-[1.6vw] text-center tracking-[2px] leading-[85px] sm:leading-[10px] md:leading-[5px] lg:leading-[90px]'
                data-aos="fade-up"
                >
                  &apos;Elevate Your Online Presence with WebNest&apos;</p>
              </div>
               <div className="absolute left-[52.3%] top-[55%] translate-x-[-50%] translate-y-[-50%] z-0 cursor-pointer" />
            </div>
          </div>
          
          {/* About Section */}
          <div id="about-section" className="relative bg-black text-white py-20 overflow-hidden">
            {/* Animated background grid */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-12 h-full">
                {Array(12).fill().map((_, i) => (
                  <div key={i} className="border-r border-[#00d5ff]"></div>
                ))}
              </div>
              <div className="grid grid-rows-12 h-full w-full absolute top-0">
                {Array(12).fill().map((_, i) => (
                  <div key={i} className="border-b border-[#00d5ff]"></div>
                ))}
              </div>
            </div>
            
            {/* Animated glow effects */}
            <div className="absolute -left-16 -top-16 w-64 h-64 bg-[#00d5ff] rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-[#96eefb] rounded-full opacity-10 blur-3xl"></div>
            
            <div className="container mx-auto px-6 relative z-10">
              <div className="transition-all duration-1000 transform" 
                   data-aos="fade-up">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00d5ff] to-[#96eefb]">
                  About WebNest
                </h2>
                
                <div className="w-24 h-1 bg-gradient-to-r from-[#00d5ff] to-[#96eefb] mb-8"></div>
                
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-12">
                  WebNest is a revolutionary platform designed to simplify web application deployment, 
                  management, and scaling. We empower developers to focus on creating amazing experiences 
                  without worrying about infrastructure complexities.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {features.map((feature, index) => (
                    <div 
                      key={index}
                      className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg border border-gray-800 p-6 rounded-xl transition-all duration-700 transform hover:scale-105 hover:shadow-lg hover:shadow-[#00d5ff]/20"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <div className="mb-4 text-3xl">{feature.icon}</div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6"
                     data-aos="fade-up"
                     data-aos-delay="400">
                  <div className="flex items-center">
                    <Users className="text-[#00d5ff] mr-2" />
                    <span className="text-gray-300">Trusted by <span className="font-bold text-white">10,000+</span> developers</span>
                  </div>
                  <div className="h-6 border-r border-gray-700 hidden md:block"></div>
                  <div className="text-gray-300">
                    Supporting <span className="font-bold text-white">millions</span> of deployments
                  </div>
                  <div className="h-6 border-r border-gray-700 hidden md:block"></div>
                  <div className="text-gray-300">
                    <span className="font-bold text-white">99.99%</span> uptime guaranteed
                  </div>
                </div>
                
                <div className="mt-12 text-center"
                     data-aos="fade-up"
                     data-aos-delay="500">
                  <button className="px-8 py-3 bg-gradient-to-r from-[#00d5ff] to-[#96eefb] text-black rounded-full hover:shadow-lg hover:shadow-[#00d5ff]/50 transition-all duration-300 font-medium">
                    Learn More About Our Mission
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Overlay & Cursor Effect */}
          <div className="absolute inset-0 bg-[#000000] opacity-5 pointer-events-none"></div>
          <div
            ref={cursorEffectRef}
            className="cursor-effect absolute inset-0 pointer-events-none hidden"
          />
        </div>
      )}
    </div>
  );
}