import React from 'react'
import Javascript from '../Assets/Js.jpeg'
import CSS from '../Assets/css.png'
import Html from '../Assets/Html.png'
import ReactImg from '../Assets/React.png'
import Github from '../Assets/git2.png'
import Tailwind from '../Assets/tailwind.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300 text-[70%] font-medium'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-500'>Skills</p>
                <p className='py-4'>// These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={Html} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={CSS} alt="CSS" />
                    <p className='my-4'>CSS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Javascript} alt="Javascript" />
                    <p className='my-4'> Javascript</p> 
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="React js" />
                    <p className='my-4'>React js</p> 
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind CSS" />
                    <p className='my-4'>Tailwind CSS</p> 
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Github} alt="Github" />
                    <p className='my-4'>Github</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills