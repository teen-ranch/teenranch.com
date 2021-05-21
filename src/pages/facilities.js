import React from 'react'
import Heading from 'components/Heading'
// import Button from 'components/Button'

import Container from 'components/Container'

import { graphql } from 'gatsby'

import Img from 'gatsby-image'

import './facilities.scss'

export default function Default({ data }) {

    const {
        aerial,
        carriageHouse,
        coachHouse,
        hotel,
        bunkhouses,
        diningRoom,
        iceCorral,
        file
    } = data
	
	return (
	
		<>
			<Heading
				src={ file.childImageSharp.fluid }
				alt='Facilities'
				title='Facilities'
				subtitle=''
			/>

            <Container>

                <p>With a capacity of over 140 guests for overnight trips, we offer an assortment of accommodations for your students through all seasons of the year. Our rooms are winterized and have self contained washrooms. Students are supervised by their teachers either from an adjacent bunk house or a separate teacher's room so that supervision is always available for the students.</p>
                <div className='facilityWrapper'>
                {
                    aerial.edges.map(({ node }, i) => {
                        return <div key={ i } className='facility'><Img fluid={ node.childImageSharp.fluid } alt='Aerial Photos' /></div>
                    })
                }
                </div>

                <h3>The Carriage House</h3>
                <p>Carriage House is a beautiful, two-story building which can house up to 58 guests and has a large meeting room.</p>
                <div className='facilityWrapper'>
                {
                    carriageHouse.edges.map(({ node }, i) => {
                        return <div key={ i } className='facility'><Img fluid={ node.childImageSharp.fluid } alt='The Carriage House' /></div>
                    })
                }
                </div>

                <h3>The Coach House</h3>
                <p>The Coach House is a bright, cheery, up-to-date accommodation which may house over 56 students along with their teacher supervisors. It also contains 4 meeting room spaces of various sizes which can be used for a variety of activities. The spacious central lounge area is capable of accommodating well over 60 people.</p>
                <div className='facilityWrapper'>
                {
                    coachHouse.edges.map(({ node }, i) => {
                        return <div key={ i } className='facility'><Img fluid={ node.childImageSharp.fluid } alt='The Coach House' /></div>
                    })
                }
                </div>

                <h3>The Hotel</h3>
                <p>The Plough Inn Hotel is a cozy, western style building containing a moderate size meeting room great for relaxing or for conducting meetings. It also contains 8 hotel rooms ideal for couples and small families.</p>
                <div className='facilityWrapper'>
                {
                    hotel.edges.map(({ node }, i) => {
                        return <div key={ i } className='facility'><Img fluid={ node.childImageSharp.fluid } alt='The Hotel' /></div>
                    })
                }
                </div>

                <h3>The Bunkhouses</h3>
                <p>Comfortable and cozy, our western style bunkhouses easily accommodate over 64 guests by housing 8-11 guests per room. All bunkhouses are winterized and have self contained washrooms.</p>
                <div className='facilityWrapper'>
                {
                    bunkhouses.edges.map(({ node }, i) => {
                        return <div key={ i } className='facility'><Img fluid={ node.childImageSharp.fluid } alt='The Bunkhouses' /></div>
                    })
                }
                </div>

                <h3>The Dining Room</h3>
                <p>The Dining room is a comfortable building that offers a wonderful, western style, sit-down, dining atmosphere.</p>
                <div className='facilityWrapper'>
                {
                    diningRoom.edges.map(({ node }, i) => {
                        return <div key={ i } className='facility'><Img fluid={ node.childImageSharp.fluid } alt='The Dining Room' /></div>
                    })
                }
                </div>

                <h3>The Ice Corral</h3>
                <p>The Teen Ranch Ice Corral is an Olympic-size arena which opened in 1994. With it's large international ice surface, large dressing rooms, meeting rooms and weight room, we accommodate aspiring young hockey players from around the world.</p>

                <p>NHL teams such as the Ottawa Senators and Toronto Maple Leafs have utilized our arena for development camps. The Florida Panthers and St. Michael's Majors are our annual guests for their development camps as well. National and Olympic teams from Canada, Finland, Russia, Germany, Switzerland, Australia and New Zealand add to the list of International guests.</p>

                <p>We conduct our skill development programs (summer & year-round) in this beautiful facility. Portable boards provided recently by the NHLPA Goals & Dreams fund allow us to run 3 on 3 tournaments or provide smaller ice surfaces for the tykes.</p>

                <p>Teen Ranch offices are accommodated in the Ice Corral. The Ice Corral seats approximately 900 people. The Hockey Hall of Faith - a unique expression of the Christian faith of about 40 NHL players is a part of the arena lobby.</p>
                <div className='facilityWrapper'>
                {
                    iceCorral.edges.map(({ node }, i) => {
                        return <div key={ i } className='facility'><Img fluid={ node.childImageSharp.fluid } alt='The Ice Corral' /></div>
                    })
                }
                </div>

            </Container>

		</>
	)
}

export const query = graphql`

    query {

        file(relativePath: { eq: "facilities/carriageHouse/carriageHouse4.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}

        aerial: allFile(filter: { relativeDirectory: { eq: "facilities/aerial" }}) {
            edges {
                node {
                    childImageSharp {
                        fluid(maxWidth: 640 quality: 64) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }

        carriageHouse: allFile(filter: { relativeDirectory: { eq: "facilities/carriageHouse" }}) {
            edges {
                node {
                    childImageSharp {
                        fluid(maxWidth: 640 quality: 64) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }

        coachHouse: allFile(filter: { relativeDirectory: { eq: "facilities/coachHouse" }}) {
            edges {
                node {
                    childImageSharp {
                        fluid(maxWidth: 640 quality: 64) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }

        hotel: allFile(filter: { relativeDirectory: { eq: "facilities/hotel" }}) {
            edges {
                node {
                    childImageSharp {
                        fluid(maxWidth: 640 quality: 64) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }

        bunkhouses: allFile(filter: { relativeDirectory: { eq: "facilities/bunkhouses" }}) {
            edges {
                node {
                    childImageSharp {
                        fluid(maxWidth: 640 quality: 64) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }

        diningRoom: allFile(filter: { relativeDirectory: { eq: "facilities/diningRoom" }}) {
            edges {
                node {
                    childImageSharp {
                        fluid(maxWidth: 640 quality: 64) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }

        iceCorral: allFile(filter: { relativeDirectory: { eq: "facilities/iceCorral" }}) {
            edges {
                node {
                    childImageSharp {
                        fluid(maxWidth: 640 quality: 64) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }

    }

`
