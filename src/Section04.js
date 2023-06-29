import React from 'react'

function Section04() {
  return (
    <div 
    className='w-full min-h-screen  bg-cover bg-top-left bg-no-repeat relative py-10'
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section04_bg.png'})`,
    }}
    >
      <div className='mx-auto py-10 md:py-24 w-4/5 items-center justify-between  flex flex-col md:flex-row gap-10'>
        <div className='md:w-4/12'>
          <img src={process.env.PUBLIC_URL+'/images/section04_title.png'} alt="" className='' data-aos="fade" data-aos-delay="300" data-aos-duration="1000"/>
        </div>
        <div className='md:w-1/2'>
          <img src={process.env.PUBLIC_URL+'/images/section04_p01.png'} alt="" className='w-full ' data-aos="fade" data-aos-delay="500" data-aos-duration="1000"/>
        </div>
      </div>

    </div>
  )
}

export default Section04