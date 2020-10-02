import React from 'react'

import './video.scss'

const SOURCES = [
    'youtube',
    'vimeo'
]

export default function Video({ src }) {
    let type = ''
    SOURCES.map(source => {
        if (src.indexOf(source) !== -1) {
            return type = source
        }
        return null
    })

    if (type === 'youtube') {
        return (
            <div className='video-responsive'>
                <iframe width="560"
                    title={src}
                    height="315" 
                    src={`${ src }?rel=0`}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                />
            </div>
        )
    }

    if (type === 'vimeo') {
        return (
            <div className='video-responsive'>
                <iframe 
                    title={src}
                    src={`${ src }`} 
                    width="" 
                    height="480" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen" 
                    allowFullScreen
                />
            </div>
        )
    }

    return null

}