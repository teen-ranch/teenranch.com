import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'

import ExternalLink from 'components/ExternalLink'

import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Grid from 'components/Grid'
import Sponsor from 'components/Sponsor'

import '../horses.scss'

const URLS = {
    'J & R Photography': 'https://www.facebook.com/jandrphoto/',
    'Anneli Tapanila Photography': 'https://www.facebook.com/annelitapanilaphotography',
    'Brydon Clark Photography': 'https://www.facebook.com/Brydon-Clark-Photography-112027537209552/',
    'Kiria Shantz Photography': 'https://www.facebook.com/KiriaSPhotography',
    'PACT Photography': 'https://www.facebook.com/PACTInc.Photography/',
    'Sutherland Images': 'https://www.facebook.com/sutherlandimages',
    'Teresa Finnerty Photography': 'https://www.facebook.com/teresamaefinnertyfoto'
}

export default function Default({ data }) {

    const { images } = data

	return (
        <>
            <Heading
                src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/horse14.jpg'
                alt='Rider and horse jumping at Teen Ranch'
                title='Hunter / Jumper show photos'
                subtitle='Professional courses and divisions for first-time competitors to those schooling before their A Shows.'
                keywords='horse shows, schooling horse shows, horse show orangeville ontario, horse show caledon ontario, gta horse show'
                metaTitle='Hunter / Jumper shows'
                metaDescription='Professional courses and divisions for first-time competitors to those schooling before their A Shows.'
			/>
            <Container type='body'>

                

                <div className="staffTable">
                    <table>
                        <thead>
                            <tr>
                                <th>Show date</th><th>Ring 1</th><th>Ring 3</th><th>Ring 4</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>June 20</td>
                                <td>
                                </td>
                                <td>
                                    <ExternalLink href="https://ringsidemedia.photoshelter.com/gallery-collection/2021-Teen-Ranch/C0000WDV.bLbsRvI">Ring 3 - Hack Division</ExternalLink>                                    
                                </td>                            
                                <td>
                                    
                                </td>
                            </tr>
                            <tr>
                                <td>July 11</td>
                                <td>
                                    
                                </td>
                                <td>
                                    
                                </td>
                                <td>
                                    
                                </td>
                            </tr>
                            <tr>
                                <td>July 25</td>
                                <td>
                                    
                                </td>
                                <td>
                                    
                                </td>
                                <td>
                                    
                                </td>
                            </tr>
                            <tr>
                                <td>August 15</td>
                                <td>
                                    
                                </td>
                                <td>
                                    
                                </td>
                                <td>

                                </td>
                            </tr>
                            <tr>
                                <td>August 29</td>
                                <td>
                                    
                                </td>
                                <td>
                                    
                                </td>
                                <td>
                                    
                                </td>
                            </tr>
							<tr>
								<td>September 12</td>
								<td>
									
								</td>
								<td>
									
								</td>
								<td>
								</td>
							</tr>
                        </tbody>
                    </table>
                </div>


            </Container>

            <Container type='body'>

                <h2>Photographers</h2>

                <Grid
                    lg={2}
                    xl={3}
                    gap={ false }
                >

                    {
                        images && images.edges && images.edges.map((edge, i) => {

                            const url = URLS[edge.node.name]

                            return <Sponsor key={i}><a target="_blank" rel="noopener noreferrer" href={ url }><Img fluid={ edge.node.childImageSharp.fluid } alt={ edge.node.name } /></a></Sponsor>

                        })
                    }

                </Grid>

            </Container>

        </>
    )
}

export const query = graphql`
    query {
        images: allFile(filter: { relativeDirectory: { eq: "hunter-jumper/photographers" }}) {
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
