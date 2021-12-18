import React from "react";
import VideoItem from "./videoitem";

const VideoList = ({videos,handleVideoSelect})=>{
    const renderVideos = videos.map((video)=>{
        return <VideoItem key={video.id.videoId} video={video}
            handleVideoSelect={handleVideoSelect}/>
    });
    return <div className='ui relaxed divided list'>{renderVideos}</div>
};
export default VideoList;