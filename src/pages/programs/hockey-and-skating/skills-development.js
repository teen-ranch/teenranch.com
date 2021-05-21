import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
import Button from 'components/Button'
import Program from 'components/Program'

export default function Default() {

	return (
        <>
            <Heading
                src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/DSC_0513.JPG'
                alt='Smiling kids playing hockey'
				title='Skills development'
                subtitle='Shooting, stick-handling, passing and game-situation skills'
                keywords='stick handling, passing skills, game-situation skills, skating development'
                metaTitle='Skills development'
                metaDescription='Join us for a 6 session program focused on the development of individual shooting, stick handling, creativity and passing skills, as well as game situation type skills. For boys and girls ages 6-12.'
			/>
            <Container type='body'>

                <Program src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/DSC_0513.JPG' name='Skills development'>

                    <p>
                        Join us for a 6 session program focused on the development of individual shooting, stick handling, creativity and passing skills, as well as game situation type skills. For boys and girls ages 6-12.
                    </p>
                    <p>
                        <i><strong>Full equipment is required.</strong></i>
                    </p>

                    <h3>When</h3>

                    <div className="staffTable">
                        <table>
                            <thead>
                                <tr>
                                    <th>Wednesday evenings</th>
                                    <th>Ages 6-8</th>
                                    <th>Ages 9-13</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>September 16, 2020 - October 21, 2020</td>
                                    <td>6:00pm - 6:50pm</td>
                                    <td>7:00pm - 7:50pm</td>
                                </tr>
                                <tr>
                                    <td>November 4, 2020 - December 9, 2020</td>
                                    <td>6:00pm - 6:50pm</td>
                                    <td>7:00pm - 7:50pm</td>
                                </tr>
                                <tr>
                                    <td>January 13, 2021 - February 17, 2021</td>
                                    <td>6:00pm - 6:50pm</td>
                                    <td>7:00pm - 7:50pm</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3>Cost</h3>
                    <p>$220 +HST/player</p>

                    <Button href="https://register.trmanager.com">Book now</Button>
                </Program>

            </Container>
        </>
    )
}
