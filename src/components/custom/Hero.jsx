import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
    <h1 className='font-extrabold text-[60px] text-center mt-20'><span className='text-[#204c64]'>Your Dream Trip. One Click Away.</span><br></br> <span className='text-[50px]'>Let our AI craft your perfect travel plan — personalized, budget-friendly, and ready to book.</span></h1>
    <p className='text-2xl text-[#8a3e2d] text-center mt-2'>Satish & Sai's AI Trip Planner helps you discover destinations, create personalized itineraries, and book everything in one place<br></br> from hotels and flights to hidden gems and local experiences.</p>
    <Link to={'/create-trip'}>
    <Button>Get Stared, It's Free</Button>
    </Link>
    </div>

  )
}

export default Hero