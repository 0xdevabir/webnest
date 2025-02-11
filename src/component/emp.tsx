'use client';

import Image from 'next/image';

const employees = [
  {
    name: 'Abir Hasan',
    position: 'Front-End Developer',
    bio: 'Passionate about building interactive UI with React and Tailwind CSS.',
    image: '/abir.jpg',
    social: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'John Doe',
    position: 'Full-Stack Developer',
    bio: 'Experienced in MERN stack development and API integration.',
    image: '/hot-tech.png',
    social: {
      linkedin: '#',
      github: '#',
    },
  },
];

export default function emp() {
  return (
    <div className="">
        

        <div className="w-[100vw] flex justify-around">

            {/* <div className="bg-[red] w-[30%] h-[30vh]">
                <div className="flex">
                    <div className="flex items-center relative right-[100px] bg-[#0000ff5e]">
                        <Image
                            src="/abir.jpg"
                            alt="Hot Tech"
                            width={5000}
                            height={5000}
                            className="w-[200px] rounded-lg"
                        />
                    </div>
                    <div className="text-center py-[50px] bg-[green]">
                        <p className="text-[22px] font-[600] text-white">MD ABIR HOSSAIN</p>
                        <p className="text-[22px] font-[600] text-white">Founder & Executive Director/CEO</p>
                    </div>
                </div>
            </div> */}
            <div className="bg-[#000000e2] flex rounded-lg w-[30%] py-[60px]">
                <div className="">
                    <Image
                        src="/abir.jpg"
                        alt="Hot Tech"
                        width={5000}
                        height={5000}
                        className="w-[300px] relative right-[100px] rounded-lg"
                    />
                </div>
                <div className="flex items-center">
                    <div className="text-left py-[50px] relative right-[50px]">
                            <p className="text-[28px] font-[600] text-white">MD ABIR HOSSAIN</p>
                            <p className="text-[18px] font-[600] text-white">Founder & Executive Director/CEO</p>
                    </div>
                </div>
            </div>
            <div className="bg-[red] w-[30%]">
                card2
            </div>

        </div>



    </div>
  );
}
