import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
import Button from 'components/Button'
import Program from 'components/Program'

export default () => {

	return (
        <>
            <Heading
                src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/DSC_0513.JPG'
                alt='Smiling kids playing hockey'
				title='Skating development'
                subtitle='Forward and backward skating, crossovers, tight-turns and more'
                keywords='power skating, backwards hockey skating, hockey crossovers, skating programs, skating development'
                metaTitle='Skating development'
                metaDescription='Join us for a 6 session program focused on the development of forward and backward skating, crossovers, tight-turns, etc. For boys and girls ages 6-12.'
			/>
            <Container type='body'>

                <Program src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/DSC_0513.JPG' name='Skating development'>

                    <p>
                        Join us for a 6 session program focused on the development of forward and backward skating, crossovers, tight-turns, etc. For boys and girls ages 6-12.
                    </p>
                    <p>
                        <i><strong>This is not a learn to skate program. Full equipment is required.</strong></i>
                    </p>

                    <h3>When</h3>

                    <div className="staffTable">
                        <table>
                            <thead>
                                <tr>
                                    <th>Tuesday evenings</th>
                                    <th>Ages 6-8</th>
                                    <th>Ages 9-13</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>September 15, 2020 - October 20, 2020</td>
                                    <td>6:00pm - 6:50pm</td>
                                    <td>7:00pm - 7:50pm</td>
                                </tr>
                                <tr>
                                    <td>November 3, 2020 - December 8, 2020</td>
                                    <td>6:00pm - 6:50pm</td>
                                    <td>7:00pm - 7:50pm</td>
                                </tr>
                                <tr>
                                    <td>January 12, 2021 - February 16, 2021</td>
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
