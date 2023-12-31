import React,{useEffect} from 'react'
import {BsLinkedin,BsTelegram,BsFacebook,BsTwitter,BsInstagram,BsGithub, BsGit} from 'react-icons/bs';
import {MdOutlineArrowForwardIos} from  'react-icons/md'
import webdev from '../assets/webdev.svg'
import nageso from '../assets/nageso.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
   useEffect(()=>{
      AOS.init({duration:2000});
     })
  return (
     <section id='home' className='overflow-x-hidden'>
            {/* flex container */}
            <div className='flex flex-col-reverse md:flex-row py-6 space-y-0 bg-primary '>
                {/* left container */}
                 <div className=' flex flex-col md:w-1/2 space-y-6 items-center justify-center'>
                      <div className='flex flex-col space-y-2 px-8 justify-center items-center md:items-start '>
                        <h1 className='text-4xl md:text-6xl font-bold text-gray-800'>Nageso Haile</h1>
                        <h3 className=' font-bold italic text-gray-600'  data-aos="fade-right">Software Developer</h3>
                        <p className='text-gray-500 w-96 px-4 md:px-0' data-aos="fade-right" >
                            Welcome to my digital realm! I'm a passionate software developer, dedicated to crafting elegant and efficient solutions. With a love for innovation and a keen eye for detail, I strive to create seamless user experiences and bring ideas to life through code. Let's embark on a journey to build something extraordinary together.
                        </p>
                        <div className='hidden md:flex space-x-3'>
                           
                            <a className='hover:text-green-300 cursor-pointer hover:scale-110 transition-smooth duration-400' href='linkedin'><BsLinkedin size={30} /></a>
                            <a className='hover:text-green-300 cursor-pointer hover:scale-110 transition-smooth duration-400' href='telegram'><BsTelegram size={30} /></a>
                            <a className='hover:text-green-300 cursor-pointer hover:scale-110 transition-smooth duration-400' href='facebook'><BsFacebook size={30}/></a>
                            <a className='hover:text-green-300 cursor-pointer hover:scale-110 transition-smooth duration-400' href='instagram'><BsInstagram size={30} /></a>
                            <a className='hover:text-green-300 cursor-pointer hover:scale-110 transition-smooth duration-400' href='github'><BsGithub size={30} /></a>
                         
                         </div>
                        

                      <div className='py-8 px-4 md:px-0 flex w-96'>
                        <a href='#contact' data-aos="fade-out" className='py-2 px-4 rounded-lg bg-green-600 font-bold inline-flex items-center space-x-2 justify-center text-gray-300 '>Contact me<MdOutlineArrowForwardIos className="text-gray-300" /></a>
                        
                      </div>
                     </div>
                     
                 </div>
                 {/* right container */}
                 <div className=' md:w-1/2 pt-20 '>
                 <div className='fixed flex flex-col l-0 t-30 z-20  md:hidden space-y-3  bg-gray-200 px-3 py-5 rounded-md'>
                           {/* side social links */}
                           <a href='https://www.linkedin.com/in/nageso-haile/'  className='hover:text-green-300 cursor-pointer hover:scale-110 transition-smooth duration-400'  target='_blank'><BsLinkedin size={20} /></a>
                           <a href='https://t.me/Nagesohaile' className='hover:text-green-300 cursor-pointer hover:scale-110 transition-smooth duration-400' target='_blank' ><BsTelegram size={20} /></a>
                           <a className='hover:text-green-300 cursor-pointer hover:scale-110 transition-smooth duration-400' href='https://www.facebook.com/nageso.haile'><BsFacebook size={20}/></a>
                           <a className='hover:text-green-300 cursor-pointer hover:scale-110 transition-smooth duration-400' href='https://github.com/NagesoHaile'><BsGithub size={20} /></a>
                        
                 </div>
                   <div data-aos="zoom-in">
                    <img className='h-1/2 md:h-screen rounded-full z-10 text-center border-2  md:rounded-e-full' src={nageso} alt='web developer image' />
                    </div>
                 </div>
                
            </div>
             
             
     </section>
  )
}

export default Hero