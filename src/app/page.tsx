// import Image from "next/image";
import About from "../component/about"
import Navbar from "../component/navbar";
import Header from "../component/header";
import EMP from "../component/emp"

export default function Home() {
  return (
    <div className="overflow-hidden">
        
          <Navbar/>
        
          <Header/>
          <div className="h-[50vh]"></div>
          <EMP/>
          <div className="h-[20vh]"></div>
          <About/>
         
          
          <div className="h-[20vh]"></div>
    </div>
  );
}
