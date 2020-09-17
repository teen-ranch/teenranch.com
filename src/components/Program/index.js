import React from 'react'

import { Img } from 'components/Tueri'

import './program.scss'

export default function Program({ src, name, children, swap, imageOptions }) {
    return (
        <div className={`programContainer ${ swap ? 'programContainer--swap' : '' }`}>
            <div className='programImage'>
                <Img src={src} alt={name} options={ imageOptions } />
            </div>
            <div className='programBody'>
                <h3>{ name }</h3>
                { children }
            </div>
        </div>
    )
}