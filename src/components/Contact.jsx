import React,{useEffect} from 'react'
import {AiOutlineMail,AiOutlinePhone} from 'react-icons/ai'
import {CiLocationOn} from 'react-icons/ci';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
   useEffect(()=>{
      AOS.init({duration:2000});
     })
  return (
    <section id='contact' className='overflow-x-hidden bg-gray-800'>
         <div className='flex flex-col md:flex-row p-16 space-y-8 items-center'>
                
            <div className='flex flex-col space-y-8 md:w-1/2'>
                <h1 className='text-3xl text-gray-300 font-bold mb-8'>Contacts</h1>
                 <div className='flex space-x-6 items-center' data-aos="fade-right">
                    <div className='p-2 rounded-full bg-gray-500 hover:bg-gray-300'>
                       <AiOutlinePhone size={30} className=' ' />
                    </div>
                    <a className='text-gray-300' href='+251974890490'>+251974890490</a>
                 </div>
                 <div className='flex space-x-6 items-center' data-aos="fade-right">
                    <div className='p-2 rounded-full bg-gray-500 hover:bg-gray-300'>
                       <AiOutlineMail size={30} className=' ' />
                    </div>
                    <a className='text-gray-300' href='nagesohaile23@gmail.com'>nagesohaile23@gmail.com</a>
                 </div>
                 <div className='flex space-x-6 items-center' data-aos="fade-right">
                    <div className='p-2 rounded-full bg-gray-500 hover:bg-gray-300'>
                       <CiLocationOn size={30} className=' ' />
                    </div>
                  <address className='text-gray-300'>Addis Ababa, Ethiopia</address>
                 </div>
            </div>
            {/* form */}
            <div className='md:w-1/2 flex flex-col '>
                <h1 className='text-xl text-center text-gray-300 font-semibold'>Don't hasitate to contact us. Send us your feedback.</h1>
             <form class="text-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
                <div class="mb-4">
                <label class="block text-gray-400 text-sm font-bold mb-2" for="username">
                    Name
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="your name" />
                </div>
                <div class="mb-4">
                <label class="block text-gray-400 text-sm font-bold mb-2" for="username">
                    Email
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="youremail@gmail.com" />
                </div>
                <div class="mb-4">
                <label class="block text-gray-400 text-sm font-bold mb-2" for="username">
                    Message
                </label>
                <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="write your message here..." > </textarea>
                </div>
            
            
                <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Send
                </button>
                
    
            </form>
            </div>
         </div>
         <div className='p-4 flex flex-col ' >
            <div className='w-full h-2 text-gray-400'></div>
            <p className='text-gray-400 text-center'>Design by <a className='text-gray-300 hover:text-green-300 cursor-pointer'>Nageso Haile</a></p>
            <p class="text-center text-gray-500 text-xs">
                &copy;2023 Nageso Haile. All rights reserved.
            </p>
            
         </div>
    </section>
  )
}

export default Contact;