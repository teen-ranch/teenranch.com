import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
import Button from 'components/Button'
import Program from 'components/Program'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Grid from 'components/Grid'
import Sponsor from 'components/Sponsor'

import '../horses.scss'

export default function Default({ data }) {
    
    const { banner, image1, image2, ringSponsors, divisionSponsors, prizeSponsors} = data

	return (
        <>
            <Heading
                src={ banner.childImageSharp.fluid }
                alt='Rider and horse jumping at Teen Ranch'
                title='Hunter / Jumper shows'
                subtitle='Professional courses and divisions for first-time competitors to those schooling before their A Shows.'
                keywords='horse shows, schooling horse shows, horse show orangeville ontario, horse show caledon ontario, gta horse show'
                metaTitle='Hunter / Jumper shows'
                metaDescription='Professional courses and divisions for first-time competitors to those schooling before their A Shows.'
			/>
            <Container type='body'>

                <Program src={ image2.childImageSharp.fluid } name='Hunter/Jumper shows'>

                    <h2>Forms required for entry:</h2>
                    <ol>
                        <li>Entry form (see below)</li>
                        <li>Cohort list</li>
                        <li>Signed COVID-19 screening questionaire (bring with you to hand in upon arrival)</li>
                    </ol>

                    <p>All persons coming on site must arrive with their signed COVID-19 screening questionnaire form in hand.</p>
                    <p>Maximum of 10 named persons per trailer.</p>

                    <Button target="_blank" href="https://forms.zohopublic.com/teenranch1/form/HorseShowTrailerattendanceform/formperma/DEwzNZW9ELI1kqyesFU_NnAgWbLfs0_war7M-wQRXEU">Cohort list</Button><br/>
                    <Button target="_blank" href="https://teenranch.nyc3.cdn.digitaloceanspaces.com/website/pdf/hunterJumperCovidScreeningQuestionnaire.pdf">COVID-19 screening questionnaire</Button>

                    <h3>Links</h3>
                    {/* <Button target="_blank" href="https://show.teenranch.com">View 2020 season standings</Button>  */}
                    <Button to='/programs/horses/hunter-jumper-shows/show-photos/'>View 2020 show photos</Button><br/>
                    <Button target="_blank" href='https://teenranch.nyc3.cdn.digitaloceanspaces.com/website/pdf/hunterJumperShowProgram_2021.pdf'>2021 Show Program</Button>
                </Program>

                <div className="staffTable">
                    <table>
                        <thead>
                            <tr>
                                <th>Show date</th><th>Location</th><th>Entries</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>June 6</td><td>Teen Ranch</td><td>
                                {/* <Button target="_blank" href="https://forms.zohopublic.com/teenranch1/form/HorseShowJune62021/formperma/nRrU9I5hIyQphoKEm5zZ8pZ9LZdhiCBq3RfVKJ9Qh-o?referrername=teenranch.com">June 6th entry form</Button>     */}
                                Rescheduled to September 12th, 2021
                            </td></tr>
                            <tr><td>June 20</td><td>Teen Ranch</td><td>
                                <Button target="_blank" href="https://forms.zohopublic.com/teenranch1/form/HorseShowJune202021/formperma/UCncvQ2Mok0K75neDv4i3iS1G1XMqrLJxkDNatxGfUo?referrername=teenranch.com">June 20th entry form</Button>
                            </td></tr>
                            <tr><td>July 11</td><td>Teen Ranch</td><td>
                                <Button target="_blank" href="https://forms.zohopublic.com/teenranch1/form/HorseShowJuly112021/formperma/YYwVhN71DjY5WUHbUbCT-S9asqYYoJPnhk5HibQGK6k?referrername=teenranch.com">July 11th entry form</Button>    
                            </td></tr>
                            <tr><td>July 25</td><td>Teen Ranch</td><td>
                                <Button target="_blank" href="https://forms.zohopublic.com/teenranch1/form/HorseShowJuly252021/formperma/tWoYEE8ZzuPz_RH8n-GIubpmJp1cc2Vkn-Qhl7Zo5gk?referrername=teenranch.com">July 25th entry form</Button>
                            </td></tr>
                            <tr><td>August 15</td><td>Teen Ranch</td><td>
                                <Button target="_blank" href="https://forms.zohopublic.com/teenranch1/form/HorseShowAugust152021/formperma/HKHOXRDk9cN7otiADRTvLTSNxHsiJDGSwAXgMMY5_pQ?referrername=teenranch.com">August 15th entry form</Button>
                            </td></tr>
                            <tr><td>August 29</td><td>Teen Ranch</td><td>
                                <Button target="_blank" href="https://forms.zohopublic.com/teenranch1/form/HorseShowAugust292021/formperma/tSrE90jl2okae4IdxcBDClDvINE7V-AGzUY_20zeoGM?referrername=teenranch.com">August 29th entry form</Button>
                            </td></tr>
                            <tr><td>September 12</td><td>Teen Ranch</td><td>
                                <Button target="_blank" href="https://forms.zohopublic.com/teenranch1/form/HorseShowSeptember122021/formperma/Nkd8ZIEK10jc15Va1lTtdLHOHVuQCVIwZ0xKG1Wss9c?referrername=teenranch.com">September 12th entry form</Button>    
                            </td></tr>
                        </tbody>
                    </table>
                </div>

                {/* https://teenranch.nyc3.cdn.digitaloceanspaces.com/website/pdf/hjClassDescriptions_2020.pdf */}
                <h4>Divisions and classes</h4>

                <div className='hunter-jumper-class-grid'>

                <div>
                    <h5>Ring #1 (9:00 am start)</h5>
                    <ul>
                        <li>Novice Hack Division</li>
                        <li>Intermediate Hunters 2'3"</li>
                        <li>Novice Equitation Division 2'</li>
                        <li>Green Hunter Division 2'</li>
                        <li>Short Stirrup Division 1'6"</li>
                    </ul>
                </div>

                <div>
                    <h5>Ring #3 (9:00 am start)</h5>
                    <ul>
                        <li>Open Hack Division</li>
                        <li>2' Hunter Division</li>
                        <li>2'3" Hunter Division</li>
                        <li>Open Equitation Division 2'3"</li>
                        <li>High/Low Hunter Division 2'9"</li>
                        <li>Jumper Division (.75m)</li>
                        <li>Jumper Division (.9m)</li>
                    </ul>
                </div>

                <div>
                    <h5>Ring #4 (8:30 am start)</h5>
                    <ul>
                        <li>Leadline Division</li>
                        <li>Beginner Division</li>
                        <li>Rookie Division</li>
                    </ul>
                </div>

                </div>

                <Button target="_blank" href="https://teenranch.nyc3.cdn.digitaloceanspaces.com/website/pdf/hjClassDescriptions_2021_V2.pdf">View class descriptions</Button>

                <h4>Year-end celebration</h4>
                TBD

                <h4>Show rules</h4>

                <ol>
                    <li>ASTM approved helmets mandatory for all riders. Proper show attire required.</li>
                    <li>Back number must be worn and visible at all times while on horseback.</li>
                    <li>Covid Protocols in place.  See Covid Policy on website for details.</li>
                    <li>Please read class descriptions to see rules on cross-entering.</li>
                    <li><strong>Entries</strong> and <strong>Trailer Attendance Forms</strong> MUST be submitted on the Monday before each show.</li>
                    <li><strong>Hunter Classes</strong> - Flash nose bands and running or german martingales are not permitted. Leg protection may be worn on horse in warm-up and inclement weather only when approved by judge.</li>
                    <li><strong>Champion/Reserve Champions</strong> at each show are calculated as follows: 7,5,4,3,2,1.  Champion Tie-Breakers – In the Leadline, Short Stirrup, Beginner & Rookie Division, most points in Equitation wins.  In other divisions, most points over fences wins.  After that or in hack divisions, judge may flip a coin or do conformation line up for the winner.</li>
                    <li><strong>Year-End Awards</strong> – Must show in at least 3 shows in the division to qualify. Points are awarded to horses in hunter/jumper divisions, the rider in equitation/lead line divisions and horse/rider combinations for the beginner, rookie, and short stirrup divisions. Points are calculated as follows: 7xentries, 5xentries, 4xentries, 3xentries, 2xentries, 1xentries.</li>
                    <li><strong>Fall of horse or rider</strong> = elimination. Rider must exit ring before re-mounting.</li>
                    <li><strong>Pony Riders</strong> – we don’t set age limits to show ponies, as we believe it’s better for ponies to get this time in training so they are safe for younger riders later.  </li>
                    <li>For all other concerns, EQUINE CANADA RULES APPLY. Please check your bit and equipment if questionable. </li>
                    <li>Teen Ranch accepts no responsibility for damage, theft, loss, accident, death or injury.</li>

                </ol>

                <Program src={ image1.childImageSharp.fluid } name='Hunter/Jumper shows'>

                    <h4>COVID-19 policy</h4>

                    <ol>
                        <li>NO GENERAL PUBLIC ADMISSION.  There will be an Access List referenced upon arrival. Access to the show grounds will be limited to the following: Competitors, Grooms, Trainers/Coaches, One Parent/Adult for competitors. Trainers/Coaches must provide a full COHORT LIST on the Monday before each show.</li>
                        <li>Any person entering the show grounds will have their temperature checked upon arrival. Anyone with a temperature above 100.3F/37.9C  or who exhibits COVID-19 symptoms will not be permitted to enter the show grounds. </li>
                        <li>Masks must be worn outside when you cannot be 2 meters (6’) from others.  All competitors and authorized support personnel must bring their own mask.  </li>
                        <li>Each person entering the property must hand in a signed Teen Ranch Covid 19 Screening Questionnaire upon arrival.  </li>
                        <li>If you are not on the Access List and/or have not submitted the waivers, you will not be permitted to enter the show grounds. </li>
                        <li>Restrooms will be disinfected multiple times during the competition.  Hand Sanitizer will be available at restrooms and at warm up areas.  Do not adjust/touch jumps without disinfecting first.</li>
                        {/* <li>Ribbons will be awarded.  There will be a self-serve ribbon table at the ingate – please social distance.</li> */}
                        <li>Online entries available through the website only.  NO POST ENTRIES.  Entry and payment deadline is the Monday before each show.  Entries will be limited if necessary.</li>
                        <li>Back numbers will be handed out to trainers at the entrance of the showgrounds.</li>
                        <li>ADDS/SCRATCHES – Competitors will be allowed to scratch or add, minus a office fee ($25+tax) before the start of the division that they have signed up for.</li>
                        <li>Entries will be posted on the Teen Ranch Hunter/Jumper Shows Facebook page on Friday.  Please arrive close to your competition time & depart as soon as possible.</li>
                        <li>Anyone who does not abide by the safety protocols will be removed from the show grounds.</li>
                        <li>A max of 10 people can come with each trailer. For some of the bigger farms, you must set up cohorts of 10 people including a coach and they may not mix with your other cohorts. Guests are asked to leave as soon as possible after they are done showing.</li>
                        <li>Only a max of 10 competitors will be allowed in each ring at a time for flat classes.</li>
                        <li>Max of one assistant/guardian per competitor allowed at gate. </li>
                        <li>When entering and exiting the ring, please follow arrows and use appropriate gate to keep social distancing.  </li>
                        <li>Warm-ups done immediately before their competition round. One rider in the ring at a time. 5 riders allowed in the warm up area at a time.  When not warming up or showing, all guests to remain at their trailer (with the exception of going to the food truck).</li>
                        <li>Food truck will be in attendance…social distancing must be respected here.</li>
                    </ol>

                    <p>We are looking forward to a safe and fun competition!</p>

                </Program>

            </Container>

            <Container type='body'>

                <h2>Sponsors</h2>

                <p>This is our 36th consecutive season offering these amazing shows to our extended equine community, and it’s only been possible because of the generosity of people like you!</p>

                <Button target="_blank" href="https://forms.zohopublic.com/teenranch1/form/HorseShowSponsorshipPackage/formperma/F0i3DDm5ylIGPkS4c7JDnMr8oB1UxmOqi-DVzhjNkuM">I want to sponsor</Button>

                <h3>Ring sponsors</h3>
                <Grid
                    lg={1}
                    xl={2}
                    gap={ false }
                >
                    {
                        ringSponsors && ringSponsors.edges && ringSponsors.edges.map((edge, i) => {

                            return <Sponsor key={i}><Img fluid={ edge.node.childImageSharp.fluid } alt={ edge.node.name } /></Sponsor>

                        })
                    }
                </Grid>

                <h3>Division sponsors</h3>
                <Grid
                    lg={2}
                    xl={4}
                    gap={ false }
                >
                    {
                        divisionSponsors && divisionSponsors.edges && divisionSponsors.edges.map((edge, i) => {

                            return <Sponsor key={i}><Img fluid={ edge.node.childImageSharp.fluid } alt={ edge.node.name } /></Sponsor>

                        })
                    }
                </Grid>

                <h3>Prize sponsors</h3>
                <Grid
                    lg={3}
                    xl={5}
                    gap={ false }
                >
                    {
                        prizeSponsors && prizeSponsors.edges && prizeSponsors.edges.map((edge, i) => {

                            return <Sponsor key={i}><Img fluid={ edge.node.childImageSharp.fluid } alt={ edge.node.name } /></Sponsor>

                        })
                    }
                </Grid>

            </Container>
        </>
    )
}

export const query = graphql`
    query {

        banner: file(relativePath: { eq: "hunter-jumper/Jumper grey J_R.jpg" }) {
            childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
        }

        image1: file(relativePath: { eq: "hunter-jumper/CUTIE PATUTIE.jpg" }) {
            childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
        }

        image2: file(relativePath: { eq: "hunter-jumper/fiji close up 2020.jpg" }) {
            childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
        }

        ringSponsors: allFile(filter: { relativeDirectory: { eq: "hunter-jumper/sponsors2021/ringSponsors" }}) {
            edges {
            node {
                name
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            }
        }

        divisionSponsors: allFile(filter: { relativeDirectory: { eq: "hunter-jumper/sponsors2021/divisionSponsors" }}) {
            edges {
            node {
                name
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            }
        }

        prizeSponsors: allFile(filter: { relativeDirectory: { eq: "hunter-jumper/sponsors2021/prizeSponsors" }}) {
            edges {
            node {
                name
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            }
        }
    }
`
