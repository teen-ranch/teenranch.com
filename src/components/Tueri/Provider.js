import React, { createContext, useContext, useState, useEffect } from 'react'

const TueriContext = createContext()

export default function TueriProvider({ children, replacements = [] }) {

    const [ isLoaded, setIsLoaded ] = useState(false)
    const [ browserSupport, setBrowserSupport ] = useState({ webp: false })

    useEffect(() => {
        const webpSupport = checkWebpSupport()
        setBrowserSupport({ webp: webpSupport })
        setIsLoaded(true)
    }, [])

    function checkWebpSupport() {

        if (!window.createImageBitmap) return false

        const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
        return fetch(webpData)
        .then(r => r.blob())
        .then(blob => createImageBitmap(blob).then(() => true, () => false))
    }

    if (!isLoaded) return null

    return(
        <TueriContext.Provider
            value={{ browserSupport, replacements }}
        >
            { children }
        </TueriContext.Provider>
    )

}

export function useTueri() {
    return useContext(TueriContext)
}