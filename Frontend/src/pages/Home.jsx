import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
        <div className='bg-cover bg-center bg-[url(https://i.pinimg.com/736x/ff/36/41/ff3641eba952aeccd1e66fb2fd803844.jpg)] h-screen pt-8 flex justify-between flex-col w-full bg-red-400'>
            <img className='w-16 ml-8' src="https://www.edigitalagency.com.au/wp-content/uploads/Uber-logo-white-png-900x313.png" alt="" />
            <div className='bg-white pb-7 py-4 px-4'>
                <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-mt-5'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home