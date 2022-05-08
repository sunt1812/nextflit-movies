import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import './video.scss'

const Video = () => {
    const [isMuted, setIsMuted] = useState(false);
  return (
    <div className="video" id="video">
        <ReactPlayer 
        playing={false}
        loop={true}
        volume={1}
        muted={isMuted}
        width='100%'
        height='100%'
        url='https://vimeo.com/273686020' 
        className="video__intro"
        />
        <div className="video__info">
            <h2 className="video__info__title">
                Netflix Heartstrings
            </h2>
            <p className="video__info__desc">We worked with Netflix and Dolly Parton creating teasers and promotional content for her new show Heartstrings.</p>
        </div>
        <div className="video__volume">
            {isMuted ?<i className='bx bx-volume-mute' onClick={() => setIsMuted(!isMuted)}></i>:<i className='bx bx-volume-full' onClick={() => setIsMuted(!isMuted)}></i>}
        </div>
    </div>
  )
}

export default Video