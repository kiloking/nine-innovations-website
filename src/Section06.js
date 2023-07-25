import React from 'react'

function Section06() {
  return (
    <div className='flex flex-col md:flex-row'>
      <div
        className='w-full  bg-cover bg-top-left bg-no-repeat relative '
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section06_p01.png'})`,
        }}
      >
        {/* <img src={process.env.PUBLIC_URL+'/images/section06_p01.png'} alt="" /> */}
      </div>
      <div
          className='w-full  bg-cover bg-top-left bg-no-repeat relative py-10'
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section06_bg.png'})`,
          }}
      >
        <div className='p-28'>
          <img src={process.env.PUBLIC_URL+'/images/section06_title.png'} alt="" />
        </div>
      
      </div>
    </div>
  )
}

export default Section06