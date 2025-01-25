// import Image from "next/image";
import Head from "./sections/head"
import Navbar from "./sections/navbar";
import Test from "./sections/test"

export default function Home() {
  return (
    <div className="">
        <div className="">
           <Navbar/>
        </div>
        
        <div className="">
          <Test/>
        </div>
        <Head/>
    </div>
  );
}
