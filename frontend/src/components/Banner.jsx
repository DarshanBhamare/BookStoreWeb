import React from 'react'
import banner from '../../public/Banner.jpg'
const Banner = () => {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className='w-full md:w-1/2 mt-12 md:mt-32'>
        <div className='space-y-12'>
            <h1 className='text-4xl font-bold'>Hello, welcomes here to learn something <span className='text-pink-500'>new everyday!!!</span></h1>
            <p className='text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. debitis explicabo repudiandae accusantium, cum quas. Quos sint corrupti saepe molestias facilis, natus odio voluptatum quibusdam perferendis laboru</p>
            <input type="text" placeholder="Email" className="input input-ghost" />
        </div>
        <button className="btn mt-6 btn-secondary">Secondary</button>
        </div>
        <div className='w-full md:w-1/2'>
        <img src={banner} className="w-85 h-85"alt="">
        
        </img>
        </div>
    </div>
    </>
  )
}

export default Banner
