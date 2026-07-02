import React from "react";
import Container from "components/Container";
import Heading from "components/Heading";
import Button from "components/Button";
import Program from "components/Program";
import { Time } from "components/Time";
import { Terms_HockeyAndSkating } from "components/Terms";

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
				<div style={{
					textAlign:"center",
					border: "1px solid #ccc",
					padding: "2rem",
					marginBottom:"4rem",
					borderRadius:"8px"
				}}>
					<h2>2026 Summer Program: June 29 - August 21, 2026</h2>
					<p>Our flexible Summer Skating program is designed to fit in with
busy summer schedules.</p>
<p><strong>Mondays, Wednesdays, Thursdays, Fridays - <Time>1630</Time> to <Time>1750</Time></strong></p>
					<p>No session on Wednesday July 1st, or Monday August 3rd</p>
					<p><strong>Ice fees:</strong>
						{" "}$45 per session payable at the Ice Corral office prior to each session. Save $5 per session if you pay in advance for 14 or more sessions.
</p>
					<p><strong>Instruction:</strong> Figure Skating session fees include only ice costs. Instruction
must be arranged in advance in advance with Head Coaches.</p>
					<p><strong>For more information:</strong> Please call the office <a href="tel:+15199414501">519-941-4501</a> or email <a href="mailto:dufferinpeelskatingclub@gmail.com">dufferinpeelskatingclub@gmail.com</a></p>
				</div>
				<div
					style={{
						padding: "4rem",
						background: "purple",
						borderRadius: "4px",
						color: "#fff",
						textAlign: "center",
						fontSize: "2rem",
					}}
				>
					<strong>Note:</strong> DPSC Club membership fee $75 is paid once per
					year.
				</div>

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
							The fee schedule includes ice time only. Please contact our DPSC Coaching Team at{" "}
							<a href="mailto:dufferinpeelskatingclub@gmail.com">dufferinpeelskatingclub@gmail.com</a> to arrange a personal training program to achieve your
skating goals and budget. Private, semi-private and group lessons will be incorporated into your
program by our fully certified Skate Canada Professional Coaching Team. <strong>Lessons will be
invoiced separately by the Coaching Team.</strong>
						</i>
					</p>
					<Button href="https://register.trmanager.com">Book now</Button>
				</Program>

				{/* <h3>2025 Summer Program: June 30 - August 27, 2025</h3>
				<p>
					Our flexible Summer Skating program is designed to fit in with busy
					summer schedules.
				</p>
				<p>
					Ice fees payable at the Ice Corral: $45 +HST per session, $40 per
					session if pre-registered and paid in advance for 14+ sessions.
				</p>
				<p>
					Figure Skating session fees include only ice costs. Instruction must
					be arranged in advance with Head Coach Patty{" "}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="mailto:dufferinpeelskatingclub@gmail.com"
					>
						dufferinpeelskatingclub@gmail.com
					</a>
				</p>
				<p>
					For more information: please call the office at{" "}
					<a target="_blank" rel="noopener noreferrer" href="tel:+15199414501">
						519-941-4501
					</a>{" "}
					or email{" "}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="mailto:dufferinpeelskatingclub@gmail.com"
					>
						dufferinpeelskatingclub@gmail.com
					</a>
				</p> */}

				{/* <ul>
					<li>
						Sundays, <Time>1000</Time> - <Time>1120</Time> (<Time>1130</Time> - <Time>1200</Time> Off Ice Jump / Spin)
					</li>
					<li>
						Mondays, <Time>1630</Time> - <Time>1750</Time> 
					</li>
					{/* <li>
						Wednesdays, <Time>1630</Time> - <Time>1750</Time>
					</li>
					<li>
						Thursdays, <Time>1630</Time> - <Time>1750</Time> (<Time>1800</Time> - <Time>1820</Time> Off Ice Jump / Spin)
					</li>
					<li>
						Fridays, <Time>1630</Time> - <Time>1750</Time>
					</li>
				</ul>*/}
				{/* <hr />  */}

				<h3>2025/2026 Semesters</h3>
				<div className="staffTable">
					<table>
						<thead>
							<tr>
								<th aria-label="Empty cell"></th>
								<th>Fall: Sep. 8, 2025 - Nov. 14, 2025</th>
								<th>Holiday: Nov. 16, 2025 - Jan. 23, 2026</th>
								<th>Winter: Jan. 25, 2026 - Apr. 2, 2026</th>
								<th>Spring: Apr. 9, 2026 - June. 12, 2026</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<strong>Sundays</strong>
									<br />
									On-ice: <Time>1000</Time> - <Time>1120</Time>
									<br />
									Off-ice: <Time>1130</Time> - <Time>1200</Time>
									<br />
								</td>
								<td>
									<strong>$250 +HST</strong> (8 sessions)
									<br />
									No session Oct. 12
								</td>
								<td>
									<strong>$250 +HST</strong> (8 sessions)
									<br />
									No session Dec. 21, Dec. 28
								</td>
								<td>
									<strong>$310 +HST</strong> (10 sessions)
								</td>
								<td>
									<strong>$248 +HST</strong> (8 sessions)
									<br />
									No session May 17 
								</td>
							</tr>
							<tr>
								<td>
									<strong>Mondays</strong>
									<br />
									On-ice: <Time>1630</Time> - <Time>1750</Time>
								</td>
								<td>
									<strong>$280 +HST</strong> (9 sessions)
									<br />
									No session Oct. 13
								</td>
								<td>
									<strong>$250 +HST</strong> (8 sessions)
									<br />
									No session Dec. 22, Dec. 29
								</td>
								<td>
									<strong>$280 +HST</strong> (9 sessions)
									<br />
									No session Feb. 16
								</td>
								<td>
									<strong>$248 +HST</strong> (8 sessions)
									<br />
									No session May 18 
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
								<td>
									<strong>$310 +HST</strong> (10 sessions)
								</td>
								<td>
									<strong>$250 +HST</strong> (8 sessions)
									<br />
									No session Dec. 25, Jan. 1
								</td>
								<td>
									<strong>$310 +HST</strong> (10 sessions)
								</td>
								<td>
									<strong>$310 +HST</strong> (10 sessions)
								</td>
							</tr>
							<tr>
								<td>
									<strong>Fridays</strong>
									<br />
									On-ice: <Time>1630</Time> - <Time>1750</Time>
								</td>
								<td>
									<strong>$280 +HST</strong> (9 sessions)
									<br/>No session Oct. 31
								</td>
								<td>
									<strong>$250 +HST</strong> (8 sessions)
									<br />
									No session Dec. 26, Jan. 2
								</td>
								<td>
									<strong>$280 +HST</strong> (9 sessions)
								</td>
								<td>
									<strong>$310 +HST</strong> (10 sessions)
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
				</h3>
				<h4>Fall/Holiday/Winter - Cost: $1,600 +HST</h4>
				<h4>Spring - Cost: $600 +HST (36 sessions)</h4>
				<p>
					DPSC partnered with Teen Ranch supports the pursuit of excellence in sport & the life skills necessary to
become an accomplished figure skater!
				</p>
				<p>
					FutureSTARS participants must skate 3-4 days per week and are encouraged to take off-ice technique
classes, goal-setting activities, take part in performances, competitions, tests and be positive role models.
				</p>
				<p>
					<i>
						No discounts can be applied to the FutureSTARS Enrichment Program.
					</i>
				</p>
				<p>
					<strong>
						Please check with the Coaching Team before registering for this program to ensure it is the right fit
for your skater <a target="_blank"
							rel="noopener noreferrer"
href="mailto:dufferinpeelskatingclub@gmail.com">dufferinpeelskatingclub@gmail.com</a>
					</strong>
				</p>

				<h3>Other fees</h3>

				<ul>
					<li>
						Annual DPSC club membership: $75 +HST (covers Skate Canada
						registration and insurance)
					</li>
					<li>
						Figure Skating Session fees include{" "}
						<span style={{ textDecoration: "underline" }}>only</span> ice costs.
						Instruction must be arranged with the DPSC Coaching Team{" "}
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="mailto:dufferinpeelskatingclub@gmail.com"
						>
							dufferinpeelskatingclub@gmail.com
						</a>
					</li>
				</ul>

				<h3>Terms</h3>

				<ul>
					<li>
						<strong>
							DPSC Club membership fee $75 is paid once per year. This fee
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
						figure skating program, when booked all at one time.
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
				<Terms_HockeyAndSkating />
			</Container>
		</>
	);
}
