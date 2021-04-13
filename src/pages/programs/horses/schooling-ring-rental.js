import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
import Button from 'components/Button'
import Program from 'components/Program'

export default () => {

	return (
        <>
            <Heading
                src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/horse19.jpg'
                alt='Equitation on the flat'
				title='Schooling ring rental'
                subtitle='Outdoor horseback riding arenas for rent'
                keywords='riding arena rental, horseback riding facilities, horseback riding arena caledon ontario'
			/>
            <Container type='body'>

                <Program src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/blu%20flat.jpg' name='Schooling ring rental'>

                    <ul>
                        <li>Hunter or jumper course</li>
                        <li>Pre-booking and pre-payment required*</li>
                        <li>$25.00 +HST per horse per hour of ring time</li>
                    </ul>

                    <Button href="mailto:janet.stevens@teenranch.com?subject=Schooling ring rental">Rent a schooling ring</Button>

                </Program>

            </Container>
        </>
    )
}
