import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
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
            <div className="mt-28 flex items-center gap-5 p-10 blue__gradient">
                <img src={detail.animeImg} alt={id} className="w-1/2 h-[700px] rounded-xl shadow-lg shadow-teal-500/80" />
                <div className='text-white p-5'>
                    <h1 className='text-3xl font-bold'>{detail.animeTitle}</h1>
                    <p className='py-5 '>{detail.synopsis}</p>
                    <div className='flex gap-3 py-5'>
                        <h5>Status : {detail.status}</h5>
                        <h5>Released Date : {detail.releasedDate}</h5>
                        <h5>Total Episodes : {detail.totalEpisodes}</h5>
                        <h5 className='flex gap-2'>Genres : {detail.genres?.map(genre => <p key={genre}>{genre},</p>)}</h5>
                    </div>
                </div>
            </div>

            <div className='mt-5 p-5'>
                <h2 className="text-teal-500 font-bold text-2xl p-5">More Episodes..</h2>

                <div className="w-full flex flex-col overflow-hidden">
                    <Swiper slidesPerView="auto" spaceBetween={10} freeMode centeredSlides centeredSlidesBounds modules={[FreeMode]} className=" p-5 overflow-hidden">
                        {detail.episodesList?.map((movie, i) =>
                        (
                            <SwiperSlide key={i} style={{ width: 'auto', height: '200px' }} className="rounded-lg animate-slideright blue__gradient 3rounded-md shadow-md shadow-teal-500/20 overflow-hidden">
                                    <div className='flex flex-col items-center'>
                                        <h1 className='text-white font-poppins text-center text-lg p-3 mb-10 uppercase'>{movie.episodeId}</h1>
                                        <Link to={`/stream/${movie.episodeId}`}>
                                            <div className='w-28 h-10 flex items-center justify-center rounded-md border border-teal-500 shadow-lg shadow-teal-500/80 hover:scale-95 cursor-pointer'>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="none" fill="#14b8a6" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                    <path d="M7 4v16l13 -8z"></path>
                                                </svg>
                                            </div>
                                        </Link>
                                    </div>
                                <h1 className='text-white font-poppins text-lg p-3 mt-5 rounded-md'>{movie.animeTitle}</h1>
                            </SwiperSlide>
                        )
                        )}
                    </Swiper>
                    {/* <div className='flex flex-wrap'>
                        {detail.episodesList?.map((eps, i) => (
                            <div className='flex gap-5 justify-center items-center p-5 m-3 blue__gradient 3rounded-md shadow-md shadow-teal-500/20 w-[550px]'>
                                <img src={detail?.animeImg} alt={detail?.animeTitle} className="w-[200px] rounded-[50px] shadow-md shadow-teal-500/80" />
                                <div className='flex flex-col items-center'>
                                    <h1 className='text-white font-poppins text-center text-lg p-3 mb-10 uppercase'>{eps.episodeId}</h1>
                                    <Link to={`/stream/${eps.episodeId}`}>
                                        <div className='w-28 h-10 flex items-center justify-center rounded-md border border-teal-500 shadow-lg shadow-teal-500/80 hover:scale-95 cursor-pointer'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="none" fill="#14b8a6" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M7 4v16l13 -8z"></path>
                                            </svg>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}

                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Detail