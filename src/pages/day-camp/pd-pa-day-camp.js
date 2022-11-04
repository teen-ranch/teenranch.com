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
import { dayCampBulletsClassic } from "components/defaults"
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
        <h1>PD/PA day camp</h1>

        <p>
          Parents, we've got you covered!! Give your kids adventure and fun on
          their days off with our PD Day Camps! Designed for ample time outdoors
          to explore, play group games, and enjoy the season's best activities,
          these days will be sure to get your kids moving and having a blast.
          For the hockey enthusiast, we offer a hockey option on two of our PD
          Day Camps.
        </p>
      </Container>

      <Container type="body">
        <h1>Available dates</h1>
        <div
          style={{
            padding: "4rem",
            background: "purple",
            borderRadius: "4px",
            color: "#fff",
            textAlign: "center",
            fontSize: "2rem",
          }}
        >
          Check back after Christmas for Winter/Spring 2023 dates
        </div>
        {/* <ul>
          <li>October 24, 2022</li>
          <li>November 25, 2022 (Hockey option available)</li>
          <li>June 3, 2022</li>
        </ul> */}

        <p>Drop off between 8:30-8:50 am and pick up between 4:30- 5:00 pm</p>
      </Container>

      <div id="pricing" style={{ position: "absolute", marginTop: "-180px" }} />

      {/* <Container>
                <h1>Pricing</h1>
            </Container> */}

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
            price={89}
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
            price={99}
            term="day"
            includes={[
              <strong>
                One on-ice skills and skating development session, including a
                full-ice scrimmage{" "}
              </strong>,
              "Outdoor discovery, games and sports*",
              "Indoor ice skating with kid-friendly music",
              "Pony rides*",
              "Seasonal activities and crafts",
              "Lunch & two snacks",
            ]}
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
