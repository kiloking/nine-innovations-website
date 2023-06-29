import React from 'react'

function Section07() {
  return (
    <div 
    className='w-full min-h-screen  bg-cover bg-left bg-no-repeat relative py-10'
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section07_bg.png'})`,
    }}
    >
      <div className='mx-auto py-10 md:py-14 w-4/5  md:w-2/5'>
        <img src={process.env.PUBLIC_URL+'/images/section07_title.png'} alt="" className='' data-aos="fade-down" data-aos-delay="300" data-aos-duration="1000"/>
      </div>
      <div className='flex  flex-col md:flex-row p-6 md:p-0 md:my-10'>
        <div className='mb-5 md:mb-0'>
          <img src={process.env.PUBLIC_URL+'/images/section07_p01.png'} alt="" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000"/>
        </div>
        <div className='mb-5 md:mb-0'>
          <img src={process.env.PUBLIC_URL+'/images/section07_p02.png'} alt="" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000"/>
        </div>
        <div className='mb-5 md:mb-0'>
          <img src={process.env.PUBLIC_URL+'/images/section07_p03.png'} alt="" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000"/>
        </div>

      </div>

    </div>
  )
}

export default Section07