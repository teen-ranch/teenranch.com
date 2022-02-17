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
// import Grid from 'components/Grid'
// import Sponsor from 'components/Sponsor'
// import Img from 'gatsby-image'

const frontmatter = {
  title: "March Break Day Camp",
  path: "/day-camp/march-break-day-camp/",
}

const pageData = {
  subTitle: `Treat your kids to an exciting getaway close to home.`,
  keywords: "march break day camp, march break day camp orangeville",
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
        <h1>{frontmatter.title}</h1>

        <p>
          Treat your kids to an exciting getaway close to home. Register them
          for a full week or individual days. Rest assured that they will be
          well taken care of, enjoy all kinds of outdoor active fun, and likely
          meet a new friend or two!
        </p>
      </Container>

      <Container type="body">
        <h1>Available dates</h1>

        <ul>
          <li>March 14-18, 2022</li>
        </ul>

        <p>Drop off between 8:30am-8:50am and pick up at 4:30pm</p>
      </Container>
      <Container type="body">
        <h1>Activities include</h1>
        <ul>
          <li>Superhero’s Unite! Theme with activities, games and crafts</li>
          <li>Outdoor discovery, games and sports (weather permitting)</li>
          <li>Indoor ice skating with kid-friendly music</li>
          <li>Pony rides*</li>
          <li>Hockey option available</li>
        </ul>
        <span className="note">* weather permitting</span>
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
            includes={[
              "Superhero’s Unite! Theme with activities, games and crafts",
              "Outdoor discovery, games and sports (weather permitting)",
              "Indoor ice skating with kid-friendly music",
              "Pony rides*",
              "Hockey option available",
              "Lunch & two snacks",
            ]}
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
                Bundle (<strong>SAVE $5/day</strong>)
              </>
            }
            who="Kids ages 5-12"
            price={420}
            term="week"
            includes={[
              "Superhero’s Unite! Theme with activities, games and crafts",
              "Outdoor discovery, games and sports (weather permitting)",
              "Indoor ice skating with kid-friendly music",
              "Pony rides*",
              "Hockey option available",
              "Lunch & two snacks",
            ]}
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
            price={109}
            term="day"
            includes={[
              <strong>50 minute skills & skating session each morning</strong>,
              "Superhero’s Unite! Theme with activities, games and crafts",
              "Outdoor discovery, games and sports (weather permitting)",
              "Indoor ice skating with kid-friendly music",
              "Pony rides*",
              "Hockey option available",
              "Lunch & two snacks",
            ]}
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
                Bundle (<strong>SAVE $5/day</strong>)
              </>
            }
            who="Kids ages 5-12"
            price={520}
            term="week"
            includes={[
              <strong>50 minute skills & skating session each morning</strong>,
              "Superhero’s Unite! Theme with activities, games and crafts",
              "Outdoor discovery, games and sports (weather permitting)",
              "Indoor ice skating with kid-friendly music",
              "Pony rides*",
              "Hockey option available",
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
        <p>** Ice skating not available on January 28, 2022</p>
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
