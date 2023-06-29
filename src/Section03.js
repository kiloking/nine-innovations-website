import React from 'react'

function Section03() {
  return (
    <div 
    className='w-full min-h-screen  bg-cover bg-top-left bg-no-repeat relative py-10'
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section03_bg.png'})`,
    }}
    >
      <div className='mx-auto py-10 md:py-14 w-4/5  md:w-3/5'>
        <img src={process.env.PUBLIC_URL+'/images/section03_title.png'} alt="" className='' data-aos="fade-down" data-aos-delay="300" data-aos-duration="1000"/>
        <img src={process.env.PUBLIC_URL+'/images/section03_subtitle.png'} alt="" className='my-8 md:my-14 md:w-2/3 mx-auto' data-aos="fade-down" data-aos-delay="300" data-aos-duration="1000"/>
        <img src={process.env.PUBLIC_URL+'/images/section03_p01.png'} alt="" className='md:w-2/3 mx-auto' data-aos="fade-down" data-aos-delay="300" data-aos-duration="1000"/>
      </div>

    </div>
  )
}

export default Section03