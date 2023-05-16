import React from 'react'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Aarif A</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Frontend Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px] text-[70%] font-semibold'>I am a Front-end web Developer who has been learning for past 5 months. I love to design and develop various react applications. For more info (Click resume!).</p>

            <div>
              <a href="https://drive.google.com/file/d/1PMr7M5n9pNYYnJ62CDm2WOKIVW66o08I/view?usp=drivesdk" target='_blank' rel="noreferrer">
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-500 hover:border-pink-500'> Resume
                <span className='group'>
                <BsFillPersonLinesFill  className='ml-3' />
                </span>
                </button>
              </a>
            </div>
        </div>

    </div>
  )
}

export default Home