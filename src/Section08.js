import React from 'react'

function Section08() {
  return (
    <div 
    className='w-full  bg-cover bg-top-left bg-no-repeat relative py-10'
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section08_bg.png'})`,
    }}
    >
      <div className='mx-auto py-10 md:py-10 w-4/5  md:w-3/5'>
        <img src={process.env.PUBLIC_URL+'/images/section08_title.png'} alt="" className='' data-aos="fade-down" data-aos-delay="300" data-aos-duration="1000"/>

      </div>
      <div className='mx-auto py-10 md:py-10 w-4/5  md:w-4/5'>
        <img src={process.env.PUBLIC_URL+'/images/section08_p01.png'} alt="" className='' data-aos="fade-down" data-aos-delay="300" data-aos-duration="1000"/>

      </div>

    </div>
  )
}

export default Section08