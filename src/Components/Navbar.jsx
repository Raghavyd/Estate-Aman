import React, { use, useEffect, useState } from 'react'
import {assets} from "../assets/assets"
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
const [showMobileMenu,setShowMobileMenu] = useState(false)
  const { loginWithRedirect,user,isAuthenticated,logout } = useAuth0();
console.log("Current user",user);
useEffect(()=>{
if(showMobileMenu){
    document.body.style.overflow='hidden'
} else{
    document.body.style.overflow='auto'
}
return ()=>{
        document.body.style.overflow='auto'

}
},[showMobileMenu])
    return (
        <div className='absolute top-0 left-0 w-full z-10'>
            <div className='container mx-auto flex justify-between bg-transparent items-center py-4 px-6 
            md:px-20 lg:px-32'>
                <img src={assets.logo} alt="" />
                <ul  className='hidden md:flex gap-7 text-white'>
                    <a href="#Header" className=' cursor:pointer hover:bg-gray-400'>Home</a>
                    <a href="#About" className='cursor:pointer hover:bg-gray-400'>About</a>
                    <a href="#Projects" className='cursor:pointer hover:bg-gray-400'>Projects</a>
                    <a href="#Testimonials" className='cursor:pointer hover:bg-gray-400'>Testomonials</a>
               
                </ul>
                
                 {isAuthenticated && <h3 className='text-lg text-white sm:2xl font-light  mb-2'>Welcome,<span
                 className='underline 
            underline-offset-4 decoration-1 text-white font-bold under '>{user.name}</span></h3>}
                {isAuthenticated?<button className='hidden bg-red-400 md:block bg px-8 py-2 rounded-full justify-end' onClick={(e)=>logout()}>Log out</button>
                :<button onClick={(e)=>loginWithRedirect()} 
                className='hidden md:block bg-white px-8 py-2 rounded-full'>Login</button>}
                
            <img src={assets.menu_icon} onClick={()=> setShowMobileMenu(true)} alt="" className='md:hidden w-7 cursor-pointer ' />
            </div>
            {/* for mobile menu */}
            <div className={`md:hidden fixed  w-full ${showMobileMenu? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
                 
                <div className='flex justify-between p-6 cursor-pointer'>
                    <div className=''>
                    {isAuthenticated?<button className=' bg-red-400 md:block bg px-8 py-2 rounded-full ' onClick={(e)=>logout()}>Log out</button>
                :<button onClick={(e)=>loginWithRedirect()} 
                className=' md:block bg-blue-400 px-8 py-2 rounded-full'>Login</button>}
                </div>
                    <img src={assets.cross_icon} onClick={()=> setShowMobileMenu(false)} alt="" className='w-6' />
                    
                </div>
               
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                    <a href="#Header" onClick={()=> setShowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block'>Home</a>
                    <a href="#About"onClick={()=> setShowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block'>About</a>
                    <a href="#Projects"onClick={()=> setShowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block'>Projects</a>
                    <a href="#Testimonials"onClick={()=> setShowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
                    
                </ul>
                
                 
                
               
            </div>

        </div>
    )
}

export default Navbar
