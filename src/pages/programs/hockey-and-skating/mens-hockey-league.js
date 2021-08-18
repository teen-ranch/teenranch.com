import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
import Button from 'components/Button'
import Program from 'components/Program'

export default function Default() {

	return (
        <>
            <Heading
                src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/hockey15.jpg'
                alt="Men's hockey league"
				title="Men's hockey league"
                subtitle='Spring and Fall hockey leagues for men age 35+'
                keywords='hockey season preparation, stick handling, power skating'
                metaTitle='Pre-season skills & skating'
                metaDescription='Develop your stick handling and skating and get ready for next season!'
			/>
            <Container type='body'>

                <Program src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/hockey15.jpg' name="Men's hockey league">

                    <p>
                    Spring and Fall hockey leagues for men age 35+
                    </p>

                    <h3>Fall hockey league</h3>
                    <p>
                        Thursday nights. 6:30pm - 10:30pm game times (10 teams)
                    </p>
                    <ul>
                        <li><strong>When:</strong> Starts Thursday September 23rd, 2021.</li>
                        <li><strong>Cost:</strong> $480 +HST</li>
                    </ul>
                    
                    <Button href="https://register.trmanager.com">Book now</Button>
                </Program>

            </Container>
        </>
    )
}
