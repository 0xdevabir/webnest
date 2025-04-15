'use client';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Blog() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
              duration: 1000, // Animation duration in ms
              easing: 'ease-in-out', // Easing type
              once: false, // Animation happens only once
            });
    // Set loading to false after 2.5 seconds to show the main contact page
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 2.5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      {/* Initial "Hello" message */}
      {isLoading ? (
        <div className="text-[40px] sm:text-[70px] font-[900] text-center opacity-100 transition-opacity duration-1000 text-white" data-aos="fade-up">
          <h1 className='text-[250px] md:text-[400px] text-[gray]'>wn</h1>
          </div>
      ) : (
        // Main Contact Form or content
        <div className="text-center">
          <p className='text-[80px] font-[800] text-white' data-aos="fade-up">Blog</p>
        </div>
      )}
    </div>
  );
}
