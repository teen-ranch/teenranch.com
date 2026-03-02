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
				src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/girls-hockey.jpg"
				alt="Women's hockey league"
				title="Women's hockey league"
				subtitle="Summer hockey leagues for women"
				keywords="women's hockey league"
				metaTitle="Women's hockey league"
				metaDescription="Women's hockey leagues near Orangeville, Ontario, Canada"
			/>
			<Container type="body">
				{/* <Card>
					<div style={{ padding: "1rem 4rem", display: "flex", gap: "2rem" }}>
						<h2>Men's league standings</h2>
						<Button href="https://www.hometeamsonline.com/teams/default.asp?u=TEENRANCHHOCKEYLEAGU&s=hockey&p=home">
							View Standings
						</Button>
					</div>
				</Card> */}

				{/* <Program
          src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/hockey15.jpg"
        // name="Men's hockey league"
        > */}
				{/* <p>Spring and Fall hockey leagues for men age 30+</p> */}

				<Grid md={1} gapSize="6rem">
					<div>
						<h2>Summer Leagues</h2>
						<Card>
							<CardPadding>
								<h3>
									Summer Women's Rec League (18+){" "}
									<sm style={{ fontSize: "11pt" }}>(4 teams)</sm>
								</h3>
								<p>
									<strong>When:</strong> May 19, 2026 - August 18, 2026
								</p>
								<ul>
									<li>
									Tuesday nights: <Time>2100</Time> and{" "}
										<Time>2200</Time> games
									</li>
									<li>
										<strong>Cost:</strong> $300 +HST
									</li>
								</ul>
								<Button href="https://register.trmanager.com">Book now</Button>
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
