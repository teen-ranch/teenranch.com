import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
// import Button from 'components/Button'
import { graphql } from 'gatsby'

// import SubNav from 'components/SubNav'
import { CTAButton } from 'components/Button'
// import Program, { ProgramContainer } from 'components/Program'

// import Grid from 'components/Grid'
// import Coach from 'components/Coach'
// import { Link } from 'react-scroll'
import { PriceContainer, Price } from 'components/Price'
// import Grid from 'components/Grid'
// import Sponsor from 'components/Sponsor'
// import Img from 'gatsby-image'

const frontmatter = {
    title: 'Christmas day Camp',
    path: '/day-camp/christmas-day-camp/'
}

const pageData = {
    subTitle: `The excitement of the season is multiplied with Teen Ranch's Christmas Winter Break Day Camps!`,
    keywords: 'christmas day camp, christmas day camp, day camp orangeville, christmas day camp orangeville'
}

export default function Programs({ data }) {
    
    const { file } = data

	return (
        <>

            <Heading
                src={ file.childImageSharp.fluid }
                // src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/hockey14.jpg'
                alt='Hockey player stopping with puck'
                title={ frontmatter.title }
                subtitle={ pageData.subTitle }
                metaTitle={ pageData.metaTitle || frontmatter.title }
                metaDescription={ pageData.metaDescription || pageData.subTitle }
                keywords={ pageData.keywords }
			/>

            {/* <SubNav>
                <Link to='top' activeClass='active' spy={true}>Overview</Link>
                <Link to='dates' activeClass='active' spy={true}>Dates</Link>
                <Link to='pricing' activeClass='active' spy={true}>Pricing</Link>
            </SubNav> */}

            <div id='top' style={{ position: 'absolute', marginTop: '-120px', }}/>

            <Container type='body'>

                <h1>Christmas day camp</h1> 

                <p>The excitement of the season is multiplied with Teen Ranch's Christmas Winter Break Day Camps! Back this year by popular demand our day camps offer outdoor fun and activity as well as indoor festivities to celebrate the winter season and the magic of Christmas! Treat your kids to a memorable day or bundle package all four days at a daily savings!</p>    

            </Container>

            <Container type='body'>

                <h1>Available dates</h1>         

                <ul>
                    <li>December 20-23, 2021</li>
                </ul>

                <p>Drop off between 8:30-8:50 am and pick up between 4:30- 5:00 pm</p>

            </Container>

            <div id='pricing' style={{ position: 'absolute', marginTop: '-180px', }}/>

            {/* <Container>
                <h1>Pricing</h1>
            </Container> */}

            <Container type='body'>
                <h1>Pricing</h1>
                 
                <PriceContainer>

                    <Price 
                        title={<>Day camp<br/>(Classic)</>}
                        subTitle={`Individual day`} 
                        who='Kids ages 5-12'
                        price={75} 
                        term='day'
                        includes={[
                            'Outdoor discovery, games and sports*',
                            'Indoor ice skating with Christmas music',
                            'Pony rides*',
                            'Christmas and holiday activities and crafts',
                            'Lunch & two snacks',
                        ]}
                    >
                        <CTAButton href="https://register.trmanager.com">Register now</CTAButton>
                    </Price>

                    <Price 
                        title={<>Day camp<br/>(Classic)</>}
                        subTitle={`Bundle`} 
                        who='Kids ages 5-12'
                        price={280} 
                        term='4 days'
                        includes={[
                            'Outdoor discovery, games and sports*',
                            'Indoor ice skating with Christmas music',
                            'Pony rides*',
                            'Christmas and holiday activities and crafts',
                            'Lunch & two snacks',
                        ]}
                    >
                        <CTAButton href="https://register.trmanager.com">Register now</CTAButton>
                    </Price>

                    <Price 
                        title={<>Day camp<br/>(Hockey)</>}
                        subTitle={`Individual day`} 
                        who='Kids ages 5-12'
                        price={95} 
                        term='day'
                        includes={[
                            'Hockey skills, skating and fun!',
                            'Outdoor discovery, games and sports*',
                            'Indoor ice skating with Christmas music',
                            'Pony rides*',
                            'Christmas and holiday activities and crafts',
                            'Lunch & two snacks',
                        ]}
                    >
                        <CTAButton href="https://register.trmanager.com">Register now</CTAButton>
                    </Price>

                    <Price 
                        title={<>Day camp<br/>(Hockey)</>}
                        subTitle={`Bundle`} 
                        who='Kids ages 5-12'
                        price={360} 
                        term='4 days'
                        includes={[
                            'Hockey skills, skating and fun!',
                            'Outdoor discovery, games and sports*',
                            'Indoor ice skating with Christmas music',
                            'Pony rides*',
                            'Christmas and holiday activities and crafts',
                            'Lunch & two snacks',
                        ]}
                    >
                        <CTAButton href="https://register.trmanager.com">Register now</CTAButton>
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
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
        }

    }
`