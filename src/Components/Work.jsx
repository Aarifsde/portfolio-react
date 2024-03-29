import React from 'react'
import WorkImg from '../Assets/Projects/project.png'
import WorkImg2 from '../Assets/Projects/NetMovie.jpg'

const Work = () => {
  return (
    <div name='Work' className='w-full md:h-screen text-gray-300 bg-[#0a192f] text-[70%] font-medium'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-500'>Work</p>
                <p className='py-6'>Check out my recent work</p>
            </div>
         {/* container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
               
                {/* grid items */}
                <div style={{backgroundImage:`url(${WorkImg})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover eff */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                       <span className='text-2xl font-bold text-white tracking-wider'>
                         Crypto-Base React JS
                       </span>

                       <div className='pt-8 text-center'>
                        <a href="https://crypto-base-aarif.netlify.app/" target='_blank' rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                        </a>
                        <a href="https://github.com/Aarifsde/crypto-base" target='_blank' rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                       </div>
                    </div>
                </div>

                <div style={{backgroundImage:`url(${WorkImg2})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover eff */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                       <span className='text-2xl font-bold text-white tracking-wider'>
                         E-Commerce JS
                       </span>

                       <div className='pt-8 text-center'>
                        <a href="https://aarif-ecommerce.netlify.app/" target='_blank' rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                        </a>
                        <a href="https://github.com/Aarifsde/e-commerce" target='_blank' rel="noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work