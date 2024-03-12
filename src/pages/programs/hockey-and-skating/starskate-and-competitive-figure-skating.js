import React from "react"
import Container from "components/Container"
import Heading from "components/Heading"
import Button from "components/Button"
import Program from "components/Program"
import { Time } from "components/Time"

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
          {/* <p>
            <strong>
              COVID MESSAGE: Our COVID safety practices message will be sent to
              skaters & parents before the first class.
            </strong>
          </p> */}

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

        <h3>2023/2024 Semesters</h3>

        <div className="staffTable">
          <table>
            <thead>
              <tr>
                <th aria-label="Empty cell"></th>
                {/*<th>Fall: Sep. 10, 2023 - Nov. 17, 2023</th>*/}
                {/*<th>Holiday: Nov. 19, 2023 - Feb. 2, 2024</th>*/}
                <th>Winter: Feb. 4, 2024 - Apr. 12, 2024</th>
                <th>Spring: Apr. 14, 2024 - May. 24, 2024</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Sundays</strong>
                  <br />
                  On-ice: <Time>1000</Time> - <Time>1150</Time>
                  <br />
                  Off-ice: <Time>1130</Time> - <Time>1230</Time>
                  <br />
                </td>
                {/*<td>
                  <strong>$280 +HST</strong> (9 sessions)
                  <br />
                  No session Oct. 8
                </td>*/}
                {/*<td>
                  <strong>$280 +HST</strong> (9 sessions)
                  <br />
                  No session Dec. 24, Dec. 31
                </td>
                */}
                <td>
                  <strong>$280 +HST</strong> (9 sessions)
                  <br />
                  No session Mar. 31
                </td>
                <td>
                  <strong>$246 +HST</strong> (6 sessions)
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Mondays</strong>
                  <br />
                  On-ice: <Time>1630</Time> - <Time>1750</Time>
                </td>
                {/*<td>
                  <strong>$280 +HST</strong> (9 sessions)
                  <br />
                  No session Oct. 9
                </td>*/}
                {/*<td>
                  <strong>$280 +HST</strong> (9 sessions)
                  <br />
                  No session Dec. 25, Jan. 1
                </td>*/}
                <td>
                  <strong>$250 +HST</strong> (9 sessions)
                  <br />
                  No session Feb. 19, Apr. 1
                </td>
                <td>
                  <strong>$186 +HST</strong> (6 sessions)
                  <br />
                  No session May 22
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Thursdays</strong>
                  <br />
                  On-ice: <Time>1630</Time> - <Time>1750</Time>
                  <br />
                  Off-ice: <Time>1800</Time> - <Time>1830</Time>
                </td>
                {/*<td>
                  <strong>$310 +HST</strong> (10 sessions)
                </td>*/}
                {/*<td>
                  <strong>$280 +HST</strong> (9 sessions)
                  <br />
                  No session Dec. 28, Jan. 4
                </td>*/}
                <td>
                  <strong>$310 +HST</strong> (10 sessions)
                </td>
                <td>
                  <strong>$186 +HST</strong> (6 sessions)
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Fridays</strong>
                  <br />
                  On-ice: <Time>1630</Time> - <Time>1750</Time>
                </td>
                {/*<td>
                  <strong>$310 +HST</strong> (10 sessions)
                </td>*/}
                {/*<td>
                  <strong>$280 +HST</strong> (9 sessions)
                  <br />
                  No session Dec. 29, Jan. 5
                </td>*/}
                <td>
                  <strong>$280 +HST</strong> (9 sessions)
                </td>
                <td>
                  <strong>$186 +HST</strong> (6 sessions)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <br />
        <br />
        <br />
        <h3>2022 Spring Semester</h3> */}

        {/* <div className="staffTable">
          <table>
            <thead>
              <tr>
                <th aria-label="Empty cell"></th>
                <th>Spring: May 18 - June 24 </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Sundays</strong>
                  <br />
                  On-ice: 11:00am - 12:50pm
                  <br />
                  Off-ice: 1:00pm - 2:00pm
                  <br />
                </td>
                <td>
                  <strong>$124 +HST</strong> (4 sessions) May 29, June 5, 12, 19
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Wednesdays</strong>
                  <br />
                  On-ice: 4:30pm - 5:50pm
                </td>
                <td>
                  <strong>$150 +HST</strong> (6 sessions) May 18, 25, June 1, 8,
                  15, 22
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Thursdays</strong>
                  <br />
                  On-ice: 4:30pm - 5:50pm
                </td>
                <td>
                  <strong>$150 +HST</strong> (6 sessions) May 19, 26, June 2, 9,
                  16, 23
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Fridays</strong>
                  <br />
                  On-ice: 4:30pm - 5:50pm
                </td>
                <td>
                  <strong>$150 +HST</strong> (6 sessions) May 20, 27, June 3,
                  10, 17, 24
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}

        <h3>
          FutureSTARS Enrichment Program{" "}
          <span
            style={{ fontWeight: "normal", fontSize: "11pt", display: "block" }}
          >
            (FutureSTARS members MUST skate at least 3 days per week and should
            participate in off-ice classes, performances, competitions & tests
            under direction of the Head Coach.)
          </span>
        </h3>
        {/*<h4>Fall/Holiday/Winter - Cost: $1,600 +HST</h4>*/}
        <h4>Spring - Cost: $500 +HST (24 sessions)</h4>
        <p>
          DPSC partnered with Teen Ranch supports the pursuit of excellence in
          sport & life skills necessary to become an accomplished figure skater!
        </p>
        <p>
          FutureSTARS participants must skate 3-4 days per week, take off-ice
          technique classes, goal-setting activities, take part in performances,
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
            Annual DPSC club membership: $60 +HST (covers Skate Canada
            registration and insurance)
          </li>
        </ul>

        <h3>Terms</h3>

        <ul>
          <li>
            <strong>
              DPSC Club membership fee $60 is paid once per year. This fee
              covers Skate Canada registration and insurance.
            </strong>{" "}
            If home club is not DPSC, then the membership fee is $10.
          </li>
          <li>HST will be added to all fees.</li>
          <li>No mandatory fundraising.</li>
        </ul>

        <h3>Registration Discounts</h3>

        <ul>
          {/* <li>
            5% discount for 2 semesters or 2 family members in the figure
            skating program
          </li> */}
          <li>
            10% discount for 3 semesters or 3 or more family members in the
            figure skating program
          </li>
          {/* <li>
            Figure Skaters that serve as Learn-to-Skate Program Assistants AND
            register for at least 2 sessions per week will receive an additional
            practice day at no additional cost.The lowest price session is free.
          </li> */}
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
