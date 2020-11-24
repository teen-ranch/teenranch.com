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

export default function ({ data }) {

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
                <Event
                    name={ frontmatter.title }
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