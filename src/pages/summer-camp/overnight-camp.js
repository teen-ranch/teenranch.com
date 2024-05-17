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
import CampSchedule, { PreBuiltCampSchedule } from "components/CampSchedule"
import Grid from "components/Grid"
// import Sponsor from 'components/Sponsor'
import Img from "gatsby-image"
import JumpStart from "../../components/JumpStart"
import { OvernightCampTerms } from "components/Terms"
import { Time } from "components/Time"
import { BalancePayments } from "components/BalancePayments"
import { PhotoGrid } from "components/PhotoGrid"

const frontmatter = {
  title: "Overnight camp",
  path: "/summer-camp/overnight-camp/",
}

const pageData = {
  subTitle: `The complete camp experience: action-packed fun, excellent sports training, and life-changing adventures`,
  keywords: "summer camp, summer sports camp",
}

export default function Programs({ data }) {
  const { file, hockeyNowWinner, hockey, horse, adventure, wham, activities } =
    data

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
        <h1>Overnight camp for outrageous fun</h1>

        <p>
          Overnight campers experience all the fun and adventure a week of
          summer camp has to offer. Campers enjoy the great outdoors, get
          active, and make new friends.
        </p>
        <p>
          In the morning, campers hone skills in their program/sport of choice.
          Afternoons are their chance to enjoy a variety of Teen Ranch
          activities and bunkroom time - a unique opportunity for growth,
          bonding, and overall fun!! Evenings include camp-wide games and
          nightly campfires with engaging, real-life topics shared from a
          biblical perspective.
        </p>
        <p>
          Campers are housed in{" "}
          <a href="/facilities/" target="_blank">
            top-notch facilities
          </a>{" "}
          that include a private washroom and air conditioning.
        </p>
        <p>
          Our well-trained staff are committed to the safety and well-being of
          each camper and aim to come alongside them to challenge, encourage,
          and inspire!
        </p>

        <h3>Weekly overview</h3>
        <p>
          Summer overnight camps run Sunday evenings-Friday evenings. (August
          5-9 week starts Monday)
        </p>
        <ul>
          <li>
            <strong>
              Check-in: Sunday, <Time>1600</Time> - <Time>1630</Time>
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

      <Container type="body">
        <h2>Info pack</h2>
        <div>
          <PdfButton
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.canva.com/design/DAGDKdD0AZM/B5d22jRawTZsCCB0GSNRBw/view?utm_content=DAGDKdD0AZM&utm_campaign=summer-camp&utm_medium=link&utm_source=teenranch.com"
          >
            Overnight camp info pack
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
          Overnight summer camp is perfect for kids and teens age 8-16. We offer
          specialized programs in horseback riding and hockey, and epic
          activities through WHAM!
        </p>

        <ProgramContainer xl={3}>
          <Program
            small
            name="Hockey camps"
            who="Players & goalies (age 8+)"
            src={hockey.childImageSharp.fluid}
          >
            Skills & skating development and full-ice scrimmage for players and
            goalies from house league to rep. Hockey, elite AA/AAA, girl's
            hockey, and goalie camps.
            <br />
            <PrimaryButton to="/summer-camp/overnight-camp/hockey-camps/">
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
            pick from western, english, rodeo, or intensive (hunter/jumper
            focused) camps.
            <br />
            <PrimaryButton to="/summer-camp/overnight-camp/horse-camps/">
              Learn more
            </PrimaryButton>
          </Program>
          {/* <Program
            small
            name="Adventure camp"
            who="Adventurous kids (age 10+)"
            src={adventure.childImageSharp.fluid}
          >
            <i style={{ textDecoration: "italic" }}>One week only!</i>
            <br />
            <br />
            Off-site, day adventures may include kayaking, caving/spelunking,
            canoeing, and mountain biking. Campers must be able to swim and
            eager to try new things.
            <br />
            <PrimaryButton to="/summer-camp/overnight-camp/adventure-camp/">
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
            <PrimaryButton to="/summer-camp/overnight-camp/wham-camp/">
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
          swimming, water jousting, archery, tennis, basketball, volleyball, and
          more.
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
        <PreBuiltCampSchedule type="ONC" />

        <CTAButton to="/summer-camp/overnight-camp/">Register now</CTAButton>
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
        <OvernightCampTerms />
        <JumpStart />
        <PriceContainer xl={3}>
          <Price
            title="Hockey camps"
            subTitle={`Skills & skating development for players and goalies from house-league to rep. Standard, high-performance, girl's hockey, and goalie camps.`}
            who="Players and goalies"
            price={1315}
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
              <SecondaryButton to="/summer-camp/overnight-camp/hockey-camps/">
                Learn more
              </SecondaryButton>
            </center>
            <CTAButton href="https://register.trmanager.com">
              Register now
            </CTAButton>
          </Price>
          <Price
            title="Horse camps"
            subTitle="Horseback riding camps for beginner to advanced riders. Take your pick from western, english, rodeo, or intensive (hunter/jumper focused) camps."
            who="English & western riders"
            price={1315}
            startingAt
            term="week"
            includes={[
              "Ability-based lessons",
              "Wrangler club",
              "Western and english specific disciplines",
              "Safe, well-schooled horses",
              "Instructors trained to CHA standards",
              "First-aid certified full-time staff",
              "Breakfast, lunch & dinner",
              "Snackbar",
              "All camp activities",
            ]}
          >
            <center>
              <SecondaryButton to="/summer-camp/overnight-camp/horse-camps/">
                Learn more
              </SecondaryButton>
            </center>
            <CTAButton href="https://register.trmanager.com">
              Register now
            </CTAButton>
          </Price>
          {/* <Price
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
              "Snackbar",
            ]}
          >
            <center>
              <SecondaryButton to="/summer-camp/overnight-camp/adventure-camp/">
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
            price={1315}
            term="week"
            startingAt
            includes={[
              "Horseback riding",
              "Rock climbing & bouldering",
              "Woodland survival skills",
              "Volleyball, basketball & soccer",
              "Archery",
              "Waterslide, jousting pond, canoes, kayaks",
              "Breakfast, lunch & dinner",
              "Snackbar",
              "All camp activities",
            ]}
          >
            <center>
              <SecondaryButton to="/summer-camp/overnight-camp/wham-camp/">
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

    adventure: file(
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
