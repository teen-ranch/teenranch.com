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

                    <h3>Group 1: Ages 6-8</h3>
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
                                    <td>Thursday August 27, 2020</td>
                                    <td>1:00pm - 2:00pm</td>
                                </tr>
                                <tr>
                                    <td>Friday August 28, 2020</td>
                                    <td>1:00pm - 2:00pm</td>
                                </tr>
                                <tr>
                                    <td>Tuesday September 1, 2020</td>
                                    <td>1:00pm - 2:00pm</td>
                                </tr>
                                <tr>
                                    <td>Wednesday September 2, 2020</td>
                                    <td>1:00pm - 2:00pm</td>
                                </tr>
                                <tr>
                                    <td>Thursday September 3, 2020</td>
                                    <td>1:00pm - 2:00pm</td>
                                </tr>
                                <tr>
                                    <td>Friday September 4, 2020</td>
                                    <td>1:00pm - 2:00pm</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3>Group 2: Ages 8-13</h3>
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
                                    <td>Thursday August 27, 2020</td>
                                    <td>11:30am - 12:30pm</td>
                                </tr>
                                <tr>
                                    <td>Monday August 31, 2020</td>
                                    <td>11:30am - 12:30pm</td>
                                </tr>
                                <tr>
                                    <td>Tuesday September 1, 2020</td>
                                    <td>11:30am - 12:30pm</td>
                                </tr>
                                <tr>
                                    <td>Wednesday September 2, 2020</td>
                                    <td>2:30pm - 3:30pm</td>
                                </tr>
                                <tr>
                                    <td>Thursday September 3, 2020</td>
                                    <td>11:30am - 12:30pm</td>
                                </tr>
                                <tr>
                                    <td>Friday September 4, 2020</td>
                                    <td>11:30am - 12:30pm</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p>
                        <i><strong>If you have unused credit on your account, please call <a href="tel:5199414501">(519) 941-4501</a> to register.</strong></i>
                    </p>

                    <Button href="https://register.trmanager.com">Book now</Button>
                </Program>

            </Container>
        </>
    )
}
