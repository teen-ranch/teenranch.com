import React from "react"
import Container from "components/Container"
import Heading from "components/Heading"
// import Button from 'components/Button'
import { graphql } from "gatsby"

import SubNav from "components/SubNav"
import { PrimaryButton, SecondaryButton, CTAButton } from "components/Button"
import Program, { ProgramContainer } from "components/Program"

// import Grid from 'components/Grid'
// import Coach from 'components/Coach'
import { Link } from "react-scroll"
import { PriceContainer, Price, PriceAddon } from "components/Price"
import Quote from "../components/Quote"
import CampSchedule from "../components/CampSchedule"
import { SummerCampTerms } from "components/Terms"
// import Sponsor from 'components/Sponsor'
import Img from "gatsby-image"

const frontmatter = {
  title: "Summer camp",
  path: "/summer-camp/",
}

const pageData = {
  subTitle: `Canada's most trusted sports camp`,
  keywords: "summer camp, summer sports camp, summer camp ontario canada",
}

export default function Programs({ data }) {
  const { file, hockeyNowWinner, platinum, highPerformanceHockey, overnight } =
    data

  return (
    <>
      <Heading
        src={file.childImageSharp.fluid}
        // src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/hockey14.jpg'
        alt="Summer camp kids"
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
        <Link to="who" activeClass="active" spy={true}>
          Who it's for
        </Link>
        <Link to="dates" activeClass="active" spy={true}>
          Camp dates
        </Link>
        <Link to="pricing" activeClass="active" spy={true}>
          Pricing
        </Link>
      </SubNav>

      <div id="top" style={{ position: "absolute", marginTop: "-120px" }} />

      <Container type="body">
        <h1>Summer Camp 2021 at Teen Ranch</h1>

        <h2>Here's what you can expect this summer:</h2>

        <p>
          We are working hard to provide a joyous and unforgettable summer camp
          experience for your kids.
        </p>
        <p>
          We are pleased to offer Day Camp and Ultimate Day Camp and Overnight
          Summer Camp following Ministry of Health guidelines.
        </p>

        <ul>
          <li>
            <strong>Junior Day Camp:</strong> For kids age 5-7
          </li>
          <li>
            <strong>Ultimate Day Camp:</strong> For kids and teens age 8+
          </li>
          <li>
            <strong>Overnight Camp:</strong> For kids and teens age 8+ who want
            the complete camp experience
          </li>
        </ul>

        <h3>Weekly overview</h3>
        <p>Summer Overnight Camps will run Sunday evenings-Friday evenings.</p>
        <ul>
          <li>
            <strong>Drop-off: Sunday, 4:00pm - 4:30pm</strong>{" "}
            <sm style={{ fontSize: "1.3rem", color: "rgba(0,0,0,0.8)" }}>
              Meet your leaders, visit the snack bar and western store, and
              explore the property as a family.
            </sm>
          </li>
          <li>
            <strong>Pick-up: Friday, 7:00pm</strong>
          </li>
        </ul>
        <p>Summer Ultimate and Junior Day Camps will run Monday-Friday.</p>
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
        <div id="who" style={{ position: "absolute", marginTop: "-180px" }} />
        <h1>Who it's for</h1>

        <ProgramContainer>
          <Program
            small
            name="Junior Day Camp"
            who="Kids age 5-7"
            src={file.childImageSharp.fluid}
          >
            Games, crafts, swimming, pony rides, story time and more! A week
            full of friendship and fun!
            <br />
            <PrimaryButton to="/summer-camp/junior-day-camp/">
              Learn more
            </PrimaryButton>
          </Program>
          <Program
            small
            name="Ultimate Day Camp"
            who="Kids age 8+"
            src={highPerformanceHockey.childImageSharp.fluid}
          >
            The full camp experience with your sport of choice, including daily
            campfires featuring engaging, real-life topics shared from a
            biblical perspective. Packed into a 5 day format.
            <br />
            <PrimaryButton to="/summer-camp/ultimate-day-camp/">
              Learn more
            </PrimaryButton>
          </Program>
          <Program
            small
            name="Overnight Camp"
            who="Kids age 8+"
            src={overnight.childImageSharp.fluid}
          >
            Our popular overnight camps are back this year and better than ever!
            Campers experience all the fun and adventure of summer camp packed
            into five awesome days and nights as they enjoy the great outdoors,
            get active and build friendships that can last a lifetime.
            <br />
            <PrimaryButton to="/summer-camp/overnight-camp/">
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
        <Quote cite="Diane">
          My child loves Teen Ranch and requests to go every year. That says so
          much coming from a kid. It is the only camp she is always eager to
          attend. She loves the horses and horseback riding. She loves the
          diverse activities, the food, and crafts. The staff are wonderful and
          friendly and she can't wait to go again!
        </Quote>
      </Container>

      <Container type="body">
        <h1>Camp dates</h1>

        <div id="dates" style={{ position: "absolute", marginTop: "-180px" }} />

        <h3>Legend: UDC = Ultimate day camps</h3>
        <CampSchedule
          dates={[
            "July 3-8",
            "July 10-15",
            "July 17-22",
            "July 24-29",
            <>July&nbsp;31 - Aug.&nbsp;5</>,
            "Aug. 7-12",
            "Aug. 14-19",
            "Aug. 21-26",
            <>Aug.&nbsp;28 - Sep.&nbsp;2</>,
          ]}
          programs={[
            {
              name: "Hockey camp",
              dates: [
                "UDC",
                "UDC",
                "8-11",
                "11-14",
                "",
                "",
                "8-14",
                "UDC",
                "UDC",
              ],
            },
            {
              name: "Elite hockey camp",
              dates: [
                "UDC",
                "UDC",
                <>
                  8-11
                  <br />
                  AA/AAA
                </>,
                "",
                "",
                <>
                  10-14
                  <br />
                  AA/AAA
                </>,
                <>
                  13-16
                  <br />
                  All levels
                </>,
                "UDC",
                "UDC",
              ],
            },
            {
              name: "Girl's hockey camp",
              dates: ["UDC", "UDC", "", "11-14", "", "", "", "UDC", "UDC"],
            },
            {
              name: "Goalie camp",
              dates: ["UDC", "UDC", "", "", "", "8-14", "", "UDC", "UDC"],
            },

            {
              name: "Western riding camp",
              dates: [
                "UDC",
                "UDC",
                "8-14",
                "8-14",
                "",
                "8-14",
                "8-14",
                "UDC",
                "UDC",
              ],
            },
            {
              name: "English riding camp",
              dates: [
                "UDC",
                "UDC",
                "8-14",
                "8-14",
                "",
                "8-14",
                "8-14",
                "UDC",
                "UDC",
              ],
            },
            {
              name: "Rodeo camp",
              dates: ["UDC", "UDC", "", "", "", "11+", "", "UDC", "UDC"],
            },
            {
              name: "Intensive equestrian camp",
              dates: ["UDC", "UDC", "", "", "", "", "13-16", "UDC", "UDC"],
            },
            {
              name: "WHAM camp",
              dates: [
                "UDC",
                "UDC",
                "8-14",
                "8-14",
                "",
                "8-14",
                "8-14",
                "UDC",
                "UDC",
              ],
            },
            {
              name: "Adventure camp",
              dates: ["UDC", "UDC", "", "", "", "", "10-14", "UDC", "UDC"],
            },
          ]}
        />

        <CTAButton to="/summer-camp/overnight-camp/">
          Learn more about overnight summer camp
        </CTAButton>

        <h2>Ultimate Day Camp</h2>
        <h3>Legend: OC = Overnight camps</h3>
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
              name: "Hockey camp",
              dates: ["", "8-14", "OC", "OC", "", "OC", "OC", "8-14", "8-14"],
            },
            {
              name: "Elite hockey camp",
              dates: [
                "",
                "",
                "OC",
                "OC",
                "",
                "OC",
                "OC",
                <>
                  8-14
                  <br />
                  AA/AAA
                </>,
                "",
              ],
            },
            {
              name: "Girl's hockey camp",
              dates: ["", "8-14", "OC", "OC", "", "OC", "OC", "", ""],
            },

            {
              name: "Western riding camp",
              dates: [
                "8-14",
                "8-14",
                "OC",
                "OC",
                "",
                "OC",
                "OC",
                "8-14",
                "8-14",
              ],
            },
            {
              name: "English riding camp",
              dates: [
                "8-14",
                "8-14",
                "OC",
                "OC",
                "",
                "OC",
                "OC",
                "8-14",
                "8-14",
              ],
            },
            {
              name: "WHAM camp",
              dates: [
                "8-14",
                "8-14",
                "OC",
                "OC",
                "",
                "OC",
                "OC",
                "8-14",
                "8-14",
              ],
            },
          ]}
        />

        <CTAButton to="/summer-camp/ultimate-day-camp/">
          Learn more about ultimate day camp
        </CTAButton>

        <h2>Junior Day Camp</h2>
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

        <CTAButton to="/summer-camp/junior-day-camp/">
          Learn more about junior day camp
        </CTAButton>
      </Container>

      <Container type="body">
        <div style={{ textAlign: "center" }}>
          <Img
            fixed={platinum.childImageSharp.fixed}
            alt="Best kids camps, best summer camps, best skating club/lessons winner."
          />
          <p>
            <a
              href="https://www.orangeville.com/readerschoice/business/teen-ranch-canada-caledon-teen-ranch"
              target="_blank"
              rel="noopener noreferrer"
            >
              Best Kids Camps, Summer Camps & Skating Club/Lessons
            </a>
          </p>
        </div>
      </Container>

      <Container type="body">
        <div
          id="pricing"
          style={{ position: "absolute", marginTop: "-180px" }}
        />
        <h1>Pricing</h1>
        <SummerCampTerms />
        <PriceContainer>
          <Price
            title={
              <>
                Junior
                <br />
                day camp
              </>
            }
            subTitle={`Games, crafts, swimming, pony rides, story time and more! A week full of friendship and fun!`}
            who="Kids age 5-7"
            price={495}
            term="week"
            includes={[
              "Games",
              "Crafts",
              "Swimming",
              "Pony rides",
              "Lunch & morning snack",
              "Snackbar open in the afternoons",
              "Story time",
            ]}
          >
            <center>
              <SecondaryButton to="/summer-camp/junior-day-camp/">
                Learn more
              </SecondaryButton>
            </center>
            <CTAButton href="https://register.trmanager.com">
              Register now
            </CTAButton>
          </Price>
          <Price
            title={
              <>
                Ultimate
                <br />
                day camp
              </>
            }
            subTitle="The full camp experience with your sport of choice, including daily campfires featuring engaging, real-life topics shared from a biblical perspective."
            who="Kids and teens 8+"
            price={850}
            startingAt
            term="week"
            includes={[
              "Full camp experience",
              "Your sport of choice",
              "Daily campfire",
              "Lunch & morning snack",
              "Snackbar open in the afternoons",
              "Real-life",
            ]}
          >
            <center>
              <SecondaryButton to="/summer-camp/ultimate-day-camp/">
                Learn more
              </SecondaryButton>
            </center>
            <CTAButton href="https://register.trmanager.com">
              Register now
            </CTAButton>
          </Price>
          <Price
            title={
              <>
                Overnight
                <br />
                camp
              </>
            }
            subTitle="Campers experience all the fun and adventure of summer camp packed into five awesome days & nights as they enjoy the great outdoors, get active and build friendships that can last a lifetime."
            who="Kids and teens 8+"
            price={1250}
            startingAt
            term="week"
            includes={[
              "Complete camp experience",
              "Your sport of choice",
              "Evening camp-wide games",
              "Evening campfires",
              "Breakfast, lunch & dinner",
              "Snackbar open morning and afternoon",
              "Real-life",
            ]}
          >
            <center>
              <SecondaryButton to="/summer-camp/overnight-camp/">
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
        <h2>Ultimate & Day camp add-ons:</h2>
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
    file(relativePath: { eq: "summerDayCamp8.jpg" }) {
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

    platinum: file(relativePath: { eq: "awards/readers-choice-platinum.jpg" }) {
      childImageSharp {
        fixed(height: 180, quality: 64) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }

    overnight: file(relativePath: { eq: "activities/waterslide1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, maxHeight: 334, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    highPerformanceHockey: file(
      relativePath: { eq: "facilities/iceCorral/hockey14.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
