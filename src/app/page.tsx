'use client';
// import Image from "next/image";
// import About from "../component/about"
// import Navbar from "../component/navbar";
// import Header from "../component/header";
// import Team from "../component/emp"
// import AboutUs from  "../component/aboutUs"

// export default function Home() {
//   return (
//     <div className="overflow-hidden">

//           <Navbar/>
        
//           <Header/>

//           <AboutUs/>
          
//           <Team/>


//           <div className="h-[20vh]"></div>


//           <About/>
         
          
//           <div className="h-[20vh]"></div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import About from "../component/about";
import Navbar from "../component/navbar";
import Header from "../component/header";
import Team from "../component/emp";
import AboutUs from "../component/aboutUs";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
                  duration: 1000, // Animation duration in ms
                  easing: 'ease-in-out', // Easing type
                  once: false, // Animation happens only once
                });


    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Loader stays for 2 seconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="overflow-hidden relative">
      {/* Loader Section */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black text-white text-[40px] sm:text-[70px] font-[900] opacity-100 transition-opacity duration-1000 delay-500">
          <div className="text-center animate-pulse" data-aos='fade-zoom-in'>Loading something awesome...</div>
        </div>
      )}

      {/* Main Content */}
      <div className={`${loading ? "opacity-[0]" : "opacity-100"} transition-opacity duration-1000`}>
        <Navbar />
        <Header />
        <AboutUs />
        <Team />
        <div className="h-[20vh]"></div>
        <About />
        <div className="h-[20vh]"></div>
      </div>
    </div>
  );
}


