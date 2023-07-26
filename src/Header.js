import React from 'react'
import { FaFacebook } from "react-icons/fa";
function Header() {
  return (
    <div 
      className=' relative'
    >
      <img src={process.env.PUBLIC_URL+'/images/header_bg.png'} alt="" className='w-full' data-aos="fade" data-aos-duration="1000"/>
      <div className=' absolute top-[15%] left-1/2 -translate-x-1/2 '>
        <img src={process.env.PUBLIC_URL+'/images/header_logo.png'} alt="" className='w-[70%] mx-auto' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"/>
        <img src={process.env.PUBLIC_URL+'/images/header_title.png'} alt="" className='my-14' data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000"/>
      </div>
      <div className=' absolute top-5 left-5 text-white'>
        <a href="https://www.facebook.com/profile.php?id=100094412557233" target="_blank" ><FaFacebook size={30}/></a>
      </div>
    </div>
  )
}

export default Header