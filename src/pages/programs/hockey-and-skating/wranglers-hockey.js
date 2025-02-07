import React from "react";
import Container from "components/Container";
import Heading from "components/Heading";
import Button, { CTAButton } from "components/Button";
import Program from "components/Program";
import { Price, PriceContainer } from "components/Price";
import Grid from "components/Grid";
import { Time } from "components/Time";
import { Terms_HockeyAndSkating } from "components/Terms";

export default function Default() {
	return (
		<>
			<Heading
				src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/DSC_0513.JPG"
				alt="Smiling kids playing hockey"
				title="Wranglers Hockey"
				subtitle="A year-long development program for boys and girls ages 5+"
				metaTitle="Wranglers hockey"
				metaDescription="Wranglers hockey is a year-long development program for boys and girls ages 5-16+ years old. There are three levels: Learn to Play, Junior and Senior to accommodate all levels of development."
			/>
			<Container type="body">
				{/* <Grid md={2} gapSize="8rem"> */}
				<div>
					<h2>Wranglers hockey</h2>
					<p>
						Wranglers Hockey is a year-long development program for boys and
						girls ages 5+ years old.
						{/* There are three levels: Learn to Play, Junior
            and Senior to accommodate all levels of development.  */}
						{/* This is not a graduated program, Teen Ranch staff will assess your
            child and place them in an appropriate level. Don't worry! If your
            skill level progresses quickly, the coaching staff may move you to
            the next level. If the level that you are in is too difficult they
            can accommodate your learning needs in a lower level. */}
					</p>
					{/* <p>
            Junior age players will join Shamrocks Local League players for
            Saturday scrimmages.
          </p> */}
					<p>
						<i>
							<strong>Full equipment is required.</strong>
						</i>
					</p>

					<h3>When</h3>
					<p>
						Saturdays: October 19, 2024 - March 1, 2025 (19 sessions)
						<br />
						<br />
						<strong>No session on:</strong>
						<ul>
							<li>December 28, 2024</li>
						</ul>
					</p>

					<div className="staffTable">
						<table>
							<thead>
								<tr>
									<th>Division</th>
									<th>Ages</th>
									<th>Time</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Learn to play</td>
									<td>5-8</td>
									<td>
										<Time>1000</Time> - <Time>1050</Time>
									</td>
								</tr>
								<tr>
									<td>Junior & Senior</td>
									<td>8-16</td>
									<td>
										<Time>1100</Time> - <Time>1150</Time>
									</td>
								</tr>
								{/* <tr>
                  <td>Senior</td>
                  <td>12-16</td>
                  <td>12:00pm - 1:00pm</td>
                </tr> */}
							</tbody>
						</table>
					</div>
				</div>
			</Container>

			<Container type="body">
				<div
					id="pricing"
					style={{ position: "absolute", marginTop: "-180px" }}
				/>
				<h1>Pricing</h1>
				<PriceContainer>
					<Price
						title={<>Wranglers Hockey</>}
						subTitle={`A year-long development program for boys and girls
            ages 5-16 years old.`}
						who={
							<>
								Learn to Play (ages 5-8)
								<br />
								Junior & Senior (ages 8-16)
							</>
						}
						price={450}
						term="season"
						includes={["1 hour scrimmage every Saturday"]}
					>
						<CTAButton href="https://register.trmanager.com">
							Register now
						</CTAButton>
					</Price>
					{/* <Price
            title={<>Shamrocks local league</>}
            subTitle={`A high-performance development program.`}
            who="Junior (ages 7-10)"
            price={595}
            term="season"
            includes={[
              `50 hours of ice time`,
              "Skills & skating development on Wednesdays",
              "Half-ice team practice every other Tuesday",
              `1 hour scrimmage every Saturday`,
            ]}
          >
            <CTAButton href="https://register.trmanager.com">
              Register now
            </CTAButton>
          </Price> */}
				</PriceContainer>
				<Terms_HockeyAndSkating />
			</Container>
		</>
	);
}
