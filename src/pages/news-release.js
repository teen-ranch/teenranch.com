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

const frontmatter = {
    title: 'News Release',
    path: '/news-release/'
}

const pageData = {
    subTitle: 'News Release',
    keywords: ''
}

export default function Programs({ data }) {

	return (
        <>

            {/* <Heading
                src={ data.file.childImageSharp.fluid }
                alt='Silhouette of people on a hill'
                title={ frontmatter.title }
                subtitle={ pageData.subTitle }
                metaTitle={ pageData.metaTitle || frontmatter.title }
                metaDescription={ pageData.metaDescription || pageData.subTitle }
                keywords={ pageData.keywords }
			/> */}


            <Container type='body'>

                <div style={{maxWidth:"600px", margin: "0px auto", textAlign:"justify"}}>
                <div style={{padding:'4rem', textAlign:'center'}}>
                <h1>News Release</h1>
                <h2>April 15, 2026</h2>
                </div>

                <p>
                    Teen Ranch is aware of the recent charges laid by the Ontario Provincial Police regarding charges of alleged sexual assault in connection with an individual who was formerly associated with our organization. We are deeply concerned by the nature of the allegations and extend our deep care and concern for those who have been impacted. We recognize and applaud the courage it takes to bring this to light.
                </p>
                
                <p>
                    For 60 years, Teen Ranch has been committed to the safety, well-being, and dignity of every young person entrusted to our care. We maintain a zero-tolerance policy toward any form of misconduct, particularly where it involves minors.
                </p>
                
                <p>
                    Upon becoming aware of the investigation, we took immediate and appropriate steps to fully cooperate with law enforcement authorities. We continue to support the ongoing investigative process and remain committed to assisting in any way required.
                </p>
                
                <p>
                   We recognize the importance of ongoing vigilance. Accordingly, we are conducting a comprehensive internal review of our policies, procedures, and safeguarding practices. This includes, but is not limited to: 
                    <ul>
                        <li>Reinforcing staff screening and background verification protocols</li>
                        <li>Enhancing training related to youth protection, boundaries, and reporting obligations</li>
                        <li>Reviewing supervision standards and program structures to ensure best practices are consistently met</li>
                        <li>Strengthening clear, accessible channels for reporting concerns or misconduct</li>
                    </ul>
                </p>
                
                <p>
                    We are also engaging independent experts in youth safety and organizational compliance to assess and advise on our systems, ensuring they meet or exceed current standards.
                </p>
                
                <p>
                    We also urge families within our community to speak openly with their children and to report any concerns without hesitation. If families need guidance in how to do this, please contact our office for resources.
                </p>
                
                <p>
                    Anyone with information regarding this investigation is urged to contact the Caledon
OPP at 1-888-310-1122, referencing occurrence number RM26035754. You can also
provide information anonymously via Peel Crime Stoppers at 1-800-222-TIPS (8477) or
online at <a href="http://www.peelcrimestoppers.ca">www.peelcrimestoppers.ca</a>
                </p>

                <p>
                    We understand the seriousness of this situation and the trust placed in our organization. We are committed to transparency, accountability, and continuous safeguarding to ensure that our environment remains safe, supportive, and respectful for all.
                </p>
                
                <p>
                   Our thoughts remain with those impacted, and we will continue to take every necessary step to uphold the confidence of our community. 
                </p>
                
                <p>
                    For further information about this situation, please see the news release below provided by the OPP.
                </p>
                
                <p>
                    Tim Stevens<br/>
                    Teen Ranch Executive Director
                </p>
                    <div style={{
                        border: "1px solid #ccc",
                        borderRadius: '8px',
                        padding: '8px'
                    }}>
                    <img src="/facebook.png"/>
                    </div>
                </div>
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

        study: file(relativePath: { eq: "stock/ben-white-oUiTrFhnEkE-unsplash.jpg" }) {
            childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
        }

        outreach: file(relativePath: { eq: "stock/helena-lopes-PGnqT0rXWLs-unsplash.jpg" }) {
            childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
        }

        adventure: file(relativePath: { eq: "stock/joshua-earle-9idqIGrLuTE-unsplash.jpg" }) {
            childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
        }

        schedule: file(relativePath: { eq: "abp/schedule.JPG" }) {
            childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
        }
    }
`