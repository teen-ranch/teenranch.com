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
import Quote from '../components/Quote'
import CampSchedule from '../components/CampSchedule'
import Grid from 'components/Grid'
// import Sponsor from 'components/Sponsor'
import Img from 'gatsby-image'

const frontmatter = {
    title: 'Summer camp',
    path: '/summer-camp/'
}

const pageData = {
    subTitle: `Canada's most trusted sports camp`,
    keywords: 'summer camp, summer sports camp, summer camp ontario canada'
}

export default function Programs({ data }) {
    
    const { file, hockeyNowWinner, highPerformanceHockey, overnight } = data

	return (
        <>

            <Heading
                src={ file.childImageSharp.fluid }
                // src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/hockey14.jpg'
                alt='Summer camp kids'
                title={ frontmatter.title }
                subtitle={ pageData.subTitle }
                metaTitle={ pageData.metaTitle || frontmatter.title }
                metaDescription={ pageData.metaDescription || pageData.subTitle }
                keywords={ pageData.keywords }
			/>

            <SubNav>
                <Link to='top' activeClass='active' spy={true}>Overview</Link>
                <Link to='who' activeClass='active' spy={true}>Who it's for</Link>
                <Link to='ultimate' activeClass='active' spy={true}>Ultimate day camp</Link>
                <Link to='junior' activeClass='active' spy={true}>Junior day camp</Link>
            </SubNav>

            <div id='top' style={{ position: 'absolute', marginTop: '-120px', }}/>

            <Container type='body'>

                <h1>Summer Camp 2021 at Teen Ranch</h1>  

                <h2>Here's what you can expect this summer:</h2>

                <p>
                    We are working hard to provide a joyous and unforgettable summer camp experience for your kids.
                </p>
                <p>
                    At this time, very few details are available from the government on what is allowed to run this summer, we plan to begin by running Day Camp and Ultimate Day Camp, and possibliy adding an overnight option as we are able.
                </p>

                <ul>
                    <li><strong>Junior Day Camp:</strong> For kids age 5-7</li>
                    <li><strong>Ultimate Day Camp:</strong> For kids and teens age 8+</li>
                    <li><strong>Ultimate Camp (overnight option):</strong> We would love to run overnight camp if we are able, please get in touch if you would like to volunteer on staff!</li>
                </ul>

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
                <div id='who' style={{ position: 'absolute', marginTop: '-180px', }}/>
                <h1>Who it's for</h1>

                <ProgramContainer>
                    <Program 
                        small 
                        name='Junior Day Camp' 
                        who='Kids age 5-7' 
                        src={ file.childImageSharp.fluid }
                    >
                        Games, crafts, swimming, pony rides, story time and more! A week full of friendship and fun!
                        <br/><PrimaryButton to='/summer-camp/junior-day-camp'>Learn more</PrimaryButton>
                    </Program>
                    <Program 
                        small 
                        name='Ultimate Day Camp' 
                        who='Kids age 8+' 
                        src={ highPerformanceHockey.childImageSharp.fluid }
                    >
                        The full camp experience with your sport of choice, including daily campfires featuring engaging, real-life topics shared from a biblical perspective.
                        <br/><PrimaryButton to='/summer-camp/ultimate-day-camp'>Learn more</PrimaryButton>
                    </Program>
                    <Program 
                        small 
                        name='Ultimate Camp (Overnight)' 
                        who='Kids age 8+' 
                        src={ overnight.childImageSharp.fluid }
                    >
                        <strong>If we are able.</strong><br/>Please get in touch if you are interested as a camper or volunteer staff.
                    </Program>
                </ProgramContainer>

            </Container>

            <Container type='body'>

                <div style={{ textAlign: 'center' }}><Img fixed={ hockeyNowWinner.childImageSharp.fixed } alt='Best hockey school in Ontario award.' /></div>
                <Quote cite="Diane">
                    My child loves Teen Ranch and requests to go every year. That says so much coming from a kid. It is the only camp she is always eager to attend. She loves the horses and horseback riding. She loves the diverse activities, the food, and crafts. The staff are wonderful and friendly and she can't wait to go again!
                </Quote>

            </Container>


            <Container type='body'>

                <h1>Camp dates</h1>

                <div id='ultimate' style={{ position: 'absolute', marginTop: '-180px', }}/>
                <h2>Ultimate Day Camp</h2>
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
                            name: 'Intensive riding camp',
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
                            name: 'WHAM camp',
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

                    ]}
                />

                <CTAButton to="/summer-camp/ultimate-day-camp/">Learn more about ultimate day camp</CTAButton>

                <div id='junior' style={{ position: 'absolute', marginTop: '-180px', }}/>
                <h2>Junior Day Camp</h2>
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
                            name: 'Junior day camp',
                            dates: [
                                '5-7',
                                '5-7',
                                '5-7',
                                '5-7',
                                '5-7',
                                '5-7',
                                '5-7',
                                '5-7',
                                '5-7'
                            ]
                        }
                    ]}
                />

                <CTAButton to="/summer-camp/junior-day-camp/">Learn more about junior day camp</CTAButton>

            </Container>

            <Container type='body'>
                <h1>Pricing</h1>
                <PriceContainer>

                    <Price 
                        title={<>Junior<br/>day camp</>}
                        subTitle={`Games, crafts, swimming, pony rides, story time and more! A week full of friendship and fun!`} 
                        who='Kids age 5-7'
                        price={495} 
                        term='week'
                        startingAt
                        includes={[
                            'Games',
                            'Crafts',
                            'Swimming',
                            'Pony rides',
                            'Story time',
                        ]}
                    >
                        <center><SecondaryButton to="/summer-camp/junior-day-camp/">Learn more</SecondaryButton></center>
                        <CTAButton href="https://register.trmanager.com">Register now</CTAButton>
                    </Price>
                    <Price 
                        title={<>Ultimate<br/>day camp</>}
                        subTitle='The full camp experience with your sport of choice, including daily campfires featuring engaging, real-life topics shared from a biblical perspective.'
                        who='Kids and teens 8+'
                        price={850}
                        startingAt
                        term='week' 
                        includes={[
                            'Full camp experience',
                            'Your sport of choice',
                            'Daily campfire',
                            'Real-life',
                        ]}
                    >
                        <center><SecondaryButton to="/summer-camp/ultimate-day-camp/">Learn more</SecondaryButton></center>
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
        file(relativePath: { eq: "summerDayCamp8.jpg" }) {
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

        overnight: file(relativePath: { eq: "activities/waterslide1.jpg" }) {
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

    }
`