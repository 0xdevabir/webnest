import Image from "next/image";


export default function Head() {
  return (
    <div className="">
      {/* H   E   A   D */}
      <div className="h-[100vh] bg-black">
          <div className="h-[80vh] leading-[100px] relative">
              <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <p className="text-white text-[20vw] sm:text-[10vw] leading-[0px] sm:leading-[100px] font-[800] text-center cursor-pointer"><span className="text-[#00d5ff]">web</span><span className="text-[#96eefb]">ne</span>st</p>
                  <p className="text-center text-white text-[2.2vw] leading-[70px] sm:text-[1.4vw] font-[500] sm:font-[300] tracking-[2.2px] sm:tracking-[5px] cursor-pointer">"Elevate Your Online Presence with WebNest"</p>
              </div>
              <div className="absolute left-[52.3%] top-[55%] translate-x-[-50%] translate-y-[-50%] z-0 cursor-pointer">
                  {/* <img className="astro-img-1" src="images/astro.png" alt=""> */}
              </div>
          </div>
      </div>
    </div>
  );
}

