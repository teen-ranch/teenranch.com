import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
// import Button from 'components/Button'
import { graphql } from 'gatsby'

import SubNav from 'components/SubNav'
import { CTAButton } from 'components/Button'
import Program, { ProgramContainer } from 'components/Program'

// import Grid from 'components/Grid'
// import Coach from 'components/Coach'
import { Link } from 'react-scroll'
import { PriceContainer, Price, PriceAddon } from 'components/Price'
import Quote from 'components/Quote'
import CampSchedule from 'components/CampSchedule'
import Grid from 'components/Grid'
// import Sponsor from 'components/Sponsor'
import Img from 'gatsby-image'

const frontmatter = {
    title: 'BMX dirt camp',
    path: '/summer-camp/ultimate-day-camp/bmx-dirt-camp/'
}

const pageData = {
    subTitle: `Ride tabletops, rollers, step-ups, whoops, berms and more!`,
    keywords: 'ultimate day camp, bmx dirt camp, summer day camp'
}

export default function Programs({ data }) {
    
    const { file, bmxAll, activities } = data

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

            <SubNav>
                <Link to='top' activeClass='active' spy={true}>Overview</Link>
                <Link to='dates' activeClass='active' spy={true}>Dates</Link>
                <Link to='pricing' activeClass='active' spy={true}>Pricing</Link>
            </SubNav>

            <div id='top' style={{ position: 'absolute', marginTop: '-120px', }}/>

            <Container type='body'>

                <h1>BMX dirt camp</h1>  

                <p>
                    BMX Dirt Camp is all about developing your skills as a rider, learning to build jumps and features and maintaining your own bike. If you love BMX or just want to try it out, this recreational program is for you! Bring your own bike and helmet or rent one of ours!
                </p>     

            </Container>

            <Container type='body'>

                <h1>Ultimate day camp for ultimate kids</h1>  

                <p>
                Come to ultimate day camp and experience all the fun and adventure of summer camp packed into five awesome days! Enjoy the great outdoors, get active and build friendships that last a lifetime.
                </p>         
                
                <p>
                In the morning, hone your skills in your sport of choice. Afternoons are your chance to enjoy a variety of activities and daily campfires with engaging, real-life topics shared from a biblical perspective.
                </p>
                <p>
                Our well-trained staff are committed to the safety and well-being of each camper and aim to come alongside you to challenge and inspire!
                </p>

            </Container>

            <Container type='body'>
                <h1>Who it's for</h1>

                <ProgramContainer>
                    <Program small name='BMX dirt camp' who='Beginner to advanced (age 8+)' src={ file.childImageSharp.fluid }>Tabletops, rollers, step-ups, step-downs, whoops, berms, hip jumps and even a pump track for riders of all levels.</Program>
                </ProgramContainer>

            </Container>

            <Container type='body'>

                <Quote cite="Shocked Parent">
                    It's only January and the kids are starting their countdown to camp, but Disney is 13 days away. They'd rather camp than do Disney?
                </Quote>

            </Container>

            <Container type='body'>

                <Grid
                    sm={2}
                    md={2}
                    lg={3}
                    xl={5}
                    gap={ false }
                >
                    {
                        bmxAll && bmxAll.edges && bmxAll.edges.map((edge, i) => {

                            return <div key={ i } className='facility'><Img fluid={ edge.node.childImageSharp.fluid } alt='BMX' /></div>

                        })
                    }
                </Grid>

                </Container>

            <Container type='body'>

                <h1>Afternoon activities</h1>

                <Grid
                    sm={2}
                    md={2}
                    lg={3}
                    xl={5}
                    gap={ false }
                >
                    {
                        activities && activities.edges && activities.edges.map((edge, i) => {

                            return <div key={ i } className='facility'><Img fluid={ edge.node.childImageSharp.fluid } alt='Activities' /></div>

                        })
                    }
                </Grid>

            </Container>

            <div id='dates' style={{ position: 'absolute', marginTop: '-120px', }}/>

            <Container type='body'>

                <h1>Camp dates</h1>

                <CampSchedule
                    dates={[
                        'July 5-9',
                        'July 12-16',
                        'July 19-23',
                        'July 26-30',
                        'Aug. 2-6',
                        'Aug. 9-13',
                        'Aug. 16-20',
                        'Aug. 23-27',
                        <>Aug.&nbsp;30 - Sep.&nbsp;3</>
                    ]}
                    programs={[
                        {
                            name: 'BMX dirt camp',
                            dates: [
                                '',
                                '',
                                '',
                                '',
                                '8-16',
                                '',
                                '',
                                '',
                                '',
                            ]
                        },
                    ]}
                />

            </Container>

            <div id='pricing' style={{ position: 'absolute', marginTop: '-180px', }}/>

            {/* <Container>
                <h1>Pricing</h1>
            </Container> */}

            <Container type='body'>
                <h1>Pricing</h1>
                <PriceContainer>

                    <Price 
                        title='BMX dirt camp'
                        subTitle={`Tabletops, rollers, step-ups, step-downs, whoops, berms, hip jumps and even a pump track for riders of all levels.`} 
                        who='Beginner to advanced (age 8+)'
                        price={850} 
                        term='week'
                        includes={[
                            'Tabletops',
                            'Rollers',
                            'Step-ups',
                            'Step-downs',
                            'Whoops',
                            'All camp activities'
                        ]}
                    >
                        <CTAButton href="https://register.trmanager.com">Register now</CTAButton>
                    </Price>
                    
                </PriceContainer>

            </Container>

            <Container type='body'>
                <h2>Day camp add-ons:</h2>
                <PriceAddon
                    title='Extended care'
                    subTitle='6:00pm late pick-up'
                    description={
                        <>
                            Please contact us for additional options if 6:00pm late pick-up doesn't work for your family.
                        </>
                    }
                    price={75}
                    term='week'
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
        file(relativePath: { eq: "programs/bmx/190314899_4507801949264768_520421299450177063_n.jpg" }) {
            childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
        }

        daycamp: file(relativePath: { eq: "programs/daycamp/india.jpg" }) {
            childImageSharp {
				fluid(maxWidth: 600 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
        }

        bmxAll: allFile(filter: { relativeDirectory: { eq: "programs/bmx" }}) {
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

        activities: allFile(filter: { relativeDirectory: { eq: "activities" }}) {
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