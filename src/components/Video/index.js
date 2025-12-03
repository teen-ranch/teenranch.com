import React from "react"

import "./video.scss"
import Card from "components/Card"

const SOURCES = ["youtube", "vimeo"]

export default function Video({ src, short = false }) {
  let type = ""
  SOURCES.map(source => {
    if (src.indexOf(source) !== -1) {
      return (type = source)
    }
    return null
  })

  if (type === "youtube") {
    return (
      <Card>
        <div className={short ? "video-responsive-short" : "video-responsive"}>
          <iframe
            width={short ? "315" : "560"}
            title={src}
            height={short ? "560" : "315"}
            src={`${src}&rel=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            rel="0"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </Card>
    )
  }

  if (type === "vimeo") {
    return (
      <div className="video-responsive">
        <iframe
          title={src}
          src={`${src}`}
          width=""
          height="480"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </div>
    )
  }

  return null
}
