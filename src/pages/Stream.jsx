import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utiliti/fetchData';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper'

import 'swiper/css'
import 'swiper/css/free-mode'



const Stream = () => {
  const { id } = useParams();

  const [stream, setStream] = useState([]);
  const [thread, setThread] = useState([]);

  console.log('stream', thread);


  useEffect(() => {
    fetchFromAPI(`vidcdn/watch/${id}`)
      .then((data) => setStream(data.Referer));

    fetchFromAPI(`thread/${id}`)
      .then((data) => setThread(data.comments));

  }, [])


  return (
    <div className='p-10 flex gap-5 h-screen'>
      <div>
        <h1 className='mt-28 text-xl text-white uppercase mb-5'>{id}</h1>
        <iframe
          width="1060"
          height="615"
          src={stream}
          title={id}
          frameBorder="10"
          allowFullScreen
        />
      </div>
      <div className='mt-40 h-[715px]'>
        <h2 className="text-white font-bold text-2xl px-5">Comments</h2>
        <Swiper slidesPerView="auto" direction="vertical" spaceBetween={1} freeMode centeredSlides centeredSlidesBounds modules={[FreeMode]} className="mt-4 p-5">
          {thread?.map((movie, i) =>
          (
            <SwiperSlide key={i} style={{ width: '80%', height: '1%' }} className="rounded-full animate-slideright">
              <div key={i} className="flex flex-col gap-3 p-3 mb-4 border border-teal-500/20 blue__gradient rounded-md shadow-md shadow-teal-500/20">
              <div className='flex items-center gap-5'>
                <img src={movie.author.avatar.small.permalink} alt={movie.author.name} className='text-white w-12 rounded-full' />
                <p className='text-white'>{movie.author.name}</p>
              </div>
              <p className='text-white'>{movie.raw_message}</p>
            </div>
            </SwiperSlide>
          )
          )}
        </Swiper>
        {/* {thread.map((thr, i) => {
          return (
            <div key={i} className="flex flex-col gap-3 p-3 mb-4 border border-teal-500/20 blue__gradient 3rounded-md shadow-md shadow-teal-500/20">
              <div className='flex items-center gap-5'>
                <img src={thr.author.avatar.small.permalink} alt="" className='text-white w-12 rounded-full' />
                <p className='text-white'>{thr.author.name}</p>
              </div>
              <p className='text-white'>{thr.raw_message}</p>
            </div>
          )
        })} */}
      </div>
    </div>
  )
}

export default Stream