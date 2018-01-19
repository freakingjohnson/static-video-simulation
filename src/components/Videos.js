import React from 'react';
import kittens from '../assets/kittens-puppies.mp4'
import vid1 from '../assets/vid1.mp4'
import vid2 from '../assets/vid2.mp4'
import vid3 from '../assets/vid3.mp4'
import vid4 from '../assets/vid4.mp4'
import '../css/videos.css'

const vidArr = [kittens, vid1, vid2, vid3, vid4]

const Videos = () => {
    const vidMap = vidArr.map(v => (
        <div className='flex-child' key={v}>
            <video
                width={600}
                height={400}
                src={v}
                controls={true}
            />
        </div>
    ))

    return (
        <div className='container'>
            {vidMap}
        </div>
    )
}

export default Videos