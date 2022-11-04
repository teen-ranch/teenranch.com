import React, { useEffect, useState } from "react"
import Container from "components/Container"
import Button from "components/Button"
import { Link } from "gatsby"

const updatedAt = "2022-11-03"

export function CovidContainer() {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    const gotIt = localStorage.getItem(`gotIt`)
    if (!gotIt || gotIt !== updatedAt) setIsOpen(true)
  }, [])

  function gotIt() {
    setIsOpen(false)
    localStorage.setItem("gotIt", updatedAt)
  }
  return (
    <div
      style={{
        maxHeight: isOpen ? "500px" : "0px",
        overflow: "hidden",
        transition: "all 500ms",
      }}
    >
      <Container>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h3>Summer Camp 2023</h3>
          <p>Information for Summer Camp 2023 is now available online!</p>
          <p>Registration opens soon!</p>

          <div>
            <Button onClick={() => gotIt()}>Got it!</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
