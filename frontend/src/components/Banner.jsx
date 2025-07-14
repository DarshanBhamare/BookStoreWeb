import React from 'react'
import banner from '../../public/Banner.jpg'
const Banner = () => {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className='w-full md:w-1/2 mt-12 md:mt-32'>
        <div className='space-y-12'>
            <h1 className='text-4xl font-bold'>Hello, welcomes you in Darshan Bhamare's Bookstore <span className='text-pink-500'>everyday!!!</span></h1>
            <p className='text-xl'>"Find your next great read at our online bookstore. Browse, explore, and enjoy books across all categories!"</p>
            <input type="text" placeholder="Email" className="input input-ghost" />
        </div>
        <button className="btn mt-6 btn-secondary">Enjoy Reading</button>
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
