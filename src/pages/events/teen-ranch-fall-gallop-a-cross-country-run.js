import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
// import Button from 'components/Button'
// import Program from 'components/Program'
import { graphql } from 'gatsby'

// import ExternalLink from 'components/ExternalLink'
import { PriceContainer, Price } from 'components/Price'
import { CTAButton } from 'components/Button'
import Grid from 'components/Grid'

// import SubNav from 'components/SubNav'
// import Verse from 'components/Verse'

// import { PrimaryButton, CTAButton } from 'components/Button'

// import Img from "gatsby-plugin-image"

import Event from 'components/Event'
// import Card from 'components/Card'

import { DateTime } from 'luxon'
import Img, { GatsbyImage } from "gatsby-plugin-image"

const frontmatter = {
    title: 'Teen Ranch Fall Gallop - A Cross Country Run',
    path: '/events/teen-ranch-fall-gallop-a-cross-country-run/'
}

const pageData = {
    subTitle: 'Come as an individual, family, or cross country team to make the most of this fall season while challenging your limits!',
    keywords: 'cross country event, cross country running, cross country competition'
}

const eventData = {
    title: frontmatter.title,
    description: `Come as an individual, family, or cross country team to make the most of this fall season while challenging your limits!`,
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

    const { running } = data

    const events = []

        const startDate = DateTime.fromISO('2021-10-23', { zone: 'America/Toronto' })
        let key = 0

        events.push(
            <Event
                key={ key }
                title={ frontmatter.title }
                startDate={startDate.toISODate()}
                startTime='10:00:00'
                endDate={startDate.toISODate()}
                endTime='12:30:00'
                price={0}
                description={ eventData.description + ' (Little Ponies - Age 6 and under - Frog Pond Loop)' }
                venue={eventData.venue}
                images={[data.file.childImageSharp.gatsbyImageData.src]}
                status={ 'SCHEDULED' }
            />
        )
        key = key + 1

        events.push(
            <Event
                key={ key }
                title={ frontmatter.title }
                startDate={startDate.toISODate()}
                startTime='10:15:00'
                endDate={startDate.toISODate()}
                endTime='12:30:00'
                price={0}
                description={ eventData.description + ' (Wranglers - Age 7-10 - Driveway Loop - 700 Meters)' }
                venue={eventData.venue}
                images={[data.file.childImageSharp.gatsbyImageData.src]}
                status={ 'SCHEDULED' }
            />
        )
        key = key + 1

        events.push(
            <Event
                key={ key }
                title={ frontmatter.title }
                startDate={startDate.toISODate()}
                startTime='10:45:00'
                endDate={startDate.toISODate()}
                endTime='12:30:00'
                price={0}
                description={ eventData.description + ' (Broncos - Age 11-13 - Trail Loop - 2.5 Kilometers)' }
                venue={eventData.venue}
                images={[data.file.childImageSharp.gatsbyImageData.src]}
                status={ 'SCHEDULED' }
            />
        )
        key = key + 1

        events.push(
            <Event
                key={ key }
                title={ frontmatter.title }
                startDate={startDate.toISODate()}
                startTime='11:15:00'
                endDate={startDate.toISODate()}
                endTime='12:30:00'
                price={0}
                description={ eventData.description + ' (Big Rodeo - Age 14 and up - Double Trail Loop - 5 Kilometers - walkers welcome)' }
                venue={eventData.venue}
                images={[data.file.childImageSharp.gatsbyImageData.src]}
                status={ 'SCHEDULED' }
            />
        )
        key = key + 1



	return <>

        <Heading
            src={ data.file.childImageSharp.gatsbyImageData }
            alt={ frontmatter.title }
            title={ frontmatter.title }
            subtitle={ pageData.subTitle }
            metaTitle={ pageData.metaTitle || frontmatter.title }
            metaDescription={ pageData.metaDescription || pageData.subTitle }
            keywords={ pageData.keywords }
        />

            <Container>
                <h1>{ frontmatter.title }</h1>

                <p>
                    Register now for this open-air course across Teen Ranch's energizing natural terrain including grass, road, woodlands, open country, and rolling hills. Come as an individual, family, or cross country team to make the most of this fall season while challenging your limits!
                </p>
                <p>
                Light refreshments included for runners and available for purchase by spectators. 
                </p>
                <p>
                Awards Ceremony & Faith-based Word of Encouragement @ 12:30pm
                </p>

                <h2>When is it?</h2>
                Saturday, October 23, 2021<br/><br/><strong style={{ color: 'red' }}>Gates open from 9:00-10:00 am for registration for all races.</strong> (Little ponies arrive in time for a 10:00am run).

                <h2>Who is it for?</h2>
                Open to all Ages

                </Container>

                <Container>
                <h1>Pricing</h1>
                <PriceContainer>

                <Price 
                    title='Little Ponies' 
                    subTitle={<>Frog Pond Loop<br/><strong>10:00am</strong></>}
                    who='Age 6 and under'
                    price={0}
                    includes={[
                        'Light refreshments included for runners and available for purchase by spectators.',
                        'Awards Ceremony & Faith-based Word of Encouragement @ 12:30pm',
                        'Pre-registration by email encouraged.'
                    ]}
                >
                    <CTAButton href="mailto:camp@teenranch.com?subject=Teen%20Ranch%20Fall%20Gallop">Pre-register now</CTAButton>
                </Price>
                <Price 
                    title="Wranglers"
                    subTitle={<>Driveway Loop (700 meters)<br/><strong>10:15am</strong></>}
                    who='Age 7-10'
                    price={15} 
                    term='person' 
                    includes={[
                        'Light refreshments included for runners and available for purchase by spectators.',
                        'Awards Ceremony & Faith-based Word of Encouragement @ 12:30pm',
                        'Pre-registration by email encouraged.'
                    ]}
                >
                    <CTAButton href="mailto:camp@teenranch.com?subject=Teen%20Ranch%20Fall%20Gallop">Pre-register now</CTAButton>
                </Price>
                <Price 
                    title='Broncos'
                    subTitle={<>Trail Loop (2.5 kilometers)<br/><strong>10:45am</strong></>} 
                    who='Age 11-13'
                    price={15}
                    term='person'
                    includes={[
                        'Light refreshments included for runners and available for purchase by spectators.',
                        'Awards Ceremony & Faith-based Word of Encouragement @ 12:30pm',
                        'Pre-registration by email encouraged.'
                    ]}
                >
                    <CTAButton href="mailto:camp@teenranch.com?subject=Teen%20Ranch%20Fall%20Gallop">Pre-register now</CTAButton>
                </Price>
                <Price
                    title='Big Rodeo'
                    subTitle={<>Double Trail Loop (5 kilometers)<br/><strong>11:15am</strong></>}
                    who='Age 14 and up'
                    price={20}
                    term='person'
                    includes={[
                        'Light refreshments included for runners and available for purchase by spectators.',
                        'Awards Ceremony & Faith-based Word of Encouragement @ 12:30pm',
                        'Pre-registration by email encouraged.',
                        <strong>WALKERS WELCOME</strong>
                    ]}
                >
                    <CTAButton href="mailto:camp@teenranch.com?subject=Teen%20Ranch%20Fall%20Gallop">Pre-register now</CTAButton>
                </Price>
            </PriceContainer>
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
                    running && running.edges && running.edges.map((edge, i) => {

                        return <div key={ i } className='facility'><GatsbyImage image={ edge.node.childImageSharp.gatsbyImageData } alt='Running' /></div>;

                    })
                }
            </Grid>

            </Container>

            <Container>
                <h1>Additional information</h1>
                <p>
                    Pre-registration through <a href="mailto:camp@teenranch.com?subject=Teen%20Ranch%20Fall%20Gallop">camp@teenranch.com</a> encouraged.
                </p>
                <p>
                    All COVID-19 protocol for this outdoor sports & rec event will be in place, including:
                    <ul>
                        <li>physical distancing</li>
                        <li>masks required at start/finish line and restrooms</li>
                        <li>sanitizing stations available</li>
                        <li>no proof of vaccination status required</li>
                        <li>screening at the entry gate</li>
                    </ul>
                </p>
            </Container>
            <Container>
                <p><em>Teen Ranch is a member of Christian Camping International (CCI) and seeks to share God's love with those of all ages, through camps, retreats, community events and more.</em></p>
            </Container>



            <Container>
                <h1>Upcoming events</h1>
                { events }
            </Container>

       
    </>;
}

export const query = graphql`{
  file(relativePath: {eq: "events/fallGallop/running1.jpg"}) {
    childImageSharp {
      gatsbyImageData(quality: 64, layout: FULL_WIDTH)
    }
  }
  running: allFile(filter: {relativeDirectory: {eq: "events/fallGallop"}}) {
    edges {
      node {
        name
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
}`