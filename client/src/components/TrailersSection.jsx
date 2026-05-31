import React, { useState } from 'react'
import { dummyTrailers } from '../assets/assets'
import BlurCircle from './BlurCircle'
import { PlayCircleIcon } from 'lucide-react'

const getYoutubeEmbedUrl = (videoUrl) => {
    const url = new URL(videoUrl)
    const videoId = url.searchParams.get('v')

    return videoId ? `https://www.youtube.com/embed/${videoId}` : videoUrl
}

const TrailersSection = () => {

    const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0])

    return (
        <div className='px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden'>
            <p className='text-gray-300 font-medium text-lg max-w-[960px]'>
                Trailers
            </p>

            <div className='relative mt-6 mx-auto w-full max-w-[960px]'>
                    <BlurCircle top='10px' right='-70px' />
                    <BlurCircle top='300px' right='800px' />
                <div className='relative aspect-video overflow-hidden rounded-2xl'>
                <iframe
                    className='absolute inset-0 h-full w-full'
                    src={getYoutubeEmbedUrl(currentTrailer.videoUrl)}
                    title='Trailer'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    allowFullScreen
                />
                </div>
            </div>

            <div className='group grid grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto'>
                {dummyTrailers.map((trailer)=> (
                    <div key={trailer.image} className='relative group-hover:not-hover:opacity-50 hover:-translate-y-1 duration-300
                    transition max-md:h-60 md:max-h-60 cursor-pointer' onClick={()=>
                        setCurrentTrailer(trailer)}>
                        <img src={trailer.image} alt="trailer" className='rounded-lg w-full
                        h-full object-cover brightness-75' />
                        <PlayCircleIcon strokeWidth={1.6} className="absolute top-1/2
                        left-1/2 w-5 md:w-8 h-5 md:h-12 transform -translate-x-1/2 -translate-y-1/2" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TrailersSection