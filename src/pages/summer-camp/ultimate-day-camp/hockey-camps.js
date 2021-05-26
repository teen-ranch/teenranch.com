import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
// import Button from 'components/Button'
import { graphql } from 'gatsby'

import SubNav from 'components/SubNav'
import { PrimaryButton, CTAButton } from 'components/Button'
import Program, { ProgramContainer } from 'components/Program'

// import Grid from 'components/Grid'
// import Coach from 'components/Coach'
import { Link } from 'react-scroll'
import { PriceContainer, Price, PriceAddon } from 'components/Price'
import Quote from '../../../components/Quote'
import CampSchedule from '../../../components/CampSchedule'
import Grid from 'components/Grid'
// import Sponsor from 'components/Sponsor'
import Img from 'gatsby-image'

const frontmatter = {
    title: 'Hockey camps',
    path: '/summer-camp/ultimate-day-camp/hockey-camps/'
}

const pageData = {
    subTitle: `Canada's finest hockey school since 1971`,
    keywords: 'summer hockey camp, hockey camp ontario, hockey camp orangeville, hockey camp toronto'
}

export default function Programs({ data }) {
    
    const { brent, eddie, file, iceCorral, hockeyNowWinner, hockeyCamp, girlsHockeyCamp, highPerformanceHockey, goalieCamp, activities } = data

	return (
        <>

            <Heading
                src={ file.childImageSharp.fluid }
                // src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/hockey14.jpg'
                alt='Hockey player taking a slapshot'
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

                <h1>Achieve your goals this season</h1>  

                <p>
                    Teen Ranch has run one of the most exceptional skills & skating development hockey programs since 1971! Countless players and coaches from all over the world, outstanding professional instructors, and our on-site rink with an olympic-size ice surface are integral to making this the best place to help you reach your goals both on and off the ice.
                </p>         
                
                <p>
                    We focus on developing the whole athlete. Teen Ranch is a place where hockey players develop not only physically and mentally but develop truly life changing friendships and mentorships that last a lifetime.
                </p>

            </Container>

            <Container type='body'>

                <h1>Ultimate day camp for ultimate kids</h1>  

                <p>
                    Come to ultimate day camp and experience all the fun and adventure of summer camp! Enjoy the great outdoors, get active and build friendships that last a lifetime.
                </p>         
                
                <p>
                    Our ultimate day camp programs are designed to give you the best possible camp experience including daily campfires featuring engaging, real-life topics shared from a biblical perspective. Make friends, join camp-wide games, and experience all the the greatest Teen Ranch activities packed into five awesome days!
                </p>
                <p>
                    Our well-trained staff are commited to the safety and weel-being of each camper and aim to come alongside you to challenge and inspire!
                </p>

            </Container>

            <Container type='body'>
                <h1>Who it's for</h1>
                <p>
                    Hockey camp is perfect for players and goalies of all ability levels. We offer specialized programs for girls, rep-players and goalies.
                </p>

                <ProgramContainer>
                    <Program small name='Hockey camp' who='Players & goalies (co-ed)' src={ hockeyCamp.childImageSharp.fluid }>Skills & skating development for players and goalies of all ability levels, with a focus on enjoying the game.</Program>
                    <Program small name={`Girl's hockey camp`} who='Players & goalies (female)' src={ girlsHockeyCamp.childImageSharp.fluid }>A no-pressure skills & skating development program with the same high-quality instruction just for girls.</Program>
                    <Program small name='High-performance hockey camp' who='Players & goalies (co-ed)' src={ highPerformanceHockey.childImageSharp.fluid }>For high-performance players focused on advanced skills in skating, puck handling, shooting, and passing.</Program>
                    <Program small name='Goalie camp' who='Goalies (co-ed)' src={ goalieCamp.childImageSharp.fluid }>Goalie specific training, with a focus on angles, technique, rebound-control, proper form, butterfly and much more.</Program>
                </ProgramContainer>

            </Container>

            <Container type='body'>

                <div style={{ textAlign: 'center' }}><Img fixed={ hockeyNowWinner.childImageSharp.fixed } alt='Best hockey school in Ontario award.' /></div>
                <Quote cite="J R U">
                    Best camp for kids in southern Ontario. <strong>Won best hockey school in Ontario.</strong> Beautiful grounds. Beautiful staff that really care about kids and their well being. Hockey, horses, BMX, skating, adventure, soccer, you name it they probably have it. Beautiful meals served three times a day! This place is fantastic. An oasis.
                </Quote>

            </Container>

            <Container type='body'>

                <h1>Functional fitness program (high-performance)</h1>

                <p>
                    High-performance athletes have exclusive access to our functional fitness program designed specifically for hockey players. This program is designed to develop strength, explosive power, hand-eye coordination, speed & quickness, and endurance.
                </p>
                <p>
                    Off-ice circuit training and high tempo plyometrics, aerobic, anaerobic workouts, core strengthening, and bodyweight strength training. 
                </p>

                {/* <PrimaryButton to='/programs/functional-fitness-program/'>Learn more</PrimaryButton> */}

            </Container>

            <Container type='body'>

                <h1>Our coaching staff</h1>

                {/* <Grid md='2'> */}

                    <Program src={ brent.childImageSharp.fluid }>
                        <h2>Brent Boschman</h2>
                        <h3>Head coach</h3>
                        <p>
                            Brent is a Liberty University graduate and All-American, the son of former Ottawa Senators Captain Laurie Boschman, is a highly regarded coach, instructor, and player agent, holding a degree in Sport Management and is the Liberty Flames third all-time leading scorer. 
                        </p>
                    </Program>

                    <Program src={ eddie.childImageSharp.fluid } swap>
                        <h2>Eddie Davey</h2>
                        <h3>Goalie coach</h3>
                        <p>
                        Eddie Davey played four years of Jr. A hockey in Ontario, winning the MVP of the NOJHL league while setting a league Wins record and leading his team to the Dudley Hewitt Cup his final season. He went on to attend Westfield State University at the NCAA Div. 3 levels where he played for four years and graduated with honors from the criminal justice program with a minor in psychology. Eddie currently resides in Orangeville where he runs the Monarch Goaltending Development school and plays semi-professional for the Shelburne Muskies. 
                        </p>
                    </Program>

                    <h2>Guest instructors</h2>
                    <ul>
                        <li>Laurie Boschman - ex. 14 year NHL veteran and Captain</li>
                        <li>Brock Matheson - ex. AHL/ECHL/Europe Pro player</li>
                        <li>James Naylor - Toronto Marlboros Minor Hockey Coach</li>
                        <li>Erik Bradford - Brampton Beast - ECHL/ Toronto Marlies - AHL</li>
                        <li>Alex Adams – Brampton Beast - ECHL</li>
                        <li>Justin Brack - Brock University - USports</li>
                        <li>Matthew Maggio - Ottawa 67’s – OHL</li>
                        <li>Brian Stapleton - NHL</li>
                    </ul>
                

                    {/* <Coach name='Brent Boschman' title='Head coach' src={ brent.childImageSharp.fluid }
                        description={
                            <>
                                <p>
                                    Brent is a Liberty University graduate and ALl-American, the son of former Ottawa Senators Captain Laurie Boschman, is a highly regarded coach, instructor, and player agent, holding a degree in Sport Management and is the Liberty Flames third all-time leading scorer. 
                                </p>
                            </>
                        }
                    /> */}
                    {/* <Coach name='Eddie Davey' title='Goalie coach' src={ eddie.childImageSharp.fluid }
                        description={<>
                            <p>
                                Eddie Davey played four years of Jr. A hockey in Ontario, winning the MVP of the NOJHL league while setting a league Wins record and leading his team to the Dudley Hewitt Cup his final season. He went on to attend Westfield State University at the NCAA Div. 3 levels where he played for four years and graduated with honors from the criminal justice program with a minor in psychology. Eddie currently resides in Orangeville where he runs the Monarch Goaltending Development school and plays semi-professional for the Shelburne Muskies. 
                            </p>
                        </>} 
                    /> */}
                {/* </Grid> */}

            </Container>

            <Container type='body'>
                <h1>Facilities</h1>

                <Program src={ iceCorral.childImageSharp.fluid }>
                    <h2>The Ice Corral</h2>
                    <p>
                        Completed in 1995, the Teen Ranch Ice Corral has seating for up to 1,000 spectators, an <strong>olympic-size ice pad</strong>, and a <strong>sand base</strong> that makes an exceptionally good ice surface.
                    </p>
                    <p>
                        We have had the privilege of hosting many pro and semi-pro teams including the Toronto Maple Leafs, Montreal Canadians, Ottawa Senators, Florida Panthers, Olympic teams from Canada, Finland, Russia, Australia, Germany & more, St. Michael's Majors (OHL), and Mississauga Ice Dogs (AAA).
                    </p>
                </Program>
                
                <PrimaryButton  to="/facilities/">See more of our facilities</PrimaryButton>

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
                    title='Hockey camp' 
                    subTitle='Skills & skating development for players and goalies of all ability levels, with a focus on enjoying the game.' 
                    who='Players and goalies (co-ed)'
                    price={850} 
                    term='week' 
                    includes={[
                        'On-site, olympic-size ice rink',
                        'Minimum 10 hours on-ice per week',
                        'Skills development',
                        'Skating development',
                        'Fun-based off-ice program',
                        'Afternoon scrimmages',
                        'All camp activities',
                    ]}
                >
                    <CTAButton href="https://register.trmanager.com">Register now</CTAButton>
                </Price>
                <Price 
                    title="Girl's hockey camp"
                    subTitle='A no-pressure skills & skating development program with the same high-quality instruction just for girls.'
                    who='Players and goalies (female)'
                    price={850} 
                    term='week' 
                    includes={[
                        'On-site, olympic-size ice rink',
                        'Minimum 10 hours on-ice per week',
                        'Skills development',
                        'Skating development',
                        'Fun-based off-ice program',
                        'Afternoon scrimmages',
                        'All camp activities',
                    ]}
                >
                    <CTAButton href="https://register.trmanager.com">Register now</CTAButton>
                </Price>
                <Price 
                    title={<>High-performance<br/>hockey camp</>} 
                    subTitle='For high-performance players focused on advanced skills in skating, puck handling, shooting, and passing.' 
                    who='Rep-level players (co-ed)'
                    price={1050} 
                    term='week' 
                    primary 
                    includes={[
                        <>Everything in <strong>hockey camp</strong>, plus:</>,
                        'High-intensity skills development',
                        'Power skating',
                        'Game-situation skills',
                        'Video analysis coaching',
                        'Functional fitness program',
                        'Nutritional counselling',
                    ]}
                >
                    <CTAButton href="https://register.trmanager.com">Register now</CTAButton>
                </Price>
                <Price
                    title='Goalie camp' 
                    subTitle='Goalie specific training, with a focus on angles, technique, rebound-control, proper form, butterfly and much more.' 
                    who='Goalies (co-ed)'
                    price={1050} 
                    term='week'
                    includes={[
                        <>Everything in <strong>hockey camp</strong>, plus:</>,
                        'High-intensity skills development',
                        'Form & stance',
                        'Butterfly',
                        'Angles',
                        'Rebound-control',
                        'Video analysis coaching',
                        'Functional fitness program',
                        'Nutritional counselling',
                    ]}
                >
                    <CTAButton href="https://register.trmanager.com">Register now</CTAButton>
                </Price>
            </PriceContainer>

            </Container>

            <Container type='body'>
                <h2>Hockey camp add-ons:</h2>
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
                <PriceAddon
                    title='Semi-private lessons'
                    subTitle='4:1 instructor ratio'
                    description={
                        <>
                            Get an edge up on the competition with focused and personalized instruction.
                        </>
                    }
                    price={100}
                    term='hour'
                />
                <PriceAddon
                    title='Private lessons'
                    subTitle='1:1 instructor ratio'
                    description={
                        <>
                            Get an edge up on the competition with focused and personalized instruction.
                            <p>
                                <i>As ice-availability permits</i>
                            </p>
                        </>
                    }
                    price={300}
                    term='hour'
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
        file(relativePath: { eq: "facilities/iceCorral/hockey9.jpg" }) {
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

        hockeyCamp: file(relativePath: { eq: "programs/hockey/IMG_5099.JPG" }) {
            childImageSharp {
				fluid(maxWidth: 600 maxHeight: 334 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
        }

        girlsHockeyCamp: file(relativePath: { eq: "programs/hockey/tr girls pic.jpg" }) {
            childImageSharp {
				fluid(maxWidth: 600 maxHeight: 334 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
        }

        highPerformanceHockey: file(relativePath: { eq: "facilities/iceCorral/hockey14.jpg" }) {
            childImageSharp {
				fluid(maxWidth: 600 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
        }

        goalieCamp: file(relativePath: { eq: "programs/hockey/goalie.jpg" }) {
            childImageSharp {
				fluid(maxWidth: 600 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
        }

        brent: file(relativePath: { eq: "coaches/brent-boschman.jpg" }) {
            childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
        }

        eddie: file(relativePath: { eq: "coaches/eddie-davey.jpg" }) {
            childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
        }

        iceCorral: file(relativePath: { eq: "facilities/iceCorral/iceCorral1.jpg" }) {
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