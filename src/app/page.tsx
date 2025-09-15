import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <div>
        <div className="flex justify-center items-center flex-col min-h-screen bg-[wheat]">
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
