import React from "react"
import Container from "components/Container"
import Heading from "components/Heading"
import Button from "components/Button"
// import Program from 'components/Program'
import { graphql } from "gatsby"

// import { PriceAddon } from 'components/Price'
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
  title: "Father-Son Hockey Weekend",
  path: "/families/father-son-hockey-weekend",
}

const pageData = {
  subTitle:
    "Do you and your family love hockey? This is an incredibly unique opportunity to get away and invest time in one another over a common love of this great Canadian sport.",
  keywords:
    "father son hockey weekend, father son hockey, spend time with my son, family hockey camp",
}

const eventData = {
  title: frontmatter.title,
  price: 455,
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
  const { activities } = data

  const events = [
    <Event
      key={1}
      title={frontmatter.title}
      startDate={DateTime.fromISO("2022-06-17", {
        zone: "America/Toronto",
      }).toISODate()}
      startTime="19:00:00"
      endDate={DateTime.fromISO("2022-06-19", {
        zone: "America/Toronto",
      }).toISODate()}
      endTime="14:00:00"
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

      {/* <div style={{ maxWidth: '960px', margin: '0 auto', fontSize: '18px', color: 'rgb(41, 41, 41)', letterSpacing: '0.01em', lineHeight: '26px', padding: '0 2rem' }}> */}

      <Container>
        <h1>{frontmatter.title}</h1>

        <p>
          Do you and your family love hockey? This is an incredibly unique
          opportunity to get away and invest time in one another over a common
          love of this great Canadian sport.
        </p>
        <p>
          Beginning Friday afternoon, enjoy a wonderful weekend away together in
          beautiful accommodations with incredible meals, inspiring speakers,
          on-ice skills development, and scrimmage sessions on an Olympic-size
          ice pad with awesome instructors, scenic trail rides through the
          beautiful Caledon Hills and other bonding activities! Beginning Friday
          afternoon, enjoy a wonderful weekend away together in beautiful
          accommodations with incredible meals, inspiring speakers, on-ice
          skills development, and scrimmage sessions on an Olympic-size ice pad
          with awesome instructors, scenic trail rides through the beautiful
          Caledon Hills and other bonding activities!
        </p>

        <Button href="https://register.trmanager.com">Book now</Button>

        <h3>When is it?</h3>
        <p>June 17-19, 2022</p>

        <h3>This weekend getaway package includes:</h3>
        <p>Breakfasts, Lunches and Supper.</p>

        <p>
          Choice of three different accommodation options. Call to discuss the
          best option for you and your son(s):
        </p>

        <ul>
          <li>
            <strong>Olympic Style/Chalet Room:</strong> $455 +HST /person (Bring
            your own bedding & towels)
            <em>
              Private accommodation for each father/son or father/son family
              group.
            </em>
          </li>
          <li>
            <strong>Western-style Hotel Room:</strong> $520 +HST /person (Linens
            & towels provided)
            <em>Private accommodation for each father/son</em>
          </li>
          <li>
            <strong>Coach House/Family Suite:</strong> $555 +HST /person (Linens
            & towels provided)
            <em>Private accommodation for each father/son</em>
          </li>
        </ul>

        <h4>What you'll enjoy:</h4>

        <ul>
          <li>On-ice skill development sessions</li>
          <li>On-ice hockey scrimmages</li>
          <li>Scenic Trail Ride</li>
          <li>Climbing Wall</li>
          <li>Swimming/Waterslide/Fishing</li>
          <li>Archery/Marksmanship</li>
          <li>Campfire - songs and engaging speaker</li>
          <li>Beautiful Accommodations</li>
          <li>Incredible Food</li>
          <li>An exclusive clothing item for each father and son</li>
          <li>And so much more...</li>
        </ul>
      </Container>

      {/* <Container type="body">
        <Grid sm={2} md={2} lg={3} xl={5} gap={false}>
          {activities &&
            activities.edges &&
            activities.edges.map((edge, i) => {
              return (
                <div key={i} className="facility">
                  <Img
                    fluid={edge.node.childImageSharp.fluid}
                    alt="Activities"
                  />
                </div>
              )
            })}
        </Grid>
      </Container> */}
      <Container>
        <h3>Who are we?</h3>
        <p>
          Teen Ranch was established in 1967 in the beautiful Caledon Hills. Our
          goal is to serve our guests with excellence in facilities, service,
          and best of all - life-shaping experiences. Built on a foundation of
          the Christian faith, we believe that the Bible offers timeless wisdom
          for all relationships and you can expect this to be woven into this
          unique father/son hockey weekend!
        </p>
        <p>
          <em>
            "What an amazing week. Beautiful facilities, wonderful staff, great
            food, and tons of fun. Spent time on the Olympic ice surface,
            horseback riding, archery, fishing, shooting rifles, swimming,
            soccer, tennis, … campfire, even met a few Stanley Cup legends, and
            much more. Most of all I made some solid friendships and lifetime
            memories."
          </em>{" "}
          - Dr. Ryan French
        </p>
      </Container>
      <Container>
        <h3>I have more questions...</h3>
        <p>
          Please email our office at{" "}
          <a href="mailto:camp@teenranch.com">camp@teenranch.com</a> and we will
          get back to you as soon as we can.
        </p>
        <Button href="https://register.trmanager.com">Book now</Button>
      </Container>

      <Container>
        <h1>Upcoming events</h1>
        {events}
      </Container>

      {/* </div> */}
    </>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "facilities/iceCorral/hockey9.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    activities: allFile(
      filter: { relativeDirectory: { eq: "motherDaughter" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
