import React from "react"

import { Img } from "components/Tueri"
import GatsbyImg from "gatsby-image"
import Grid from "components/Grid"

import "./program.scss"

export default function Program({
  src,
  name,
  alt,
  who,
  children,
  swap,
  imageOptions,
  small = false,
}) {
  if (small)
    return (
      <div className="programContainerSmall">
        <div className="programImageSmall">
          <GatsbyImg fluid={src} alt={name} aspectRatio="16:9" />
        </div>
        <div className="programBodySmall">
          <div className="programNameSmall">{name}</div>
          {children}
          <div className="programWhoSmall">{who}</div>
        </div>
      </div>
    )

  return (
    <div className={`programContainer ${swap ? "programContainer--swap" : ""}`}>
      <div className="programImage">
        {typeof src === "string" ? (
          <Img src={src} alt={alt || name} options={imageOptions} />
        ) : (
          <GatsbyImg fluid={src} alt={alt || name} />
        )}
      </div>
      <div className="programBody">
        <h3>{name}</h3>
        {children}
      </div>
    </div>
  )
}

export function ProgramContainer({
  children,
  sm = "1",
  md = "2",
  lg = "2",
  xl = "4",
}) {
  return (
    <div style={{ margin: "0 auto" }}>
      <Grid sm={sm} md={md} lg={lg} xl={xl}>
        {children}
      </Grid>
    </div>
  )
}
