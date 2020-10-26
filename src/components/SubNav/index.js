import React from 'react'
import Container from 'components/Container'

import './subNav.scss'

export default function SubNav({ children }) {
    return (
        <Container type='subNav'>
            { children }
         </Container>
    )
}