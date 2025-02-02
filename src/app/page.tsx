// import Image from "next/image";
import About from "../component/about"
import Navbar from "../component/navbar";
import Header from "../component/header"

export default function Home() {
  return (
    <div className="overflow-hidden">
        
          <Navbar/>
        
          <Header/>
          
          <About/>
    </div>
  );
}
