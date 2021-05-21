import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
// import Button from 'components/Button'
import Program from 'components/Program'

export default function Default() {

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

                <div style={{ textAlign: 'center', color: 'red', fontWeight: 'bold' }}>
                    <p style={{ textTransform: 'uppercase' }}>
                        Public skating is cancelled.
                    </p>
                    <p>
                        Due to ongoing COVID-19 restrictions, public skating has been cancelled. We hope to be able to offer this program again soon!
                    </p>
                </div>

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
