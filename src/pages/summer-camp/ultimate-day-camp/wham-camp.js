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
    title: 'WHAM camp',
    path: '/summer-camp/ultimate-day-camp/wham-camp/'
}

const pageData = {
    subTitle: `Where heaps of activities meet.`,
    keywords: 'ultimate day camp, summer sports camp, summer day camp'
}

export default function Programs({ data }) {
    
    const { file, whamAll, activities } = data

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

                <h1>WHAM camp</h1> 

                <p>Where heaps of activities meet!</p>

                <p>
                Want to experience LOTS of camp fun, try a load of activities and meet friends for life? WHAM Camp (Where Heaps of Activities Meet) is designed just for you! Come and experience all the best of what Teen Ranch has to offer. You won’t want to miss these epic activities!
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

                <h3>Weekly overview</h3>
                <p>
                    Summer day camps will run Monday-Friday.
                </p>
                <ul>
                    <li><strong>Drop-off:</strong> 8:30am - 8:50am</li>
                    <li><strong>Pick-up:</strong> 4:45pm - 5:00pm</li>
                    <li><strong>Extended care:</strong> 6:00pm late pick-up option available.</li>
                </ul>

            </Container>

            <Container type='body'>
                <h1>Who it's for</h1>

                <ProgramContainer>
                    <Program small name='WHAM camp' who='Kids who want to try everything (age 8+)' src={ file.childImageSharp.fluid }>Epic activities like horseback riding, rock climbing, woodland survival, volleyball, archery, waterslide, jousting pond and so much more!</Program>
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
                        whamAll && whamAll.edges && whamAll.edges.map((edge, i) => {

                            return <div key={ i } className='facility'><Img fluid={ edge.node.childImageSharp.fluid } alt='WHAM' /></div>

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
                            name: 'WHAM camp',
                            dates: [
                                '8-16',
                                '8-16',
                                '8-16',
                                '8-16',
                                '',
                                '8-16',
                                '8-16',
                                '',
                                '8-16',
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
                <h3>Terms:</h3>
                <p>In order to keep payments as low-risk as possible for you, we are only requiring a $50 non-refundable deposit per registration. The balance will be due 14 days prior to arrival at camp and is non-refundable. In the case of absence for any reason during the camp week, including homesickness or disciplinary departure, no refund will be issued except upon a signed physician’s order. In this event, a prorated camp refund will be issued, less the $50 non-refundable deposit.</p>
                <ul>
                    <li>$50 non-refundable deposit per registration</li>
                    <li>The balance is due 14 days prior to arrival at camp and is non-refundable.</li>
                </ul>   
                <PriceContainer>

                    <Price 
                        title='WHAM camp'
                        subTitle={`Epic activities like horseback riding, rock climbing, woodland survival, volleyball, archery, waterslide, jousting pond and so much more!`} 
                        who='KIDS WHO WANT TO TRY EVERYTHING (AGE 8+)'
                        price={850} 
                        term='week'
                        includes={[
                            'Horseback riding',
                            'Rock climbing & bouldering',
                            'Woodland survival skills',
                            'Volleyball, Soccer, & basketball',
                            'Archery',
                            'Waterslide, jousting pond, canoeing, kayaking',
                            'Swimming',
                            'Lunch & two snacks',
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
        file(relativePath: { eq: "programs/wham/Display Archery.jpg" }) {
            childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
        }

        whamAll: allFile(filter: { relativeDirectory: { eq: "programs/wham" }}) {
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