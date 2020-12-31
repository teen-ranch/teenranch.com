import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
// import Button from 'components/Button'
// import Program from 'components/Program'
import { graphql } from 'gatsby'

import ExternalLink from 'components/ExternalLink'

// import SubNav from 'components/SubNav'
// import Verse from 'components/Verse'

// import { PrimaryButton, CTAButton } from 'components/Button'

import Img from 'gatsby-image'

import Event from 'components/Event'
import Card from 'components/Card'

import { DateTime } from 'luxon'

export const frontmatter = {
    title: 'Winter Activity Adventure',
    path: '/events/family-winter-activity-adventure/'
}

const pageData = {
    subTitle: 'Get outdoors this Saturday for an adventure and enjoy some activities with your family',
    keywords: 'winter activities, things to do this winter, family winter activities, what to do during lockdown'
}

const eventData = {
    title: frontmatter.title,
    price: 150,
    description: `Get outdoors this Saturday for an adventure and enjoy some activities with your family`,
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

export default function ({ data }) {

    const events = []

        const startDate = DateTime.fromISO('2021-01-09', { zone: 'America/Toronto' })
        let key = 0
        for (let i = 0; i < 12; i++) {

            const newStartDate = startDate.plus({ weeks: i })

            events.push(
                <Event
                    key={ key }
                    title={ frontmatter.title }
                    startDate={newStartDate.toISODate()}
                    startTime='09:30:00'
                    endDate={newStartDate.toISODate()}
                    endTime='12:30:00'
                    price={eventData.price}
                    description={ eventData.description }
                    venue={eventData.venue}
                    images={[data.file.childImageSharp.fluid.src]}
                    status={ 'SCHEDULED' }
                />
            )

            key = key + 1

            events.push(
                <Event
                    key={ key }
                    title={ frontmatter.title }
                    startDate={newStartDate.toISODate()}
                    startTime='13:00:00'
                    endDate={newStartDate.toISODate()}
                    endTime='16:00:00'
                    price={eventData.price}
                    description={ eventData.description }
                    venue={eventData.venue}
                    images={[data.file.childImageSharp.fluid.src]}
                    status={ 'SCHEDULED' }
                />
            )

            key = key + 1

        }



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

            <div style={{ maxWidth: '960px', margin: '0 auto', fontSize: '18px', color: 'rgb(41, 41, 41)', letterSpacing: '0.01em', lineHeight: '26px', padding: '0 2rem' }}>

                <Container>
                    <h1>Winter activity adventure</h1>

                    <p>Teen Ranch is pleased to offer winter outdoor adventures for you and your family to enjoy this winter! Our lockdown-friendly activities provide a chance to get your family outdoors, play together, explore the beautiful Teen Ranch landscape and get in that much-needed outdoor fitness, mental health break that’s hard to come by these days. Research shows that even just 120 minutes a week has a marked improvement on mental health, not to mention keeping our bodies active!</p>

                    <h3>This family winter adventure includes:</h3>
                    <p>Three snow-play activities, each with an alternative activity if no snow is available. Each activity is 45 minutes long with a 15 min break (washroom available)</p>
                    
                    <ul>
                        <li><strong>Pond Skate (ice) / Broom Ball (no ice):</strong> Enjoy Teen Ranch’s skating pond for a truly picturesque outdoor skate (bring your own skates). No snow? No problem! Instead, enjoy a little family friendly broom ball competition (broomball equipment provided).</li>
                        <li><strong>Tubing (snow) / Scavenger Hunt (no snow):</strong> Teen Ranch snow tubing is a camp favourite…now it’s your turn (snow tubes provided)! o	This scavenger hunt will take you across the property and introduce you to new facts and information as you go. Complete as a family or team up against each other—it’s up to you!</li>
                        <li><strong>Snowshoeing (snow) / Hike (snow / no snow):</strong> Whatever the weather, you choose from beginner, moderate and advanced levels trails. Marked trails and map provided as well as snowshoes for ages 12 and up.</li>
                    </ul>

                    <p><strong>And of course every good outdoor day includes a camp fire and free hot chocolate to warm you up!</strong></p>

                    <p><strong>All required equipment is included in the price. Helmets are recommended but not provided. Please bring your own.</strong></p>

                    <p>For those of you begging for more outdoor time, you can consider one of these exciting add-ons:</p>

                    <h3>Activity add-ons:</h3>

                    <ul>
                        <li><strong>Hayride:</strong> This is your chance to be toured around Teen Ranch’s beautiful site and enjoy the sheer fun of being pulled along on a wagon of hay. One of the simple pleasures of ranch fun, now possible for you to enjoy together!</li>
                        <li><strong>Trail ride:</strong> Always a favorite for those ten and older, Teen Ranch trail rides offer the chance to meet and greet your own trail horse who will lead you through the hills and flatlands of this scenic Caledon property. Our horses are waiting to take you on this winter adventure and our trained staff will be there to ensure a safe trek!</li>
                    </ul>

                    <h2>When is it?</h2>
                    Saturdays, January 2 through March 27, 2021 (9:30 – 12:30 pm OR 1:00 – 4:00 pm)

                    <h2>What does it cost?</h2>

                    $150 +HST per family.<br/><i>Open to families of the same household, up to five persons per family.<br/>Families of 6-10 persons can book two slots.</i>

                    <h3>Available add-ons:</h3>
                    <ul>
                        <li>Trail Ride - $55 +HST per person/one-hour</li>
                        <li>Hayride - $75 +HST per family (two families max, socially distanced)</li>
                    </ul>
                    
                    <p>
                        Check out the benefits to you and your family of time invested playing outdoors!
                    </p>
                    <ul>
                        <li><ExternalLink href='https://highlandspringsclinic.org/blog/the-top-ten-benefits-of-spending-time-with-family/'>The top ten benefits of spending time with family.</ExternalLink></li>
                        <li><ExternalLink href='https://www.rei.com/blog/news/this-is-the-optimal-amount-of-time-to-spend-outside-each-week'>This is the optimal amount of time to spend outside each week</ExternalLink></li>
                        <li><ExternalLink href='https://www.health.harvard.edu/blog/6-reasons-children-need-to-play-outside-2018052213880'>6 reasons childrend need to play outside</ExternalLink></li>
                    </ul>

                    <h2>Frequently asked questions</h2>

                    <h3>Are tickets required?</h3>
                    <p>Yes. You must register with payment in advance and bring your tickets for entry. Please ensure that names match those registered.</p>
                    <p>To enter the property, a family Covid Screening Declaration must be submitted online within 48 hours prior to your arrival and verbal confirmation upon your arrival that there has been no changes to your answers.</p>
                    <p>This is a pre-registered event. We are not able to accommodate walk-ins or additional guests.</p>
                    
                    <h3>Should I arrive in advance?</h3>
                    Please arrive on time. Gate opens 15 minutes prior to booking time. If you arrive late, you will miss a portion of your activities. You will not be able to add that time to the end of your visit. Families are expect to leave the property within 15 meetings of their program finishing.

                    <h3>Can we come early or stay on property after our booked adventure?</h3>
                    In order to meet current capacity requirements and restrictions, you must arrive and depart at the times booked. You may extend your time by booking trail rides or hay rides before or after your adventure time.

                    <h3>Does each member of my family require a Covid Screening Declaration? Even my baby/toddler?</h3>
                    Any person from the youngest to the oldest, must have a completed Covid Screening Declaration completed by them or for them where applicable. Each child counts towards capacity limits.

                    <h3>Can I change or cancel my booking date or time?</h3>

                    <p>No, all Winter Activity Adventure bookings are final.  We are unable to rebook your visit.</p>
                    <p>We would appreciate an email if you must cancel your visit to Winter Activity Adventure. Please email us at <a href="mailto:camp@teenranch.com">camp@teenranch.com</a> if you are unable to attend.</p>
                    
                    <p><strong><u>We are not able to offer refunds.</u> All sales are final.</strong></p>
                    Understanding that life happens, transfers to a family you know will be considered on a case by case basis, depending on family numbers. We must be notified within 24 hours before the booking to be able to consider a transfer. This transfer cannot include more than one family.

                    <h3>What happens if I lose or forget my ticket receipt?</h3>

                    If you lose or forget your ticket receipt, please bring a valid identification that corresponds with the name on your ticket receipt purchase and our Staff will assist you.  

                    <h3>What should we wear?</h3>

                    Dress warm and in layers. Hats, neck warmers, snow clothes, winter boots, warm socks, and layered clothing underneath will ensure that you have fun outdoors! You will have opportunity to warm up by a fire with hot chocolate and some point during your booking.

                    <h3>Can I bring my own equipment?</h3>

                    You are welcome to bring your own snow shoes, but please no tubes or other sledding apparatus. Only Teen Ranch tubes will be permitted on the hill. Equipment for all activities is included in the price (apart from ice skates and helmets), but the prices will not be reduced if you bring your own equipment.

                    <h3>Are helmets required/provided?</h3>
                    <ul>
                        <li><strong>Trail rides:</strong> Riding helmets are required for guests under 18 and recommended for anyone over 18. Riding helmets are provided.</li>
                        <li><strong>Other activities:</strong> Helmets are recommended but not provided. Please bring your own.</li>
                    </ul>

                    <h3>Do I need to wear a mask during the event?</h3>
                    Masks must be worn if you are within two metres of a non-family member and when using the indoor washroom.

                    <h3>Can I bring my own snacks?</h3>
                    Yes, please do, but all snack and beverage items must be kept with your family and all trash and recyclables taken back home with you.  Teen Ranch will provide your family with hot chocolate!

                    <h3>Can I take my own pictures?</h3>
                    Absolutely! Please capture your memories and feel free to #WinterActivityAdventure

                    <h3>Are pets allowed?</h3> 
                    Only Service Animals are permitted at Teen Ranch.  Please bring documents and your pet must wear its vest.   

                    <h3>I have more questions...</h3>
                    Please email our office at <a href="mailto:camp@teenranch.com">camp@teenranch.com</a> and we will get back to you as soon as we can.

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
        file(relativePath: { eq: "events/winterTobogganing.jpg" }) {
            childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
        }
    }
`