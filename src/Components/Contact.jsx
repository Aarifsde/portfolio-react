import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] text-[70%] font-medium flex justify-center items-center p-4 '>
        <form method='POST' action="https://getform.io/f/c8ed4f2b-bb25-47ae-abcc-e0a3f4dfe2c8" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-500 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>/// Submit the form below or shoot me an email - aarifsde@gmail.com</p>
            </div>
            <input className='bg-[#ccd6fc] p-2' type="text" placeholder='Name' name='name' required />
            <input className='my-4 p-2 bg-[#ccd6fc]' type="email" placeholder='Email' name='email' required/>
            <textarea className='bg-[#ccd6fc] p-2' name="message"  rows="5" placeholder='Message' required></textarea>
            <button className='text-white border-2 hover:bg-pink-500 hover:border-pink-500 px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
    </div>
  )
}

export default Contact