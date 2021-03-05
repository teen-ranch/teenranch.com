import React from 'react'

import './grid.scss'

export default function Grid({ children, gap = true, gapSize = '2rem', xs = 1, sm = 1, md = 1, lg = 1, xl = 1, className }) {

    return <div style={{ gap: gapSize }} className={`gridContainer ${ className } ${ gap ? '' : 'gridContainer--noGap' }  ${ `grid-xs-${ xs }` }  ${ `grid-sm-${ sm }` }  ${ `grid-md-${ md }` }  ${ `grid-lg-${ lg }` } ${ `grid-xl-${ xl }` }`}>{ children }</div>

}