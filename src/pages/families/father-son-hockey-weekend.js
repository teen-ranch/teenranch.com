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
      startDate={DateTime.fromISO("2022-06-10", {
        zone: "America/Toronto",
      }).toISODate()}
      startTime="19:00:00"
      endDate={DateTime.fromISO("2022-06-12", {
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
          The Father Son Hockey Weekend is a unique opportunity to invest time
          in one another over your common love of hockey and create wonderful
          memories that will last a lifetime.
        </p>
        <p>
          Beginning at 4:00 pm on Friday, fathers and sons will enjoy an amazing
          weekend together.
        </p>

        <Button href="https://register.trmanager.com">Book now</Button>

        <h3>When is it?</h3>
        <p>June 10-12, 2022</p>

        <h4>What you'll enjoy:</h4>

        <ul>
          <li>an onsite Olympic-size ice pad</li>
          <li>on-ice hockey drills and scrimmages</li>
          <li>scenic trail ride on horseback</li>
          <li>climbing wall</li>
          <li>swimming/Waterslide/Fishing</li>
          <li>archery/Marksmanship</li>
          <li>campfire and marshmallow roast</li>
          <li>an inspiring devotional message</li>
          <li>beautiful accommodation</li>
          <li>Incredible food</li>
          <li>a hockey jersey and ball cap for each father and son </li>
          <li>and more!</li>
        </ul>

        <h3>This weekend getaway package includes:</h3>
        <p>Breakfasts, Lunches and Supper.</p>

        <p>
          <strong>
            Register early to choose an accommodation option that best suits you
            and your son(s).
          </strong>
        </p>

        <p>
          Choice of three different accommodation options. Call to discuss the
          best option for you and your son(s):
        </p>

        <ul>
          <li>
            <strong>Olympic Style/Chalet Room:</strong> $480 +HST /person (Bring
            your own bedding & towels)
            <em>
              Private accommodation for each father/son or father/son family
              group.
            </em>
          </li>
          <li>
            <strong>Western-style Hotel Room:</strong> $545 +HST /person (Linens
            & towels provided)
            <em>Private accommodation for each father/son</em>
          </li>
          <li>
            <strong>Coach House/Family Suite:</strong> $580 +HST /person (Linens
            & towels provided)
            <em>Private accommodation for each father/son</em>
          </li>
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
