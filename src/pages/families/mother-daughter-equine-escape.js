import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
import Button from 'components/Button'
// import Program from 'components/Program'
import { graphql } from 'gatsby'

import { PriceAddon } from 'components/Price'
import Grid from 'components/Grid'

// import SubNav from 'components/SubNav'
// import Verse from 'components/Verse'

// import { PrimaryButton, CTAButton } from 'components/Button'

// import Img from 'gatsby-image'

import Event from 'components/Event'
// import Card from 'components/Card'

import { DateTime } from 'luxon'
import Img from 'gatsby-image'

const frontmatter = {
    title: 'Mother daughter equine escape',
    path: '/families/mother-daughter-equine-escape'
}

const pageData = {
    subTitle: 'A tremendous, once-a-year opportunity to leave your screens behind and create lifelong memories over a common love of horses and one another.',
    keywords: 'mother daughter retreat, spend time with my daughter, family horseback riding'
}

const eventData = {
    title: frontmatter.title,
    price: 150,
    description: pageData.subTitle,
    venue: {
        name: 'Teen Ranch',
        address: {
            address: '20682 Hurontario Street',
            city: 'Caledon',
            province: 'ON',
            postalCode: 'L7K 1X1'
        }
    }
}

export default function Default({ data }) {

    const { activities } = data

    const events = [
        <Event
            key={ 1 }
            title={ frontmatter.title }
            startDate={DateTime.fromISO('2021-09-24', { zone: 'America/Toronto' }).toISODate()}
            startTime='19:00:00'
            endDate={DateTime.fromISO('2021-09-26', { zone: 'America/Toronto' }).toISODate()}
            endTime='14:00:00'
            price={eventData.price}
            description={ eventData.description }
            venue={eventData.venue}
            images={[data.file.childImageSharp.fluid.src]}
            status={ 'SCHEDULED' }
        />
    ]
        


	return (
        <>

            <Heading
                src={ data.file.childImageSharp.fluid }
                alt={ frontmatter.title }
                title={ frontmatter.title }
                subtitle={ pageData.subTitle }
                metaTitle={ pageData.metaTitle || frontmatter.title }
                metaDescription={ pageData.metaDescription || pageData.subTitle }
                keywords={ pageData.keywords }
			/>

            {/* <div style={{ maxWidth: '960px', margin: '0 auto', fontSize: '18px', color: 'rgb(41, 41, 41)', letterSpacing: '0.01em', lineHeight: '26px', padding: '0 2rem' }}> */}

                <Container>
                    <h1>{ frontmatter.title }</h1>

                    <p>Do you have a daughter who loves horses? This is a once-a-year incredible opportunity to get away and invest time in one another over a common love of horses and adventure.</p>
                    <p>Beginning at 7:00pm on Friday, enjoy a wonderful weekend away together in beautiful accommodations with delicious food, entertaining evenings, inspirational speakers, a one-hour horse riding lesson with awesome instructors, scenic trail rides through the beautiful Caledon Hills, and other bonding activities!</p>
                  
                    <Button href="https://register.trmanager.com">Book now</Button>

                    <h3>This weekend getaway package includes:</h3>
                    <p>Breakfasts, Lunches and Supper.</p>

                    <p>Choice of three different accommodation options. Call to discuss the best option for you and your daughter:</p>
                    
                    <ul>
                        <li><strong>Olympic Style/Chalet Room:</strong> $325 +HST /person (Bring your own bedding & towels)</li>
                        <li><strong>Western-style Hotel Room:</strong> $375 +HST /person (Linens & towels provided)</li>
                        <li><strong>Coach House/Family Suite:</strong> $425 +HST /person (Linens & towels provided)</li>
                    </ul>

                    <h4>What you'll enjoy:</h4>

                    <ul>
                        <li>Horseback Riding Lesson</li>
                        <li>Scenic Trail Rides</li>
                        <li>Hiking in the Teen Ranch hills</li>
                        <li>Climbing Wall</li>
                        <li>Ceilidh Dance</li>
                        <li>Beautiful Accommodations</li>
                        <li>Incredible Food</li>
                        <li>And so much more...</li>

                        <li><strong>Plus a Teen Ranch Campfire Saturday evening with fun campfire songs and an inspiring devotional message</strong></li>
                    </ul>

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
                            activities && activities.edges && activities.edges.map((edge, i) => {

                                return <div key={ i } className='facility'><Img fluid={ edge.node.childImageSharp.fluid } alt='Activities' /></div>

                            })
                        }
                    </Grid>

                </Container>

                

                <Container>
                    <h3>I have more questions...</h3>
                    <p>Please email our office at <a href="mailto:camp@teenranch.com">camp@teenranch.com</a> and we will get back to you as soon as we can.</p>
                    <Button href="https://register.trmanager.com">Book now</Button>
                </Container>

                <Container>
                    <h1>Upcoming events</h1>
                    { events }
                </Container>

            {/* </div> */}

           
        </>
    )
}

export const query = graphql`
    query {
        file(relativePath: { eq: "motherDaughter/d556c391-315b-9e0d-d741-4a0bd91f7e9b.jpg" }) {
            childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
        }
        activities: allFile(filter: { relativeDirectory: { eq: "motherDaughter" }}) {
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