import React from 'react'
import Img from 'gatsby-image'

import './coach.scss'

function Coach ({ src, name, title, achievements, description }) {
    return (
        <div className='coachContainer'>
            <div className='coachImage'>
                <Img fluid={ src } alt={ name } />
            </div>
            <h2 className='coach__name'>{ name }</h2>
            <h3 className='coach__title'>{ title }</h3>
            { description && <div className='coach__description'>{ description }</div> }
            { achievements && <Achievements achievements={ achievements } /> }
        </div>
    )
}

function Achievements({ achievements }) {
    return (
        <ul className='coachAchievements'>
            {
                achievements && achievements.map((achievement, i) => <li key={i}>{ achievement }</li>)
            }
        </ul>
    )
}

export default Coach