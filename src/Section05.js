import React from 'react'

function Section05() {
  return (
    <div className=' relative'>
      <img src={process.env.PUBLIC_URL+'/images/section05_bg.png'} alt="" className='w-full' data-aos="fade" data-aos-duration="1000"/>
      <div className=' absolute top-1/2 right-20  -translate-y-1/2 w-1/3'>
        <img src={process.env.PUBLIC_URL+'/images/section05_title.png'} alt="" className='my-14' data-aos="fade-down" data-aos-delay="300" data-aos-duration="1000"/>
      </div>
    </div>
  )
}

export default Section05