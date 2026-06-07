import React from 'react'
import { assets } from '../assets/assets'
import { ArrowRight, CalendarIcon, ClockIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {

    const navigate = useNavigate()

  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("./assets/backgroundImage.webp")] 
    bg-cover bg-center h-screen'>
        
        {/* <img src={assets.a24logo} alt="" className='max-h-11 lg:h-11 mt-20' /> */}
        
        <h1 className='text-5x1 md:text-[70px] md:leading-18 font-semibold max-w-110'>Obsession</h1>

        <div className='flex items-center gap-4 text-gray-300'>
            <span>Horror | Triller</span>
            <div className='flex items-center gap-1'>
                <CalendarIcon className='w-4.5 h-4.5' /> 2026
            </div>
            <div className='flex items-center gap-1'>
                <ClockIcon className='w-4.5 h-4.5' /> 1h 40m
            </div>
        </div>

        <p className='max-w-md text-gray-300'>After breaking the mysterious "One Wish Willow" to win his crush's heart, a hopeless romantic finds himself getting exactly what he asked for but soon discovers that some desires come at a dark, sinister price.</p>
        <button onClick={()=> navigate('/movies')} className='flex items-center gap-1 px-6 py-3 text-sm bg-primary
        hover:bg-pramary-dull transition rounded-full font-medium cursor-pointer'>
            Explore Movies
            <ArrowRight className='w-5 h-5' />
        </button>
    </div>
  )
}

export default HeroSection