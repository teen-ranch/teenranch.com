import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
import Button from 'components/Button'
import Program from 'components/Program'

export default function Default() {

	return (
        <>
            <Heading
                src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/horse5.jpg'
                alt='Smiling kids at horseback riding lesson'
				title='Riding lessons'
                subtitle='Private and semi-private riding lessons for beginner to advanced riders'
                description='Private and semi-private riding lessons in Caledon, Ontario.'
                keywords='riding lessons, horseback riding lessons, riding lessons caledon ontario, horseback riding caledon ontario'
			/>
            <Container type='body'>                   

                <Program src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/horse5.jpg' name='Riding lessons'>

                    <ul>
                        <li>Western & English riding</li>
                        <li>Beginner to advanced</li>
                        <li>Weekdays</li>
                        <li>One-hour in length</li>
                        <li>Max. participant weight of 250lbs</li>
                        <li>Pre-booking and pre-payment required*</li>
                        <li>Private lesson - Ages 5+: $75.00 +HST per person</li>
                        <li>Semi-private lesson - Ages 7+: $60.00 +HST per person</li>
                    </ul>

                    <Button href="mailto:rachel.stevens@teenranch.com?subject=Riding lessons">Book a riding lesson</Button>

                </Program>

            </Container>
        </>
    )
}
