import React from "react";
import Container from "components/Container";
import Heading from "components/Heading";
import Button from "components/Button";
import Program from "components/Program";
import ExternalLink from "components/ExternalLink";
import { Terms_HockeyAndSkating } from "components/Terms";

export default function Default() {
	return (
		<>
			<Heading
				src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/learn%20to%20skate.jpg"
				imageOptions={{ rotate: 90 }}
				alt="Kids having fun skating on the ice"
				title="Learn to skate"
				subtitle="A beginner skating program for all ice sports."
				keywords="starskate, competitive figure skating, dufferin peel skating club"
				metaTitle="STARSKATE & Competitive Figure Skating"
				metaDescription="A beginner skating program for all ice sports."
			/>
			<Container type="body">
				<Program
					src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/learn%20to%20skate.jpg"
					imageOptions={{ rotate: 90, h: 420 }}
					name="Learn to skate"
				>
					{/* <p>
            <strong>
              COVID MESSAGE: Our COVID safety practices message will be sent to
              skaters & parents before the first class.
            </strong>
          </p> */}

					<p>
						Learn the basics of skating for all ice sports in this fun and
						fast-paced Teen Ranch Program. Our Learn-to-Skate Programs provide a
						solid start for participants of all ages and abilities. From the
						first steps on the ice to forwards, backwards, stops and turns,
						skaters will improve their balance, control and agility with small
						group instruction by our fully certified and experienced staff
						coaches. Progress reports, awards and incentives are included in the
						program.
					</p>

					<p>
						<i>CSA approved hockey helmets are mandatory.</i>
					</p>
					<Button href="https://register.trmanager.com">Book now</Button>
				</Program>

				<h3>Intro to skating</h3>
				<p>
					This program is for the beginner skater and will focus on the basic
					skills of balance, forward and backward skating and stopping.
				</p>

				<h3>Intro to figure skating</h3>
				<p>
					Skaters that have achieved basic skills and have an interest in figure
					skating will be introduced to edges, turns, crosscuts, spins and
					jumps. A figure skate with good fit and support will speed progress.
					We recommend{" "}
					<ExternalLink href="https://www.skatingboutique.com/">
						skatingboutique.com
					</ExternalLink>{" "}
					When participants have mastered introductory figure skating skills,
					they will be invited to join the Dufferin-Peel Skating Club to pursue
					Skate Canada tests and competitions.
				</p>

				<h3>Intro to hockey skating</h3>
				<p>
					Skaters that have achieved basic skating skills and have an interest
					in hockey will learn edges, turns & crosscuts and focus on developing
					strong skating skills for their game.
				</p>
				<p>
					<i>Hockey equipment may be worn.</i>
				</p>

				<h3>Pleasure skating</h3>
				<p>
					This is the program for skaters that have basic skating skills and
					want to continue learning for fun and fitness.
				</p>

				<h3>2024/2025 Semesters</h3>

				<div className="staffTable">
					<table>
						<thead>
							<tr>
								<th aria-label="Empty cell"></th>
								{/* <th>Fall: Sep. 9, 2024 - Nov. 15, 2024</th> */}
								{/* <th>Holiday: Nov. 18, 2024 - Jan. 24, 2025</th> */}
								<th>Winter: Jan. 27, 2025 - Apr. 11, 2025</th>
								<th>Spring: Apr. 25, 2025 - May. 16, 2025</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<strong>Mondays</strong>
									<br />
									On-ice: 6:00pm - 6:50pm
								</td>
								{/* <td>
									<strong>$280 +HST</strong> (9 sessions)
									<br />
									No session Oct. 14
								</td>
								<td>
									<strong>$250 +HST</strong> (8 sessions)
									<br />
									No session Dec. 23, Dec. 30
								</td> */}
								<td>
									<strong>$310 +HST</strong> (10 sessions)
									<br />
									No session Feb. 17
								</td>
								<td></td>
								{/* <td>
                  <strong>$250 +HST</strong> (8 sessions)
                  <br />
                  No session Feb. 19, Apr. 1
                </td> */}
							</tr>
							<tr>
								<td>
									<strong>Fridays</strong>
									<br />
									On-ice: 6:00pm - 6:50pm
								</td>
								{/* <td>
									<strong>$310 +HST</strong> (10 sessions)
								</td>
								<td>
									<strong>$250 +HST</strong> (8 sessions)
									<br />
									No session Dec. 27, Jan. 3
								</td> */}
								<td>
									<strong>$340 +HST</strong> (11 sessions)
								</td>
								<td>
									<strong>$125 +HST</strong> (4 sessions)
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<Terms_HockeyAndSkating />
			</Container>
		</>
	);
}
