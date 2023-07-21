import React from 'react'
import {BsLinkedin,BsTelegram,BsFacebook,BsTwitter,BsInstagram,BsGithub, BsGit} from 'react-icons/bs';
import {MdOutlineArrowForwardIos} from  'react-icons/md'
import webdev from '../assets/webdev.svg'
const Hero = () => {
  return (
     <section id='home' className='overflow-x-hidden'>
            {/* flex container */}
            <div className='flex flex-col-reverse md:flex-row py-6 space-y-0  '>
                {/* left container */}
                 <div className=' flex flex-col md:w-1/2 space-y-6 items-center justify-center'>
                      <div className='flex flex-col space-y-2 px-8 justify-center '>
                        <h1 className='text-4xl md:text-6xl font-bold text-gray-800'>Nageso Haile</h1>
                        <h3 className='text-2xl font-bold text-gray-600'>Software Developer</h3>
                        <p className='text-gray-500 w-96'>
                            Welcome to my digital realm! I'm a passionate software developer, dedicated to crafting elegant and efficient solutions. With a love for innovation and a keen eye for detail, I strive to create seamless user experiences and bring ideas to life through code. Let's embark on a journey to build something extraordinary together.
                        </p>
                        <div className='hidden md:flex space-x-3'>
                           
                            <a className='hover:text-green-300 cursor-pointer hover:scale-110 transition-smooth duration-400' href='linkedin'><BsLinkedin size={30} /></a>
                            <a className='hover:text-green-300 cursor-pointer hover:scale-110 transition-smooth duration-400' href='telegram'><BsTelegram size={30} /></a>
                            <a className='hover:text-green-300 cursor-pointer hover:scale-110 transition-smooth duration-400' href='facebook'><BsFacebook size={30}/></a>
                            <a className='hover:text-green-300 cursor-pointer hover:scale-110 transition-smooth duration-400' href='instagram'><BsInstagram size={30} /></a>
                            <a className='hover:text-green-300 cursor-pointer hover:scale-110 transition-smooth duration-400' href='github'><BsGithub size={30} /></a>
                         
                         </div>
                        

                      <div className='py-8 flex w-96'>
                        <a className='py-2 px-4 rounded-lg bg-green-600 font-bold inline-flex items-center space-x-2 justify-center text-gray-300 '>Let's Talk <MdOutlineArrowForwardIos className="text-gray-300" /></a>
                        
                      </div>
                     </div>
                     
                 </div>
                 {/* right container */}
                 <div className=' md:w-1/2 pt-20'>
                 <div className='fixed flex flex-col l-0 t-30   md:hidden space-y-3  bg-gray-200 px-3 py-5 rounded-md'>
                           {/* side social links */}
                           <a className='hover:text-green-300 cursor-pointer hover:scale-110 transition-smooth duration-400' href='linkedin'><BsLinkedin size={30} /></a>
                           <a className='hover:text-green-300 cursor-pointer hover:scale-110 transition-smooth duration-400' href='telegram'><BsTelegram size={30} /></a>
                           <a className='hover:text-green-300 cursor-pointer hover:scale-110 transition-smooth duration-400' href='facebook'><BsFacebook size={30}/></a>
                           <a className='hover:text-green-300 cursor-pointer hover:scale-110 transition-smooth duration-400' href='instagram'><BsInstagram size={30} /></a>
                           <a className='hover:text-green-300 cursor-pointer hover:scale-110 transition-smooth duration-400' href='github'><BsGithub size={30} /></a>
                        
                 </div>
                    <img className='h-1/2 md:h-screen' src={webdev} alt='web developer image' />
                    
                 </div>
                
            </div>
             
             
     </section>
  )
}

export default Hero