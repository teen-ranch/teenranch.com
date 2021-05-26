import React from 'react'

import { Link } from '@reach/router'

import './button.scss'

export default function Button({ children, style, className, to, href, onClick, target, rel }) {
    
    const defaultClassName = `button ${ className ? className : '' }`

    const ELEMENT_TYPES = {
        link: {
            element: Link,
            properties: {
                style,
                className: defaultClassName,
                to
            }
        },
        button: {
            element: 'button',
            properties: {
                style,
                className: defaultClassName,
                onClick,
                type: 'button'
            }
        },
        externalLink: {
            element: 'a',
            properties: {
                style,
                className: defaultClassName,
                href,
                target,
                rel: `noopener noreferrer${ rel ? ` ${rel}` : '' }`
            }
        }
    }

    const elementType = to ? ELEMENT_TYPES.link : href ? ELEMENT_TYPES.externalLink : ELEMENT_TYPES.button

    const El = elementType.element

    return <El { ...elementType.properties }>{ children }</El>
}

export function PrimaryButton({ ...rest }) {
    return <Button className='primary' {...rest} />
}

export function SecondaryButton({ ...rest }) {
    return <Button className='secondary' { ...rest } />
}

export function CTAButton({ ...rest }) {
    return <div className='buttonContainer'><Button className='cta' { ...rest }/></div>
}