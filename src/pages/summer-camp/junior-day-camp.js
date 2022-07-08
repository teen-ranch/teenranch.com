import React from "react"
import Container from "components/Container"
import Heading from "components/Heading"
// import Button from 'components/Button'
import { graphql } from "gatsby"

import SubNav from "components/SubNav"
import {
  PrimaryButton,
  SecondaryButton,
  CTAButton,
  PdfButton,
} from "components/Button"
import Program, { ProgramContainer } from "components/Program"

// import Grid from 'components/Grid'
// import Coach from 'components/Coach'
import { Link } from "react-scroll"
import { PriceContainer, Price, PriceAddon } from "components/Price"
import Quote from "components/Quote"
import CampSchedule from "components/CampSchedule"
import Grid from "components/Grid"
// import Sponsor from 'components/Sponsor'
import Img from "gatsby-image"
import { DayCampTerms } from "components/Terms"
import JumpStart from "components/JumpStart"

const frontmatter = {
  title: "Junior day camp",
  path: "/summer-camp/junior-day-camp/",
}

const pageData = {
  subTitle: `Games, crafts, swimming, pony rides, story time and more!`,
  keywords: "day camp, junior day camp, summer day camp",
}

export default function Programs({ data }) {
  const { file, daycamp, activities } = data

  return (
    <>
      <Heading
        src={file.childImageSharp.fluid}
        // src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/hockey14.jpg'
        alt="Hockey player stopping with puck"
        title={frontmatter.title}
        subtitle={pageData.subTitle}
        metaTitle={pageData.metaTitle || frontmatter.title}
        metaDescription={pageData.metaDescription || pageData.subTitle}
        keywords={pageData.keywords}
      />

      <SubNav>
        <Link to="top" activeClass="active" spy={true}>
          Overview
        </Link>
        <Link to="dates" activeClass="active" spy={true}>
          Dates
        </Link>
        <Link to="pricing" activeClass="active" spy={true}>
          Pricing
        </Link>
      </SubNav>

      <div id="top" style={{ position: "absolute", marginTop: "-120px" }} />

      <Container type="body">
        <div
          style={{
            padding: "4rem",
            background: "#0074F7",
            borderRadius: "4px",
            color: "#fff",
          }}
        >
          <h2 style={{ margin: "0 0 2rem 0" }}>
            Balance payments, info pack, and snackbar:
          </h2>{" "}
          14 days before your camp check-in date we'll send you an email with:
          all the details you need for camp, a link to pay your remaining
          balance, and set up your snackbar account(s).
        </div>
      </Container>

      <Container type="body">
        <h1>Junior day camp for little kids</h1>

        <p>
          Jump into adventure with our junior day camp program! Designed to
          introduce little ones to the exciting world of camp, kids and their
          leaders travel together around camp to try some of the unique
          activities that Teen Ranch has to offer. Throughout the week they make
          new friends and grow while engaging in games, crafts, swimming, pony
          rides, campfire story time with an emphasis of God's beautiful
          creation and love for all people, and more! Join us this summer for a
          week full of friendship and fun!
        </p>

        <h3>Weekly overview</h3>
        <p>Summer day camps will run Monday-Friday.</p>
        <ul>
          <li>
            <strong>Drop-off:</strong> 8:30am - 8:50am
          </li>
          <li>
            <strong>Pick-up:</strong> 4:45pm - 5:00pm
          </li>
          <li>
            <strong>Extended care:</strong> 6:00pm late pick-up option
            available.
          </li>
        </ul>
      </Container>

      <Container type="body">
        <h2>Info pack</h2>
        <div>
          <PdfButton href="https://teenranch.nyc3.cdn.digitaloceanspaces.com/website/pdf/udcJdcCampInformation_2022.pdf">
            Ultimate day camp / junior day camp info pack
          </PdfButton>
        </div>
        <p>
          Families will be notified by email two weeks before the camp start
          date for payment reminders and camp information.
        </p>
      </Container>

      <Container type="body">
        <h1>Who it's for</h1>

        <ProgramContainer>
          <Program
            small
            name="Junior day camp"
            who="Kids age 5-7"
            src={daycamp.childImageSharp.fluid}
          >
            Games, crafts, swimming, pony rides, story time and more! A week
            full of friendship and fun!
          </Program>
        </ProgramContainer>
      </Container>

      <Container type="body">
        <Quote cite="Shocked Parent">
          It's only January and the kids are starting their countdown to camp,
          but Disney is 13 days away. They'd rather camp than do Disney?
        </Quote>
      </Container>

      <Container type="body">
        <h1>Day camp activities</h1>

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
      </Container>

      <div id="dates" style={{ position: "absolute", marginTop: "-120px" }} />

      <Container type="body">
        <h1>Camp dates</h1>

        <CampSchedule
          dates={[
            "July 4-8",
            "July 11-15",
            "July 18-22",
            "July 25-29",
            "Aug. 1-5",
            "Aug. 8-12",
            "Aug. 15-19",
            "Aug. 22-26",
            <>Aug.&nbsp;29 - Sep.&nbsp;2</>,
          ]}
          programs={[
            {
              name: "Junior day camp",
              dates: [
                "5-7",
                "5-7",
                "5-7",
                "5-7",
                "",
                "5-7",
                "5-7",
                "5-7",
                "5-7",
              ],
            },
          ]}
        />
      </Container>

      {/* <Container>
                <h1>Pricing</h1>
            </Container> */}

      <Container type="body">
        <div
          id="pricing"
          style={{ position: "absolute", marginTop: "-180px" }}
        />
        <h1>Pricing</h1>
        <DayCampTerms />
        <JumpStart />
        <PriceContainer>
          <Price
            title={
              <>
                Junior
                <br />
                Day Camp
              </>
            }
            subTitle={`Games, crafts, swimming, pony rides, story time and more! A week full of friendship and fun!`}
            who="Kids age 5-7"
            price={495}
            term="week"
            includes={[
              "Games",
              "Forest time",
              "Crafts",
              "Swimming",
              "Pony rides",
              "Bouldering",
              "Story time",
              "Lunch & morning snack",
              "Snackbar open in the afternoons",
            ]}
          >
            <CTAButton href="https://register.trmanager.com">
              Register now
            </CTAButton>
          </Price>
        </PriceContainer>
      </Container>

      <Container type="body">
        <h2>Day camp add-ons:</h2>
        <PriceAddon
          title="Extended care"
          subTitle="6:00pm late pick-up"
          description={
            <>
              Please contact us for additional options if 6:00pm late pick-up
              doesn't work for your family.
            </>
          }
          price={75}
          term="week"
        />
      </Container>
    </>
  )
}

// const NavLink = ({ children, ...props }) => (
//     <Link {...props} activeClassName='active'>{ children }</Link>
// )

export const query = graphql`
  query {
    file(relativePath: { eq: "programs/daycamp/AadenIndia.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    daycamp: file(relativePath: { eq: "programs/daycamp/india.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    activities: allFile(
      filter: { relativeDirectory: { eq: "programs/daycamp" } }
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
