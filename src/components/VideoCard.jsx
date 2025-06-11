import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({video}) => {
  return (
    <div className='h-66 shadow rounded-lg overflow-hidden w-80 object-cover'>
    <Link to={`/video/${video.videoId}`} >
      <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="w-full h-38 " ></img>
          <div className='p-2'>
            <h3 className='font-semibold text-md truncate'>{video.title}</h3>
            <p className="text-sm text-gray-600">{video.uploader}</p>
            <p className="text-sm text-gray-500">{video.views.toLocaleString()} views</p>
          </div>
    </Link>
       <Link to={`/channel/${video.channelId}`} className="text-blue-600 underline p-3">
             Visit Channel
      </Link>
        </div>
  )
}

export default VideoCard