import React from "react"
import Container from "components/Container"
import Heading from "components/Heading"
import Button, { CTAButton } from "components/Button"
// import Program from 'components/Program'
import { graphql } from "gatsby"

// import SubNav from 'components/SubNav'
// import Verse from 'components/Verse'

// import { PrimaryButton, CTAButton } from 'components/Button'

// import Img from 'gatsby-image'

import Event from "components/Event"
// import Card from 'components/Card'

import { Time } from "components/Time"
import { Price, PriceContainer } from "components/Price"

const frontmatter = {
  title: "March Break Camp for a Weekend",
  path: "/events/march-break-camp-for-a-weekend/",
}

const pageData = {
  subTitle: `Experience all of the fun and adventure of camp during a March Break weekend!`,
  keywords:
    "march break weekend, things to do during march break, camping march break",
}

const eventData = {
  title: frontmatter.title,
  price: 250,
  description: pageData.subTitle,
  venue: {
    name: "Teen Ranch",
    address: {
      address: "20682 Hurontario Street",
      city: "Caledon",
      province: "ON",
      postalCode: "L7K 1X1",
    },
  },
}

export default function Default({ data }) {
  const events = [
    <Event
      title={frontmatter.title}
      startDate={"2023-03-10"}
      startTime="19:00:00"
      endDate={"2023-03-12"}
      endTime="13:00:00"
      price={eventData.price}
      description={eventData.description}
      venue={eventData.venue}
      images={[data.file.childImageSharp.fluid.src]}
      status={"SCHEDULED"}
    />,
  ]

  return (
    <>
      <Heading
        src={data.file.childImageSharp.fluid}
        alt={frontmatter.title}
        title={frontmatter.title}
        subtitle={pageData.subTitle}
        metaTitle={pageData.metaTitle || frontmatter.title}
        metaDescription={pageData.metaDescription || pageData.subTitle}
        keywords={pageData.keywords}
      />

      <Container type="body">
        <h1>{frontmatter.title}</h1>

        <p>
          This is a great weekend for kids and teens to experience all of the
          fun and adventure of camp during a March Break weekend! Campers will
          enjoy a full weekend of activity and challenges as they enjoy the
          outdoors, take part in a variety of camp activities, and room in
          top-notch facilities. Cabin Time and a weekend Campfire offer engaging
          Christian inspiration for youth of all ages.{" "}
        </p>

        <p><strong>Senior and Junior campers will enjoy separate accommodation and programming during the weekend.</strong></p>
        <p>

          This is a great opportunity for new campers to grow comfortable at
          camp.
        </p>
      </Container>

      <Container type="body">
        <h2>Available dates</h2>

        <ul>
          <li>March 8-10, 2024</li>
        </ul>

        <p>
          <strong>Check-in:</strong> March 8, 2024 between <Time>1900</Time> -{" "}
          <Time>1930</Time>
          <br />
          <strong>Pick up:</strong> March 10, 2024 at <Time>1300</Time>
        </p>
      </Container>

      <div id="pricing" style={{ position: "absolute", marginTop: "-180px" }} />

      {/* <Container>
                <h1>Pricing</h1>
            </Container> */}

      <Container type="body">
        <h1>Pricing</h1>
        <PriceContainer md={1} lg={1} xl={1}>
          <Price
            title={<>March Break Camp for a Weekend</>}
            subTitle={`Junior (8-12) & Senior (13-16)`}
            // who="Kids ages 8-12"
            price={250}
            term="weekend"
            includes={[
              "Horse Grooming  (JR)",
              "Trail Ride Escapade (SR)",
              "Ice Skating (in our indoor ice arena)",
              "Crafts ",
              "Seasonal Sports ",
              "Indoor Archery",
              "Woodland Survival Skills ",
              "Snow Tubing",
              "Camp Wide games",
              "Campfire ",
              "Cabin Time",
            ]}
            // includes={dayCampBulletsClassic}
          >
            <CTAButton href="https://register.trmanager.com">
              Register now
            </CTAButton>
          </Price>
          {/* <Price
            title={<>March Break Camp for a Weekend</>}
            subTitle={`Senior (SR)`}
            who="Kids ages 13-16"
            price={250}
            term="weekend"
            includes={[
              "Trail Ride",
              "Ice Skating (in our indoor ice arena)",
              "Crafts ",
              "Seasonal Sports ",
              "Indoor Archery",
              "Woodland Survival Skills ",
              "Snow Tubing",
              "Camp Wide games",
              "Campfire ",
              "Cabin Time",
            ]}
            // includes={dayCampBulletsClassic}
          >
            <CTAButton href="https://register.trmanager.com">
              Register now
            </CTAButton>
          </Price> */}
        </PriceContainer>
        * All activities are weather permitting.
      </Container>

      <Container>
        <h1>Upcoming events</h1>
        {events}
      </Container>
    </>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "events/winterTobogganing.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
