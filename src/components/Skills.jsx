import React from 'react'
import reactlogo from '../assets/react.png';
import javascript from '../assets/javascript.png'

const Skills = () => {
  return (
    <section id="skills" className='overflow-x-hidden'>
          <div className='py-8'>
              <h1 className='text-3xl font-bold text-center'>Skills</h1>
          </div>
         <div className='px-16 py-8'> 
          <div className=' flex '>
            <div className='flex  '>
                <img className="" src={reactlogo} alt='react-logo' />
            </div>
            <div className='flex  '>
                <img className="" src={javascript} alt='react-logo' />
            </div>
          </div>
          <div className='flex flex-col md:flex-row space-x-8 space-y-8 bg-green-200 w-full md:h-72 rounded-lg mx-8 items-center justify-around'>
                <div className=' flex w-72 md:w-72 h-52 md:h-60 bg-gray-50 rounded-r-full justify-center items-center'>
                    <h1 className='text-gray-400 text-3xl '>Services</h1>
                </div>
                <div className='flex flex-col space-y-4'>
                    <h1 className='text-2xl'>Web development</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Doloribus, optio eligendi. Inventore sapiente deserunt doloribus.</p>
                </div>
                <div className='flex flex-col space-y-4'>
                    <h1 className='text-2xl'>Mobile App Development</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quos hic ipsum deleniti dicta fuga. Odio.</p>
                </div>
          </div>
        </div>
    </section>
  )
}

export default Skills