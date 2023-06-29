import React from 'react'

function Section01() {
  return (
    <div className=' relative'>
      <img src={process.env.PUBLIC_URL+'/images/section01_bg.png'} alt="" className='w-full' data-aos="fade" data-aos-duration="1000"/>
      <div className=' absolute top-[5%] left-1/2 -translate-x-1/2  w-2/3'>
        <img src={process.env.PUBLIC_URL+'/images/section01_title.png'} alt="" className='my-14' data-aos="fade-down" data-aos-delay="300" data-aos-duration="1000"/>
      </div>
    </div>
  )
}

export default Section01