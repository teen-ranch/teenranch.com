import React from "react"
import Container from "components/Container"
import Heading from "components/Heading"
// import Button from 'components/Button'
import { graphql } from "gatsby"

// import SubNav from 'components/SubNav'
import { CTAButton } from "components/Button"
// import Program, { ProgramContainer } from 'components/Program'

// import Grid from 'components/Grid'
// import Coach from 'components/Coach'
// import { Link } from 'react-scroll'
import { PriceContainer, Price } from "components/Price"
import {
  dayCampBulletsClassic,
  dayCampBulletsHockey,
} from "components/defaults"
import { Time } from "components/Time"
import Grid from "components/Grid"
import Video from "components/Video"
// import Grid from 'components/Grid'
// import Sponsor from 'components/Sponsor'
// import Img from 'gatsby-image'

const frontmatter = {
  title: "PD/PA Day Camp",
  path: "/day-camp/pd-pa-day-camp/",
}

const pageData = {
  subTitle: `Give your kids adventure and fun on their days off with our PD Day Camps!`,
  keywords:
    "pd day camp, pa day camp, day camp orangeville, pd day camp orangeville",
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

      {/* <SubNav>
                <Link to='top' activeClass='active' spy={true}>Overview</Link>
                <Link to='dates' activeClass='active' spy={true}>Dates</Link>
                <Link to='pricing' activeClass='active' spy={true}>Pricing</Link>
            </SubNav> */}

      <div id="top" style={{ position: "absolute", marginTop: "-120px" }} />

      <Container type="body">
        <Grid md={2}>
          <div>
            <h1>PD/PA day camp</h1>

            <p>
              Parents, we've got you covered!! Give your kids adventure and fun
              on their days off with our PD Day Camps! Designed for ample time
              outdoors to explore, play group games, and enjoy the season's best
              activities, these days will be sure to get your kids moving and
              having a blast. For the hockey enthusiast, we offer a hockey
              option as well. Lunch and two snacks.
            </p>
            <h1>Available dates</h1>

            {/* <div
  style={{
    padding: "4rem",
    background: "purple",
    borderRadius: "4px",
    color: "#fff",
    textAlign: "center",
    fontSize: "2rem",
  }}
>
  Check back soon for 2023/2024 season dates
</div> */}
            <ul>
              <li>Friday October 24, 2025</li>
              <li>Friday November 28, 2025</li>
              <li>Friday January 30, 2026</li>
              <li>Friday February 13, 2026</li>
            </ul>

            <p>
              Drop off at <Time>0845</Time> and pick up at{" "}
              <Time>1645</Time>
            </p>
            <p>Daily Campfire Time with an emphasis on sharing God's love!</p>
          </div>
          <div style={{ maxWidth: "315px" }}>
            <Video
              src="https://youtube.com/embed/u_HdXnBd2xM?feature=shared"
              short
            />
          </div>
        </Grid>
      </Container>

      <div id="pricing" style={{ position: "absolute", marginTop: "-180px" }} />

      <Container type="body">
        <h1>Pricing</h1>

        <PriceContainer>
          <Price
            title={
              <>
                Day camp
                <br />
                (Classic)
              </>
            }
            subTitle={``}
            who="Kids ages 5-12"
            price={75}
            term="day"
            includes={dayCampBulletsClassic}
          >
            <CTAButton href="https://register.trmanager.com">
              Register now
            </CTAButton>
          </Price>

          <Price
            title={
              <>
                Day camp
                <br />
                (Hockey)
              </>
            }
            subTitle={``}
            who="Kids ages 5-12"
            price={100}
            term="day"
            includes={dayCampBulletsHockey}
          >
            <CTAButton href="https://register.trmanager.com">
              Register now
            </CTAButton>
          </Price>
        </PriceContainer>
      </Container>

      <Container>
        <p>* Weather permitting</p>
      </Container>
    </>
  )
}

// const NavLink = ({ children, ...props }) => (
//     <Link {...props} activeClassName='active'>{ children }</Link>
// )

export const query = graphql`
  query {
    file(relativePath: { eq: "events/winterTobogganing.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
