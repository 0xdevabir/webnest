import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <div>
        <div className="flex justify-center items-center flex-col min-h-screen bg-[#F5DEB3]">
          <p className='text-[180px] font-[900]'>
            <span className="text-[#2F3737]">web</span>
            <span className="text-[#A8BCA1]">nest</span>
          </p>
          {/* 1F1F1F 3F4E4F */}
          {/* <p className='text-[180px] font-[900]'>
            <span className="text-[#1E293B]">web</span>
            <span className="text-[#9CA3AF]">nest</span>
          </p>
          <p className='text-[180px] font-[900]'>
            <span className="text-[#2A2A2A]">web</span>
            <span className="text-[#B8996F]">nest</span>
          </p>
          <p className='text-[180px] font-[900]'>
            <span className="text-[#A78BFA]">web</span>
            <span className="text-[#9CA3AF]">ne</span>
            <span className="text-[#9CA3AF]">st</span>
          </p>
          <p className='text-[180px] font-[900]'>
            <span className="text-[#2B2D42]">web</span>
            <span className="text-[#8D99AE]">ne</span>
            <span className="text-[#D4A373]">st</span>
          </p>
          <p className='text-[180px] font-[900]'>
            <span className="text-[#2A2A2A]">web</span>
            <span className="text-[#C5A880]">ne</span>
            <span className="text-[#C5A880]">st</span>
          </p>
          <p className='text-[180px] font-[900] mb-4'>
            <span className="text-[#1E293B]">web</span>
            <span className="text-[#94A3B8]">ne</span>
            <span className="text-[#E2E8F0]">st</span>
          </p> */}
          <Image
              src="/maintenance.png"
              alt="maintenance"
              width={200}
              height={200}
          />
          <h1 className="text-[32px] font-[600]">In Maintenance</h1>
        </div>
    </div>
  )
}

export default Home
