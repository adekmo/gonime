import React, { useEffect, useState } from 'react'
import { fetchFromAPI } from '../utiliti/fetchData';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper'

import 'swiper/css'
import 'swiper/css/free-mode'

const NewEpisode = () => {
    const [episode, setEpisode] = useState([]);

    console.log('eps', episode);

    useEffect(() => {
        fetchFromAPI(`recent-release`)
            .then((data) => setEpisode(data.slice(0, 10)));

    }, []);
    return (
        <div className="">
            <div className="w-full flex flex-col overflow-hidden">
                <div className="flex flex-row justify-between items-center">
                    <h2 className="text-teal-500 font-bold text-2xl p-5">New Episodes</h2>
                    {/* <Link to="/top-anime"> */}
                    <p className="text-teal-500 text-base cursor-pointer p-5">See more</p>
                    {/* </Link> */}
                </div>
                <Swiper slidesPerView="auto" spaceBetween={1} freeMode centeredSlides centeredSlidesBounds modules={[FreeMode]} className="mt-4 p-5">
                    {episode?.map((eps, i) =>
                    (
                        <SwiperSlide key={i} style={{ width: '16.5%', height: '400px' }} className="rounded-full animate-slideright">
                            {/* <Link to={`/artists/${song?.artists[0].adamid}`}> */}
                            <img src={eps?.animeImg} alt="name" className="w-[90%] h-[55%] object-cover rounded-[20%] shadow-lg shadow-teal-500/80" />
                            {/* </Link> */}
                            <h1 className='text-white font-poppins text-lg p-3 mt-5'>{eps.animeTitle}</h1>
                            <div className="flex justify-start items-center gap-1">
                                <h2 className="text-white/50 font-poppins text-md p-3"><span className="text-teal-500">Episode</span> : {eps.episodeNum}</h2>
                                <div className="w-[100px] h-[35px] bg-teal-500/80 flex items-center justify-center text-white/80 cursor-pointer rounded-md hover:bg-teal-500/50">
                                    Watch
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-player-play ml-1" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="none" fill="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M7 4v16l13 -8z"></path>
                                    </svg>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                    )}
                </Swiper>
            </div>
        </div>
    )
}

export default NewEpisode