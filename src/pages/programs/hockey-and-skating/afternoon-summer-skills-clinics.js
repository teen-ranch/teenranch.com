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

export default function Default() {
	return (
		<>
			<Heading
				src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/DSC_0513.JPG"
				alt="Smiling kids playing hockey"
				title="NEW!! Afternoon Summer Skills Clinics"
				subtitle="Stay sharp through this afternoon program focused on the development of skating, shooting, stick handling, creativity, passing, as well as game situation type skills."
				keywords="hockey season preparation, stick handling, power skating"
				metaTitle="NEW!! Afternoon Summer Skills Clinics"
				metaDescription="Stay sharp through this afternoon program focused on the development of skating, shooting, stick handling, creativity, passing, as well as game situation type skills."
			/>
			<Container type="body">
				{/* <Program
          src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/DSC_0513.JPG"
          name="Skills & Skating Development"
        > */}
				{/* <RinkClosed/> */}
				<p>
					Stay sharp through this afternoon program focused on the development
					of skating, shooting, stick handling, creativity, passing, as well as
					game situation type skills.
				</p>
				<div className="staffTable">
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
                  <td><strong>Tuesdays:</strong><br/>September 10, 2024 - October 15, 2024</td>
                  <td>2016, 2017, 2018, 2019</td>
                  <td>2011, 2012, 2013, 2014, 2015</td>
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

					<Card>
						<CardPadding>
							<table>
								<thead>
									<tr>
										<th>Session #1</th>
										<th>
											<Time>1430</Time> - <Time>1530</Time>
										</th>
										<th>Cost</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>July 21 - 25, 2025</td>
										<td>Ages 5-7 (2017, 2018, 2019)</td>
										<td>
											$135 +HST (Individual days available for $40, HST
											included)
										</td>
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
										<th>
											<Time>1430</Time> - <Time>1530</Time>
										</th>
										<th>Cost</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>August 5 - 8, 2025</td>
										<td>Ages 8-11 (2013, 2014, 2015, 2016)</td>
										<td>
											$110 +HST (Individual days available for $40, HST
											included)
										</td>
									</tr>
								</tbody>
							</table>
						</CardPadding>
					</Card>
					<Button href="https://register.trmanager.com">Book now</Button>
				</div>{" "}
				<Terms_HockeyAndSkating />
				{/* </Program> */}
			</Container>
		</>
	);
}
