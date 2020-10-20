import React from 'react'
import Heading from 'components/Heading'
// import Button from 'components/Button'
import { graphql } from 'gatsby'

import Container from 'components/Container'
import Program from 'components/Program'

export default ({ data }) => {
	
	return (
	
		<>

			<Heading
                // src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/horse19.jpg'
                src={ data.file.childImageSharp.fluid }
				alt='Equitation on the flat'
				title='MASKquerade - A night of October fun!'
				subtitle='Scavenger Hunt, Campfire, Live Music, Outdoor Games, Xtreme Bingo, Mask Contest'
			/>

            <Container type='body'>

                <Program src={ data.youthCampfire.childImageSharp.fluid }>
                    <h3>MASKquerade - A night of October fun!</h3>

                    <p>Please note this is a fun October evening at Teen Ranch, a Christian camp and retreat facility. Please no costumes/horror. The mask contest is for Covid-style p.p.e. masks that are also required when social distancing is not possible.</p>

                    <h4>October 31, 2020 (6:00pm - 9:00pm)</h4>
                    <h4>Ages 12-18</h4>
                    <h4>$25/person or $60/3 friends registering together</h4>

                    <p>
                        Scavenger Hunt, Campfire, Live Music, Outdoor Games, Xtreme Bingo, Mask Contest
                    </p>

                    <p>
                        <strong>Space is limited so register now!</strong>
                    </p>
                    <p>
                        To register, email: <a href="mailto:camp@teenranch.com">camp@teenranch.com</a> with names, ages, allergies and phone
                        number for emergency contact.
                    </p>
                    <ul>
                        <li>Payment will be accepted by debit or credit on site.</li>
                        <li>Please email asap if you need to cancel. We will have a waitlist of youth hoping to attend.</li>
                        <li>Masks required indoors and when physical distancing cannot be maintained outdoors.</li>
                        <li>Parents cannot stay on site during the event due to capacity limits.</li>
                    </ul>
                    <p>
                        In case of inclement weather, the alternate date will be Sunday, November 1, from 6-9pm.
                    </p>
                    <p>
                        A great event for youth groups or individuals!
                    </p>
                </Program>


            </Container>

		</>
	)
}

export const query = graphql`
    query {
        file(relativePath: { eq: "maskquerade/maskquerade.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        youthCampfire: file(relativePath: { eq: "maskquerade/youth campfire.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`