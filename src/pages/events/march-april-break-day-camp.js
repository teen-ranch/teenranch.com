import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
import Button from 'components/Button'
// import Program from 'components/Program'
import { graphql } from 'gatsby'

import ExternalLink from 'components/ExternalLink'

// import SubNav from 'components/SubNav'
// import Verse from 'components/Verse'

// import { PrimaryButton, CTAButton } from 'components/Button'

// import Img from 'gatsby-image'

import Event from 'components/Event'
// import Card from 'components/Card'

import { DateTime } from 'luxon'

const frontmatter = {
    title: 'April Break Day Camp',
    path: '/events/march-april-break-day-camp/'
}

const pageData = {
    subTitle: 'Treat your kids to a getaway close to home this spring break!',
    keywords: 'march break day camp, april break day camp, april day camp'
}

const eventData = {
    title: frontmatter.title,
    price: 325,
    description: `Treat your kids to a getaway close to home this spring break!`,
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

    const events = []

        const startDate = DateTime.fromISO('2021-04-12', { zone: 'America/Toronto' })
        const endDate = DateTime.fromISO('2021-04-16', { zone: 'America/Toronto' })
        let key = 0
        // for (let i = 0; i < 12; i++) {

            // const newStartDate = startDate.plus({ weeks: i })

            events.push(
                <Event
                    key={ key }
                    title={ frontmatter.title }
                    startDate={startDate.toISODate()}
                    startTime='09:00:00'
                    endDate={endDate.toISODate()}
                    endTime='16:30:00'
                    price={eventData.price}
                    description={ eventData.description }
                    venue={eventData.venue}
                    images={[data.file.childImageSharp.fluid.src]}
                    status={ 'SCHEDULED' }
                />
            )

        // }



	return (
        <>

            <Heading
                src={ data.file.childImageSharp.fluid }
                alt={ frontmatter.title }
                title={ <><s>March</s> April Break Day Camp</> }
                subtitle={ pageData.subTitle }
                metaTitle={ pageData.metaTitle || frontmatter.title }
                metaDescription={ pageData.metaDescription || pageData.subTitle }
                keywords={ pageData.keywords }
			/>

            <div style={{ maxWidth: '960px', margin: '0 auto', fontSize: '18px', color: 'rgb(41, 41, 41)', letterSpacing: '0.01em', lineHeight: '26px', padding: '0 2rem' }}>

                <div style={{ color: 'red', fontSize: '2rem' }}>CANCELLED DUE TO COVID-19</div>

                <Container>
                    <h1><s>March</s> April Break Day Camp</h1>

                    <p>Treat your kids to a getaway this spring break! Sign them up for a week of day camp and rest assured that they will enjoy all kinds of fun and adventure with other kids in a COVID-friendly format which meets or exceeds Ministry of Health guidelines.</p>

                    <Button href="https://register.trmanager.com">Book now</Button>
                    <h3>This day camp includes:</h3>

                    <ul>
                        <li>Lunch and 2 snacks provided</li>
                        <li>Pony rides</li>
                        <li>Hikes</li>
                        <li>Outdoor games and activities</li>
                        <li>Crafts</li>
                        <li>Campfire time</li>
                    </ul>

                    <h2>When is it?</h2>
                    <p>April 12-16, 2021</p>
                    
                    <h2>Who is it for?</h2>
                    <p>Kids age 5-12</p>

                    <h2>How much is it?</h2>
                    <p>$325 +HST</p>

                    <p>Masks are required, but campers will have the opportunity to remove them when outdoors and properly distanced. Cohorts will encourage friendship and fun and help maintain the Ministry of Health protocol.</p>

                </Container>

                <Container>
                    <h1>Upcoming events</h1>
                    { events }
                </Container>

            </div>

           
        </>
    )
}

export const query = graphql`
    query {
        file(relativePath: { eq: "activities/kids1.jpg" }) {
            childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
        }
    }
`