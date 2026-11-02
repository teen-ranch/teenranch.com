import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
import Button from 'components/Button'
import Quote from 'components/Quote'
import { graphql } from "gatsby";
import Img from "gatsby-plugin-image";

export default function Default({data}) {

	const {
main		
	} = data;
	return <>

        <Heading
            src={main.childImageSharp.gatsbyImageData}
            alt='Teen Ranch staff group photo'
            title='Staff'
            subtitle='Volunteer and full-time staff positions.'
            keywords='volunteer ministry opportunity, summer camp staff, christian summer camp employment'
        />
        <Container type='body'>

            <p>We deeply appreciate your desire to serve Teen Ranch guests alongside our staff family. Thank you! Our mission is to cultivate a staff family devoted to the Lord Jesus Christ, to one another, and to the salvation and spiritual growth of our staff, campers, and guests.</p>
            
            <p>Yearly, God brings together a diverse team dedicated to a shared mission, who use their unique talents to enhance the guest and camper experience. We welcome international applicants who have a valid work visa or are eligible to obtain one. Below, you'll find more information about the volunteer and staff positions available.</p>
            
            <h2>Weekend Volunteering</h2>
            
            <p>Volunteers provide significant support to God's ministry at Teen Ranch and we are grateful for each one of them.</p>
            
            <p>Weekend volunteers, aged 14 and older, can earn up to 16 volunteer hours per weekend, with hours counting toward their high school diploma. Skilled role models train volunteers and help them develop their skill set and work ethic. Onsite weekend volunteers are provided a bed, food, and a fun experience while fulfilling their volunteer hours.</p>
            
            <h2>Summer Camp</h2>
            
            <p>During the camp season, we offer a variety of overnight camp programs. These include horses, hockey, and adventure camps for ages 8-16, along with a junior day camp for ages 5-7.</p>
            
            <p><strong>Bunk House Leader (16 years of age and up):</strong> These leaders play a key role in the care of each camper entrusted to them - befriending and guiding each one and thereby earning the right to share God's love and the gospel with them in actions and words. While assisting in other camp activities, the bunkhouse leader's primary focus is always the campers.</p>
            
            <p><strong>Junior Day Camp Leader:</strong> This age group is impressionable, full of energy, eager to push limits, and always ready for fun. JDC leaders work with a team of leaders to help create a safe and engaging environment where campers can explore, grow, and experience the wonder of God's creation at Teen Ranch.</p>
            
            <p><strong>Riding Instructor (16 years of age and up):</strong> Serving as barn staff at Teen Ranch offers a unique opportunity to make a lasting impact on campers through our equestrian program. All barn staff serve as either English or Western riding instructors, have strong horsemanship skills, and are able to ride at least one level above what they are assigned to teach. At the same time, they are willing to learn and grow in their skills. Along with a passion for mentoring and developing young riders, they must be able to foster a positive, structured environment while ensuring class safety and discipline.</p>
            
            <p><strong>Kitchen Staff:</strong> Join a dynamic and energetic team responsible for preparing and serving three delicious camp meals each day. Applicants must be at least 15 years old, willing to learn, and able to take initiative in a fast-paced environment. A strong work ethic and teamwork skills are essential. While prior serving experience is a plus, it is not required.</p>
            
            <p><strong>Lifeguard:</strong> Play a vital role in ensuring a safe and enjoyable swimming experience for all campers. To qualify, you must hold a current NLS certification (Waterfront preferred), have waterfront experience or an equivalent qualification based on OCA standards, and possess strong communication skills. This position is often combined with another role to provide a well-rounded experience.</p>
            
            <p><strong>Maintenance:</strong> Be part of a hardworking team dedicated to keeping Teen Ranch's buildings, facilities, and grounds in top condition. Responsibilities include grounds maintenance such as grass cutting, raking, weeding, as well as facilities maintenance. Additional tasks may involve building repairs and construction to ensure a safe and welcoming environment for all.</p>
            
            <h2>Year Round Camp Staff</h2>
            
            <p>Teen Ranch programs run year-round. We offer school group outdoor education, weekend retreat groups, and PA day camps designed to encourage growth through a well-balanced physical, intellectual, social, and spiritual program. Our Camp Staff are crucial to our program and fill many roles. This position requires flexibility as you will be trained and scheduled to work in several areas, including kitchen, housekeeping, maintenance, hosting, and program. This is not an exhaustive list, but camp staff help in any area needed to get the job done. We seek staff who demonstrate leadership, a willingness to learn and grow, and a dedication to strengthening their faith in Christ.</p>
            
            <p><strong>Thank you for your interest in applying for a staff position at Teen Ranch. We are excited about the possibility of having you join our team. Please click on the link below to get in touch and learn more.</strong></p>

            <Button target="_blank" href="https://zfrmz.com/WG1tZ0FvfMkgD27ur3Xr">Volunteer/Staff Information</Button>

            <p>May God bless and direct your steps,</p>

            <p>- The Teen Ranch Staff</p>

            <Quote cite="Proverbs 3:5, 6">
             Trust in the Lord with all your heart; do not depend on your own understanding. Seek His will in all you do, and He will show you which path to take.
            </Quote>
            
            {/* <p>Hello!</p>

            <p>So you're interested in Teen Ranch staff. We're glad you asked! Teen Ranch is a not-for-profit, Christian summer sports camp and year-round retreat facility. Attracting campers and guests from many backgrounds, we strive to serve them with excellence and thereby earn the right to share our faith in the Lord Jesus Christ with them as God gives opportunity. The task is not an easy one, but one that requires a deep love for the Lord Jesus Christ and an earnest desire to serve Him by serving others.</p>

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
    </>;
}

export const query = graphql`{
  main: file(relativePath: {eq: "staff/tr_staffPhoto_2026.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 64, layout: FULL_WIDTH)
    }
  }
}`