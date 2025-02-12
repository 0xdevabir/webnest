'use client';

import { useEffect } from "react";
import Image from 'next/image';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
// const employees = [
//   {
//     name: 'Abir Hossain',
//     position: 'Front-End Developer',
//     bio: 'Passionate about building interactive UI with React and Tailwind CSS.',
//     image: '/abir.jpg',
//     social: {
//       linkedin: '#',
//       github: '#',
//     },
//   },
//   {
//     name: 'John Doe',
//     position: 'Full-Stack Developer',
//     bio: 'Experienced in MERN stack development and API integration.',
//     image: '/hot-tech.png',
//     social: {
//       linkedin: '#',
//       github: '#',
//     },
//   },
// ];

export default function Team() {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in ms
          easing: 'ease-in-out', // Easing type
          once: false, // Animation happens only once
        });
      }, []);
  return (
    <div className="">
        
        <div className="h-[40vh] md:h-[50vh] flex justify-center items-center">
            <p className="text-[30px] md:text-[100px] font-[700] text-[#000000e0]" data-aos="fade-up">Our Team</p>
        </div>

        <div className="w-[100vw] flex flex-wrap justify-evenly">

         
            <div className=" bg-gradient-to-br from-[#0a192f] to-[#121212] py-0 md:py-[50px] w-[90%] md:w-[40%] rounded-[28px]" data-aos="fade-right">
                <div className="flex flex-wrap items-center w-[100%]">
                    <div className="w-[100%] md:w-[40%] flex justify-center" data-aos="fade-right">
                      <Image
                            src="/abir.jpg"
                            alt="Hot Tech"
                            width={5000}
                            height={5000}
                            className="w-[200px] md:w-[350px] relative right-0 md:right-[50px] bottom-[80px] md:bottom-0 rounded-[350px] md:rounded-[28px] border-[6px] md:border-[0px] border-black hover:scale-[1.02] transition-all cursor-pointer"
                        />
                    </div>
                    <div className="w-[100%] md:w-[60%] pl-[25px] md:pl-0 pr-[25px] relative bottom-[40px] md:bottom-0 text-center md:text-left">
                        <p className="text-[28px] font-[800] text-white tracking-[3px]">MD ABIR HOSSAIN</p>
                        <p className="text-[18px] font-[600] text-[#fffffff2] py-[20px]">Founder & Executive Director/CEO</p>
                        <p className="text-[16px] font-[400] text-[#ffffffde] text-center md:text-left">Passionate about building sleek, user-friendly web experiences with React. Always exploring new technologies to enhance web development.</p>
                        <div className="py-[20px] flex justify-center md:justify-start gap-5">
                          <FaGithub className='text-[25px] md:text-[40px] text-white'/>
                          <FaLinkedin className='text-[25px] md:text-[40px] text-white'/>
                          <FaInstagram className='text-[25px] md:text-[40px] text-white'/>
                        </div>

                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-tr from-[#121212] to-[#0a192f] py-0 md:py-[50px] w-[90%] md:w-[40%] rounded-[28px] mt-[20vh] md:mt-0" data-aos="fade-left">
                <div className="flex flex-wrap items-center w-[100%]">

                <div className="w-[100%] md:w-[40%] flex justify-center md:hidden">
                      <Image
                            src="/Arif.jpg"
                            alt="Hot Tech"
                            width={5000}
                            height={5000}
                            className="w-[200px] md:w-[350px] relative right-0 md:right-[50px] bottom-[80px] md:bottom-0 rounded-[350px] md:rounded-[28px] border-[6px] md:border-[0px] border-black "
                        />
                    </div>
                    
                    <div className="w-[100%] md:w-[60%] pr-[25px] md:pr-0 pl-[25px] relative bottom-[40px] md:bottom-0 text-center md:text-right">
                        <p className="text-[28px] font-[800] text-white tracking-[3px]">MD ARIF HOSSAIN</p>
                        <p className="text-[18px] font-[600] text-[#fffffff2] py-[20px]">Co-Founder & CTO</p>
                        <p className="text-[16px] font-[400] text-[#ffffffde] text-center md:text-right">Leading innovation at WebNest with expertise in backend and scalable systems. Passionate about building robust web solutions.</p>
                        <div className="py-[20px] flex justify-center md:justify-end gap-5">
                          <FaInstagram className='text-[25px] md:text-[40px] text-white'/>
                          <FaLinkedin className='text-[25px] md:text-[40px] text-white'/>
                          <FaGithub className='text-[25px] md:text-[40px] text-white'/>
                        </div>

                    </div>
                    <div className="w-[100%] md:w-[40%] flex justify-center hidden md:block" data-aos="fade-left">
                      <Image
                            src="/Arif.jpg"
                            alt="Hot Tech"
                            width={5000}
                            height={5000}
                            className="w-[200px] md:w-[350px] relative left-0 md:left-[50px] bottom-[80px] md:bottom-0 rounded-[350px] md:rounded-[28px] border-[6px] md:border-[0px] border-black hover:scale-[1.02] transition-all cursor-pointer"
                        />
                    </div>


                </div>
            </div>

        </div>










        <div className="w-[100vw] flex flex-wrap justify-evenly mt-[14vh]">

                
        <div className="bg-gradient-to-br from-[#0a192f] to-[#121212] py-0 md:py-[50px] w-[90%] md:w-[40%] rounded-[28px]" data-aos="fade-right">
            <div className="flex flex-wrap items-center w-[100%]">
                <div className="w-[100%] md:w-[40%] flex justify-center" data-aos="fade-right">
                  <Image
                        src="/arafat.jpeg"
                        alt="Hot Tech"
                        width={5000}
                        height={5000}
                        className="w-[200px] md:w-[350px] relative right-0 md:right-[50px] bottom-[80px] md:bottom-0 rounded-[350px] md:rounded-[28px] border-[6px] md:border-[0px] border-black hover:scale-[1.02] transition-all cursor-pointer"
                    />
                </div>
                <div className="w-[100%] md:w-[60%] pl-[25px] md:pl-0 pr-[25px] relative bottom-[40px] md:bottom-0 text-center md:text-left">
                    <p className="text-[28px] font-[700] text-white tracking-[3px]">KHALID HOSSAIN ARAFAT</p>
                    <p className="text-[18px] font-[600] text-[#fffffff2] py-[20px]">Co-Founder & COO</p>
                    <p className="text-[16px] font-[400] text-[#ffffffde] text-center md:text-left">Keeping the team aligned, projects on track, and operations running smoothly. Loves building efficient systems.</p>
                    <div className="py-[20px] flex justify-center md:justify-start gap-5">
                      <FaGithub className='text-[25px] md:text-[40px] text-white'/>
                      <FaLinkedin className='text-[25px] md:text-[40px] text-white'/>
                      <FaInstagram className='text-[25px] md:text-[40px] text-white'/>
                    </div>

                </div>
            </div>
        </div>
        <div className="bg-gradient-to-tr from-[#121212] to-[#0a192f] py-0 md:py-[50px] w-[90%] md:w-[40%] rounded-[28px] mt-[20vh] md:mt-0" data-aos="fade-left">
            <div className="flex flex-wrap items-center w-[100%]">

            <div className="w-[100%] md:w-[40%] flex justify-center md:hidden" data-aos="fade-left">
                  <Image
                        src="/touhid.jpeg"
                        alt="Hot Tech"
                        width={5000}
                        height={5000}
                        className="w-[200px] md:w-[350px] relative right-0 md:right-[50px] bottom-[80px] md:bottom-0 rounded-[350px] md:rounded-[28px] border-[6px] md:border-[0px] border-black"
                    />
                </div>
                
                <div className="w-[100%] md:w-[60%] pr-[25px] md:pr-0 pl-[25px] relative bottom-[40px] md:bottom-0 text-center md:text-right">
                    <p className="text-[28px] font-[700] text-white tracking-[3px]">TOUHIDUL ISLAM</p>
                    <p className="text-[18px] font-[600] text-[#fffffff2] py-[20px]">UX/UI Designer</p>
                    <p className="text-[16px] font-[400] text-[#ffffffde] text-center md:text-right">Crafting beautiful, intuitive designs that prioritize user experience. Passionate about blending creativity with functionality.</p>
                    <div className="py-[20px] flex justify-center md:justify-end gap-5">
                      <FaInstagram className='text-[25px] md:text-[40px] text-white'/>
                      <FaLinkedin className='text-[25px] md:text-[40px] text-white'/>
                      <FaGithub className='text-[25px] md:text-[40px] text-white'/>
                    </div>

                </div>
                <div className="w-[100%] md:w-[40%] flex justify-center hidden md:block" data-aos="fade-left">
                  <Image
                        src="/touhid.jpeg"
                        alt="Hot Tech"
                        width={5000}
                        height={5000}
                        className="w-[200px] md:w-[350px] relative left-0 md:left-[50px] bottom-[80px] md:bottom-0 rounded-[350px] md:rounded-[28px] border-[6px] md:border-[0px] border-black hover:scale-[1.02] transition-all cursor-pointer"
                    />
                </div>


            </div>
        </div>

        </div>







    </div>
  );
}
