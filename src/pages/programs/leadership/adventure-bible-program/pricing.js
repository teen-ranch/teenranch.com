import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
// import Button from 'components/Button
import { graphql, Link } from 'gatsby'

import SubNav from 'components/SubNav'

import { PrimaryButton, CTAButton } from 'components/Button'

import './pricing.scss'

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
                {/* <NavLink to={ frontmatter.basePath + 'location/' }>Location</NavLink> */}
                <NavLink to={ frontmatter.basePath + 'pricing/' }>Pricing</NavLink>
            </SubNav>

            <Container type='pricing'>

                <div className='priceOuterWrapper'>
                    <Price 
                        amount={4900}
                        benefits={[
                            '6 weeks',
                            'Christ-centered',
                            'Growth',
                            'Outreach',
                            'Adventure',
                        ]}
                    />
                </div>

                <div className='sessionWrapper'>

                        <Session
                            title='Winter Session'
                            year='2021'
                            start='2021-01-17'
                            end='2021-02-28'
                            due={[
                                'January 5, 2021',
                                'February 5, 2021'
                            ]}
                        />

                        <Session
                            title='Spring Session'
                            year='2021'
                            start='2021-05-02'
                            end='2021-06-13'
                            due={[
                                'April 15, 2021',
                                'May 25, 2021'
                            ]}
                        />

                </div>

                <CTAButton target="_blank" href="https://zfrmz.com/uFexR2s79N4btrSyO7nO">Apply Now</CTAButton>
                <div className='priceLink'>
                    <Link to='/programs/leadership/adventure-bible-program/pricing/'>See pricing</Link> | <a href="mailto:camp@teenranch.com?subject=Adventure%20Bible%20Program">More info</a>
                </div>

                <div className='policies'>

                    <h3>Cancellation policy</h3>

                    <p>Knowing the uncertainty of the times, Teen Ranch will refund in full less a $250 program admin fee in the case of cancellation prior to the start of the program. The $250 fee is non-refundable and non-transferable but will be kept for the registrant to use for one year.</p>

                    <p>Any departure due to a Covid-19 positive test result will trigger a prorated refund for the remaining time in the program less the $250 deposit or all efforts will be made to incorporate the participant back into the program following a negative test result.</p>
                    
                    <p>In the case that the program must be closed due to the government or public health mandate, the prorated balance will be refunded in full, less the $250 deposit.</p>
                    
                    <p>Please contact Teen Ranch Ministries if in financial need. We are committed to helping those interested find the means to attend.</p>

                    <p>Donations toward the Teen Ranch Ministries Adventure Bible Program are Tax Deductible.</p>

                </div>

            </Container>
        </>
    )
}

const NavLink = ({ children, ...props }) => (
    <Link {...props} activeClassName='active'>{ children }</Link>
)

function Price({ amount, benefits }) {

    // const { appUrl } = useSiteMetadata()

    const amountString = amount.toString().split('.')

    return (
        <div className='priceWrapper'>
            
            <div className='priceContainer'>
                <div>
                    <div className='price'>
                        {/* ${ amountString[0] }<sm>.{ amountString[1] }/mo</sm> */}
                        ${ new Intl.NumberFormat('en-US').format(amountString[0]) }
                    </div>
                    {/* <div className='pricePer'>/month</div> */}
                    <div className='priceDisclaimer'>Payment plans available</div>

                </div>
            </div>
            
            <div className='priceFeatures'>
                <div>
                    {/* <h3>A customer loyalty solution with everything you need</h3>  */}
                    <ul className='priceBenefits'>
                        {
                            benefits.map((benefit, i) => <li key={i}><i className='material-icons'>done</i>{ benefit }</li>)
                        }
                    </ul>
                    <PrimaryButton className='priceSignUp' style={{ lineHeight: '24px' }} target="_blank" href="https://zfrmz.com/uFexR2s79N4btrSyO7nO" >Apply Now<i style={{ verticalAlign: 'bottom', marginLeft: '1rem' }} className='material-icons'>arrow_forward</i></PrimaryButton>
                </div>
            </div>

        </div>
    )
}

function Session({ title, year, start, end, due = [] }) {

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    return (
        <div className='sessionContainer'>

            <div className='sessionTitle'><div className='sessionYear'>{ year }</div>{ title }</div>

            <div className='sessionDate'>
                { new Intl.DateTimeFormat('en-CA', options).format(new Date(start)) } - { new Intl.DateTimeFormat('en-CA', options).format(new Date(end)) }
            </div>

            <div className='paymentPlans'>

                <h3>Payment Plans</h3>

                <h4>Option 1</h4>
                <ul>
                    <li>$500 deposit</li>
                    <li>$4,450 due { due[0] }</li>
                </ul>

                <h4>Option 2</h4>
                <ul>
                    <li>$500 deposit</li>
                    <li>$2,450 due { due[0] }</li>
                    <li>$2,000 due { due[1] }</li>
                </ul>

            </div>

        </div>
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