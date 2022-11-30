import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utiliti/fetchData';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper'

import 'swiper/css'
import 'swiper/css/free-mode'

const Detail = () => {
    const { id } = useParams();

    const [detail, setDetail] = useState([]);

    console.log('detail', detail);

    useEffect(() => {
        fetchFromAPI(`anime-details/${id}`)
            .then((data) => setDetail(data));
    }, [id])


    return (
        <div>
            <div className="flex items-center gap-5 p-5">
                <img src={detail.animeImg} alt={id} className="w-1/2 h-[700px] rounded-xl shadow-lg shadow-teal-500/80" />
                <div className='text-white p-5'>
                    <h1 className='text-3xl font-bold'>{detail.animeTitle}</h1>
                    <p className='py-5 '>{detail.synopsis}</p>
                    <div className='flex gap-3 py-5'>
                        <h5>Status : {detail.status}</h5>
                        <h5>Released Date : {detail.releasedDate}</h5>
                        <h5>Total Episodes : {detail.totalEpisodes}</h5>
                        <h5 className='flex gap-2'>Genres : {detail.genres?.map(genre => <p>{genre},</p>)}</h5>
                    </div>
                    <div className='w-28 h-10 flex items-center justify-center rounded-md border border-teal-500 shadow-lg shadow-teal-500/80 hover:scale-95 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="none" fill="#14b8a6" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M7 4v16l13 -8z"></path>
                        </svg>
                    </div>
                </div>
            </div>

            <div className='mt-5 p-5'>
                <h2 className="text-teal-500 font-bold text-2xl p-5">More Episodes..</h2>

                <div className="w-full flex flex-col overflow-hidden">
                    <div className="flex flex-row justify-between items-center">
                        <h2 className="text-teal-500 font-bold text-2xl p-5"></h2>
                    </div>
                    <Swiper slidesPerView="auto" spaceBetween={1} freeMode centeredSlides centeredSlidesBounds modules={[FreeMode]} className="p-5">
                        {detail.episodesList?.map((eps, i) =>
                        (
                            <SwiperSlide key={i} style={{ width: '15%', height: '400px' }} className="rounded-full animate-slideright">
                                {/* <Link to={`/detail/${genre.animeId}`}> */}
                                <img src={detail?.animeImg} alt="name" className="w-[90%] h-[65%] object-cover rounded-[20%] shadow-lg shadow-teal-500/80" />
                                {/* </Link> */}
                                <h1 className='text-white font-poppins text-lg p-3 mt-5'>{eps.episodeId}</h1>
                            </SwiperSlide>
                        )
                        )}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Detail