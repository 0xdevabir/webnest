import React from 'react'
import Image from 'next/image'


const Home = () => {
  return (
    <div>
        <div className="flex justify-center items-center flex-col min-h-screen bg-[#F5DEB3]">
          <div className="leading-none">
              <p className='text-[70px] sm:text-[120px] md:text-[160px] lg:text-[180px] font-[900]'>
                <span className="text-[#2F3737]">web</span>
                <span className="text-[#A8BCA1]">nest</span>
              </p>
              <div className="flex justify-around">
                <p className='text-center leading-none text-[14px] sm:text-[22px] md:text-[34px] lg:text-[44px] font-[800] text-[#A8BCA1]'>Code.</p>
                <p className='text-center leading-none text-[14px] sm:text-[22px] md:text-[34px] lg:text-[44px] font-[800] text-[#A8BCA1]'>Design.</p>
                <p className='text-center leading-none text-[14px] sm:text-[22px] md:text-[34px] lg:text-[44px] font-[800] text-[#2F3737]'>Launch.</p>
                <p className='text-center leading-none text-[14px] sm:text-[22px] md:text-[34px] lg:text-[44px] font-[800] text-[#2F3737]'>Repeat.</p>
              </div>
          </div>

          <Image
              src="/maintenance.png"
              alt="maintenance"
              width={200}
              height={200}
          />
          <h1 className="text-[32px] font-[600]">In Maintenance.</h1>
        </div>
    </div>
  )
}

export default Home
