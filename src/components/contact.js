import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='text-white w-full h-screen p-4'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-4'>
                    <p className="text-5xl md:text-6xl text-center font-thin leading-tight pb-4"> Contact</p>
                    <p className='md:text-lg text-center text-gray-400 py-4'>Submit the form below to get in touch with me</p>
                </div>
                    <div className='flex justify-center items-center bg-slate-950 pt-10 w-full rounded-lg px-'>
                        <form action='https://getform.io/f/5dba6bce-c520-4ef6-8032-ace15bc652a1' method='POST' className='flex flex-col w-full md:w-1/2 '>
                            <input type='text' name='name' placeholder='Enter your name' className= ' p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mx-10 md:mx-0' required />
                            <input type='text' name='email' placeholder='Enter your email' className=' my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mx-10 md:mx-0' required />

                            <textarea name='message' rows={10} placeholder='Enter your message here' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mx-10 md:mx-0' required></textarea>

                            <button className=' text-white bg-gradient-to-b from-cyan-500 to to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 '>Let's talk</button>
                        </form>

                </div>
                <div className=' border-2 border-gray-500 mt-8'>
                </div>

            </div>
        </div>
    )
}

export default Contact