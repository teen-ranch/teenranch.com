import React from 'react'

import './campSchedule.scss'

export default function CampSchedule({ dates, programs }) {
    return(
        <div className='schedule__container'>
            <div className='schedule__programs'>
                <div className='schedule__spacer'>
                    Program / Date
                </div>
                {
                    programs.map((program, i) => <div key={i} className='schedule__program'>{ program.name }</div>)
                }
            </div>
             <div className='schedule__dates'>
                <div className='schedule__row'
                    style={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(${ dates.length }, 1fr)`
                    }}
                >
                    {
                        dates.map((date, i) => {                             
                            return (
                                <div key={i} className='schedule__date'>{ date }</div>
                            )
                        })
                    }
                </div>
                 {
                     programs.map((program, i) => {
                        return (
                            <div className='schedule__row'
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: `repeat(${ dates.length }, 1fr)`
                                }}
                            >
                                {
                                    program.dates.map((ages, i) => <div key={i} className={`schedule__programDate ${ !ages ? 'schedule__programDate--blank' : '' }`}>{ ages && 'Age: ' }{ ages }</div>)
                                }
                            </div>
                        )
                     })
                 }
             </div>
            
        </div>
    )
}