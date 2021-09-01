import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
import Button from 'components/Button'
import Program from 'components/Program'

import { graphql } from 'gatsby'

const frontmatter = {
    title: 'Families',
    path: '/families/'
}

const pageData = {
    subTitle: '',
    metaTitle: '',
    metaDescription: 'Due to COVID-19 Teen Ranch is running a small set of temporary programs. We look forward to serving you with more activities as restrictions continue to loosen.',
    keywords: 'hockey programs, horse programs, adventure programs, bmx dirt programs'
}

export default function Programs({ data }) {

    const { motherDaughter } = data

	return (
        <>

            <Heading
                src={ motherDaughter.childImageSharp.fluid }
                alt='Girl screaming on giant swing'
                title={ frontmatter.title }
                subtitle={ pageData.subTitle }
                metaTitle={ pageData.metaTitle || frontmatter.title }
                metaDescription={ pageData.metaDescription || pageData.subTitle }
                keywords={ pageData.keywords }
			/>
            <Container type='body'>

                <Program src={ motherDaughter.childImageSharp.fluid } name='Mother daughter equine escape'>
                    <p>A tremendous, once-a-year opportunity to leave your screens behind and create lifelong memories over a common love of horses and one another.</p>

                    <Button to='/families/mother-daughter-equine-escape/'>View now</Button>
                </Program>             

            </Container>
        </>
    )
}


export const query = graphql`
    query {
        motherDaughter: file(relativePath: { eq: "motherDaughter/d556c391-315b-9e0d-d741-4a0bd91f7e9b.jpg" }) {
            childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
        }
    }
`