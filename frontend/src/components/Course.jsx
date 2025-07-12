import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import {Link} from 'react-router-dom'
function Course() {
  return (
    <>
    <div className='mt-28 item-center justify-center text-center'>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>here!</span></h1>
        <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem natus commodi ipsum, non optio rem in nemo. Excepturi natus possimus sequi eos. Dignissimos, maxime deleniti officiis explicabo vero culpa aut.
        Deserunt numquam commodi eius necessitatibus expedita rerum harum corrupti optio architecto laboriosam dicta nulla beatae, culpa sed temporibus laborum</p>
        <Link to="/">
          <button className=' mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
        </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
          list.map((item)=>(
            <Cards key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default Course
