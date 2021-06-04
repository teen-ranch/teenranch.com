import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
import Button from 'components/Button'
import Quote from 'components/Quote'

export default function Default() {

	return (
        <>

            <Heading
                src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/staff2.jpg'
                alt='Teen Ranch staff group photo'
				title='Our staff'
                subtitle='Volunteer and full-time staff positions.'
                keywords='volunteer ministry opportunity, summer camp staff, christian summer camp employment'
			/>
            <Container type='body'>

                <p>Thank you for your interest in applying for a staff position at Teen Ranch. We'd love to hear from you. Please click below to get in touch.</p>

                <Button target="_blank" href="https://zfrmz.com/WG1tZ0FvfMkgD27ur3Xr">Volunteer/Staff Information</Button>

                <p>May God bless and direct your steps,</p>

                <p>- The Teen Ranch Staff</p>

                <Quote cite="Proverbs 3:5, 6">
                 Trust in the Lord with all your heart; do not depend on your own understanding. Seek His will in all you do, and He will show you which path to take.
                </Quote>
                
                {/* <p>Hello!</p>

                <p>So you’re interested in Teen Ranch staff. We’re glad you asked! Teen Ranch is a not-for-profit, Christian summer sports camp and year-round retreat facility. Attracting campers and guests from many backgrounds, we strive to serve them with excellence and thereby earn the right to share our faith in the Lord Jesus Christ with them as God gives opportunity. The task is not an easy one, but one that requires a deep love for the Lord Jesus Christ and an earnest desire to serve Him by serving others.</p>

                <p>Our volunteer/staff family has grown over the years to include people from the ages of 14 to 90. We represent many vocations, come from many backgrounds, and help in many capacities, including:</p>

                <div className="staffTable">
                <table>
                <thead>
                <tr>
                <th>Volunteer/Staff</th><th>Age</th><th>Opportunities Available</th><th># Volunteer Hours</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <th>Weekends</th><td>14 & up</td><td>Year-round</td><td>15 hours/weekend</td>
                </tr>
                <tr>
                <th>Summer</th><td>15 & up</td><td>Summer (1-10 weeks)</td><td>40 hours/week</td>
                </tr>
                <tr>
                <th>Seasonal Staff</th><td>Post-secondary</td><td>Sep. - Dec. and/or Jan. - Jun.</td><td>Approximately 40 hours/week</td>
                </tr>
                <tr>
                <th>Co-op</th><td>High-school</td><td>Sep. - Dec. and/or Jan. - Jun.</td><td>Up to 40 hours/week</td>
                </tr>
                <tr>
                <th>Internship</th><td>Post-secondary</td><td>Year-round</td><td>Up to 40 hours/week</td>
                </tr>
                <tr>
                <th>Full-time</th><td>Post-secondary</td><td>Year-round</td><td>Approximately 40 hours/week</td>
                </tr>
                </tbody>
                </table>
                </div>

                <p>Apart from looking great on a resume, a number of past volunteer staff have received financial awards and recognition based on their accumulated high school volunteer hours, not to mention excellent on-the-job leadership training and character development established during those hours.</p>

                <p>Whether we are privileged to have you as part of the Ranch Staff 'family' or should you be directed elsewhere, our prayer is that you will know the love of God "that surpasses knowledge - that you may be filled to the measure of all the fullness of God."</p>

                <p>- The Teen Ranch Staff Family</p>

                <Button href="https://zfrmz.com/WG1tZ0FvfMkgD27ur3Xr">Click here to get in touch</Button>

                <Button style={{ marginLeft: '2rem' }} href="https://teenranch.nyc3.cdn.digitaloceanspaces.com/website/pdf/StatementOfFaith.pdf">Statement of faith</Button> */}

            </Container>
        </>
    )
}
