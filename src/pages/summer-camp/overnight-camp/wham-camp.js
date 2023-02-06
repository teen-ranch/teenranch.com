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
          Our popular overnight camps are back this year and better than ever!
          Campers experience all the fun and adventure of summer camp packed
          into five awesome nights as they enjoy the great outdoors, get active,
          and build friendships that can last a lifetime.
        </p>
        <p>
          In the morning, campers hone their skills in their sport of choice.
          Afternoons are their chance to enjoy a variety of activities, and
          evenings include camp-wide games and a campfire with engaging,
          real-life topics shared from a biblical perspective.
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
        {/* <div>
          <PdfButton
            target="_blank"
            rel="noopener noreferrer"
            href="https://teenranch.nyc3.cdn.digitaloceanspaces.com/website/pdf/overnightCampInformation_2022.pdf"
          >
            Overnight camp info pack
          </PdfButton>
        </div> */}
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
            name="WHAM camp"
            who="Kids who want to try everything (age 8+)"
            src={file.childImageSharp.fluid}
          >
            Epic activities like horseback riding, rock climbing, woodland
            survival, volleyball, archery, waterslide, jousting pond and so much
            more!
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
        <PriceContainer>
          <Price
            title="WHAM camp"
            subTitle={`Epic activities like horseback riding, rock climbing, woodland survival, volleyball, archery, waterslide, jousting pond and so much more!`}
            who="KIDS WHO WANT TO TRY EVERYTHING (AGE 8+)"
            price={1250}
            term="week"
            includes={[
              "Horseback riding",
              "Rock climbing & bouldering",
              "Woodland survival skills",
              "Volleyball, Soccer, & basketball",
              "Archery",
              "Waterslide, jousting pond, canoeing, kayaking",
              "Swimming",
              "Breakfast, lunch & dinner",
              "Snackbar open in the afternoons",
              "All camp activities",
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
