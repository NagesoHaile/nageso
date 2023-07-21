import React,{useState} from 'react';
import {CgClose,CgMenu} from 'react-icons/cg'
function App() {
  const [mobileMenuOpen,setmobileMenuOpen] = useState(false);
  return (
    <div className="App">
       <nav className="fixed w-full bg-gray-100 py-3 px-6 top-0 z-20">
         {/* flex container */}
         <div className="flex justify-around items-center ">
            <div className="">
            <h1 className="text-gray-800  font-bold text-2xl">Nageso</h1>
            </div>
            {/* Nav links */}
            <div className="hidden md:flex space-x-6 ">
                <a className="text-green-400 hover:text-green-300 cursor-pointer ">Home</a>
                <a className="hover:text-green-300 cursor-pointer ">About me</a>
                <a className="hover:text-green-300 cursor-pointer ">Resume</a>
            </div>
            <div className="hidden md:block">
              <a className="px-4 py-2 rounded-lg border-2 border-green-300 hover:bg-green-300 hover:text-gray-100 cursor-pointer">Contact me</a>
            </div>
         </div>
         {/* humburger menu */}
         <div className='absolute md:hidden block top-6 right-3'>
          {mobileMenuOpen? (<CgClose onClick={()=>setmobileMenuOpen(false)} className='text-red-900 w-6 h-6 mr-2' />):(<CgMenu onClick={()=>setmobileMenuOpen(true)} className='text-green-950 tw-6 h-6 mr-2'/>)}
         </div>
         {/* mobile menu */}
         <div className={`absolute flex flex-col space-y-4 h-screen bg-gray-500 p-6 z-30 w-2/3 md:hidden top-0 smooth-transition duration-500  ${mobileMenuOpen? 'left-0':'-left-full'}`}>

         </div>
       </nav>
    </div>
  );
}

export default App;
