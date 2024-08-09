import React from "react"
import Container from "components/Container"
import Heading from "components/Heading"
import Button from "components/Button"
import Program from "components/Program"
import { Link } from "gatsby"
import { RinkClosed } from "components/RinkClosed"
import { Time } from "components/Time"
import Card, { CardPadding } from "components/Card"

export default function Default() {
  return (
    <>
      <Heading
        src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/DSC_0513.JPG"
        alt="Smiling kids playing hockey"
        title="Private lessons"
        subtitle="Lessons tailored specifically for you"
        keywords="hockey season preparation, stick handling, power skating, private lessons"
        metaTitle="Private lessons"
        metaDescription="Lessons tailored specifically for you"
      />
      <Container type="body">
       Private lessons are available. Contact Brent to learn more: <a href="mailto:brent.boschman@teenranch.com">brent.boschman@teenranch.com</a> 
      </Container>
    </>
  )
}


