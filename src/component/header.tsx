// pages/index.js
'use client';
import { useEffect, useRef } from 'react';

export default function Test() {
  const cursorEffectRef = useRef<HTMLDivElement | null>(null);

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

  return (
    
    <div className="relative h-[screen] w-full overflow-hidden bg-cover bg-center bg-no-repeat " style={{ backgroundImage: 'url(/test-1.jpg)' }}>
        {/* H   E   A   D */}
      <div className='h-[100vh] bg-[#000000dc] z-50'>
          <div className='h-[80vh] leading-[100px] relative'>
              <div className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]'>
                  <p className=' text-white text-[20vw] sm:text-[10vw] leading-[0px] sm:leading-[100px] font-[800] text-center cursor-pointer'><span className='text-[#00d5ff]'>web</span><span className='text-[#96eefb]'>ne</span>st</p>
                  <p className='text-center text-white text-[2.2vw] leading-[80px] sm:leading-[90px] sm:text-[1.4vw] font-[500] sm:font-[300] tracking-[2.5px] sm:tracking-[6px] cursor-pointer'>&apos;Elevate Your Online Presence with WebNest&apos;</p>
             

              </div>
              <div className='absolute left-[52.3%] top-[55%] translate-x-[-50%] translate-y-[-50%] z-0 cursor-pointer'>
                  
              </div>
          </div>
          
      </div>
      <div className="absolute inset-0 bg-[#000000] opacity-5 pointer-events-none"></div>
      <div ref={cursorEffectRef} className="cursor-effect absolute inset-0 pointer-events-none hidden sm:block"></div>
    </div>
  );
}
