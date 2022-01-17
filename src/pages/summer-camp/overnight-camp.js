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
import Quote from "components/Quote"
import CampSchedule from "components/CampSchedule"
import Grid from "components/Grid"
// import Sponsor from 'components/Sponsor'
import Img from "gatsby-image"
import JumpStart from "../../components/JumpStart"

const frontmatter = {
  title: "Overnight camp",
  path: "/summer-camp/overnight-camp/",
}

const pageData = {
  subTitle: `The complete camp experience: life-long friends, sports, and real life`,
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
          Our popular overnight camps are back this year and better than ever!
          Campers experience all the fun and adventure of summer camp packed
          into five awesome nights as they enjoy the great outdoors, get active
          and build friendships that can last a lifetime.
        </p>

        <p>
          In the morning, campers hone their skills in their sport of choice.
          Afternoons are their chance to enjoy a variety of Teen Ranch
          activities and evenings include camp-wide games and nightly campfires
          with engaging, real-life topics shared from a biblical perspective.
          Cabin time is a unique opportunity for growth, bonding and overall
          fun!! This year campers can enjoy enhanced climbing wall apparatus and
          features!
        </p>
        <p>
          Our well-trained staff are committed to the safety and well-being of
          each camper and aim to come alongside them to challenge and inspire!
        </p>

        <h3>Weekly overview</h3>
        <p>Summer overnight camps will run Sunday evenings-Friday evenings.</p>
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
      </Container>

      <Container type="body">
        <h1>Who it's for</h1>
        <p>
          Overnight summer camp is perfect for kids and teens age 8+. We offer
          specialized programs in horseback riding, hockey, adventure and WHAM
          camp for when you want to experience a bit of everything!
        </p>

        <ProgramContainer>
          <Program
            small
            name="Hockey camps"
            who="Players & goalies (age 8+)"
            src={hockey.childImageSharp.fluid}
          >
            Skills & skating development for players and goalies from
            house-league to rep. regular hockey, elite hockey, girl's hockey,
            and goalie camps.
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
          <Program
            small
            name="Adventure camp"
            who="Adventurous kids (age 10-14)"
            src={adventure.childImageSharp.fluid}
          >
            <i style={{ textDecoration: "italic" }}>One week only!</i>
            <br />
            <br />
            Off-site, day adventures in kayaking, caving/spelunking, canoeing,
            paddle boarding and mountain biking. Campers must be able to swim
            and eager to try new things.
            <br />
            <PrimaryButton to="/summer-camp/overnight-camp/adventure-camp/">
              Learn more
            </PrimaryButton>
          </Program>
          <Program
            small
            name="WHAM camp"
            who="Kids who want to try everything (age 8+)"
            src={wham.childImageSharp.fluid}
          >
            Epic activities like horseback riding, rock climbing, woodland
            survival, volleyball, archery, waterslide, jousting pond and so much
            more!
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
          activities on 150 beautiful acres including: rock climbing,
          bouldering, water slide, swimming, water jousting, archery, tennis,
          basketball, volleyball, and more.
        </p>

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
        <h3>Terms:</h3>
        <p>
          In order to keep payments as low-risk as possible for you, we are only
          requiring a $100 non-refundable deposit per overnight camp
          registration. The balance will be due 14 days prior to arrival at camp
          and is non-refundable. In the case of absence for any reason during
          the camp week, including homesickness or disciplinary departure, no
          refund will be issued except upon a signed physician’s order. In this
          event, a prorated camp refund will be issued, less the $100
          non-refundable deposit.
        </p>
        <ul>
          <li>$100 non-refundable deposit per overnight camp registration</li>
          <li>
            The balance is due 14 days prior to arrival at camp and is
            non-refundable.
          </li>
        </ul>
        <JumpStart />
        <PriceContainer>
          <Price
            title="Hockey camps"
            subTitle={`Skills & skating development for players and goalies from house-league to rep. Standard, high-performance, girl's hockey, and goalie camps.`}
            who="Players and goalies"
            price={1250}
            term="week"
            startingAt
            includes={[
              "On-site, olympic-size ice rink",
              "Minimum 10 hours on-ice per week",
              "Skills development",
              "Skating development",
              "Off-ice program",
              "Afternoon scrimmages",
              "Breakfast, lunch & dinner",
              "Snackbar open morning and afternoon",
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
            price={1250}
            startingAt
            term="week"
            includes={[
              "Ability based lessons",
              "Western and english specific disciplines",
              "Safe, well-schooled horses",
              "Instructors trained to CHA standards",
              "First-aid certified full-time staff",
              "Breakfast, lunch & dinner",
              "Snackbar open morning and afternoon",
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
          <Price
            title="Adventure camp"
            subTitle="Off-site, day adventures in outdoor rock climbing,
            caving/spelunking, canoeing, white-water kayaking and mountain
            biking."
            who="Adventurous kids, must be able to swim"
            price={1400}
            term="week"
            // startingAt
            oneWeekOnly
            includes={[
              "ONE WEEK ONLY!",
              "Off-site day adventures",
              "Kayaking",
              "Caving/spelunking",
              "Canoeing",
              "Paddle boarding",
              "Mountain biking",
              "Breakfast, lunch & dinner",
              "Snackbar open morning and afternoon",
              "Certified instructor",
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
          </Price>
          <Price
            title="WHAM camp"
            subTitle="Epic activities like horseback riding, rock climbing, woodland survival, volleyball, archery, waterslide, jousting pond and so much more!"
            who="Kids who want to try everything"
            price={1250}
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
              "Snackbar open morning and afternoon",
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
        <JumpStart />
      </Container>
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
