import React from "react"
import Container from "components/Container"
import Heading from "components/Heading"
// import Button from 'components/Button'
import { graphql } from "gatsby"

import SubNav from "components/SubNav"
import { CTAButton, PdfButton } from "components/Button"
import Program, { ProgramContainer } from "components/Program"

// import Grid from 'components/Grid'
// import Coach from 'components/Coach'
import { Link } from "react-scroll"
import { PriceContainer, Price, PriceAddon } from "components/Price"
import Quote from "components/Quote"
import CampSchedule, { PreBuiltCampSchedule } from "components/CampSchedule"
import Grid from "components/Grid"
// import Sponsor from 'components/Sponsor'
import Img from "gatsby-image"
import { OvernightCampTerms } from "components/Terms"
import JumpStart from "components/JumpStart"
import { Time } from "components/Time"

const frontmatter = {
  title: "Adventure camp",
  path: "/summer-camp/overnight-camp/adventure-camp/",
}

const pageData = {
  subTitle: `Find your sense of adventure!`,
  keywords: "overnight adventure camp, summer sports camp, summer day camp",
}

export default function Programs({ data }) {
  const { file, whamAll, activities } = data

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
        <h1>Adventure camp</h1>

        <p>
          For those who love to push their limits! Each day campers will enjoy
          an exciting, unique daily adventure which may include kayaking,
          canoeing, caving, and/or mountain biking. Campers must be able to swim
          and eager to try new things. Please note campers will be off-site for
          many adventures.
        </p>
      </Container>

      <Container type="body">
        <h1>Overnight camp for outrageous fun</h1>

        <p>
          Our popular overnight camps are back this year and better than ever!
          Campers experience all the fun and adventure of summer camp packed
          into five awesome nights as they enjoy the great outdoors, get active
          and build friendships that can last a lifetime.
        </p>
        <p>
          In the morning, hone your skills in your sport of choice. Afternoons
          are your chance to enjoy a variety of activities and daily campfires
          with engaging, real-life topics shared from a biblical perspective.
        </p>
        <p>
          Our well-trained staff are committed to the safety and well-being of
          each camper and aim to come alongside you to challenge and inspire!
        </p>

        <h3>Weekly overview</h3>
        <p>
          Summer overnight camps run Sunday evenings-Friday evenings. (August
          7-11 week starts Monday)
        </p>
        <ul>
          <li>
            <strong>
              Check-in: Monday, <Time>1600</Time> - <Time>1630</Time>
            </strong>
            <span style={{ fontSize: "1.3rem", color: "rgba(0,0,0,0.8)" }}>
              - Meet your leaders, visit the snack bar and western store, and
              explore the property as a family.
            </span>
          </li>
          <li>
            <strong>
              Camp kick-off: <Time>1630</Time> - <Time>1715</Time>
            </strong>{" "}
          </li>
          <li>
            <strong>
              Pick-up: Friday, <Time>1900</Time>
            </strong>
          </li>
        </ul>
      </Container>

      {/* <Container type="body">
        <h2>Info pack</h2>
        <p>
          Families will be notified by email two weeks before the camp start
          date for payment reminders and camp information.
        </p>
      </Container> */}

      <Container type="body">
        <h1>Who it's for</h1>

        <ProgramContainer>
          <Program
            small
            name="Adventure camp"
            who="Adventurous kids (age 10-12)"
            src={file.childImageSharp.fluid}
          >
            Off-site, day adventures may include kayaking, caving/spelunking,
            canoeing, and mountain biking. Campers must be able to swim and
            eager to try new things.
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
        <Grid sm={2} md={2} lg={3} xl={5} gap={false}>
          {whamAll &&
            whamAll.edges &&
            whamAll.edges.map((edge, i) => {
              return (
                <div key={i} className="facility">
                  <Img fluid={edge.node.childImageSharp.fluid} alt="WHAM" />
                </div>
              )
            })}
        </Grid>
      </Container>

      <Container type="body">
        <h1>Afternoon activities</h1>

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
        <PreBuiltCampSchedule type="ONC" sections={["adventure"]} />

        <CTAButton to="/summer-camp/overnight-camp/">Register now</CTAButton>
      </Container>

      <div id="pricing" style={{ position: "absolute", marginTop: "-180px" }} />

      {/* <Container>
                <h1>Pricing</h1>
            </Container> */}

      <Container type="body">
        <h1>Pricing</h1>
        <OvernightCampTerms />
        <JumpStart />
        <PriceContainer>
          <Price
            title="Adventure camp"
            subTitle="Off-site, day adventures may include kayaking, caving/spelunking, canoeing, and mountain biking. Campers must be able to swim and eager to try new things."
            who="Adventurous kids, must be able to swim"
            price={1225}
            term="week"
            // startingAt
            oneWeekOnly
            includes={[
              "ONE WEEK ONLY!",
              "Off-site day adventures",
              "Kayaking",
              "Caving/spelunking",
              "Canoeing",
              "Mountain biking",
              "Certified instructor",
              "Breakfast, lunch & dinner",
              "Snackbar open morning and afternoon",
            ]}
          >
            <CTAButton href="https://register.trmanager.com">
              Register now
            </CTAButton>
          </Price>
        </PriceContainer>
      </Container>

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
    </>
  )
}

// const NavLink = ({ children, ...props }) => (
//     <Link {...props} activeClassName='active'>{ children }</Link>
// )

export const query = graphql`
  query {
    file(
      relativePath: {
        eq: "programs/adventure/Jul16-22 Adventure MountainBiking RevorMcGlyyn TimCrichton MichaelRoux.jpg"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    whamAll: allFile(
      filter: { relativeDirectory: { eq: "programs/adventure" } }
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

    activities: allFile(filter: { relativeDirectory: { eq: "activities" } }) {
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
