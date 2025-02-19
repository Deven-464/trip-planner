import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
    <h1 className='font-extrabold text-[60px] text-center mt-20'><span className='text-[#204c64]'>Lorem ipsum, dolor sit amet</span><br></br> consectetur adipisicing elit. Odit dolore.</h1>
    <p className='text-2xl text-[#8a3e2d] text-center mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, officiis? Provident temporibus earum<br></br> odit assumenda minus quasi quia.</p>
    <Link to={'/create-trip'}>
    <Button>Get Stared, It's Free</Button>
    </Link>
    </div>

  )
}

export default Hero