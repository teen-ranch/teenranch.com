import React from "react";
import Container from "components/Container";
import Heading from "components/Heading";
import Button from "components/Button";
import Program from "components/Program";
import { Link } from "gatsby";
import { RinkClosed } from "components/RinkClosed";
import { Time } from "components/Time";
import Card, { CardPadding } from "components/Card";
import { Terms_HockeyAndSkating } from "components/Terms";
import { HockeyAges } from "components/HockeyAges";

export default function Default() {
	return (
		<>
			<Heading
				src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/DSC_0513.JPG"
				alt="Smiling kids playing hockey"
				title="Skills & Skating Development"
				subtitle="A six session program designed to get you ready for tryouts or the upcoming season."
				keywords="hockey season preparation, stick handling, power skating"
				metaTitle="Skills & Skating Development"
				metaDescription="A six session program designed to get you ready for tryouts or the upcoming season."
			/>
			<Container type="body">
				{/* <Program
          src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/DSC_0513.JPG"
          name="Skills & Skating Development"
        > */}
				{/* <RinkClosed/> */}
				<p>
					A program focused on the development of forward and backward skating,
					crossovers, tight-turns, individual shooting, stick handling,
					creativity, passing, as well as game situation type skills. For boys
					and girls ages 6-13.
				</p>
				<h3>Ages 6-13</h3>
				<div className="staffTable">
			    <Card>
            <CardPadding>
              <table>
                <thead>
                  <tr>
                    <th>Session Series #1</th>
                    <th>6:00pm - 6:50pm</th>
                    <th>7:00pm - 7:50pm</th>
                    <th>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Tuesdays:</strong><br/>September 15, 2026 - October 20, 2026</td>
                    <td><HockeyAges years="2019, 2020, 2021"/></td>
                    <td><HockeyAges years="2013, 2014, 2015, 2016, 2017, 2018"/></td>
                    <td>$260 +HST (6 sessions)</td>
                  </tr>
                 </tbody>
              </table>
            </CardPadding>
          </Card>
          <Button href="https://register.trmanager.com">Register now</Button>
					
			    <Card>
            <CardPadding>
              <table>
                <thead>
                  <tr>
                    <th>Session Series #2</th>
                    <th>6:00pm - 6:50pm</th>
                    <th>7:00pm - 7:50pm</th>
                    <th>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Tuesdays:</strong><br/>November 10, 2026 - December 15, 2026</td>
                    <td><HockeyAges years="2019, 2020, 2021"/></td>
                    <td><HockeyAges years="2016, 2017, 2018"/></td>
                    <td>$260 +HST (6 sessions)</td>
                  </tr>
                  <tr>
                    <td><strong>Wednesdays:</strong><br/>November 11, 2026 - December 16, 2026</td>
                    <td><HockeyAges years="2013, 2014, 2015, 2016"/></td>
                    <td></td>
                    <td>$260 +HST (6 sessions)</td>
                  </tr>
                 </tbody>
              </table>
            </CardPadding>
          </Card>
          <Button href="https://register.trmanager.com">Register now</Button>
					
								    <Card>
            <CardPadding>
              <table>
                <thead>
                  <tr>
                    <th>Session Series #3</th>
                    <th>6:00pm - 6:50pm</th>
                    <th>7:00pm - 7:50pm</th>
                    <th>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Tuesdays:</strong><br/>January 12, 2027 - February 16, 2027</td>
                    <td><HockeyAges years="2019, 2020, 2021"/></td>
                    <td><HockeyAges years="2016, 2017, 2018"/></td>
                    <td>$260 +HST (6 sessions)</td>
                  </tr>
                  <tr>
                    <td><strong>Wednesdays:</strong><br/>January 13, 2027 - February 17, 2027</td>
                    <td><HockeyAges years="2013, 2014, 2015, 2016"/></td>
                    <td></td>
                    <td>$260 +HST (6 sessions)</td>
                  </tr>
                 </tbody>
              </table>
            </CardPadding>
          </Card>
          <Button href="https://register.trmanager.com">Register now</Button>

					{/* <Card>
						<CardPadding>
							<table>
								<thead>
									<tr>
										<th>Session #2</th>
										<th>6:00pm - 6:50pm</th>
										<th>7:00pm - 7:50pm</th>
										<th>Cost</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<strong>Tuesdays:</strong>
											<br />
											November 12, 2024 - December 17, 2024
										</td>
										<td>2017, 2018, 2019</td>
										<td>2014, 2015, 2016</td>
										<td>$250 +HST</td>
									</tr>
									<tr>
										<td>
											<strong>Wednesdays:</strong>
											<br />
											November 13, 2024 - December 18, 2024
										</td>
										<td>2011, 2012, 2013, 2014</td>
										<td></td>
										<td>$250 +HST</td>
									</tr>
								</tbody>
							</table>
						</CardPadding>
					</Card>
					<Button href="https://register.trmanager.com">Book now</Button> */}

					{/* <Card>
						<CardPadding>
							<table>
								<thead>
									<tr>
										<th>Session #1</th>
										<th>6:00pm - 6:50pm</th>
										<th>7:00pm - 7:50pm</th>
										<th>Cost</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<strong>Tuesdays:</strong>
											<br />
											September 9, 2025 - October 14, 2025
											<br />
										</td>
										<td><HockeyAges years="2017, 2018, 2019, 2020"/></td>
										<td><HockeyAges years="2012, 2013, 2014, 2015, 2016"/></td>
										<td>$260 +HST</td>
									</tr>
								</tbody>
							</table>
						</CardPadding>
					</Card>
					<Button href="https://register.trmanager.com">Book now</Button>
					<Card>
						<CardPadding>
							<table>
								<thead>
									<tr>
										<th>Session #2</th>
										<th>6:00pm - 6:50pm</th>
										<th>7:00pm - 7:50pm</th>
										<th>Cost</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<strong>Tuesdays:</strong>
											<br />
											November 11, 2025 - December 16, 2025
											<br />
										</td>
										<td><HockeyAges years="2018, 2019, 2020"/></td>
										<td><HockeyAges years="2015, 2016, 2017"/></td>
										<td>$260 +HST</td>
									</tr>
									<tr>
										<td>
											<strong>Wednesdays:</strong>
											<br />
											November 12, 2025 - December 17, 2025
											<br />
										</td>
										<td><HockeyAges years="2012, 2013, 2014, 2015"/></td>
										<td></td>
										<td>$260 +HST</td>
									</tr>
								</tbody>
							</table>
						</CardPadding>
					</Card>
					<Button href="https://register.trmanager.com">Book now</Button> */}
					
					{/* <Card>
						<CardPadding>
							<table>
								<thead>
									<tr>
										<th>Winter Session</th>
										<th>6:00pm - 6:50pm</th>
										<th>7:00pm - 7:50pm</th>
										<th>Cost</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<strong>Tuesdays:</strong>
											<br />
											January 13, 2026 - February 17, 2026
											<br />
										</td>
										<td><HockeyAges years="2018, 2019, 2020"/></td>
										<td><HockeyAges years="2015, 2016, 2017"/></td>
										<td>$260 +HST</td>
									</tr>
									<tr>
										<td>
											<strong>Wednesdays:</strong>
											<br />
											January 14, 2026 - February 18, 2026
											<br />
										</td>
										<td><HockeyAges years="2012, 2013, 2014, 2015"/></td>
										<td></td>
										<td>$260 +HST</td>
									</tr>
								</tbody>
							</table>
						</CardPadding>
					</Card> */}
					{/* <Button href="https://register.trmanager.com">Book now</Button> */}
					
					{/* <Card>
						<CardPadding>
							<table>
								<thead>
									<tr>
										<th>Pre-season Session</th>
										<th>6:00pm - 6:50pm</th>
										<th>7:00pm - 7:50pm</th>
										<th>Cost</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<strong>Tuesdays:</strong>
											<br />
											July 21, 2026 - August 25, 2026
											<br />
										</td>
										<td><HockeyAges years="2018, 2019, 2020, 2021"/></td>
										<td><HockeyAges years="2013, 2014, 2015, 2016, 2017"/></td>
										<td>$260 +HST (6 sessions)</td>
									</tr>
									<tr>
										<td>
											<strong>Wednesdays (REP):</strong>
											<br />
											July 22, 2026 - August 26, 2026<br/>(No session August 5)
											<br />
										</td>
										<td><HockeyAges years="2018, 2019, 2020"/></td>
										<td><HockeyAges years="2013, 2014, 2015, 2016, 2017"/></td>
										<td>$220 +HST (5 sessions)</td>
									</tr>
								</tbody>
							</table>
						</CardPadding>
					</Card> */}
					{/* <Button href="https://register.trmanager.com">Book now</Button> */}
					{/* <Card>
						<CardPadding>
							<table>
								<thead>
									<tr>
										<th>Pre-tryout Session</th>
										<th>6:00pm - 6:50pm</th>
										<th>7:00pm - 7:50pm</th>
										<th>Cost</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<strong>Tuesdays:</strong>
											<br />
											March 3, 2026 - April 14, 2026<br/>(No session March 17)
											<br />
										</td>
										<td><HockeyAges years="2018, 2019, 2020"/></td>
										<td><HockeyAges years="2013, 2014, 2015, 2016, 2017"/></td>
										<td>$260 +HST (6 sessions)</td>
									</tr>
									<tr>
										<td>
											<strong>Wednesdays (REP):</strong>
											<br />
											March 4, 2026 - April 15, 2026<br/>(No session March 18)
											<br />
										</td>
										<td><HockeyAges years="2018, 2019, 2020"/></td>
										<td><HockeyAges years="2013, 2014, 2015, 2016, 2017"/></td>
										<td>$260 +HST (6 sessions)</td>
									</tr>
								</tbody>
							</table>
						</CardPadding>
					</Card>
					<Button href="https://register.trmanager.com">Book now</Button> */}

					
					{/* <Card>
						<CardPadding>
							<table>
								<thead>
									<tr>
										<th>Spring Session</th>
										<th>6:00pm - 6:50pm</th>
										<th>7:00pm - 7:50pm</th>
										<th>Cost</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<strong>Thursdays:</strong>
											<br />
											May 14, 2026 - June 18, 2026
											<br />
										</td>
										<td><HockeyAges years="2018, 2019, 2020"/></td>
										<td><HockeyAges years="2013, 2014, 2015, 2016, 2017"/></td>
										<td>$260 +HST (6 sessions)</td>
									</tr>
								</tbody>
							</table>
						</CardPadding>
					</Card>
					<Button href="https://register.trmanager.com">Book now</Button> */}


{/* 
					<Card>
						<CardPadding>
							<table>
								<thead>
									<tr>
										<th>Session #4 (Pre-tryout: REP)</th>
										<th>6:00pm - 6:50pm</th>
										<th>7:00pm - 7:50pm</th>
										<th>Cost</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<strong>Wednesdays:</strong>
											<br />
											March 5, 2025 - April 9, 2025
										</td>
										<td>2014, 2015, 2016</td>
										<td>2011, 2012, 2013</td>
										<td>$240 +HST</td>
									</tr>
								</tbody>
							</table>
						</CardPadding>
					</Card>
					<Button href="https://register.trmanager.com">Book now</Button>
					<Card>
						<CardPadding>
							<table>
								<thead>
									<tr>
										<th>Session #5 (Spring - 6 Sessions)</th>
										<th>6:00pm - 6:50pm</th>
										<th>7:00pm - 7:50pm</th>
										<th>Cost</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<strong>Thursdays:</strong>
											<br />
											May 15, 2025 - June 19, 2025
										</td>
										<td>2017, 2018, 2019</td>
										<td>2012, 2013, 2014, 2015, 2016</td>
										<td>$260 +HST</td>
									</tr>
								</tbody>
							</table>
						</CardPadding>
					</Card>

					<Button href="https://register.trmanager.com">Book now</Button>
					<Card>
						<CardPadding>
							<table>
								<thead>
									<tr>
										<th>Session #6 (Pre-season)</th>
										<th>6:00pm - 6:50pm</th>
										<th>7:00pm - 7:50pm</th>
										<th>Cost</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<strong>Tuesdays:</strong>
											<br />
											July 22, 2025 - August 26, 2025
										</td>
										<td>2016, 2017, 2018, 2019</td>
										<td>2011, 2012, 2013, 2014, 2015</td>
										<td>$260 +HST (6 Sessions)</td>
									</tr>
								</tbody>
							</table>
						</CardPadding>
					</Card>
					<Button href="https://register.trmanager.com">Book now</Button>
					<Card>
						<CardPadding>
							<table>
								<thead>
									<tr>
										<th>Session #7 (Pre-season: REP)</th>
										<th>6:00pm - 6:50pm</th>
										<th>7:00pm - 7:50pm</th>
										<th>Cost</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<strong>Wednesdays:</strong>
											<br />
											July 23, 2025 - August 27, 2025 (No session August 13)
										</td>
										<td>2017, 2018, 2019</td>
										<td>2011, 2012, 2013, 2014, 2015, 2016</td>
										<td>$220 +HST (5 Sessions)</td>
									</tr>
								</tbody>
							</table>
						</CardPadding>
					</Card>
					<Button href="https://register.trmanager.com">Book now</Button> */}
				</div>{" "}
				<Terms_HockeyAndSkating />
				{/* </Program> */}
			</Container>
		</>
	);
}
