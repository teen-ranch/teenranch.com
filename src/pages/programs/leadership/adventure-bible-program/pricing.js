import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
// import Button from 'components/Button'
import Program from 'components/Program'
import { graphql, Link } from 'gatsby'

import SubNav from 'components/SubNav'
import Verse from 'components/Verse'

export const frontmatter = {
    title: 'Adventure Bible Program - Pricing',
    basePath: '/programs/leadership/adventure-bible-program/',
    path: '/programs/leadership/adventure-bible-program/pricing/'
}

const pageData = {
    subTitle: 'Explore your faith. Challenge your limits.',
    keywords: 'adventure bible program, christian leadership program, teen ranch leadership program'
}

export default function Programs({ data }) {

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

            <SubNav>
                <NavLink to={ frontmatter.basePath }>Overview</NavLink>
                <NavLink to={ frontmatter.basePath + 'location/' }>Location</NavLink>
                <NavLink to={ frontmatter.basePath + 'pricing/' }>Pricing</NavLink>
            </SubNav>

            <Container type='body'>

                <h3>Sessions</h3>  

                <h4>Winter Session 2021</h4>
                January 17, 2021 - February 28, 2021

                <h4>Spring Session 2021</h4>
                Coming soon!

                <h4>Fall Session 2021</h4>
                Coming soon!

                <div>$4,900 +HST</div>

            </Container>
        </>
    )
}

const NavLink = ({ children, ...props }) => (
    <Link {...props} activeClassName='active'>{ children }</Link>
)

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