'use client';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

export default function Contact() {
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
    }, 2500); // 2.5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      {/* Initial "Hello" message */}
      {isLoading ? (
        <div className="text-[40px] text-center opacity-100 transition-opacity duration-1000 text-white" data-aos="fade-up">
          “Ready to take your website to the next level? Let&apos;s build something amazing together!”
        </div>
      ) : (
        // Main Contact Form or content
        <div className="text-center">
          <p className='text-[80px] font-[800] text-white' data-aos="fade-up">HELLO</p>
          <Link href="/"><button className='text-white'>Go Home</button></Link>
        </div>
      )}
    </div>
  );
}
