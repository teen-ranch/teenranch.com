import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
import Button from 'components/Button'
import Program from 'components/Program'

export default () => {

	return (
        <>

            <Heading
                src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/trailRide3.jpg'
                alt='A trail ride through the Headwaters of Caledon'
				title='Trail rides'
                subtitle='Horseback riding through the beautiful Headwaters region in Caledon, Ontario.'
                keywords='trail rides, horseback riding, horse back riding in caledon, horse back riding in orangeville'
			/>
            <Container type='body'>

                <Program src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/trailRide2.jpg' name='Trail rides'>
                    <ul>
                        <li>Maximum 10 people including staff for keeping with government restrictions</li>
                        <li>Ages 10+</li>
                        <li>One-hour in length</li>
                        <li>Walk/trot (if comfortable)</li>
                        <li>Max. participant weight of 250lbs</li>
                        <li>Pre-booking and pre-payment required*</li>
                        <li>$55.00 +HST per person</li>
                    </ul>

                    <Button href="mailto:rachel.stevens@teenranch.com?subject=Trail ride booking inquiry">Book a trail ride</Button>
                </Program>

            </Container>
        </>
    )
}
