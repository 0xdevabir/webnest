// pages/index.js
'use client';
import Head from "./head"
import { useEffect, useRef } from 'react';

export default function Test() {
  const cursorEffectRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      if (cursorEffectRef.current) {
        cursorEffectRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.2) 1%, rgba(0, 0, 0, 1) 30%)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    
    <div className="relative h-[screen] w-full overflow-hidden bg-cover bg-center bg-no-repeat " style={{ backgroundImage: 'url(/test-1.jpg)' }}>
        <Head/>
      <div className="absolute inset-0 bg-[black] opacity-5 pointer-events-none"></div>
      <div ref={cursorEffectRef} className="cursor-effect absolute inset-0 pointer-events-none hidden "></div>
    </div>
  );
}
