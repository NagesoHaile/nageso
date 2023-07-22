import React from 'react'
import reactlogo from '../assets/react.png';
import javascript from '../assets/javascript.png'
import bootsrap from '../assets/bootstrap-framework-logo.png'
import python from '../assets/python-logo.png'
import flutter from '../assets/flutter.svg'
import tailwind from '../assets/tailwind.png'
import css from '../assets/css3.png'
import html from '../assets/html.png'
import django from '../assets/django.svg'

import {BsCodeSquare} from 'react-icons/bs'
import {AiOutlineAppstore} from 'react-icons/ai'
import {IoIosArrowForward,IoIosArrowBack} from 'react-icons/io'

const Skills = () => {
  return (
    <section id="skills" className='overflow-x-hidden'>
          <div className='py-8'>
              <h1 className='text-3xl font-bold text-center'>Skills</h1>
          </div>
         <div className='px-16 py-8'> 
           
          <div className=' flex space-x-4 justify-center items-center '>
          <div className='absolute w-full  transform -translate-y-1/2 flex justify-between items-center'>
                  <IoIosArrowBack size={40} />
                  <IoIosArrowForward size={40} />
           </div>
            <div className='flex  flex-col space-y-2 w-32 h-32 rounded-2xl shadow-lg bg-gray-100 justify-center items-center'>
                <img className="" src={reactlogo} alt='react-logo' />
                <h2 className='text-2xl font-bold'>ReactJs</h2>
            </div>
            <div className='flex flex-col w-32 h-32 space-y-2 rounded-2xl shadow-lg bg-gray-100 justify-center items-center'>
                <img className="" src={javascript} alt='react-logo' />
                <h2 className='text-2xl font-bold'>Javascript</h2>
            </div>
            <div className='flex flex-col w-32 h-32 space-y-2 rounded-2xl shadow-lg bg-gray-100 justify-center items-center'>
                <img className="" src={html} alt='react-logo' />
                <h2 className='text-2xl font-bold'>HTML</h2>
            </div>
            <div className='flex flex-col w-32 h-32 space-y-2 rounded-2xl shadow-lg bg-gray-100 justify-center items-center'>
                <img className="" src={css} alt='react-logo' />
                <h2 className='text-2xl font-bold'>CSS</h2>
            </div>
            <div className='flex flex-col w-32 h-32 space-y-2 rounded-2xl shadow-lg bg-gray-100 justify-center items-center'>
                <img className="" src={python} alt='react-logo' />
                <h2 className='text-2xl font-bold'>Python</h2>
            </div>
            <div className='flex flex-col w-32 h-32 space-y-2 rounded-2xl shadow-lg bg-gray-100 justify-center items-center'>
                <img className="" src={django} alt='react-logo' />
                <h2 className='text-2xl font-bold'>Django</h2>
            </div>
            <div className='flex flex-col w-32 h-32 space-y-2 rounded-2xl shadow-lg bg-gray-100 justify-center items-center'>
                <img className="" src={flutter} alt='react-logo' />
                <h2 className='text-2xl font-bold'>Flutter</h2>
            </div>
          </div>
          <div className='flex  flex-col md:flex-row space-x-8 space-y-8 bg-green-200 w-full md:h-72 rounded-lg mr-8 items-center justify-between pr-8 pt-8 md:pt-0 mt-20'>
                <div className=' flex flex-col w-72 md:w-72 h-52 md:h-60 -left-0 bg-white rounded-r-full justify-center items-center'>
                    <h1 className='text-gray-400 text-3xl '>Top</h1>
                    <h1 className='text-gray-950 text-3xl '>Services</h1>
                </div>
                <div className='flex flex-col space-y-4 md:border-r-2 md:pr-8 border-gray-900'>
                    <BsCodeSquare size={30} className=''/>
                    <h1 className='text-2xl font-bold'>Web development</h1>
                    <p className='text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                </div>
                <div className='flex flex-col space-y-4'>
                    <AiOutlineAppstore size={30} />
                    <h1 className='text-2xl font-bold'>Mobile App Development</h1>
                    <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
          </div>
        </div>
    </section>
  )
}

export default Skills