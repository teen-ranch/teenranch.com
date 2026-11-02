import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Card from "components/Card"
const breakpoints = [640, 768, 1024, 1280, 1536]

export function PhotoGrid({
  srcs,
  xs = 1,
  sm = 1,
  md = 2,
  lg = 3,
  xl = 5,
  xxl = 5,
  forceAspectRatio = false,
}) {
  const [imagesPerRow, setImagesPerRow] = useState(null)
  const [finalRowImages, setFinalRowImages] = useState(null)
  const [width, setWidth] = useState(null)
  const ref = useRef(null)
  useLayoutEffect(() => {
    calulate()
  }, [])

  useEffect(() => {
    window.addEventListener("resize", () => calulate())
    return () => window.removeEventListener("resize", () => calulate())
  }, [])

  function calulate() {
    console.log("CALCULATE----------------------------")
    const size = getSize(ref?.current.offsetWidth)
    const rowCount = Math.ceil(srcs.length / size)
    const actualSize = Math.ceil(srcs.length / rowCount)
    setImagesPerRow(actualSize < size ? actualSize : size)
    setFinalRowImages(Math.floor(srcs.length / size))
    setWidth(ref?.current.offsetWidth)
  }

  function getSize(pixels) {
    if (pixels < 640) return xs
    if (pixels >= 640 && pixels < 768) return sm
    if (pixels >= 768 && pixels < 1024) return md
    if (pixels >= 1024 && pixels < 1280) return lg
    if (pixels >= 1280 && pixels < 1536) return xl
    if (pixels >= 1536) return xxl
  }

  const sourceRows = []
  imagesPerRow &&
    srcs.map((src, i) => {
      const row = Math.floor(i / imagesPerRow)
      if (!sourceRows[row]) sourceRows.push([])
      sourceRows[row].push(src)
    })

  return (
    <div ref={ref}>
      <Card>
        {sourceRows &&
          sourceRows.map((row, rowIndex) => {
            return (
              <div key={rowIndex} style={{ display: "flex" }}>
                {row.map((src, srcIndex) => {
                  const actualWidth = width / row.length
                  const actualHeight = (actualWidth / 16) * 9
                  if (src.node.name === "index") return null
                  return (
                    <div
                      style={{
                        width: actualWidth || 500,
                        ...(forceAspectRatio && {
                          height: actualHeight || 281.25,
                        }),
                      }}
                      key={srcIndex}
                    >
                      <GatsbyImage
                        image={src.node.childImageSharp.gatsbyImageData}
                        alt={src}
                        // width={actualWidth || 500}
                        // height={actualHeight || 281.25}
                        // style={{
                        //   width: actualWidth || 500,
                        //   height: actualHeight || 281.25,
                        // }}

                        style={{
                          ...(forceAspectRatio && {
                            width: actualWidth || 500,
                            height: actualHeight || 281.25,
                          }),
                        }}

                        // style={{ width: calculatedWidth }}
                      />
                    </div>
                  );
                })}
              </div>
            );

            // const imagesRemaining = srcs.length - i

            // const actualWidth =
            //   imagesRemaining < imagesPerRow
            //     ? width / finalRowImages
            //     : calculatedWidth
            // return (
            //   <div style={{ width: actualWidth || 500 }} key={i}>
            //     <Img
            //       key={i}
            //       fluid={src}
            //       alt={src}
            //       // style={{ width: calculatedWidth }}
            //     />
            //   </div>
            // )
          })}
      </Card>
    </div>
  );
}
