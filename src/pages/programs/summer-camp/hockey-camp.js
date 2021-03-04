import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
// import Button from 'components/Button'
import { graphql } from 'gatsby'

import SubNav from 'components/SubNav'
import { PrimaryButton, CTAButton } from 'components/Button'
import Program from 'components/Program'

// import Grid from 'components/Grid'
// import Coach from 'components/Coach'
import { Link } from 'react-scroll'
import { PriceContainer, Price, PriceAddon } from 'components/Price'
import Quote from '../../../components/Quote'
import CampSchedule from '../../../components/CampSchedule'

export const frontmatter = {
    title: 'Hockey camp',
    path: '/programs/summer-camp/hockey-camp/'
}

const pageData = {
    subTitle: `Canada's finest hockey school since 1971`,
    keywords: 'summer hockey camp, hockey camp ontario, hockey camp orangeville, hockey camp toronto'
}

export default function Programs({ data }) {
    
    const { brent, eddie, file, iceCorral } = data

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
                {/* <NavLink to={ frontmatter.path + 'location/' }>Location</NavLink> */}
                <Link to='pricing' activeClass='active' spy={true}>Pricing</Link>
            </SubNav>

            <div id='top' style={{ position: 'absolute', marginTop: '-120px', }}/>

            <Container type='body'>

                <h1>Achieve your goals this season</h1>  

                <p>
                    Teen Ranch has been effectively running one of the most outstanding hockey programs available since 1971! Players and coaches from all over the world have partnered with us to make this one of the best places to reach your goals and develop your skills and skating to their maximum potential. Our outstanding coaches and program of excellence is designed to help you grow both on and off the ice.
                </p>         
                
                <p>
                    Teen Ranch alumni hockey players have graduated to NHL, semi-pro & European leagues as well as OHL and college teams. NHL players who have been guest instructors at Teen Ranch include Mike Gartner, Paul Henderson, Ron Ellis, Laurie Boschman, Darryl Sittler, and John Paddock.
                </p>

                <p>
                    In addition to learning life-long skills, hockey campers will enjoy horseback riding, jousting, swimming, basketball, rock climbing, campfires, and enjoying the friendship of other campers. Campers will have the chance to examine life's values as they relate to the Bible. 
                </p>

                <Quote cite="J R U">
                    Best camp for kids in southern Ontario. <strong>Won best hockey school in Ontario.</strong> Beautiful grounds. Beautiful staff that really care about kids and their well being. Hockey, horses, BMX, skating, adventure, soccer, you name it they probably have it. Beautiful meals served three times a day! This place is fantastic. An oasis.
                </Quote>

            </Container>

            <Container type='body'>
                <h1>Who it's for</h1>
                <p>
                    Hockey camp is perfect for all players and goalies of all ability levels. We offer specialized programs for girls, rep-players and goalies.
                </p>
            </Container>

            <Container type='body'>

                <h1>Functional fitness program</h1>

                <p>
                    High-performance athletes have exclusive access to our functional fitness program designed specifically for hockey players. This program is designed to develop strength, explosive power, hand-eye coordination, speed & quickness, and endurance.
                </p>
                <p>
                    Off-ice circuit training and high tempo plyometrics, aerobic, anaerobic workouts, core strengthening and body weight strength training.
                </p>

                {/* <PrimaryButton to='/programs/functional-fitness-program/'>Learn more</PrimaryButton> */}

            </Container>

            <Container type='body'>

                <h1>Our coaches</h1>

                {/* <Grid md='2'> */}

                    <Program src={ brent.childImageSharp.fluid }>
                        <h2>Brent Boschman</h2>
                        <h3>Head coach</h3>
                        <p>
                            Brent is a Liberty University graduate and ALl-American, the son of former Ottawa Senators Captain Laurie Boschman, is a highly regarded coach, instructor, and player agent, holding a degree in Sport Management and is the Liberty Flames third all-time leading scorer. 
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
                        Completed in 1995, the Teen Ranch Ice Corral has an olympic-size ice pad with seating for up to 1,000 spectators.
                    </p>
                    <p>
                        We have had the privilege of hosting the Toronto Maple Leafs, Ottawa Senators, Florida Panthers, Team Canada, Team Finland and many other pro and semi-pro teams.
                    </p>
                </Program>
                
                <PrimaryButton  to="/facilities/">See more of our facilities</PrimaryButton>

            </Container>

            <Container type='body'>
                <h1>Camp dates</h1>

                <CampSchedule
                    dates={[
                        'July 4-9',
                        'July 11-16',
                        'July 18-23',
                        'July 25-30',
                        'Aug. 1-6',
                        'Aug. 8-13',
                        'Aug. 15-20',
                        'Aug. 22-27',
                        <>Aug.&nbsp;29 - Sep.&nbsp;3</>
                    ]}
                    programs={[
                        {
                            name: 'Hockey camp',
                            dates: [
                                '12-16',
                                '8-14',
                                '8-14',
                                '12-16',
                                '12-16',
                                '8-14',
                                '8-14',
                                '8-14',
                                '12-16'
                            ]
                        },
                        {
                            name: 'High-performance hockey camp',
                            dates: [
                                '12-16',
                                '8-14',
                                '8-14',
                                '12-16',
                                '12-16',
                                '8-14',
                                '8-14',
                                '8-14',
                                '12-16'
                            ]
                        },
                        {
                            name: 'Girl\'s hockey camp',
                            dates: [
                                '',
                                '',
                                '8-14',
                                '',
                                '12-16',
                                '',
                                '',
                                '8-14',
                                '',
                            ]
                        },
                        {
                            name: 'Goalie camp',
                            dates: [
                                '',
                                '',
                                '',
                                '12-16',
                                '',
                                '8-14',
                                '',
                                '',
                                ''
                            ]
                        },
                    ]}
                />

            </Container>

            <div id='pricing' style={{ position: 'absolute', marginTop: '-200px', }}/>

            {/* <Container>
                <h1>Pricing</h1>
            </Container> */}

            <PriceContainer>

                <Price 
                    title='Hockey camp' 
                    subTitle='Skills & skating development with a focus on enjoying the game' 
                    who='Players and goalies welcome (co-ed)'
                    price={1250} 
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
                    subTitle='Skills & skating development with a focus on enjoying the game'
                    who='Players and goalies welcome (female)'
                    price={1250} 
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
                    subTitle='For high-performance players taking their game to the next level' 
                    who='Rep-level players welcome (co-ed)'
                    price={1750} 
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
                    subTitle='For goalies taking their game to the next level' 
                    who='Goalies welcome (co-ed)'
                    price={1750} 
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

            <Container type='body'>
                <h2>Hockey camp add-ons:</h2>
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
    }
`