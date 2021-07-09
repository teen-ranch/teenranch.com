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
				title='Pre-season skills & skating'
                subtitle='Develop your stick handling and skating and get ready for next season!'
                keywords='hockey season preparation, stick handling, power skating'
                metaTitle='Pre-season skills & skating'
                metaDescription='Develop your stick handling and skating and get ready for next season!'
			/>
            <Container type='body'>

                <Program src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/DSC_0513.JPG' name='Pre-Season skills & skating'>

                    <p>
                    A six session program focused on the development of forward and backward skating, crossovers, tight-turns, individual shooting, stick handling, creativity, passing, as well as game situation type skills. For boys and girls ages 7-13.
                    </p>

                    <h3>Ages 7-13</h3>
                    <div className="staffTable">
                        <table>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Wednesday July 28, 2021</td>
                                    <td>6:00pm - 6:50pm</td>
                                </tr>
                                <tr>
                                    <td>Wednesday August 4, 2021</td>
                                    <td>6:00pm - 6:50pm</td>
                                </tr>
                                <tr>
                                    <td>Wednesday August 11, 2021</td>
                                    <td>6:00pm - 6:50pm</td>
                                </tr>
                                <tr>
                                    <td>Wednesday August 18, 2021</td>
                                    <td>6:00pm - 6:50pm</td>
                                </tr>
                                <tr>
                                    <td>Wednesday August 25, 2021</td>
                                    <td>6:00pm - 6:50pm</td>
                                </tr>
                                <tr>
                                    <td>Wednesday September 1, 2021</td>
                                    <td>6:00pm - 6:50pm</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <Button href="https://register.trmanager.com">Book now</Button>
                </Program>

            </Container>
        </>
    )
}
