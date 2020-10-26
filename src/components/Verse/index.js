import React from 'react'

import './verse.scss'

export default function Verse({ reference, translation, children }) {

    return (
        <div className='verseContainer'>
            <div className='verseText'>"{ children }"</div>
            <div className='verseReference'>- { reference }{ translation && ` (${ translation })` }</div>
        </div>
    )

}