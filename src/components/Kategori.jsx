import React, { useEffect, useState } from 'react'
import { fetchFromAPI } from '../utiliti/fetchData';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper'

import 'swiper/css'
import 'swiper/css/free-mode'
import { categories } from '../utiliti/constant';
import { Link } from 'react-router-dom';

const Kategori = () => {

    const [genres, setGenres] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Adventure");

    console.log('genres', genres);

    useEffect(() => {
        fetchFromAPI(`genre/${selectedCategory}`)
            .then((data) => setGenres(data));
    }, [selectedCategory]);

    return (
        <div>
            <h2 className="text-teal-500 font-bold text-2xl p-5">Genres "{selectedCategory}"</h2>
            <div className="p-5 flex gap-1">
                {categories.map((category) => {
                    return (
                        <button className='w-[100px] h-[35px] bg-teal-500/80 flex items-center justify-center text-white/80 cursor-pointer rounded-md hover:bg-teal-500/50' onClick={() => setSelectedCategory(category.name)} key={category.name}>
                            {category.name}
                        </button>
                    )
                })}
            </div>

            <div className="w-full flex flex-col overflow-hidden">
                <div className="flex flex-row justify-between items-center">
                    <h2 className="text-teal-500 font-bold text-2xl p-5"></h2>
                    {/* <Link to="/top-anime"> */}
                    <p className="text-teal-500 text-base cursor-pointer p-5">See more</p>
                    {/* </Link> */}
                </div>
                <Swiper slidesPerView="auto" spaceBetween={1} freeMode centeredSlides centeredSlidesBounds modules={[FreeMode]} className="mt-4 p-5">
                    {genres?.map((genre, i) =>
                    (
                        <SwiperSlide key={i} style={{ width: '15%', height: '400px' }} className="rounded-full animate-slideright">
                            <Link to={`/detail/${genre.animeId}`}>
                            <img src={genre?.animeImg} alt="name" className="w-[90%] h-[65%] object-cover rounded-[20%] shadow-lg shadow-teal-500/80" />
                            </Link>
                            <h1 className='text-white font-poppins text-lg p-3 mt-5'>{genre.animeTitle}</h1>
                        </SwiperSlide>
                    )
                    )}
                </Swiper>
            </div>
        </div>
    )
}

export default Kategori