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
// import Grid from 'components/Grid'
// import Sponsor from 'components/Sponsor'
// import Img from 'gatsby-image'

const frontmatter = {
  title: "March Break Day Camp",
  path: "/day-camp/march-break-day-camp/",
}

const pageData = {
  subTitle: `Treat your kids to an outdoor adventure only moments from home.`,
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
          Treat your kids to an outdoor adventure only moments from home. Enjoy
          flexibility with the option of registering them for a full week or
          individual days and rest assured that they will be well-engaged as
          they enjoy all kinds of active outdoor fun, games, and sports
          alongside other campers and our committed staff team! Daily story time
          with an emphasis on sharing God's love!
        </p>
        <p>Daily indoor “Campfire Time” with an emphasis on sharing God's love!</p>
      </Container>

      <Container type="body">
        <h1>Available dates</h1>

        <ul>
          <li>March 10-14, 2025</li>
        </ul>

        <p>
          Drop off at <Time>0845</Time> and pick up at{" "}
          <Time>1645</Time>
        </p>
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
                 Bundle 
               </> 
             } 
             who="Kids ages 5-12" 
             price={400} 
             term="week" 
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
             price={120} 
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
                 Bundle
               </> 
             } 
             who="Kids ages 5-12" 
             price={550} 
             term="week" 
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
         {/* <p>** Ice skating not available on January 28, 2022</p> */} 
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
