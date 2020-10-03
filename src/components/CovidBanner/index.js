import React from 'react'

import './covid.scss'
import Container from 'components/Container'

import ExternalLink from 'components/ExternalLink'

export default function Covid() {
    return (
        <Container type='covid'>
            Due to COVID-19 Teen Ranch is running a small set of temporary programs.<br/><ExternalLink href="https://website.teenranch.com">Click here to view our regular programs.</ExternalLink>
        </Container>
    )
}