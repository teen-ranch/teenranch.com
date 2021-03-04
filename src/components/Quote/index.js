import React from 'react'

import Container from 'components/Container'

import './quote.scss'

export default function Quote({ children, cite }) {

    return (
        <Container type='quote' constrain={false}>
            <blockquote>{ children }</blockquote>
            <div className='quote__cite'>{ cite }</div>
        </Container>
    )

}