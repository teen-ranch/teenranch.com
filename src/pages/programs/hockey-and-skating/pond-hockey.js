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
				title='Pond hockey'
                subtitle='A year-long development program for boys and girls ages 5-17'
                metaTitle='Pond hockey'
                metaDescription='Pond hockey is a year-long development program for boys and girls ages 5-17 years old. There are three levels: Learn to Play, Junior and Senior to accommodate all levels of development.'
			/>
            <Container type='body'>

                <Program src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/DSC_0513.JPG' name='Pond hockey'>

                    <p>
                        Pond Hockey is a year-long development program for boys and girls ages 5-17 years old. There are three levels: Learn to Play, Junior and Senior to accommodate all levels of development. This is not a graduated program, Teen Ranch staff will assess your child and place them in an appropriate level. Don't worry! If your skill level progresses quickly, the coaching staff may move you to the next level. If the level that you are in is too difficult they can accommodate your learning needs in a lower level.
                    </p>
                    <p>
                        <i><strong>Full equipment is required. 4 on 4 games with limited players per team.</strong></i>
                    </p>

                    <h3>When</h3>
                    <p>
                        Saturdays: October 17, 2020 - February 27, 2021
                        <br/><br/>
                        <strong>No sessions on:</strong>
                        <ul>
                            <li>December 26, 2020</li>
                            <li>January 2, 2021</li>
                            <li>January 30, 2021</li>
                            <li>February 13, 2021</li>
                        </ul>
                    </p>

                    <div className="staffTable">
                        <table>
                            <thead>
                                <tr>
                                    <th>Division</th>
                                    <th>Ages</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Learn to play</td>
                                    <td>5-8</td>
                                    <td>12:00pm - 1:00pm</td>
                                </tr>
                                <tr>
                                    <td>Junior</td>
                                    <td>8-11</td>
                                    <td>11:00am - 12:00pm</td>
                                </tr>
                                <tr>
                                    <td>Senior</td>
                                    <td>12-17</td>
                                    <td>10:00am - 11:00am</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3>Cost</h3>
                    <p>$355 +HST/player</p>

                    <Button href="https://register.trmanager.com">Book now</Button>
                </Program>

            </Container>
        </>
    )
}
