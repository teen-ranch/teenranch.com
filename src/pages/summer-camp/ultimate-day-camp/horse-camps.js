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
    title: 'Horse camps',
    path: '/summer-camp/ultimate-day-camp/horse-camps/'
}

const pageData = {
    subTitle: `Canada's finest horse camp since 1967`,
    keywords: 'summer horse camp, horse camp ontario, horse camp orangeville, horse camp toronto'
}

export default function Programs({ data }) {
    
    const { file, western, english, intensive, rodeo, activities } = data

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

                <h1>Horse camp</h1>  

                <p>
                    The Teen Ranch horse program is for all ability levels to learn or develop their skills on safe, well-schooled horses.
                </p>

                <p>
                    Beginner riders start with the basics of position and control. Intermediate riders continue to hone the basics while being introduced to new skills. Advanced riders will be challenged to perfect their jumping position, equitation and effective communication with their horse.
                </p>

                <p>
                    Teen Ranch instructors are trained according to CHA standards, putting the largest emphasis on safety, education and fun. All full-time staff are certified in First Aid.
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
                <p>
                    Horse camp is perfect for english and western riders of all ability levels. We offer specialized rodeo and intensive (hunter/jumper) programs in addition to our english and western programs.
                </p>

                <ProgramContainer>
                    <Program small name='Western riding camp' who='Beginner to advanced (age 8+)' src={ western.childImageSharp.fluid }>An excellent place to start for first-time riders or western riding enthusiasts.</Program>
                    <Program small name='English riding camp' who='Beginner to advanced (age 8+)' src={ english.childImageSharp.fluid }>For kids of all riding levels to learn or develop new skills.</Program>
                    <Program small name='Intensive equestrian camp' who='Advanced hunter/jumper (age 12+)' src={ intensive.childImageSharp.fluid }>For english riders looking to improve their success in the show ring.</Program>
                    <Program small name='Rodeo' who='Intermediate to advanced (age 11+)' src={ rodeo.childImageSharp.fluid }>For western riders who want a taste of rodeo competition.</Program>
                </ProgramContainer>

            </Container>

            <Container type='body'>

                <Quote cite="Diane">
                My child loves Teen Ranch and requests to go every year. That says so much coming from a kid. It is the only camp she is always eager to attend. She loves the horses and horseback riding. She loves the diverse activities, the food, and crafts. The staff are wonderful and friendly and she can't wait to go again!
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
                    title='Western riding camp' 
                    subTitle='An excellent place to start for first-time riders or western riding enthusiasts.' 
                    who='Beginner to advanced'
                    price={850} 
                    term='week' 
                    includes={[
                        'Basic position & control',
                        'Lateral movement',
                        'Patterns',
                        'Games on horseback',
                        'Barrel racing (advanced)',
                        'Pole bending (advanced)',
                        'All camp activities',
                    ]}
                >
                    <CTAButton href="https://register.trmanager.com">Register now</CTAButton>
                </Price>
                <Price 
                    title="English riding camp"
                    subTitle='For kids of all riding levels to learn or develop new skills.'
                    who='Beginner to advanced'
                    price={850} 
                    term='week' 
                    includes={[
                        'Basic position & control',
                        'Lateral movement',
                        'Games on horseback',
                        'Jumping position',
                        'Equitation',
                        'All camp activities',
                    ]}
                >
                    <CTAButton href="https://register.trmanager.com">Register now</CTAButton>
                </Price>
                <Price 
                    title='Intensive equestrian camp' 
                    subTitle='For english riders looking to improve their success in the show ring.' 
                    who='Advanced hunter/jumper'
                    price={1200} 
                    term='week' 
                    primary 
                    includes={[
                        'Minimum of 2 hours in-tack lessons per day',
                        'Minimum of 1 hour out-of-tack lesson per day',
                        'Off-site outing (pending covid restrictions)',
                        'Photo shoot with your horse',
                        'Free division entry in Sunday on-site hunter/jumper show',
                        'All camp activities'
                    ]}
                >
                    <CTAButton href="https://register.trmanager.com">Register now</CTAButton>
                </Price>
                <Price
                    title='Rodeo camp' 
                    subTitle='For western riders who want a taste of rodeo competition.' 
                    who='Intermediate to advanced'
                    price={1050} 
                    term='week'
                    includes={[
                        'Roping',
                        'Barrel racing',
                        'Pole bending',
                        'Goat tying',
                        'Rodeo camp showdown',
                        'All camp activities'
                    ]}
                >
                    <CTAButton href="https://register.trmanager.com">Register now</CTAButton>
                </Price>
            </PriceContainer>

            </Container>

            

            <Container type='body'>
                <h2>Horse camp add-ons:</h2>
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
        file(relativePath: { eq: "programs/horse/rachel.jpg" }) {
            childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
        }

        rodeo: file(relativePath: { eq: "programs/horse/Roping (179).jpg" }) {
            childImageSharp {
				fluid(maxWidth: 600 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
        }

        english: file(relativePath: { eq: "programs/horse/lesson.jpg" }) {
            childImageSharp {
				fluid(maxWidth: 600 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
        }

        western: file(relativePath: { eq: "programs/horse/Western (40).jpg" }) {
            childImageSharp {
				fluid(maxWidth: 600 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
        }

        intensive: file(relativePath: { eq: "programs/horse/rachel.jpg" }) {
            childImageSharp {
				fluid(maxWidth: 600 quality: 64) {
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