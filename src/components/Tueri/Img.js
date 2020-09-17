import React, { useState, useRef, useEffect } from 'react'
import { useTueri } from './Provider'
import { withOrientationChange } from 'react-device-detect'

function Img({ src, ratio, portraitRatio, options = {}, buffer = 2, alt, isPortrait }) {

    // const { browserSupport, replacements } = useTueri()

    const tueri = useTueri()
    const { browserSupport, replacements } = tueri || {}

    // const browserSupport = 'false'
    // const replacements = []

    const [ isInViewport, setIsInViewport ] = useState(false)
    const [ params, setParams ] = useState({ width: 0, height: 0 })
    // const [ placeholderIsLoaded, setPlaceholderIsLoaded ] = useState(false)
    const [ imageIsLoaded, setImageIsLoaded ] = useState(false)

    const ref = useRef(null)

    useEffect(() => {
        window.addEventListener('scroll', handleScrollEvent)
        return () => window.removeEventListener('scroll', handleScrollEvent)
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleResizeEvent)
        return () => window.removeEventListener('scroll', handleResizeEvent)
        // eslint-disable-next-line
    }, [])

    useEffect(() => {

        if (ref.current) {

            const width = ref.current.clientWidth
            const height = ref.current.clientHeight
            const isCurrentlyInViewport = checkViewport()

            setParams({
                width,
                height
            })

            setIsInViewport(isCurrentlyInViewport)

        }
        // eslint-disable-next-line
    }, [ref.current])

    function handleScrollEvent() {
        // if (ref.current && !placeholderIsLoaded) {
            const isCurrentlyInViewport = checkViewport()
            if (isCurrentlyInViewport !== isInViewport) {
                setIsInViewport(isCurrentlyInViewport)
            }
        // }
    }

    function handleResizeEvent() {
        if (ref.current) {
            const width = ref.current.clientWidth
            const height = ref.current.clientHeight
            const currentWidth = params.width
            const difference = Math.abs(width - currentWidth)
            const differencePercentage = difference / currentWidth * 100
            const isCurrentlyInViewport = checkViewport()
            if (differencePercentage >= 10) {

                setParams({
                    ...params,
                    width,
                    height
                })
                // setPlaceholderIsLoaded(false)
                setImageIsLoaded(isCurrentlyInViewport)
                setIsInViewport(isCurrentlyInViewport)

            }

        }
    }

    function checkViewport() {
        const windowHeight = window.innerHeight
        const imageTopPosition = ref.current.getBoundingClientRect().top
        const imageBottomPosition = ref.current.getBoundingClientRect().bottom
        if (windowHeight * buffer > imageTopPosition && imageBottomPosition > -(windowHeight)) {
            return true
        }
        return false
    }

    const styles = {
        figure: {
            position: 'relative',
            margin: 0,
            // position: 'absolute',
            // margin: 0,
            // top: '50%',
            // left: '50%',
            width: '100%',
            height: '100%',
            // transform: 'translate(-50%, -50%)'
        },
        placeholder: {
            width: '100%',
            filter: 'blur(5px)',
            opacity: 1,
            transition: 'all 0.2s ease-in-out',
            display: 'block',
            position: 'absolute',
            top: '0px',
            left: '0px',
            // width: '100%',
            // filter: 'blur(2px)',
            // opacity: 1,
            // transition: 'all 0.2s ease-in-out',
            // display: 'block',
            // position: 'absolute',
            // top: '0px',
            // left: '0px',
            // right: '0px',
            // bottom: '0px',
            // maxHeight: '100%'
        },
        fullsize: {
            width: '100%',
            transition: 'all 0.2s ease-in-out',
            display: 'block',
            opacity: 0
            // maxWidth: '100%',
            // transition: 'all 0.2s ease-in-out',
            // display: 'block',
            // opacity: 0,
            // // maxHeight: '100%',
            // margin: '0 auto'
        }
    }

    if (imageIsLoaded) {
        styles.placeholder.opacity = 0
        styles.fullsize.opacity = 1
    }

    const { width, height } = params

    // Create an empty query string
    let queryString = ''        

    // If width is specified, otherwise use auto-detected width
    options['w'] = options['w'] || width
    if (ratio) {
        if (isPortrait && portraitRatio) {
            const [ width, height ] = ratio.split(':')
            options['h'] = options['w'] / width * height
        }
        if (isPortrait) {
            const [ height, width ] = ratio.split(':')
            options['h'] = options['w'] / width * height
        }
        if (!isPortrait) {
            const [ width, height ] = ratio.split(':')
            options['h'] = options['w'] / width * height
        }
    }

    // If a format has not been specified, detect webp support
    if (!options['fm'] && (browserSupport && browserSupport.webp)) {
        options['fm'] = 'webp'
    }

    // Loop through option prop and build queryString
    Object.keys(options).map((option, i) => {
        return queryString +=  `${i < 1 ? '?' : '&'}${option}=${options[option]}`
    })

    // Modify the queryString for the LQIP image: replace the width param with a value 1/10 the fullsize
    let placeholderQueryString = queryString.replace(`w=${ width }`, `w=${ Math.round(width * 0.1) }`)
    
    if (options['h']) {
        placeholderQueryString = placeholderQueryString.replace(`h=${ options['h'] }`, `h=${ Math.round(options['h'] * 0.1) }`)
    }

    let srcReplaced = src

    if (replacements) {
        for (let i = 0; i < replacements.length; i++) {
            if (src.indexOf(replacements[i][0]) !== -1) srcReplaced = srcReplaced.replace(replacements[i][0], replacements[i][1])
        }
    }

    return(
        <figure
            style={ styles.figure }
            ref={ref}
        >
            <noscript><img src={`${ srcReplaced }${ queryString }`} alt={ 'test' } /></noscript>
            {
                isInViewport && (width > 0 || height > 0) ? (
                    <React.Fragment>

                        {/* Load fullsize image in background */}
                        <img 
                            onLoad={ () => { !imageIsLoaded && setImageIsLoaded(true) } }
                            style={ styles.fullsize }
                            src={`${ srcReplaced }${ queryString }`}
                            alt={ alt }
                        />

                        {/* Load LQIP in foreground */}
                        <img
                            // onLoad={ () => { !imageIsLoaded && setPlaceholderIsLoaded(true) } }
                            style={ styles.placeholder }
                            src={`${ srcReplaced }${ placeholderQueryString }`} 
                            alt={ alt } 
                        />
                    </React.Fragment>
                ) : null
            }            
        </figure>
    )

}

export default withOrientationChange(Img)