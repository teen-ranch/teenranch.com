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
import Quote from "../../../components/Quote"
import CampSchedule, {
  PreBuiltCampSchedule,
} from "../../../components/CampSchedule"
import Grid from "components/Grid"
// import Sponsor from 'components/Sponsor'
import Img from "gatsby-image"
import { UltimateDayCampTerms } from "components/Terms"
import { Link as ReachLink } from "@reach/router"
import JumpStart from "components/JumpStart"
import UltimateDayCampIntro from "components/UltimateDayCampIntro"

const frontmatter = {
  title: "Horse camps",
  path: "/summer-camp/ultimate-day-camp/horse-camps/",
}

const pageData = {
  subTitle: `Canada's finest horse camp since 1967`,
  keywords:
    "summer horse camp, horse camp ontario, horse camp orangeville, horse camp toronto",
}

export default function Programs({ data }) {
  const { file, western, english, intensive, rodeo, activities } = data

  return (
    <>
      <Heading
        src={file.childImageSharp.fluid}
        // src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/hockey14.jpg'
        alt="Hockey player taking a slapshot"
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
        <h1>Horse camp</h1>

        <p>
          The Teen Ranch horse program is for all ability levels to learn or
          develop their skills on safe, well-schooled horses.
        </p>

        <p>
          Beginner riders start with the basics of position and control.
          Intermediate riders continue to hone the basics while being introduced
          to new skills. Advanced riders will be challenged to perfect their
          jumping position, equitation and effective communication with their
          horse.
        </p>

        <p>
          Teen Ranch instructors are trained according to CHA standards, putting
          the largest emphasis on safety, education and fun. All full-time staff
          are certified in First Aid.
        </p>
      </Container>

      <Container type="body">
        <UltimateDayCampIntro />
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
        <p>
          Horse camp is perfect for english and western riders of all ability
          levels.
        </p>

        <ProgramContainer>
          <Program
            small
            name="Western riding camp"
            who="Beginner to advanced (age 8+)"
            src={western.childImageSharp.fluid}
          >
            An excellent place to start for first-time riders or western riding
            enthusiasts.
          </Program>
          <Program
            small
            name="English riding camp"
            who="Beginner to advanced (age 8+)"
            src={english.childImageSharp.fluid}
          >
            For kids of all riding levels to learn or develop new skills.
          </Program>
          {/* <Program
            small
            name="Intensive equestrian camp"
            who="Advanced hunter/jumper (age 12+)"
            src={intensive.childImageSharp.fluid}
          >
            For english riders looking to improve their success in the show
            ring.
            <p style={{ fontSize: "1.2rem" }}>
              Application video must be approved to qualify for this program.
            </p>
          </Program>
          <Program
            small
            name="Rodeo"
            who="Intermediate to advanced (age 11+)"
            src={rodeo.childImageSharp.fluid}
          >
            For western riders who want a taste of rodeo competition.
          </Program> */}
        </ProgramContainer>
      </Container>

      <Container type="body">
        <Quote cite="Diane">
          My child loves Teen Ranch and requests to go every year. That says so
          much coming from a kid. It is the only camp she is always eager to
          attend. She loves the horses and horseback riding. She loves the
          diverse activities, the food, and crafts. The staff are wonderful and
          friendly and she can't wait to go again!
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
        <PreBuiltCampSchedule type="UDC" sections={["horses"]} />

        <p>
          For rodeo camp, and intensive equestrian camp:{" "}
          <ReachLink to="/summer-camp/overnight-camp/">
            see our overnight camps.
          </ReachLink>
        </p>

        <CTAButton to="/summer-camp/ultimate-day-camp/">Register now</CTAButton>
      </Container>

      <div id="pricing" style={{ position: "absolute", marginTop: "-180px" }} />

      {/* <Container>
                <h1>Pricing</h1>
            </Container> */}

      <Container type="body">
        <h1>Pricing</h1>
        <UltimateDayCampTerms />
        <JumpStart />
        <PriceContainer>
          <Price
            title="Western riding camp"
            subTitle="An excellent place to start for first-time riders or western riding enthusiasts."
            who="Beginner to advanced"
            price={850}
            term="week"
            includes={[
              "Basic position & control",
              "Lateral movement",
              "Patterns",
              "Games on horseback",
              "Barrel racing (advanced)",
              "Pole bending (advanced)",
              "Lunch & morning snack",
              "Snackbar open in the afternoons",
              "All camp activities",
            ]}
          >
            <CTAButton href="https://register.trmanager.com">
              Register now
            </CTAButton>
          </Price>
          <Price
            title="English riding camp"
            subTitle="For kids of all riding levels to learn or develop new skills."
            who="Beginner to advanced"
            price={850}
            term="week"
            includes={[
              "Basic position & control",
              "Lateral movement",
              "Games on horseback",
              "Jumping position",
              "Equitation",
              "Lunch & morning snack",
              "Snackbar open in the afternoons",
              "All camp activities",
            ]}
          >
            <CTAButton href="https://register.trmanager.com">
              Register now
            </CTAButton>
          </Price>
          {/* <Price
            title="Intensive equestrian camp"
            subTitle="For english riders looking to improve their success in the show ring."
            who="Advanced hunter/jumper"
            price={1200}
            term="week"
            primary
            includes={[
              "Minimum of 2 hours in-tack lessons per day",
              "Minimum of 1 hour out-of-tack lesson per day",
              "Off-site outing (pending covid restrictions)",
              "Photo shoot with your horse",
              "Free division entry in Sunday on-site hunter/jumper show",
              "Lunch & morning snack",
              "Snackbar open in the afternoons",
              "All camp activities",
            ]}
          >
            <span style={{ fontSize: "1.2rem" }}>
              <center>
                Application video must be approved to qualify for this program.
              </center>
            </span>
            <CTAButton href="https://register.trmanager.com">
              Register now
            </CTAButton>
          </Price>
          <Price
            title="Rodeo camp"
            subTitle="For western riders who want a taste of rodeo competition."
            who="Intermediate to advanced"
            price={1050}
            term="week"
            includes={[
              "Roping",
              "Barrel racing",
              "Pole bending",
              "Goat tying",
              "Rodeo camp showdown",
              "Lunch & morning snack",
              "Snackbar open in the afternoons",
              "All camp activities",
            ]}
          >
            <CTAButton href="https://register.trmanager.com">
              Register now
            </CTAButton>
          </Price> */}
        </PriceContainer>
      </Container>

      <Container type="body">
        <h2>Horse camp add-ons:</h2>
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
    file(relativePath: { eq: "programs/horse/rachel.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    rodeo: file(relativePath: { eq: "programs/horse/Roping (179).jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    english: file(relativePath: { eq: "programs/horse/lesson.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    western: file(relativePath: { eq: "programs/horse/Western (40).jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    intensive: file(relativePath: { eq: "programs/horse/rachel.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 64) {
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
