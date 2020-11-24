import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
// import Button from 'components/Button'
import Program from 'components/Program'
import { graphql, Link } from 'gatsby'

import SubNav from 'components/SubNav'
import Verse from 'components/Verse'

import { PrimaryButton, CTAButton } from 'components/Button'

import Img from 'gatsby-image'

import Event from 'components/Event'

export const frontmatter = {
    title: 'The Christmas Winter Festival',
    path: '/events/the-christmas-winter-festival/'
}

const pageData = {
    subTitle: 'A family drive-in Chistmas Event.',
    keywords: 'christmas festival'
}

const eventData = {
    title: frontmatter.title,
    price: 30,
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
                    title={ frontmatter.title }
                    startDate={`2020-12-${ '00'.substring(0, 2 - i.toString().length) + i.toString() }T19:00:00`}
                    endDate={`2020-12-${ '00'.substring(0, 2 - i.toString().length) + i.toString() }T21:00:00`}
                    price={30}
                    description={`Active Lives Day Program & Teen Ranch are going to be running a Christmas Winter Festival from December 1st to December 27th . This 27-day festival will be located at Teen Ranch in Caledon, Ontario. The Christmas Winter Festival is a drive-in event that allows participants to view 30 plus 3D Christmas hologram displays from their cars. These displays range from a sneak peek at elves creating mischief in Santa's Workshop, watching Olaf throwing snowballs and even witnessing Santa practicing sleigh take offs for Christmas. Every festival each year has a display of colourful lights but no Christmas festival has an interactive display such as the Christmas Winter Festival. This year there will be a live nativity scene on weekends thanks to families from Orangeville and virtual Christmas Carolers singing songs directly to your car. We will also have FM transmitters sending sound directly to your car radio and 3-D Christmas projections. This is the ultimate way to share the holidays with your family.`}
                    venue={{
                        name: 'Teen Ranch',
                        address: {
                            address: '20682 Hurontario Street',
                            city: 'Caledon',
                            province: 'ON',
                            postalCode: 'L7K 1X1'
                        }
                    }}
                />
            )

        }

    }

	return (
        <>

            <Heading
                src={ data.file.childImageSharp.fluid }
                alt='Silhouette of people on a hill'
                title={ frontmatter.title }
                subtitle={ pageData.subTitle }
                metaTitle={ pageData.metaTitle || frontmatter.title }
                metaDescription={ pageData.metaDescription || pageData.subTitle }
                keywords={ pageData.keywords }
			/>

            <Container>
                { events }
            </Container>

           
        </>
    )
}

export const query = graphql`
    query {
        file(relativePath: { eq: "stock/chang-duong-Sj0iMtq_Z4w-unsplash.jpg" }) {
            childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
        }
    }
`