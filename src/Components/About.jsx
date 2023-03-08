import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-500'>About</p>
                </div>
                <div>

                </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold '>
                        <p>Hi, I'm Aarif, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p className='text-[60%] font-medium'>
                        Fresher with an adequate knowledge in Front-end Developing with the help of technologies mentioned below. Looking forward to a team to work with, collaborate, implement and learn new skills in the programming environment.
                        </p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default About