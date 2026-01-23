import React from "react";
import Container from "components/Container";
import Heading from "components/Heading";
import Button from "components/Button";
import Program from "components/Program";
import { Terms_HockeyAndSkating } from "components/Terms";
import Card, { CardPadding } from "components/Card";
import { HockeyAges } from "components/HockeyAges";

export default function Default() {
	return (
		<>
			<Heading
				src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/hockey14.jpg"
				alt="Spring hockey league"
				title="Spring hockey league"
				subtitle="Spring hockey leagues for kids age 5-14"
				keywords="hockey season preparation, stick handling, power skating"
				metaTitle="Spring hockey league"
				metaDescription="Spring hockey leagues for kids age 5-14"
			/>
			<Container type="body">
				
			Join us for a fun, 9-week recreational program. Sessions will consist of a ten-minute warm-up drill, followed by a 35-minute game. Two teams and two goalies per age group, with limited spots per team.				
				<div className="staffTable">
					<Card>
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
											April 21, 2026 - June 16, 2026
											<br />
										</td>
										<td><HockeyAges years="2019, 2020"/></td>
										<td><HockeyAges years="2017, 2018"/></td>
										<td>$280 +HST (9 sessions)</td>
									</tr>
									<tr>
										<td>
											<strong>Wednesdays:</strong>
											<br />
											April 22, 2026 - June 17, 2026
											<br />
										</td>
										<td><HockeyAges years="2015, 2016"/></td>
										<td><HockeyAges years="2011, 2012, 2013, 2014"/></td>
										<td>$280 +HST (9 sessions)</td>
									</tr>
								</tbody>
							</table>
						</CardPadding>
					</Card>
					<Button href="https://register.trmanager.com">Book now</Button>
					</div>

				<Terms_HockeyAndSkating />
			</Container>
		</>
	);
}
