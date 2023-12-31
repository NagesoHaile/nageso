import React,{useEffect} from 'react'
import reactlogo from '../assets/react.png';
import javascript from '../assets/javascript.png'
import bootsrap from '../assets/bootstrap-framework-logo.png'
import python from '../assets/python-logo.png'
import flutter from '../assets/flutter.svg'
import tailwind from '../assets/tailwind.png'
import css from '../assets/css3.png'
import html from '../assets/html.png'
import django from '../assets/django.svg'
import reactnative from '../assets/react-native-logo.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

import {BsCodeSquare} from 'react-icons/bs'
import {AiOutlineAppstore} from 'react-icons/ai'


const Skills = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
       })
  return (
    <section id="skills" className='overflow-x-hidden'>
          <div className='py-8'>
              <h1 className='text-3xl font-bold text-center'>Skills</h1>
          </div>
         <div className='px-16 py-8'> 
           
          <div data-aos="zoom-in" className=' grid grid-cols-2 md:grid-cols-5 gap-16 space-x-4 justify-center items-center '>
          
          
            <div className=' flex flex-col space-y-1 w-32 h-32 rounded-2xl shadow-lg hover:scale-110 duration-500 bg-gray-100 justify-center items-center py-20'>
                <img className="" src={reactlogo} alt='Reactjs' />
                <h2 className='text-xl font-bold'>ReactJs</h2>
            </div>
            <div className='flex flex-col w-32 h-32 space-y-1 rounded-2xl shadow-lg hover:scale-110 duration-500 bg-gray-100 justify-center items-center py-20'>
                <img className="" src={javascript} alt='javascript' />
                <h2 className='text-xl font-bold'>Javascript</h2>
            </div>
            <div className='flex flex-col w-32 h-32 space-y-1 rounded-2xl shadow-lg hover:scale-110 duration-500 bg-gray-100 justify-center items-center py-20'>
                <img className="" src={html} alt='html' />
                <h2 className='text-xl font-bold'>HTML</h2>
            </div>
            <div className='flex flex-col w-32 h-32 space-y-1 rounded-2xl shadow-lg hover:scale-110 duration-500 bg-gray-100 justify-center items-center py-20'>
                <img className="" src={css} alt='css' />
                <h2 className='text-xl font-bold'>CSS</h2>
            </div>
            <div className='flex flex-col w-32 h-32 space-y-1 rounded-2xl shadow-lg hover:scale-110 duration-500 bg-gray-100 justify-center items-center py-20'>
                <img className="" src={python} alt='python' />
                <h2 className='text-xl font-bold'>Python</h2>
            </div>
            <div className='flex flex-col w-32 h-32 space-y-1 rounded-2xl shadow- hover:scale-110 duration-500 bg-gray-100 justify-center items-center py-20'>
                <img className="" src={django} alt='django' />
                <h2 className='text-xl font-bold'>Django</h2>
            </div>
            <div className='flex flex-col w-32 h-32 space-y-1 rounded-2xl shadow-lg hover:scale-110 duration-500 bg-gray-100 justify-center items-center py-20'>
                <img className="" src={flutter} alt='flutter' />
                <h2 className='text-xl font-bold'>Flutter</h2>
            </div>
            
            
            
            <div className='flex flex-col w-32 h-32 space-y-1 rounded-2xl shadow-lg hover:scale-110 duration-500 bg-gray-100 justify-center items-center py-20'>
                <img className="" src={tailwind} alt='tailwindcss' />
                <h2 className='text-xl font-bold'>Tailwindcss</h2>
            </div>
            <div className='flex flex-col w-32 h-32 space-y-1 rounded-2xl shadow-lg hover:scale-110 duration-500 bg-gray-100 justify-center items-center py-20'>
                <img className="" src={bootsrap} alt='bootstrap' />
                <h2 className='text-xl font-bold'>Bootstrap</h2>
            </div>
          </div>
         <div className='bg-gray-700'>
          <div className='flex  flex-col md:flex-row space-x-8 space-y-8 bg-green-200 w-full md:h-72 rounded-lg mr-8 items-center justify-between pr-8 pt-8 md:pt-0 mt-20'>
                <div className=' flex flex-col w-72 md:w-72 h-52 md:h-60 -left-0 bg-white rounded-r-full justify-center items-center'>
                    <h1 className='text-gray-400 text-3xl '>Top</h1>
                    <h1 className='text-gray-950 text-3xl '>Services</h1>
                </div>
                <div data-aos="zoom-in" className='flex flex-col space-y-4 md:border-r-2 md:pr-8 border-gray-900'>
                    <BsCodeSquare size={30} className='text-yellow-700'/>
                    <h1 className='text-2xl font-bold'>Web development</h1>
                    <p className='text-gray-700'>I can develop beautiful and attractive website with the latest technologies for your businesses, organizations and personal use based on your requirements. </p>
                </div>
                <div data-aos="zoom-in" className='flex flex-col space-y-4'>
                    <AiOutlineAppstore className='text-orange-500' size={30} />
                    <h1 className='text-2xl font-bold'>Mobile App Development</h1>
                    <p className='text-gray-700'>I can provide you a beautiful and interactive mobile application for your work automation,and efficiency as per your requirements.</p>
                </div>
          </div>
          </div> 
        </div>
    </section>
  )
}

export default Skills