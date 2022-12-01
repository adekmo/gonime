import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utiliti/fetchData';

const SearchFeed = () => {

    const [videos, setVideos] = useState([]);

    console.log('videos', videos);

    const { searchTerm } = useParams();

    useEffect(() => {
        fetchFromAPI(`search?keyw=${searchTerm}`)
            .then((data) => setVideos(data))
    }, [searchTerm]);

    return (
        <div className='h-screen'>
            <h1 className='text-white mt-28 px-5 text-2xl font-bold'>Search : <span className='text-teal-500'>{searchTerm}</span></h1>
            <div className="mt-10 px-5 flex flex-wrap gap-5">
                {videos.map((video, id) => {
                    return (
                        <div key={id} className="mb-5 w-[30%] flex gap-5 p-5 blue__gradient rounded-xl shadow-md shadow-teal-500/80">
                            <img src={video.animeImg} alt={video.animeTitle} className="w-44 rounded-lg" />
                            <div className='flex flex-col gap-5 justify-center'>
                                <h1 className='text-white font-bold text-2xl'>{video.animeTitle}</h1>
                                <p className='text-white/80'>{video.status}</p>
                                <Link to={`/detail/${video.animeId}`}>
                                <div className='w-28 h-10 flex items-center justify-center rounded-md border border-teal-500 shadow-lg shadow-teal-500/80 hover:scale-95 cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="none" fill="#14b8a6" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M7 4v16l13 -8z"></path>
                                    </svg>
                                </div>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SearchFeed