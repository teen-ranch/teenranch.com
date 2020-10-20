import React from 'react'

import { Img } from 'components/Tueri'
import GatsbyImg from 'gatsby-image'

import './program.scss'

export default function Program({ src, name, children, swap, imageOptions }) {
    return (
        <div className={`programContainer ${ swap ? 'programContainer--swap' : '' }`}>
            <div className='programImage'>
                { typeof src === 'string' ? (
                    <Img src={src} alt={name} options={ imageOptions } />
                ) : (
                    <GatsbyImg fluid={ src } alt={name} />
                ) }
            </div>
            <div className='programBody'>
                <h3>{ name }</h3>
                { children }
            </div>
        </div>
    )
}