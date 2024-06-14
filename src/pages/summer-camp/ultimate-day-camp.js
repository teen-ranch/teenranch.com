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
import  { PreBuiltCampSchedule } from "components/CampSchedule"
// import Sponsor from 'components/Sponsor'
import Img from "gatsby-image"
import { UltimateDayCampTerms } from "components/Terms"
import { Link as ReachLink } from "@reach/router"
import JumpStart from "components/JumpStart"
import UltimateDayCampIntro from "components/UltimateDayCampIntro"
import { BalancePayments } from "components/BalancePayments"
import { PhotoGrid } from "components/PhotoGrid"

const frontmatter = {
  title: "Ultimate day camp",
  path: "/summer-camp/ultimate-day-camp/",
}

const pageData = {
  subTitle: `Friends, sports, and adventure packed into five exciting days`,
  keywords: "summer camp, ultimate day camp, summer sports camp",
}

export default function Programs({ data }) {
  const { file, hockeyNowWinner, hockey, horse, bmx, wham, activities } = data

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
        <UltimateDayCampIntro />
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
        <p>
          Ulitmate day camp is perfect for kids and teens age 8+. We offer
          specialized programs in horseback riding, hockey, and WHAM camp for
          kids who want to experience a variety of outdoor adventures!
        </p>

        <ProgramContainer xl={3}>
          <Program
            small
            name="Hockey camps"
            who="Players & goalies (age 8+)"
            src={hockey.childImageSharp.fluid}
          >
            Skills & skating development and full-ice scrimmages for players and
            goalies from house-league to rep.
            <br />
            <PrimaryButton to="/summer-camp/ultimate-day-camp/hockey-camps/">
              Learn more
            </PrimaryButton>
          </Program>
          <Program
            small
            name="Horse camps"
            who="English & western riders (age 8+)"
            src={horse.childImageSharp.fluid}
          >
            Horseback riding camps for beginner to advanced riders. Take your
            pick from western or english camps.
            <br />
            <PrimaryButton to="/summer-camp/ultimate-day-camp/horse-camps/">
              Learn more
            </PrimaryButton>
          </Program>
          {/* <Program
            small
            name="Ad camp"
            who="Beginner to advanced riders (age 8+)"
            src={bmx.childImageSharp.fluid}
          >
            Tabletops, rollers, step-ups, step-downs, whoops, berms, hip jumps
            and even a pump track for riders of all levels.
            <br />
            <PrimaryButton to="/summer-camp/ulitmate-day-camp/adventure-camp/">
              Learn more
            </PrimaryButton>
          </Program> */}
          <Program
            small
            name="WHAM camp"
            who="Kids who want to try everything (age 8+)"
            src={wham.childImageSharp.fluid}
          >
            Epic activities like giant swing, horseback riding, rock climbing,
            woodland survival, initiatives course challenge, archery,
            waterslide, jousting pond, and so much more!
            <br />
            <PrimaryButton to="/summer-camp/ultimate-day-camp/wham-camp/">
              Learn more
            </PrimaryButton>
          </Program>
        </ProgramContainer>
      </Container>

      <Container type="body">
        <div style={{ textAlign: "center" }}>
          <Img
            fixed={hockeyNowWinner.childImageSharp.fixed}
            alt="Best hockey school in Ontario award."
          />
        </div>
        <Quote cite="James">
          On a scale of one to ten this camp is a twenty five!
        </Quote>
      </Container>

      <Container type="body">
        <h1>Afternoon activities</h1>

        <p>
          Each afternoon, campers get to take their pick from some amazing camp
          activities on 150 beautiful acres including: giant swing, trail rides,
          rock climbing, bouldering, ninja climbing feature (NEW), water slide,
          swimming, water jousting, archery, tennis, basketball, outdoor
          activities, and more.
        </p>
        <PhotoGrid srcs={activities.edges} />

        {/* <Grid sm={2} md={2} lg={5} xl={5} gap={false}>
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
        <PreBuiltCampSchedule type="UDC" />

        <p>
          For girl's hockey camp, goalie camp, rodeo camp, and, intensive
          equestrian camp:{" "}
          <ReachLink to="/summer-camp/overnight-camp/">
            see our overnight camps.
          </ReachLink>
        </p>

        <CTAButton to="/summer-camp/ultimate-day-camp/">Register now</CTAButton>
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
        <UltimateDayCampTerms />
        <JumpStart />
        <PriceContainer xl={3}>
          <Price
            title="Hockey camps"
            subTitle={`Skills & skating development for players and goalies from house-league to rep. Standard, high-performance, girl's hockey, and goalie camps.`}
            who="Players and goalies"
            price={895}
            term="week"
            startingAt
            includes={[
              "On-site, olympic-size ice rink",
              "Minimum 7.5 hours on-ice per week",
              "Skills development",
              "Skating development",
              "Full-ice scrimmages",
              "Fun-based off-ice program",
              "Jersey included",
              "Breakfast, lunch & dinner",
              "Snackbar",
              "All camp activities",
            ]}
          >
            <center>
              <SecondaryButton to="/summer-camp/ultimate-day-camp/hockey-camps/">
                Learn more
              </SecondaryButton>
            </center>
            <CTAButton href="https://register.trmanager.com">
              Register now
            </CTAButton>
          </Price>
          <Price
            title="Horse camps"
            subTitle="Horseback riding camps for beginner to advanced riders. Take your pick from western or english camps."
            who="English & western riders"
            price={895}
            startingAt
            term="week"
            includes={[
              "Ability-based lessons",
              "Western and english specific disciplines",
              "Safe, well-schooled horses",
              "Instructors trained to CHA standards",
              "First-aid certified full-time staff",
              "Lunch & morning snack",
              "Snackbar",
              "All camp activities",
            ]}
          >
            <center>
              <SecondaryButton to="/summer-camp/ultimate-day-camp/horse-camps/">
                Learn more
              </SecondaryButton>
            </center>
            <CTAButton href="https://register.trmanager.com">
              Register now
            </CTAButton>
          </Price>
          {/* <Price
            title="BMX dirt camp"
            subTitle="Tabletops, rollers, step-ups, step-downs, whoops, berms, hip jumps and even a pump track for riders of all levels."
            who="Beginner to advanced riders"
            price={850}
            term="week"
            startingAt
            includes={[
              "Constantly changing dirt track",
              "Dirt features for any skill level",
              "Pump track",
              "Tabletops",
              "Gap jumps",
              "Bike rental available",
              "All camp activities",
            ]}
          >
            <center>
              <SecondaryButton to="/summer-camp/ultimate-day-camp/bmx-dirt-camp/">
                Learn more
              </SecondaryButton>
            </center>
            <CTAButton href="https://register.trmanager.com">
              Register now
            </CTAButton>
          </Price> */}
          <Price
            title="WHAM camp"
            subTitle="Epic activities like giant swing, horseback riding, rock climbing, woodland survival, initiatives course challenge, archery, waterslide, jousting pond, and so much more!"
            who="Kids who want to try everything"
            price={895}
            term="week"
            startingAt
            includes={[
              "Horseback riding",
              "Rock climbing & bouldering",
              "Woodland survival skills",
              "Volleyball, basketball & soccer",
              "Archery",
              "Waterslide, jousting pond, canoes, kayaks",
              "Lunch & morning snack",
              "Snackbar",
              "All camp activities",
            ]}
          >
            <center>
              <SecondaryButton to="/summer-camp/ultimate-day-camp/wham-camp/">
                Learn more
              </SecondaryButton>
            </center>
            <CTAButton href="https://register.trmanager.com">
              Register now
            </CTAButton>
          </Price>
        </PriceContainer>
      </Container>

      <Container type="body">
        <h2>Additional summer programs:</h2>
        <PriceAddon
          title="Summer drop-in ice time (9:00am - 10:30am)"
          subTitle="Two-weeks only!"
          description={
            <>
              Join in with our regular hockey program for 1.5 hours of ice time
              each morning, Monday - Friday.
            </>
          }
          price={350}
          term="week"
          to="https://register.trmanager.com"
        />
      </Container>

      <BalancePayments />

      {/* <Container type="body">
        <h2>Ultimate day camp add-ons:</h2>
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
    file(relativePath: { eq: "facilities/iceCorral/hockey14.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    hockeyNowWinner: file(
      relativePath: {
        eq: "programs/hockey/hockeyNow_bestHockeySchoolInOntarioWinner.png"
      }
    ) {
      childImageSharp {
        fixed(height: 180, quality: 64) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }

    hockey: file(relativePath: { eq: "programs/hockey/Michael.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    horse: file(relativePath: { eq: "programs/horse/rachel.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    bmx: file(relativePath: { eq: "programs/bmx/BMX60.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    wham: file(relativePath: { eq: "programs/wham/archery.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
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
