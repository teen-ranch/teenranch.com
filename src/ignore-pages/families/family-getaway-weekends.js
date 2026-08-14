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
    title: 'Family getaway weekends',
    path: '/families/family-getaway-weekends'
}

const pageData = {
    subTitle: 'Enjoy fresh air in the scenic countryside while creating lasting memories and family fun as you explore and play together.',
    keywords: 'winter activities, things to do this winter, family winter activities, what to do during lockdown'
}

const eventData = {
    title: frontmatter.title,
    price: 150,
    description: `Enjoy fresh air in the scenic countryside while creating lasting memories and family fun as you explore and play together.`,
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
            startDate={DateTime.fromISO('2021-07-16', { zone: 'America/Toronto' }).toISODate()}
            startTime='19:00:00'
            endDate={DateTime.fromISO('2021-07-18', { zone: 'America/Toronto' }).toISODate()}
            endTime='14:00:00'
            price={eventData.price}
            description={ eventData.description }
            venue={eventData.venue}
            images={[data.file.childImageSharp.fluid.src]}
            status={ 'SCHEDULED' }
        />,
        <Event
            key={ 2 }
            title={ frontmatter.title }
            startDate={DateTime.fromISO('2021-07-30', { zone: 'America/Toronto' }).toISODate()}
            startTime='19:00:00'
            endDate={DateTime.fromISO('2021-08-01', { zone: 'America/Toronto' }).toISODate()}
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

                    <p>Teen Ranch is excited to offer two Family Getaway Weekends this summer! Enjoy fresh air in the scenic countryside while creating lasting memories and family fun as you explore and play together.</p>
                  
                    <Button href="https://forms.zohopublic.com/teenranch1/form/FamilyGetawayWeekends1/formperma/4LcFPpAzy7obnBJCvcYPXqs86PA_aw3CEFONzz7QLPw">Book now</Button>
                    <h3>This weekend getaway package includes:</h3>
                    <p>Breakfasts, Lunches and Supper.</p>

                    <p>Choice of three different accommodation options. Call to discuss your best family option:</p>
                    
                    <ul>
                        <li><strong>Chalet Room:</strong> $900 +HST</li>
                        <li><strong>Family Suite:</strong> $1,300 +HST (Full linens included)</li>
                        <li><strong>Western-style Hotel Room:</strong> $1,300 +HST (Full linens included)</li>
                    </ul>

                    <h4>Available activities:</h4>

                    <ul>
                        <li>Basketball</li>
                        <li>Volleyball</li>
                        <li>Tennis</li>
                        <li>Soccer</li>
                        <li>Biking trails (bring your own bike)</li>
                        <li>Boating</li>
                        <li>Water slide</li>
                        <li>Swimming pond</li>
                        <li>Hiking</li>
                        <li>Jousting pond</li>
                        <li>Map orienteering</li>
                        <li>Trampolines</li>
                        <li>Crafts</li>
                        <li><strong>Plus a Teen Ranch Campfire Saturday evening with fun campfire songs and an inspiring family devotional message</strong></li>
                    </ul>

                    <p>Individual family campfire locations and necessary provisions provided. Smores Kit available upon request.</p>

                    <p>Weekend Itinerary will be confirmed with each family based on family preferences and current provincial regulations, and at the discretion of Teen Ranch.</p>

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

                <Container type='body'>
                    <h2>Weekend add-ons:</h2>
                    <PriceAddon
                        title='Campfire experience'
                        subTitle='All ages'
                        description={
                            <>
                                Enjoy a true summer camp experience with your own family bonfire! Fire provisions provided for you at the campfire site. Order your smores kit and water bottles through us or bring your own campfire treats.
                            </>
                        }
                        price={20}
                        term='person'
                    />
                    <PriceAddon
                        title='Pony ride'
                        subTitle='All ages'
                        description={
                            <>
                                Kids can enjoy a led pony ride with our trained staff overseeing the fun (30 minutes).
                            </>
                        }
                        price={25}
                        term='person'
                    />
                    <PriceAddon
                        title='Horseback trail ride'
                        subTitle='Ages 10+'
                        description={
                            <>
                                One-hour in length, walk/trot, max. participant weight of 250lbs
                            </>
                        }
                        price={55}
                        term='person'
                    />
                    <PriceAddon
                        title='Ice rental'
                        subTitle='All ages'
                        description={
                            <>
                                On-site, private Olympic-size ice pad for your family fun! Bring your own skates and/or hockey equipment (50 minutes).
                            </>
                        }
                        price={300}
                        term='hour'
                    />
                    <PriceAddon
                        title='Semi-private riding lesson'
                        subTitle='Ages 7+'
                        description={
                            <>
                                One-hour in length, Western or English riding, beginner-advanced, max. participant weight of 250lbs
                            </>
                        }
                        price={60}
                        term='person'
                    />
                    <PriceAddon
                        title='Private riding lesson'
                        subTitle='Ages 5+'
                        description={
                            <>
                                One-hour in length, Western or English riding, beginner-advanced, max. participant weight of 250lbs
                            </>
                        }
                        price={75}
                        term='person'
                    />
                </Container>

                <Container>
                    <h3>I have more questions...</h3>
                    <p>Please email our office at <a href="mailto:camp@teenranch.com">camp@teenranch.com</a> and we will get back to you as soon as we can.</p>
                    <Button href="https://forms.zohopublic.com/teenranch1/form/FamilyGetawayWeekends1/formperma/4LcFPpAzy7obnBJCvcYPXqs86PA_aw3CEFONzz7QLPw">Book now</Button>
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
        file(relativePath: { eq: "weekendGetaway/smores.jpg" }) {
            childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
        }
        activities: allFile(filter: { relativeDirectory: { eq: "weekendGetaway/activities" }}) {
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