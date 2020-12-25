import React from 'react'

import './card.scss'

export default function Card({ style, children }) {

    return <div className='cardContainer' style={style}>{ children }</div>

}