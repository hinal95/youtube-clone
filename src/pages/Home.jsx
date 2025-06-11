
import React, { useEffect, useState } from 'react'
import FilterBar from '../components/FilterBar'
import VideoCard from '../components/VideoCard'
import { useLocation } from 'react-router-dom'
import axios from '../data/axios'

const Home = () => {
  const [videos, setVideos] = useState([]);
  useEffect(()=>{
    axios.get('/video').then((res)=>{
      setVideos(res.data)
    })
  },[])
  const {search} = useLocation();
  const query = new URLSearchParams(search).get('q')?.toLowerCase() || "";
  const filteredVideos = videos.filter((v)=>v.title.toLowerCase().includes(query))
  return (
    <div>
      {/* <Header/> */}
      <FilterBar/>
      <div className='m-6 w-full grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 '>
        {filteredVideos.map((video)=>(
          <VideoCard video={video} key={video.videoId}/>
        ))}
      </div>
    </div>
  )
}

export default Home