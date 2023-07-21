import React from 'react'
import about from '../assets/aboutme.svg'
const About = () => {
  return (
    <section id='about' className='overflow-x-hidden'>
        <div>
             <h1 className='text-3xl font-bold text-center'>About Me</h1>
        </div>
        <div className='flex flex-col md:flex-row space-x-8 '>
            <div className='md:w-1/2'>
               <img src={about} alt='web dev ' />
            </div>
            <div className='md:w-1/2 flex flex-col md:justify-center items-center '>
               <h1 className='text-2xl font-bold text-gray-400'>Who I am?</h1>
               
               <p className='w-96'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Dicta non corrupti rerum esse. 
                Eligendi tempora tempore, saepe numquam eos maiores?</p>
              
            </div>
        </div>
    </section>
  )
}

export default About