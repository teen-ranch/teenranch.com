import React from "react"
import Container from "components/Container"
import Heading from "components/Heading"
import { graphql } from "gatsby"

import SubNav from "components/SubNav"
import { CTAButton, PdfButton } from "components/Button"
import Program, { ProgramContainer } from "components/Program"

import { Link } from "react-scroll"
import { PriceContainer, Price } from "components/Price"
import Quote from "components/Quote"
import { PreBuiltCampSchedule } from "components/CampSchedule"
import { DayCampTerms } from "components/Terms"
import JumpStart from "components/JumpStart"
import { Time } from "components/Time"
import { BalancePayments } from "components/BalancePayments"
import { PhotoGrid } from "components/PhotoGrid"

const frontmatter = {
  title: "Junior day camp",
  path: "/summer-camp/junior-day-camp/",
}

const pageData = {
  subTitle: `Outdoor fun, swimming, pony rides, climbing wall, and more!`,
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
        <h1>Junior day camp for little kids</h1>

        <p>
          Jump into adventure with our junior day camp program! Designed to
          introduce your kids to the exciting world of camp, junior day campers
          and their leaders travel together around camp to try some of the
          unique activities that Teen Ranch has to offer. Throughout the week
          they make new friends and grow while engaging in outdoor games and
          skill-building activities, swimming, pony rides, rock climbing,
          archery, and more! Junior day campers are engaged in Teen Ranch’s
          campfire story time including music and fun with an emphasis on God's
          beautiful creation and love for all people. Join us this summer for a
          week full of friendship and fun for your little camper!
        </p>

        <h3>Weekly overview</h3>
        <p>Summer day camps run Monday-Friday.</p>
        <ul>
          <li>
            <strong>Drop-off:</strong> <Time>0830</Time> - <Time>0850</Time>
          </li>
          <li>
            <strong>Pick-up:</strong> <Time>1645</Time> - <Time>1700</Time>
          </li>
          {/* <li>
            <strong>Extended care:</strong> 6:00pm late pick-up option
            available.
          </li> */}
        </ul>
      </Container>

      <Container type="body">
        <h2>Info pack</h2>
        <div>
          <PdfButton
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.canva.com/design/DAGFJIcYvyU/1HdTdbLNfDu487m1nvWzEg/view?utm_content=DAGFJIcYvyU&utm_campaign=summer-camp&utm_medium=link&utm_source=teenranch.com"
          >
            Ultimate day camp / junior day camp info pack
          </PdfButton>
        </div>
        <p>
          Families will be notified by email six weeks before the camp start
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
            Outdoor fun, swimming, pony rides, climbing wall, junior wrangler
            club, and more!
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
        <PhotoGrid srcs={activities.edges} />

        {/* <Grid sm={2} md={2} lg={3} xl={5} gap={false}>
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
        </Grid> */}
      </Container>

      <div id="dates" style={{ position: "absolute", marginTop: "-120px" }} />

      <Container type="body">
        <h1>Camp dates</h1>

        <PreBuiltCampSchedule sections={["junior"]} />
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
        <PriceContainer xl={1} lg={1} md={1}>
          <Price
            title={
              <>
                Junior
                <br />
                Day Camp
              </>
            }
            subTitle={`Outdoor games, crafts, swimming, pony rides, story time and more! A week full of friendship and fun!`}
            who="Kids age 5-7"
            price={450}
            term="week"
            includes={[
              "Dynamic outdoor group activities",
              "Forest time & nature hike",
              "Creative crafts",
              "Swimming, boating, waterslide & Power Paddler Boats (NEW)",
              "Pony rides",
              "Junior Wrangler Club (NEW)",
              "Bouldering & climbing wall (NEW)",
              "Archery (NEW)",
              "Campfire story time",
              "Lunch & morning snack",
              "Afternoon snackbar",
              "New themes each week!",
            ]}
          >
            <CTAButton href="https://register.trmanager.com">
              Register now
            </CTAButton>
          </Price>
        </PriceContainer>
      </Container>

      <BalancePayments />

      {/* <Container type="body">
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
      </Container> */}
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
