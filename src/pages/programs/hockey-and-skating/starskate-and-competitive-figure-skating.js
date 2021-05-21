import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
import Button from 'components/Button'
import Program from 'components/Program'

export default function Default() {

	return (
        <>
            <Heading
                src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/figureskating.JPG'
                alt='Figure skaters'
				title='STARSKATE & Competitive Figure Skating'
                subtitle='In association with Dufferin-Peel Skating Club'
                keywords='starskate, competitive figure skating, dufferin peel skating club'
                metaTitle='STARSKATE & Competitive Figure Skating'
                metaDescription='In association with Dufferin-Peel Skating Club'
			/>
            <Container type='body'>

                <Program src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/figureskating.JPG' name='Dufferin-peel skating club'>

                    <p>
                        <strong>
                        COVID MESSAGE: Please note that we will be practicing safe social distancing on the ice. Our
                        COVID safety practices message will be sent to skaters & parents before the first class.
                        </strong>
                    </p>

                    <p>
                        Skate Canada STARSkate and Competitive figure skating programs offered in a challenging and supportive team environment.
                    </p>

                    <p>
                        <i>
                        The fee schedule includes ice time only. Please contact Head Coach, Patty Lambertus at <a href='mailto:icex@rogers.com'>icex@rogers.com</a> to arrange a personal training program to achieve your skating goals and budget. Private, semi-private and group lessons will be incorporated into your program by our fully certified Skate Canada Professional Coaching Team. Lessons will be invoiced separately by the Head Coach.
                        </i>
                    </p>
                    <Button href="https://register.trmanager.com">Book now</Button>
                </Program>

                <h3>2020/2021 Semesters</h3>

                <div className="staffTable">
                    <table>
                        <thead>
                            <tr>
                                <th aria-label='Empty cell'></th><th>Fall: Sep. 13 - Nov. 13</th><th>Holiday: Nov. 15 - Jan. 29</th><th>Winter: Jan. 31 - Apr. 2</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>Sundays</strong><br/>
                                    On-ice: 11:00am - 12:50pm<br/>
                                    Off-ice: 1:15 - 2:00pm<br/>
                                </td>
                                <td>
                                    <strong>$250 +HST</strong> (8 sessions)<br/>
                                    No session Oct. 11
                                </td>
                                <td>
                                    <strong>$280 +HST</strong> (9 sessions)<br/>
                                    No session Dec. 20 or Dec. 27
                                </td>
                                <td>
                                    <strong>$280 +HST</strong> (9 sessions)
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Mondays</strong><br/>
                                    On-ice: 4:30pm - 6:00pm
                                </td>
                                <td>
                                    <strong>$200 +HST</strong> (8 sessions)<br/>
                                    No session Oct. 12
                                </td>
                                <td>
                                    <strong>$225 +HST</strong> (9 sessions)<br/>
                                    No session Dec. 21 or Dec. 28
                                </td>
                                <td>
                                    <strong>$200 +HST</strong> (8 sessions)<br/>
                                    No session Feb. 15
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Thursdays</strong><br/>
                                    On-ice: 4:30pm - 6:00pm
                                </td>
                                <td>
                                    <strong>$225 +HST</strong> (9 sessions)
                                </td>
                                <td>
                                    <strong>$225 +HST</strong> (9 sessions)<br/>
                                    No session Dec. 24 or Dec. 31
                                </td>
                                <td>
                                    <strong>$225 +HST</strong> (9 sessions)
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Fridays</strong><br/>
                                    On-ice: 4:30pm - 6:00pm
                                </td>
                                <td>
                                    <strong>$225 +HST</strong> (9 sessions)
                                </td>
                                <td>
                                    <strong>$225 +HST</strong> (9 sessions)<br/>
                                    No session Dec. 25 or Jan. 1
                                </td>
                                <td>
                                    <strong>$200 +HST</strong> (8 sessions)
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>FutureSTARS Enrichment Program</h3>
                <h4>Cost: $1,500 +HST</h4>
                <p>
                    DPSC partnered with Teen Ranch supports the pursuit of excellence in sport & life skills necessary to become an accomplished figure skater!
                </p>
                <p>
                    FutureSTARS members skate 3-4 days per week, take Sunday Fitness Classes, goal-setting activities, take part in performances, competitions & tests and assist with Learn-to-Skate when scheduled.
                </p>
                <p>
                    <i>No discounts can be applied to the FutureSTARS Enrichment Program.</i>
                </p>
                <p>
                    <strong>Please check with Head Coach Patty, before registering for this program to ensure it is the right fit for your skater.</strong>
                </p>


                <h3>
                    Other fees
                </h3>
                
                <ul>
                    <li>Annual DPSC club membership: $50 +HST (covers Skate Canada registration and insurance)</li>
                </ul>

                <h3>Extra Practice Ice Packages</h3>

                <p>
                    The following dates are available for extra practice time.<br/>
                    Ice fee is $30 +HST per session or $100 +HST per package (Holiday & Spring).
                </p>

                <h4>Holiday Practice Ice</h4>
                <div className="staffTable">
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th><th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Monday December 21, 2020
                                </td>
                                <td>4:30pm - 6:00pm</td>
                            </tr>
                            <tr>
                                <td>
                                    Thursday December 24, 2020
                                </td>
                                <td>4:30pm - 6:00pm</td>
                            </tr>
                            <tr>
                                <td>
                                    Monday December 28, 2020
                                </td>
                                <td>4:30pm - 6:00pm</td>
                            </tr>
                            <tr>
                                <td>
                                    Thursday December 31, 2020
                                </td>
                                <td>4:30pm - 6:00pm</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4>Spring Practice Ice</h4>
                <div className="staffTable">
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th><th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Thursday April 8, 2021
                                </td>
                                <td>4:30pm - 6:00pm</td>
                            </tr>
                            <tr>
                                <td>
                                    Friday April 9, 2021
                                </td>
                                <td>4:30pm - 6:00pm</td>
                            </tr>
                            <tr>
                                <td>
                                    Thursday June 24, 2021
                                </td>
                                <td>4:30pm - 6:00pm</td>
                            </tr>
                            <tr>
                                <td>
                                    Friday June 25, 2021
                                </td>
                                <td>4:30pm - 6:00pm</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </Container>
        </>
    )
}
