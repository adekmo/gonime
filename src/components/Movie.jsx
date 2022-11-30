import React, { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { movie } from '../store'

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper'

import 'swiper/css'
import 'swiper/css/free-mode'

const Movie = () => {
    const { mov } = useRecoilValue(movie);

    const movies = mov.slice(0, 10);

    console.log('mov', movies);

    useEffect(() => {

    }, [])
    

  return (
    <div className="mt-5">
            <div className="w-full flex flex-col overflow-hidden">
                <div className="flex flex-row justify-between items-center">
                    <h2 className="text-teal-500 font-bold text-2xl p-5">Movies</h2>
                    {/* <Link to="/top-anime"> */}
                    <p className="text-teal-500 text-base cursor-pointer p-5">See more</p>
                    {/* </Link> */}
                </div>
                <Swiper slidesPerView="auto" spaceBetween={5} freeMode centeredSlides centeredSlidesBounds modules={[FreeMode]} className="mt-4 p-5">
                    {movies?.map((movie, i) =>
                    (
                        <SwiperSlide key={i} style={{ width: '25%', height: '400px' }} className="rounded-full animate-slideright">
                            {/* <Link to={`/artists/${song?.artists[0].adamid}`}> */}
                                <img src={movie?.animeImg} alt="name" className="w-[90%] h-[75%] object-cover rounded-[20%] shadow-lg shadow-teal-500/80" />
                            {/* </Link> */}
                                <h1 className='text-white font-poppins text-lg p-3 mt-5 rounded-md'>{movie.animeTitle}</h1>
                        </SwiperSlide>
                    )
                    )}
                </Swiper>
            </div>
        </div>
  )
}

export default Movie