import React from "react";
import './styles/video.css'

const VideoItem = ({video, handleVideoSelect})=>{
    return (
        <div className='dark:bg-gray-800 flex m-2 rounded-lg bg-white' onClick={()=>handleVideoSelect(video)} >
            <div className="p-5 bg-blue-200">
            <img src={video.snippet.thumbnails.high  .url} alt ={video.snippet.description}/>
            </div> 
                <div className=" dark:text-white-800 w-full p-20 font-medium text-gray-800 md:text-2xl">{video.snippet.title}</div>
            
        </div>
    )
}
export default VideoItem;