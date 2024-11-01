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
import { OvernightCampTerms } from "../../../components/Terms"
import JumpStart from "components/JumpStart"
import { Time } from "components/Time"
import { BalancePayments } from "components/BalancePayments"
import Video from "components/Video"
import { PhotoGrid } from "components/PhotoGrid"

const frontmatter = {
  title: "WHAM camp",
  path: "/summer-camp/ultimate-day-camp/wham-camp/",
}

const pageData = {
  subTitle: `Where heaps of activities meet.`,
  keywords: "ultimate day camp, summer sports camp, summer day camp",
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
        <h1>WHAM camp</h1>

        <p>Where heaps of activities meet!</p>

        <p>
          Want to experience LOTS of camp fun, try a load of activities and meet
          friends for life? WHAM Camp (Where Heaps of Activities Meet) is
          designed just for you! Come and experience all the best of what Teen
          Ranch has to offer. You won’t want to miss these epic activities!
        </p>
      </Container>

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

          Summer Overnight Camps will run Sunday evenings - Friday evenings (August 4-8 week starts Monday).

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
              Pick-up: Friday, <Time>1830</Time>
            </strong>
          </li>
        </ul>
        <p><em>Note: See info pack for more details.</em></p>
      </Container>

      <Container type="body">
        <h2>Info pack</h2>
        <div style={{ color: 'red' }}>Check out our weekly camp themes and details in our camp info pack below:</div>
        <div>
          <PdfButton
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.canva.com/design/DAGU3k4-QpE/M2c_z_Zcd_ZTDW8ITuMyWw/view"
          >
            Overnight camp info pack
          </PdfButton>
        </div>{" "}
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
            name="WHAM camp"
            who="Kids who want to try everything (age 8+)"
            src={file.childImageSharp.fluid}
          >
            Epic activities like giant swing, horseback riding, rock climbing,
            woodland survival, initiatives course challenge, archery,
            waterslide, jousting pond, and so much more!
          </Program>
        </ProgramContainer>
      </Container>

      {/*<Container>
        <Video src="https://www.youtube-nocookie.com/embed/hjLhkn7TcXo?si=4MitxKMv_F_H5dTY" />
      </Container>*/}

      <Container type="body">
        <Quote cite="Shocked Parent">
          It's only January and the kids are starting their countdown to camp,
          but Disney is 13 days away. They'd rather camp than do Disney?
        </Quote>
      </Container>

      <Container type="body">
        {/* <Grid sm={2} md={2} lg={3} xl={5} gap={false}>
          {whamAll &&
            whamAll.edges &&
            whamAll.edges.map((edge, i) => {
              return (
                <div key={i} className="facility">
                  <Img fluid={edge.node.childImageSharp.fluid} alt="WHAM" />
                </div>
              )
            })}
        </Grid> */}
        <PhotoGrid srcs={whamAll.edges} />
      </Container>

      <Container type="body">
        <h1>Afternoon activities</h1>

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
        <PreBuiltCampSchedule type="ONC" sections={["wham"]} />

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
        <PriceContainer xl={1} lg={1} md={1}>
          <Price
            title="WHAM camp"
            subTitle={`Epic activities like giant swing, horseback riding, rock climbing, woodland survival, initiatives course challenge, archery, waterslide, jousting pond, and so much more!`}
            who="KIDS WHO WANT TO TRY EVERYTHING (AGE 8+)"
            price={1065}
            priceTo={1335}
            term="week"
            includes={[
              "Horseback riding",
              "Rock climbing & bouldering",
              "Woodland survival skills",
              "Volleyball, soccer, & basketball",
              "Archery",
              "Waterslide, jousting pond, canoeing, kayaking",
              "Swimming",
              "All meals",
              "All camp activities",
            ]}
          >
            <CTAButton href="https://register.trmanager.com">
              Register now
            </CTAButton>
          </Price>
        </PriceContainer>
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
    file(relativePath: { eq: "programs/wham/Display Archery.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    whamAll: allFile(filter: { relativeDirectory: { eq: "programs/wham" } }) {
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
