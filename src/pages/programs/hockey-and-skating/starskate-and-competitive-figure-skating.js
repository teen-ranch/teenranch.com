import React from "react"
import Container from "components/Container"
import Heading from "components/Heading"
import Button from "components/Button"
import Program from "components/Program"

export default function Default() {
  return (
    <>
      <Heading
        src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/figureskating.JPG"
        alt="Figure skaters"
        title="STARSKATE & Competitive Figure Skating"
        subtitle="In association with Dufferin-Peel Skating Club"
        keywords="starskate, competitive figure skating, dufferin peel skating club"
        metaTitle="STARSKATE & Competitive Figure Skating"
        metaDescription="In association with Dufferin-Peel Skating Club"
      />
      <Container type="body">
        <Program
          src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/figureskating.JPG"
          name="Dufferin-peel skating club"
        >
          <p>
            <strong>
              COVID MESSAGE: Our COVID safety practices message will be sent to
              skaters & parents before the first class.
            </strong>
          </p>

          <p>
            Skate Canada STARSkate and Competitive figure skating programs
            offered in a challenging and supportive team environment.
          </p>

          <p>
            <i>
              The fee schedule includes ice time only. Please contact Head
              Coach, Patty Lambertus at{" "}
              <a href="mailto:icex@rogers.com">icex@rogers.com</a> to arrange a
              personal training program to achieve your skating goals and
              budget. Private, semi-private and group lessons will be
              incorporated into your program by our fully certified Skate Canada
              Professional Coaching Team. Lessons will be invoiced separately by
              the Head Coach.
            </i>
          </p>
          <Button href="https://register.trmanager.com">Book now</Button>
        </Program>

        <h3>2021/2022 Semesters</h3>

        <div className="staffTable">
          <table>
            <thead>
              <tr>
                <th aria-label="Empty cell"></th>
                <th>Fall: Sep. 13 - Nov. 19</th>
                <th>Holiday: Nov. 21 - Mar. 4</th>
                <th>Winter: Mar. 6 - May. 15</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Sundays</strong>
                  <br />
                  On-ice: 10:00am - 11:50am
                  <br />
                  Off-ice: 12:15 - 1:00pm
                  <br />
                </td>
                <td>
                  <strong>$250 +HST</strong> (8 sessions)
                  <br />
                  No session Oct. 10
                </td>
                <td>
                  <strong>$280 +HST</strong> (9 sessions)
                  <br />
                  No session Dec. 19 or Dec. 26
                </td>
                <td>
                  <strong>$280 +HST</strong> (9 sessions)
                  <br />
                  No session Apr. 17, or May 18
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Mondays</strong>
                  <br />
                  On-ice: 4:30pm - 6:00pm
                </td>
                <td>
                  <strong>$225 +HST</strong> (9 sessions)
                  <br />
                  No session Oct. 11
                </td>
                <td>
                  <strong>$200 +HST</strong> (8 sessions)
                  <br />
                  No session Dec. 20, Dec. 27, or Feb. 21
                </td>
                <td>
                  <strong>$200 +HST</strong> (8 sessions)
                  <br />
                  No session Apr. 18, Final session May 2
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Thursdays</strong>
                  <br />
                  On-ice: 4:30pm - 6:00pm
                </td>
                <td>
                  <strong>$250 +HST</strong> (10 sessions)
                </td>
                <td>
                  <strong>$225 +HST</strong> (9 sessions)
                  <br />
                  No session Dec. 23 or Dec. 30
                </td>
                <td>
                  <strong>$225 +HST</strong> (9 sessions)
                  <br />
                  Final session May 5
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Fridays</strong>
                  <br />
                  On-ice: 4:30pm - 6:00pm
                </td>
                <td>
                  <strong>$250 +HST</strong> (10 sessions)
                </td>
                <td>
                  <strong>$225 +HST</strong> (9 sessions)
                  <br />
                  No session Dec. 24 or Dec. 31
                </td>
                <td>
                  <strong>$225 +HST</strong> (9 sessions)
                  <br />
                  No session Apr. 15
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>FutureSTARS Enrichment Program</h3>
        <h4>Cost: $1,500 +HST</h4>
        <p>
          DPSC partnered with Teen Ranch supports the pursuit of excellence in
          sport & life skills necessary to become an accomplished figure skater!
        </p>
        <p>
          FutureSTARS members skate 3-4 days per week, take Sunday Fitness
          Classes, goal-setting activities, take part in performances,
          competitions & tests and assist with Learn-to-Skate when scheduled.
        </p>
        <p>
          <i>
            No discounts can be applied to the FutureSTARS Enrichment Program.
          </i>
        </p>
        <p>
          <strong>
            Please check with Head Coach Patty, before registering for this
            program to ensure it is the right fit for your skater.
          </strong>
        </p>

        <h3>Other fees</h3>

        <ul>
          <li>
            Annual DPSC club membership: $50 +HST (covers Skate Canada
            registration and insurance)
          </li>
        </ul>

        <h3>Terms</h3>

        <ul>
          <li>
            DPSC Club membership fee $50 is paid once per year. This fee covers
            Skate Canada registration and insurance. If home club is not DPSC,
            then the membership fee is $10.
          </li>
          <li>HST will be added to all fees.</li>
          <li>No mandatory fundraising.</li>
        </ul>

        <h3>Registration Discounts</h3>

        <ul>
          <li>
            5% discount for 2 semesters or 2 family members in the figure
            skating program
          </li>
          <li>
            10% discount for 3 semesters or 3 or more family members in the
            figure skating program
          </li>
          <li>
            Figure Skaters that serve as Learn-to-Skate Program Assistants AND
            register for at least 2 sessions per week will receive an additional
            practice day at no additional cost.The lowest price session is free.
          </li>
        </ul>

        <p>
          <i>
            Please contact the office to have a discount applied to your
            account.
          </i>
        </p>

        {/* <h3>Extra Practice Ice Packages</h3>

                <p>
                    The following dates are available for extra practice time.<br/>
                    Ice fee is $30 +HST per session or $100 +HST per package (Holiday & Spring).
                </p> */}

        {/* <h4>Holiday Practice Ice</h4>
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
                </div> */}
      </Container>
    </>
  )
}
