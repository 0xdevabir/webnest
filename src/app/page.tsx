// import Image from "next/image";
import About from "../component/about"
import Navbar from "../component/navbar";
import Header from "../component/header";
import Team from "../component/emp"
import AboutUs from  "../component/aboutUs"

export default function Home() {
  return (
    <div className="overflow-hidden">
        
          <Navbar/>
        
          <Header/>

          <AboutUs/>
          
          <Team/>

          
          <div className="h-[20vh]"></div>


          <About/>
         
          
          <div className="h-[20vh]"></div>
    </div>
  );
}
