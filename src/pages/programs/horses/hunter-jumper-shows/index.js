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

export default ({ data }) => {
    
    const { images } = data

	return (
        <>
            <Heading
                src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/horse14.jpg'
                alt='Rider and horse jumping at Teen Ranch'
                title='Hunter / Jumper shows'
                subtitle='Professional courses and divisions for first-time competitors to those schooling before their A Shows.'
                keywords='horse shows, schooling horse shows, horse show orangeville ontario, horse show caledon ontario, gta horse show'
                metaTitle='Hunter / Jumper shows'
                metaDescription='Professional courses and divisions for first-time competitors to those schooling before their A Shows.'
			/>
            <Container type='body'>

                <Program src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/hunterJumper16.jpg' name='Hunter/Jumper shows'>
                    <h4>2020 show dates</h4>
                    <Button target="_blank" href="https://show.teenranch.com">View 2020 season standings</Button>
                    <br/>
                    <Button to='/programs/horses/hunter-jumper-shows/show-photos/'>View 2020 show photos</Button>
                </Program>

                <div className="staffTable">
                    <table>
                        <thead>
                            <tr>
                                <th>Show date</th><th>Location</th><th>Entries</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>June 30</td><td>Online Show</td><td>Entries closed</td></tr>
                            <tr><td>July 19</td><td>Online Show</td><td>Entries closed</td></tr>
                            <tr><td>July 26</td><td>Teen Ranch</td><td>Entries closed</td></tr>
                            <tr><td>August 9</td><td>Teen Ranch</td><td>Entries closed
                            {/* <Button target="_blank" href="https://forms.zohopublic.com/teenranch1/form/HorseShowAugust92020/formperma/fix-ZJmfaJ5XxNKyDQcFagC9YvuJqqsHPuSP1L2srn0?referrername=teenranch.com">August 9th entry form</Button>     */}
                            </td></tr>
                            <tr><td>August 23</td><td>Teen Ranch</td><td>Entries closed</td></tr>
                            <tr><td>September 20</td><td>Teen Ranch</td><td>Entries closed</td></tr>
                            <tr><td>September 27</td><td>Teen Ranch</td><td>Entries closed</td></tr>
                            <tr><td>October 25</td><td>Teen Ranch</td><td>
                                <Button target="_blank" href="https://forms.zohopublic.com/teenranch1/form/HorseShowOctober252020/formperma/QqrnByTWIh8wNaC1VVfUg056nWepc2SQFQUWjKW9TZM?referrername=teenranch.com">October 25 entry form</Button>    <br/>
                                <Button target="_blank" href="https://forms.zohopublic.com/teenranch1/form/HorseShowOctober252020CoachsChallenge/formperma/sjIyb_lICjpuYi_B-gkuF1ZYCjShLAALmJ1xyri85Ug?referrername=teenranch.com">Coach's challenge entry form</Button>    
                            </td></tr>
                        </tbody>
                    </table>
                </div>

                {/* https://teenranch.nyc3.cdn.digitaloceanspaces.com/website/pdf/hjClassDescriptions_2020.pdf */}

                <h4>2020 On-site show policy</h4>
                <p>All persons coming on site must arrive with their signed COVID-19 screening questionnaire form in hand.</p>
                <p>Maximum of 10 named persons per trailer.</p>

                <Button target="_blank" href="https://teenranch.nyc3.cdn.digitaloceanspaces.com/website/pdf/hunterJumperCovidScreeningQuestionnaire.pdf">COVID-19 screening questionnaire</Button>
                <br/><Button target="_blank" href="https://forms.zohopublic.com/teenranch1/form/HorseShowTrailerattendanceform/formperma/DEwzNZW9ELI1kqyesFU_NnAgWbLfs0_war7M-wQRXEU">Trailer attendance form</Button>

                <h4>Divisions and classes</h4>

                <div className='hunter-jumper-class-grid'>

                <div>
                    <h5>Ring #1</h5>
                    <ul>
                        <li>Novice Hack Division</li>
                        <li>Intermediate Hunters 2'3"</li>
                        <li>Novice Equitation Division 2'</li>
                        <li>Green Hunter Division 2'</li>
                        <li>Short Stirrup Division 1'6"</li>
                    </ul>
                </div>

                <div>
                    <h5>Ring #3</h5>
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
                    <h5>Ring #4</h5>
                    <ul>
                        <li>Leadline Division</li>
                        <li>Beginner Division</li>
                        <li>Rookie Division</li>
                    </ul>
                </div>

                </div>

                <Button target="_blank" href="https://teenranch.nyc3.cdn.digitaloceanspaces.com/website/pdf/hjClassDescriptions_2020.pdf">View class descriptions</Button>

                <h4>Year-end banquet</h4>
                We are hoping that by September, the Year End Banquet will be a possibility, but if not, we will still be awarding prizes to our winners. 

                <h4>Rules and awards</h4>

                <ol>
                    <li>ASTM approved helmets mandatory for all riders. Proper show attire required.</li>
                    <li>Back number must be worn and visible at all times while on horseback.</li>
                    <li>Please read class descriptions to see rules on cross-entering.</li>
                    <li>Hunter Classes - Flash nose bands and running or german martingales are not permitted. Leg protection may be worn on horse in warm-up and inclement weather only when approved by judge.</li>
                    <li>Champion/Reserve Champions at each show are calculated as follows: 7,5,4,3,2,1.</li>
                    <li>Year-End Awards – Must show in at least 3 shows in the division to qualify. Points are awarded to horses in hunter/jumper divisions, the rider in equitation/lead line divisions and horse/rider combinations for the beginner, rookie, and short stirrup divisions. Points are calculated as follows: 7xentries, 5xentries, 4xentries, 3xentries, 2xentries, 1xentries.</li>
                    <li>Fall of horse or rider = elimination. Rider must exit ring before re-mounting.</li>
                    <li>Teen Ranch accepts no responsibility for damage, theft, loss, accident, death or injury.</li>
                    <li>EQUINE CANADA RULES APPLY. Please check your bit and equipment if questionable.</li>
                </ol>

                <h4>COVID-19 policy</h4>

                <ul>

                    <li>All entries will be made by the Monday before the show. Entry booth will be closed. </li>
                    <li>Please bring a mask for when 2m distance is not possible.</li>
                    <li>A max of 10 people can come with each trailer. For some of the bigger farms, you must set up cohorts of 10 people including a coach and they may not mix with your other cohorts. Guests are asked to leave as soon as possible after they are done showing.</li>
                    <li>A list of all attendees from each barn will be handed in with entries. Only those on the list will be allowed to enter show grounds.</li>
                    <li>Covid Screening Form must be printed out and brought with you on show morning. No admittance without this signed form. Your temperature will be taken upon arrival.</li>
                    <li>Only screened Teen Ranch Staff will be allowed to touch gates or jumps.</li>
                    <li>Only a max of 10 competitors will be allowed in each ring at a time for flat classes.</li>
                    <li>No spectators. Max of one guardian per competitor allowed to attend, plus coach.</li>
                    <li>Max of one assistant/guardian per competitor allowed at gate.</li>
                    <li>Additional gates are being installed at rings to allow for one direction travel for entry and exit from rings.</li>
                    <li>Warm-ups done immediately before their competition round. One rider in the ring at a time. 5 riders allowed in the warm up area at a time.</li>
                    <li>When not warming up or showing, all guests to remain at their trailer (with the exception of going to the food truck).</li>
                    <li>Ribbons will only be ordered at the end of the season for those that request it to comply with contactless showing. Prize money will not be offered in 2020. Prizes will be available for pick up.</li>
                    <li>Wash room will have an attendant to disinfect regularly. Hand sanitizer will be provided as well.</li>
                    <li>Food truck will be in attendance…social distancing must be respected here.</li>

                </ul>

            </Container>

            <Container type='body'>

                <h2>Sponsors</h2>

                <Grid
                    lg={3}
                    xl={5}
                    gap={ false }
                >

                    {
                        images && images.edges && images.edges.map((edge, i) => {

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
        images: allFile(filter: { relativeDirectory: { eq: "hunter-jumper/sponsors" }}) {
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