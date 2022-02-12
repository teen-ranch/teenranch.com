import React from "react"
import Container from "components/Container"
import Heading from "components/Heading"
// import Button from 'components/Button'
// import Program from 'components/Program'
import { graphql } from "gatsby"

// // import ExternalLink from 'components/ExternalLink'
// import { PriceContainer, Price } from "components/Price"
import { PrimaryButton } from "components/Button"
import Grid from "components/Grid"

// import SubNav from 'components/SubNav'
// import Verse from 'components/Verse'

// import { PrimaryButton, CTAButton } from 'components/Button'

// import Img from 'gatsby-image'

import Event from "components/Event"
// import Card from 'components/Card'

import { DateTime } from "luxon"
import Img from "gatsby-image"

const frontmatter = {
  title: "Teen Ranch - Family Day Roundup",
  path: "/events/family-day/",
}

const pageData = {
  subTitle: "Minutes away - A world of difference",
  keywords: "family day event, what to do on family day",
}

const eventData = {
  title: frontmatter.title,
  description: `Less than an hour from Toronto and located in the beautiful Caledon Hills, Teen Ranch is thrilled to offer you winter outdoor activities to help celebrate your family, Enjoy playing, laughing, and making lasting memories together. `,
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
  const stripePaymentLink =
    process.env.CF_PAGES_BRANCH === "main"
      ? "https://buy.stripe.com/9AQ5nO6lqa1i98scMN"
      : "https://buy.stripe.com/test_eVabKh7DidOO8dW7st"

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

      <Container>
        <h1>{frontmatter.title}</h1>
        <p>
          Less than an hour from Toronto and located in the beautiful Caledon
          Hills, Teen Ranch is thrilled to offer you winter outdoor activities
          to help celebrate your family, Enjoy playing, laughing, and making
          lasting memories together.
        </p>
        <h2>When is it?</h2>
        Monday, February 21, 2022: 10:00am - 1:00pm
        <h2>Who is it for?</h2>
        Open to all Ages
        <h2>Activities include:</h2>
        <ul>
          <li>
            Pond skating (bring your own skates and helmet (helmet optional for
            adults)
          </li>
          <li>Broomball</li>
          <li>Tubing (use our tubes or bring your own)</li>
          <li>Showshoeing (bring yours or use ours (adult sizes only)</li>
          <li>Cross-country skiing (bring your own skis)</li>
          <li>Hiking</li>
          <li>Snow fort building</li>
          <li>Campfire: warm up with hot chocolate & marshmallow roast</li>
        </ul>
        <span style={{ fontStyle: "italic" }}>
          Snow activities and outdoor skating weeather permitting
        </span>
      </Container>
      <Container>
        <h2>Pre-registration required</h2>
        <ul>
          <li>$75 per family of five</li>
          <li>Additional family members: $15/person</li>
          <li>Children age two and under are free</li>
        </ul>
        <PrimaryButton href={stripePaymentLink}>Pre-register now</PrimaryButton>
      </Container>

      <Container>
        <h1>Upcoming events</h1>
        <Event
          title={frontmatter.title}
          startDate={"2022-02-21"}
          startTime="10:00:00"
          endDate={"2022-02-21"}
          endTime="13:00:00"
          price={0}
          description={eventData.description}
          venue={eventData.venue}
          images={[data.file.childImageSharp.fluid.src]}
          status={"SCHEDULED"}
        />
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
