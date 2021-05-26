import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
// import Button from 'components/Button'
import { graphql } from 'gatsby'

import SubNav from 'components/SubNav'
import { PrimaryButton, SecondaryButton, CTAButton } from 'components/Button'
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
    title: 'Ultimate day camp',
    path: '/summer-camp/ultimate-day-camp/'
}

const pageData = {
    subTitle: `Friends, sports, and real life packed into five exciting days`,
    keywords: 'summer camp, ultimate day camp, summer sports camp'
}

export default function Programs({ data }) {
    
    const { file, hockeyNowWinner, hockey, horse, bmx, wham, activities } = data

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
                <p>
                    Ulitmate day camp is perfect for kids and teens age 8+. We offer specialized programs in horseback riding, hockey, bmx, and WHAM camp for when you want to experience a bit of everything!
                </p>

                <ProgramContainer>
                    <Program small name='Hockey camps' who='Players & goalies (age 8+)' src={ hockey.childImageSharp.fluid }>Skills & skating development for players and goalies from house-league to rep. Standard, high-performance, girl's hockey, and goalie camps.<br/><PrimaryButton to="/summer-camp/ultimate-day-camp/hockey-camps/">Learn more</PrimaryButton></Program>
                    <Program small name='Horse camps' who='English & western riders (age 8+)' src={ horse.childImageSharp.fluid }>Horseback riding camps for beginner to advanced riders. Take your pick from western, english, rodeo, or intensive (hunter/jumper focused) camps.<br/><PrimaryButton to="/summer-camp/ultimate-day-camp/horse-camps/">Learn more</PrimaryButton></Program>
                    <Program small name='BMX dirt camp' who='Beginner to advanced riders (age 8+)' src={ bmx.childImageSharp.fluid }>Tabletops, rollers, step-ups, step-downs, whoops, berms, hip jumps and even a pump track for riders of all levels.<br/><PrimaryButton to="/summer-camp/ulitmate-day-camp/bmx-dirt-camp/">Learn more</PrimaryButton></Program>
                    <Program small name='WHAM camp' who='Kids who want to try everything (age 8+)' src={ wham.childImageSharp.fluid }>Epic activities like horseback riding, rock climbing, woodland survival, volleyball, archery, waterslide, jousting pond and so much more!<br/><PrimaryButton to="/summer-camp/ultimate-day-camp/wham-camp/">Learn more</PrimaryButton></Program>
                </ProgramContainer>

            </Container>

            <Container type='body'>

                <div style={{ textAlign: 'center' }}><Img fixed={ hockeyNowWinner.childImageSharp.fixed } alt='Best hockey school in Ontario award.' /></div>
                <Quote cite="James">
                    On a scale of one to ten this camp is a twenty five!
                </Quote>

            </Container>

            <Container type='body'>

                <h1>Afternoon activities</h1>

                <p>
                    Each afternoon, campers get to take their pick from some amazing camp activities on 150 beautiful acres including: rock climbing, bouldering, water slide, swimming, water jousting, archery, tennis, basketball, volleyball, and more.
                </p>

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
                            name: 'Hockey camp',
                            dates: [
                                '8-16',
                                '8-16',
                                '8-16',
                                '8-16',
                                '8-16',
                                '8-16',
                                '8-16',
                                '8-16',
                                '8-16',
                            ]
                        },
                        {
                            name: 'High-performance hockey camp',
                            dates: [
                                '8-16',
                                '8-16',
                                '',
                                '',
                                '',
                                '8-16',
                                '8-16',
                                '8-16',
                                '8-16',
                            ]
                        },
                        {
                            name: 'Girl\'s hockey camp',
                            dates: [
                                '',
                                '',
                                '8-16',
                                '',
                                '8-16',
                                '',
                                '',
                                '',
                                '',
                            ]
                        },
                        {
                            name: 'Goalie camp',
                            dates: [
                                '',
                                '',
                                '',
                                '8-16',
                                '',
                                '',
                                '',
                                '',
                                '',
                            ]
                        },

                        {
                            name: 'Western riding camp',
                            dates: [
                                '8-16',
                                '8-16',
                                '8-16',
                                '8-16',
                                '8-16',
                                '8-16',
                                '8-16',
                                '',
                                '8-16',
                            ]
                        },
                        {
                            name: 'English riding camp',
                            dates: [
                                '8-16',
                                '8-16',
                                '8-16',
                                '8-16',
                                '8-16',
                                '8-16',
                                '8-16',
                                '',
                                '8-16',
                            ]
                        },
                        {
                            name: 'Rodeo camp',
                            dates: [
                                '',
                                '',
                                '',
                                '',
                                '11-18',
                                '',
                                '',
                                '',
                                '',
                            ]
                        },
                        {
                            name: 'Intensive equestrian camp',
                            dates: [
                                '12-16',
                                '',
                                '',
                                '',
                                '',
                                '',
                                '',
                                '',
                                '',
                            ]
                        },
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

                <CTAButton to="/summer-camp/ultimate-day-camp/">Register now</CTAButton>

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
                        title='Hockey camps' 
                        subTitle={`Skills & skating development for players and goalies from house-league to rep. Standard, high-performance, girl's hockey, and goalie camps.`} 
                        who='Players and goalies'
                        price={850} 
                        term='week'
                        startingAt
                        includes={[
                            'On-site, olympic-size ice rink',
                            'Minimum 10 hours on-ice per week',
                            'Skills development',
                            'Skating development',
                            'Off-ice program',
                            'Afternoon scrimmages',
                            'All camp activities',
                        ]}
                    >
                        <center><SecondaryButton to="/summer-camp/ultimate-day-camp/hockey-camps/">Learn more</SecondaryButton></center>
                        <CTAButton href="https://register.trmanager.com">Register now</CTAButton>
                    </Price>
                    <Price 
                        title="Horse camps"
                        subTitle='Horseback riding camps for beginner to advanced riders. Take your pick from western, english, rodeo, or intensive (hunter/jumper focused) camps.'
                        who='English & western riders'
                        price={850}
                        startingAt
                        term='week' 
                        includes={[
                            'Ability based lessons',
                            'Western and english specific disciplines',
                            'Safe, well-schooled horses',
                            'Instructors trained to CHA standards',
                            'First-aid certified full-time staff',
                            'All camp activities',
                        ]}
                    >
                        <center><SecondaryButton to="/summer-camp/ultimate-day-camp/horse-camps/">Learn more</SecondaryButton></center>
                        <CTAButton href="https://register.trmanager.com">Register now</CTAButton>
                    </Price>
                    <Price 
                        title='BMX dirt camp'
                        subTitle='Tabletops, rollers, step-ups, step-downs, whoops, berms, hip jumps and even a pump track for riders of all levels.' 
                        who='Beginner to advanced riders'
                        price={850} 
                        term='week'
                        startingAt
                        includes={[
                            'Constantly changing dirt track',
                            'Dirt features for any skill level',
                            'Pump track',
                            'Tabletops',
                            'Gap jumps',
                            'Bike rental available',
                            'All camp activities',
                        ]}
                    >
                        <center><SecondaryButton to="/summer-camp/ultimate-day-camp/bmx-dirt-camp/">Learn more</SecondaryButton></center>
                        <CTAButton href="https://register.trmanager.com">Register now</CTAButton>
                    </Price>
                    <Price
                        title='WHAM camp' 
                        subTitle='Epic activities like horseback riding, rock climbing, woodland survival, volleyball, archery, waterslide, jousting pond and so much more!' 
                        who='Kids who want to try everything'
                        price={850}
                        term='week'
                        startingAt
                        includes={[
                            'Horseback riding',
                            'Rock climbing & bouldering',
                            'Woodland survival skills',
                            'Volleyball, basketball & soccer',
                            'Archery',
                            'Waterslide, jousting pond, canoes, kayaks',
                            'All camp activities',
                        ]}
                    >
                        <center><SecondaryButton to="/summer-camp/ultimate-day-camp/wham-camp/">Learn more</SecondaryButton></center>
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
        file(relativePath: { eq: "facilities/iceCorral/hockey14.jpg" }) {
            childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
        }

        hockeyNowWinner: file(relativePath: { eq: "programs/hockey/hockeyNow_bestHockeySchoolInOntarioWinner.png" }) {
            childImageSharp {
                fixed(height: 180 quality: 64) {
                    ...GatsbyImageSharpFixed_withWebp
                }
            }
        }

        hockey: file(relativePath: { eq: "programs/hockey/Michael.jpg" }) {
            childImageSharp {
				fluid(maxWidth: 600 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
        }

        horse: file(relativePath: { eq: "programs/horse/rachel.jpg" }) {
            childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
        }

        bmx: file(relativePath: { eq: "programs/bmx/BMX60.jpg" }) {
            childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
        }

        wham: file(relativePath: { eq: "programs/wham/archery.jpg" }) {
            childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
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