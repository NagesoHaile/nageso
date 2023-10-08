import React,{useEffect} from 'react'
import about from '../assets/aboutme.svg'
import education from '../assets/education.png'
import { FaUserGraduate } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
   useEffect(()=>{
      AOS.init({duration:2000});
     })
   return (
      <section id='about' className='overflow-x-hidden'>
         <div>
            <h1 className='text-3xl font-bold text-center'>About Me</h1>
         </div>
         <div className='flex flex-col md:flex-row md:space-x-8 '>
            <div className='md:w-1/2'>
               <img src={about} alt='web dev ' data-aos="zoom-out"/>
            </div>
            <div className='md:w-1/2 flex flex-col md:justify-center items-center '>
               <h1 className='text-2xl font-bold text-gray-400'>Who I am?</h1>

               <p className='w-96 mx-4' data-aos="fade-left">
                  My Name is Nageso. I'm Software Developer,
                   with bachelor's degree of science in Computer Science from Arbaminch University, Ethiopia. I'm Passionate about technology and programming, I thrive on solving complex problems. Whether it's building applications or optimizing algorithms, I constantly seek opportunities to learn and grow. Though there wasn't any internet access and infrastructure where I were grew up, I catched the principle of software development within shortest period of time right after I joined University as fresh student. Software development is my creative outlet to shape the future of technology along with our world betterment. Join me in this exciting adventure, as together, through the power of code, we can make a positive impact on our society,as well as in the world.
               </p>

            </div>
         </div>
         <div>
            <div className='py-4'>
               <h1 className='text-3xl font-bold text-center'>Education Background</h1>
            </div>
            <div className='flex flex-col md:flex-row  '>
               <div className='md:w-1/2'>
                  <img src={education} alt='web dev '  data-aos="fade-right"/>
               </div>
               <div className='md:w-1/2 flex flex-col space-y-6 justify-center items-center px-6 '>

                  <div data-aos="fade-left" className='bg-green-200 w-96 h-36 rounded-lg shadow-lg flex items-center px-4 hover:bg-green-300'>
                     <div className='border-r-2 pr-2 border-green-500'>
                        <FaUserGraduate size={30} />
                     </div>
                     <div className='flex flex-col px-4'>
                        <h1 className='text-gray-800 text-2xl font-bold'>High School</h1>
                        <h3 className='font-bold text-gray-600'>Lucy Education Center, Shashemene</h3>
                        <h4 className='text-gray-700 font-bold'>2015-2018</h4>
                     </div>
                  </div>
                  <div data-aos="slide-left" className='bg-green-200 w-96 h-36 rounded-lg shadow-lg flex items-center px-4  hover:bg-green-300'>
                     <div className='border-r-2 pr-2 border-green-500'>
                        <FaUserGraduate size={30} />
                     </div>
                     <div className='flex flex-col px-4'>
                        <h1 className='text-gray-800 text-2xl font-bold'>Bsc. Computer Science</h1>
                        <h3 className='font-bold text-gray-600'>Arbaminch University</h3>
                        <h4 className='text-gray-700 font-bold'>2019-2023</h4>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </section>
   )
}

export default About