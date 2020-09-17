import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
import Button from 'components/Button'
import Program from 'components/Program'

export default () => {

	return (
        <>
            <Heading
                src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/learn%20to%20skate.jpg'
                imageOptions={{rotate:90}}
                alt='Kids having fun skating on the ice'
				title='Learn to skate'
                subtitle='A beginner skating program for all ice sports.'
                keywords='starskate, competitive figure skating, dufferin peel skating club'
                metaTitle='DSTARSKATE & Competitive Figure Skating'
                metaDescription='A beginner skating program for all ice sports.'
			/>
            <Container type='body'>

                <Program src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/learn%20to%20skate.jpg' imageOptions={{rotate:90, h: 420}} name='Learn to skate'>

                    <p>
                        <strong>
                        COVID MESSAGE: Please note that we will be practicing safe social distancing on the ice. Our
                        COVID safety practices message will be sent to skaters & parents before the first class.
                        </strong>
                    </p>

                    <p>
                        <strong>
                            IMPORTANT: Due to COVID we can only accept students that DO NOT require hands-on assistance at this time.
                        </strong>
                    </p>

                    <p>
                    Learn the basics of skating for all ice sports in this fun and fast-paced Teen Ranch Program. Our Learn-to-Skate Programs provide a solid start for participants of all ages and abilities. From the first steps on the ice to forwards, backwards, stops and turns, skaters will improve their balance, control and agility with small group instruction by our fully certified and experienced staff coaches. Progress reports, awards and incentives are included in the program.
                    </p>

                    <p>
                        <i>
                            CSA approved hockey helmets are mandatory.
                        </i>
                    </p>
                    <Button href="https://register.trmanager.com">Book now</Button>
                </Program>

                <h3>Intro to skating</h3>
                <p>This program is for the beginner skater and will focus on the basic skills of balance, forward and backward skating and stopping.</p>

                <h3>Intro to figure skating</h3>
                <p>Skaters that have achieved basic skills and have an interest in figure skating will be introduced to edges, turns, crosscuts, spins and jumps. A figure skate with good fit and support will speed progress. We recommend <a target="_blank" rel="noopener noreferrer" href="https://www.skatingboutique.com/">skatingboutique.com</a> When participants have mastered introductory figure skating skills, they will be invited to join the Dufferin-Peel Skating Club to pursue Skate Canada tests and competitions.</p>

                <h3>Intro to hockey skating</h3>
                <p>
                    Skaters that have achieved basic skating skills and have an interest in hockey will learn edges, turns & crosscuts and focus on developing strong skating skills for their game.
                </p>
                <p>
                    <i>Hockey equipment may be worn.</i>
                </p>

                <h3>Pleasure skating</h3>
                <p>
                    This is the program for skaters that have basic skating skills and want to continue learning for fun and fitness.
                </p>

                <h3>2020/2021 Semesters</h3>

                <div className="staffTable">
                    <table>
                        <thead>
                            <tr>
                                <th aria-label='Empty cell'></th><th>Fall: Sep. 14 - Nov. 13</th><th>Holiday: Nov. 16 - Jan. 29</th><th>Winter: Feb. 1 - Mar. 29</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>Mondays</strong><br/>
                                    On-ice: 6:00pm - 6:50pm
                                </td>
                                <td>
                                    <strong>$250 +HST</strong> (8 sessions)<br/>
                                    No session Oct. 12
                                </td>
                                <td>
                                    <strong>$280 +HST</strong> (9 sessions)<br/>
                                    No session Dec. 21 or Dec. 28
                                </td>
                                <td>
                                    <strong>$250 +HST</strong> (8 sessions)<br/>
                                    No session Feb. 15
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Fridays</strong><br/>
                                    On-ice: 6:00pm - 6:50pm
                                </td>
                                <td>
                                    <strong>$280 +HST</strong> (9 sessions)
                                </td>
                                <td>
                                    <strong>$280 +HST</strong> (9 sessions)<br/>
                                    No session Dec. 25 or Jan. 1
                                </td>
                                <td>
                                    <strong>$250 +HST</strong> (8 sessions)
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>

            </Container>
        </>
    )
}
