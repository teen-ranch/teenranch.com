import React from 'react'

import Grid from 'components/Grid'
// import Container from 'components/Container'

import './price.scss'

export function Price({ title, subTitle, who, price, term, includes, primary = false, startingAt, children }) {
    return (
        <section className={`price__container ${ primary ? 'price__container--primary' : '' }`}>
            {/* { primary && <div className='price__mostPopular'>Most popular</div> } */}
            <h1 className='price__title'>{ title }</h1>
            <h2 className='price__subTitle'>{ subTitle }</h2>
            <div className='price'>{ startingAt && <div className='startingAt'>Starting at</div> }${ new Intl.NumberFormat('en-US').format(price) } <span className='term'>/{ term }</span></div>
            <div className='price__who'>{ who }</div>
            {
                includes && (
                    <ul className='price__includesList'>
                        { includes.map((item, i) => <li key={i}>{ item }</li>) }
                    </ul>
                )
            }
            { children }
        </section>
    )
}

export function PriceContainer({ children }) {
    return (
        <div className='price__containerGrid'>
            <Grid md='2' xl='4' gapSize='3rem'>
                { children }
            </Grid>
        </div>
    )
}

export function PriceAddon({ title, subTitle, description, price, term }) {
    return (
        <section className='price__addonContainer'>
            <div className='price__addonBody'>
                <h1>
                    { title }
                    {
                        subTitle && (
                            <span className='subTitle'> ({ subTitle })</span>
                        )
                    }
                </h1>
                <p>{ description }</p>
            </div>
            <div className='price__addonPrice'>${ new Intl.NumberFormat('en-US').format(price) } <span>/{ term }</span></div>
        </section>
    )
}