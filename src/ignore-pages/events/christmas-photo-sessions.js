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
    title: 'Teen Ranch Christmas Photo Sessions',
    path: '/events/christmas-photo-sessions/'
}

const pageData = {
    subTitle: 'Help support the Ranch and get some beautiful Christmas photos!',
    keywords: 'family photos, family photo shoot'
}

const eventData = {
    title: frontmatter.title,
    description: `Help support the Ranch and get some beautiful Christmas photos!`,
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

        let startDate = DateTime.fromISO('2021-11-20', { zone: 'America/Toronto' })
        let key = 0

        events.push(
            <Event
                key={ key }
                title={ frontmatter.title }
                startDate={startDate.toISODate()}
                startTime='09:00:00'
                endDate={startDate.toISODate()}
                endTime='15:00:00'
                price={0}
                description={ eventData.description }
                venue={eventData.venue}
                images={[data.file.childImageSharp.gatsbyImageData.src]}
                status={ 'SCHEDULED' }
            />
        )

        key = key+1
        startDate = DateTime.fromISO('2021-11-27', { zone: 'America/Toronto' })

        events.push(
            <Event
                key={ key }
                title={ frontmatter.title }
                startDate={startDate.toISODate()}
                startTime='09:00:00'
                endDate={startDate.toISODate()}
                endTime='15:00:00'
                price={0}
                description={ eventData.description }
                venue={eventData.venue}
                images={[data.file.childImageSharp.gatsbyImageData.src]}
                status={ 'SCHEDULED' }
            />
        )



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
                Help support the Ranch and get some beautiful
Christmas photos! Come and have your picture
taken indoors or outdoors at one of our
pre-made photography stations!
Photos taken by <a target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/rachaelrettiephotography/">@rachaelrettiephotography</a> and
<a target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/christophergrahamphoto/">@christophergrahamphoto</a> with ALL proceeds
going to Teen Ranch!
                </p>
               
                </Container>

                <Container>
                <h1>Pricing</h1>
                <PriceContainer xl='2'>

                <Price 
                    title='Outdoor Photo Session' 
                    subTitle={<a target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/christophergrahamphoto/">@christophergrahamphoto</a>}
                    // who='Pet Friendly'
                    price={150}
                    term='session'
                    includes={[
                        '20 minute photo session',
                        '10 digital photos',
                        'Pet friendly'
                    ]}
                >
                    <CTAButton target="_blank" rel="noreferrer noopener" href="https://calendly.com/teen-ranch/outdoor-photo-shoot">Book now</CTAButton>
                </Price>
                <Price 
                    title='Indoor Photo Session' 
                    // who=''
                    subTitle={<a target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/rachaelrettiephotography/">@rachaelrettiephotography</a>}
                    price={150}
                    term='session'
                    includes={[
                        '20 minute photo session',
                        '10 digital photos',
                    ]}
                >
                    <CTAButton target="_blank" rel="noreferrer noopener" href="https://calendly.com/teen-ranch/indoor-photo-shoot">Book now</CTAButton>
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

                        return <div key={ i } className='facility'><GatsbyImage image={ edge.node.childImageSharp.gatsbyImageData } alt='Christmas Photo Session' /></div>;

                    })
                }
            </Grid>

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
  file(relativePath: {eq: "events/christmasPhotoSessions/DE7.jpg"}) {
    childImageSharp {
      gatsbyImageData(quality: 64, layout: FULL_WIDTH)
    }
  }
  running: allFile(
    filter: {relativeDirectory: {eq: "events/christmasPhotoSessions"}}
  ) {
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