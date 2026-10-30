import React, {useEffect, useState} from "react"

import Grid from "components/Grid"
// import Container from 'components/Container'

import "./price.scss"
import Button, { CTAButton } from "components/Button"

export function Price({
  title,
  subTitle,
  who,
  price,
  priceTo,
  term,
  includes,
  primary = false,
  startingAt,
  startingAtSpace,
  oneWeekOnly,
  children,
  ids
}) {
  
  const [basePrice,setBasePrice] = useState(price||0)
  const [maxPrice, setMaxPrice] = useState(priceTo ||0)
  useEffect(() => {
    if (ids?.length > 0) {
    getPrices()
    }
  }, [])

  async function getPrices() {
    const url = new URL(`${process.env.NODE_ENV === "development"
        ? "http://localhost:4000"
        : "https://api.teenranch.com"
      }/prices`)
    url.searchParams.set('ids', ids.join(','))
    const res = await fetch(
      url.toString()
    ).then(res => res.json())
    setBasePrice(res.min)
    setMaxPrice(res.max)
  }

  return (
    <section
      className={`price__container ${primary ? "price__container--primary" : ""
        }`}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* { primary && <div className='price__mostPopular'>Most popular</div> } */}
      <div>
        <h1 className="price__title">{title}</h1>
        <h2 className="price__subTitle">{subTitle}</h2>
        {basePrice > 0 ? (
          <div className="price">
            {oneWeekOnly && <div className="startingAt">One week only!</div>}
            {startingAt && <div className="startingAt">Starting at</div>}
            {startingAtSpace && <div className="startingAt">&nbsp;</div>}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
              ${new Intl.NumberFormat("en-US").format(basePrice)}{maxPrice && maxPrice > basePrice && <> <sm style={{ fontSize: '14pt' }}>to</sm> ${new Intl.NumberFormat("en-US").format(maxPrice)}</>}{" "}
            </div>
            <span className="term">/{term}</span>
          </div>
        ) : ids?.length > 0 ? <div className="price">---</div> : (
          <div className="price">FREE</div>
        )}
        <div className="price__who">{who}</div>
        {includes && (
          <ul className="price__includesList">
            {includes.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <div>{children}</div>
      </div>
    </section>
  )
}

export function PriceContainer({
  children,
  sm = "1",
  md = "2",
  lg = "2",
  xl = "4",
}) {
  return (
    <div className="price__containerGrid">
      <Grid sm={sm} md={md} lg={lg} xl={xl} gapSize="3rem">
        {children}
      </Grid>
    </div>
  )
}

export function PriceAddon({ title, subTitle, description, price, term, to }) {
  return (
    <section className="price__addonContainer">
      <div className="price__addonBody">
        <h1>
          {title}
          {subTitle && <span className="subTitle"> ({subTitle})</span>}
        </h1>
        <p>{description}</p>
      </div>
      <div className="price__addonPrice">
        ${new Intl.NumberFormat("en-US").format(price)} +HST{" "}
        <span>/{term}</span>
        {to && (
          <div>
            <Button href={to} target="_blank">
              Register now
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
