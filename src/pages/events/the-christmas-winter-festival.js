import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
// import Button from 'components/Button'
// import Program from 'components/Program'
import { graphql } from 'gatsby'

// import SubNav from 'components/SubNav'
// import Verse from 'components/Verse'

// import { PrimaryButton, CTAButton } from 'components/Button'

import Img from 'gatsby-image'

import Event from 'components/Event'

export const frontmatter = {
    title: 'The Christmas Winter Festival',
    path: '/events/the-christmas-winter-festival/'
}

const pageData = {
    subTitle: 'An interactive Christmas family drive-thru event.',
    keywords: 'christmas festival'
}

const eventData = {
    title: frontmatter.title,
    price: 20,
    description: `Active Lives Day Program & Teen Ranch are going to be running a Christmas Winter Festival from December 1st to December 27th . This 27-day festival will be located at Teen Ranch in Caledon, Ontario. The Christmas Winter Festival is a drive-in event that allows participants to view 30 plus 3D Christmas hologram displays from their cars. These displays range from a sneak peek at elves creating mischief in Santa's Workshop, watching Olaf throwing snowballs and even witnessing Santa practicing sleigh take offs for Christmas. Every festival each year has a display of colourful lights but no Christmas festival has an interactive display such as the Christmas Winter Festival. This year there will be a live nativity scene on weekends thanks to families from Orangeville and virtual Christmas Carolers singing songs directly to your car. We will also have FM transmitters sending sound directly to your car radio and 3-D Christmas projections. This is the ultimate way to share the holidays with your family.`,
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
    for (let i = 1; i <= 27; i++) {

        if (i !== 25) {

            events.push(
                <Event
                    key={ i }
                    title={ frontmatter.title }
                    startDate={`2020-12-${ '00'.substring(0, 2 - i.toString().length) + i.toString() }`}
                    startTime='19:00:00'
                    endDate={`2020-12-${ '00'.substring(0, 2 - i.toString().length) + i.toString() }`}
                    endTime='21:00:00'
                    price={eventData.price}
                    description={ eventData.description }
                    venue={eventData.venue}
                    images={[data.image.childImageSharp.fluid.src]}
                />
            )

        }

    }

	return (
        <>

            <Heading
                src={ data.file.childImageSharp.fluid }
                alt='The Christmas Winter Festival'
                title={ frontmatter.title }
                subtitle={ pageData.subTitle }
                metaTitle={ pageData.metaTitle || frontmatter.title }
                metaDescription={ pageData.metaDescription || pageData.subTitle }
                keywords={ pageData.keywords }
			/>

            <div style={{ maxWidth: '960px', margin: '0 auto', fontSize: '18px', color: 'rgb(41, 41, 41)', letterSpacing: '0.01em', lineHeight: '26px', padding: '0 2rem' }}>

                <Container>
                    <h1>The Christmas Winter Festival</h1>
                    <h4>In association with Active Lives Day Program</h4>

                    <p>
                        Start a new family tradition this Christmas season at the Christmas Winter Festival. 
                        This interactive drive-thru event is the perfect evening out with your family. 
                        Snuggle up and drive by more than thirty (that's right, 30) 3D Christmas hologram displays. 
                        Sneak a peek at elves creating mischief in Santa's Workshop, watch Olaf throwing snowballs and witness Santa practice his sleigh take offs for Christmas Eve.
                    </p>

                    <p>
                        This year, there will be a special live nativity scene on Saturday and Sunday evenings thanks to local families from Orangeville.
                    </p>

                    <p>
                        You won't find another interactive Christmas event like this one. This is the ultimate way to create memories and share the holidays with your family.
                    </p>

                    <h2>Cost</h2>
                    <p>
                        $20 (tax included) per vehicle
                    </p>
                    <h3>Payment accepted at entry</h3>
                    
                    <ul>
                        <li>Debit/Credit (tap)</li>
                        <li>Exact cash (drop in box)</li>
                    </ul>

                    <h2>When</h2>
                    <p>
                        December 1 - 27, 2020 @ 7:00pm - 9:00pm (Excludes December 25)
                    </p>

                </Container>

                <Container>
                    <Img fluid={ data.image.childImageSharp.fluid } />
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
        file(relativePath: { eq: "events/nativity.jpg" }) {
            childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
        }

        image: file(relativePath: { eq: "events/the-christmas-winter-festival.png" }) {
            childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
        }
    }
`