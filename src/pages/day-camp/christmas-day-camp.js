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
import { FormatTime, Time } from "components/Time"
// import Grid from 'components/Grid'
// import Sponsor from 'components/Sponsor'
// import Img from 'gatsby-image'

const frontmatter = {
  title: "Christmas day camp",
  path: "/day-camp/christmas-day-camp/",
}

const pageData = {
  subTitle: `The excitement of the season is multiplied with Teen Ranch's Christmas Winter Break Day Camps!`,
  keywords:
    "christmas day camp, christmas day camp, day camp orangeville, christmas day camp orangeville",
}

export default function Programs({ data }) {
  const { file } = data

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
        <h1>Christmas day camp</h1>

        <p>
          The excitement of the season is multiplied with Teen Ranch Christmas
          Winter Break Day Camps! Our popular day camps offer outdoor fun and
          activity as well as indoor festivities to celebrate winter and the
          magic of the Christmas season! Treat your kids to a memorable day or
          bundle package all four days at a daily savings!
        </p>
      </Container>

      <Container type="body">
        <h1>Available dates</h1>

        <ul>
          <li>January 2-5, 2024</li>
        </ul>

        <p>
          Drop off between <Time>0830</Time> - <Time>0850</Time> and pick up
          between <Time>1630</Time> - <Time>1645</Time>
        </p>
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
            subTitle={`Individual day`}
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
                (Classic)
              </>
            }
            subTitle={
              <>
                Bundle (<strong>SAVE $14/day</strong>)
              </>
            }
            who="Kids ages 5-12"
            price={300}
            term="4 days"
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
            subTitle={`Individual day`}
            who="Kids ages 5-12"
            price={115}
            term="day"
            includes={dayCampBulletsHockey}
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
            subTitle={
              <>
                Bundle (<strong>SAVE $16.25/day</strong>)
              </>
            }
            who="Kids ages 5-12"
            price={395}
            term="4 days"
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
