import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
// import Button from 'components/Button'
import Program from 'components/Program'

export default () => {

	return (
        <>
            <Heading
                src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/familyDay.jpg'
                alt='Family skating on the ice'
				title='Public skating'
                subtitle='An evening out with your friends or family'
                keywords='public skating, going skating with friends'
                metaTitle='Public skating'
                metaDescription='Public skating is back! It’s a great way to spend time with friends and family while keeping fit! Bring your family, friends...and your own skates!'
			/>
            <Container type='body'>

                <Program src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/familyDay.jpg' name='Public skating'>

                    <p>
                        Public skating is back! It’s a great way to spend time with friends and family while keeping fit!
                    </p>
                    <p>
                        Bring your family, friends...and your own skates!
                    </p>

                    <h3>When</h3>

                    <p>
                        Saturdays: September 26, 2020 - April 3, 2021<br/>
                    </p>

                    <h3>Cost</h3>
                    <p>$5 +HST/person</p>
                    <p>$18 +HST/family</p>

                    <p>
                        <i>Bring your own skates</i>
                    </p>

                </Program>

            </Container>
        </>
    )
}
