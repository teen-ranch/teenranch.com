import React from "react";
import Container from "components/Container";
import Heading from "components/Heading";
import Button from "components/Button";
import Program from "components/Program";
import Card, { CardPadding } from "components/Card";
import { Time } from "components/Time";
import Grid from "components/Grid";
import { Terms_HockeyAndSkating } from "components/Terms";

export default function Default() {
	return (
		<>
			<Heading
				src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/hockey15.jpg"
				alt="Men's hockey league"
				title="Men's hockey league"
				subtitle="Summer and Fall hockey leagues for men"
				keywords="men's hockey leage"
				metaTitle="Men's hockey league"
				metaDescription="Men's hockey leages near Orangeville, Ontario, Canada"
			/>
			<Container type="body">
				<Card>
					<div style={{ padding: "1rem 4rem", display: "flex", gap: "2rem" }}>
						<h2>Men's league standings</h2>
						<Button href="https://www.hometeamsonline.com/teams/default.asp?u=TEENRANCHHOCKEYLEAGU&s=hockey&p=home">
							View Standings
						</Button>
					</div>
				</Card>

				{/* <Program
          src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/hockey15.jpg"
        // name="Men's hockey league"
        > */}
				{/* <p>Spring and Fall hockey leagues for men age 30+</p> */}

				<Grid md={1} gapSize="6rem">
					{/* <div>
						<h2>Summer Leagues</h2>
						<Card>
							<CardPadding>
								<h3>
									Summer Men's League (30+){" "}
									<sm style={{ fontSize: "11pt" }}>(6 teams)</sm>
								</h3>
								<p>
									<strong>When:</strong> May 14, 2026 - August 27, 2026
								</p>
								<ul>
									<li>
										Thursday nights: <Time>2000</Time>, <Time>2100</Time>, and{" "}
										<Time>2200</Time> game times
									</li>
									<li>
										<strong>Cost:</strong> $320 +HST
									</li>
								</ul>
								<strong>
									Contact{" "}
									<a href="mailto:brent.boschman@teenranch.com">
										brent.boschman@teenranch.com
									</a>{" "}
									for team bookings.
								</strong>
							</CardPadding>
						</Card>

						<Card>
							<CardPadding>
								<h3>
									Monday League (18+){" "}
									<sm style={{ fontSize: "11pt" }}>(6-8 teams)</sm>
								</h3>
								<p>
									<strong>When: May, 2026 - August, 2026</strong>
								</p>
								<ul>
									<li>
										Mondays: <Time>1900</Time>, <Time>2000</Time>, and <Time>2100</Time> game times (<Time>2200</Time> if necessary)
									</li>
									<li>Full-team entry</li>
								</ul>
								<strong>
									Contact{" "}
									<a href="mailto:brent.boschman@teenranch.com">
										brent.boschman@teenranch.com
									</a>{" "}
									for team bookings.
								</strong>
							</CardPadding>
						</Card>

						<Card>
							<CardPadding>
								<h3>
									Wednesday League (18+){" "}
									<sm style={{ fontSize: "11pt" }}>(6 teams)</sm>
								</h3>
								<p>
									<strong>When: May, 2026 - August, 2026</strong>
								</p>
								<ul>
									<li>
										Wednesdays: <Time>2000</Time>, <Time>2100</Time>, and <Time>2200</Time> game times
									</li>
									<li>Full-team entry</li>
								</ul>
								<strong>
									Contact{" "}
									<a href="mailto:brent.boschman@teenranch.com">
										brent.boschman@teenranch.com
									</a>{" "}
									for team bookings.
								</strong>
							</CardPadding>
						</Card>
					</div> */}

					<div>
						<h2>Fall/Winter Leagues</h2>
						<Card>
							<CardPadding>
								<h3>
									Men's Recreational League (35+){" "}
									<sm style={{ fontSize: "11pt" }}>(6 teams, draft league)</sm>
								</h3>
								<p>
									<strong>When:</strong> September 22, 2026 - April 20, 2027
								</p>
								<ul>
									<li>
										Tuesday nights: <Time>2000</Time>, <Time>2100</Time>, and{" "}
										<Time>2200</Time> game times
									</li>
									<li>
										<strong>Cost:</strong> $510 +HST
									</li>
								</ul>
								<Button href="https://register.trmanager.com">Book now</Button>
							</CardPadding>
						</Card>

						<Card>
							<CardPadding>
								<h3>
									Sunday League (18+){" "}
									<sm style={{ fontSize: "11pt" }}>(18 teams)</sm>
								</h3>
								<p>
									<strong>When: September, 2026 - April, 2027</strong>
								</p>
								<ul>
									<li>
										Sundays: <Time>1330</Time> - <Time>2300</Time>
									</li>
									<li>Full-team entry</li>
								</ul>
								<strong>
									Contact{" "}
									<a href="mailto:brent.boschman@teenranch.com">
										brent.boschman@teenranch.com
									</a>{" "}
									for team bookings.
								</strong>
							</CardPadding>
						</Card>

						<Card>
							<CardPadding>
								<h3>
									Men's League (35+){" "}
									<sm style={{ fontSize: "11pt" }}>(14 teams)</sm>
								</h3>
								<ul>
									<li>
										Wednesdays, September 16, 2026 - April, 2027: <Time>2000</Time> - <Time>2300</Time>
									</li>
									<li>
										Thursdays, September 17, 2026 - April, 2027: <Time>1900</Time> - <Time>2300</Time>
									</li>
									{/* <li>
										<strong>Cost:</strong> $535 +HST
									</li> */}
									<li>Full-team entry</li>
								</ul>
								{/* <Button href="https://register.trmanager.com">Book now</Button> */}
								<br/>
								<strong>
									Contact{" "}
									<a href="mailto:brent.boschman@teenranch.com">
										brent.boschman@teenranch.com
									</a>{" "}
									for team bookings.
								</strong>
							</CardPadding>
						</Card>
					</div>
				</Grid>

				{/* </Program> */}
				<Terms_HockeyAndSkating />
			</Container>
		</>
	);
}
