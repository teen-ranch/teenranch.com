import React from 'react'

export default function Container({ type = 'body', constrain = true, style, children }) {

    return (
        <section className={`container ${ type ? ` container--${ type }` : ''  }`} style={ style }>
            <Constrain constrain={ constrain }>
                {
                    children
                }
            </Constrain>
        </section>
    )

}

export function Constrain({ constrain, children }) {
    if (!constrain) return <>{ children }</>
    return (
        <div className='constrain'>{ children }</div>
    )
}