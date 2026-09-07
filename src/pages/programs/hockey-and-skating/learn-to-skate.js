import React from "react";
import Container from "components/Container";
import Heading from "components/Heading";
import Button from "components/Button";
import Program from "components/Program";
import ExternalLink from "components/ExternalLink";
import { Terms_HockeyAndSkating } from "components/Terms";
import { Time } from "components/Time";

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
				metaTitle="Learn to skate"
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

				<h3>2025/2026 Semesters</h3>

				<div className="staffTable">
					<table>
						<thead>
							<tr>
								<th aria-label="Empty cell"></th>
								<th>Fall: Sep. 21, 2026 - Nov. 16, 2026</th>
								<th>Holiday: Nov. 23, 2026 - Jan. 25, 2027</th>
								<th>Winter: Feb. 1, 2027 - Mar. 22, 2027</th>
								{/* <th>Spring: Apr. 10, 2026 - May. 15, 2026</th> */}
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<strong>Mondays</strong>
									<br />
									On-ice: <Time>1800</Time> - <Time>1850</Time>
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
									<strong>$220 +HST</strong> (7 sessions)
									<br />
									No session Feb. 15
								</td>
								{/* <td></td> */}
								{/* <td>
                  <strong>$250 +HST</strong> (8 sessions)
                  <br />
                  No session Feb. 16
                </td> */}
								<td></td>
							</tr>
							{/* <tr>
								<td>
									<strong>Fridays</strong>
									<br />
									On-ice: 6:00pm - 6:50pm
								</td>
								<td>
									<strong>$280 +HST</strong> (9 sessions)
									<br/>
									No session Oct. 31
								</td>
								<td>
									<strong>$250 +HST</strong> (8 sessions)
									<br />
									No session Dec. 26, Jan. 2
								</td> */}
								{/* <td>
									<strong>$340 +HST</strong> (11 sessions)
								</td> */}
								{/* <td>
									<strong>$280 +HST</strong> (9 sessions)
								</td>
								<td>
									<strong>$190 +HST</strong> (6 sessions)
								</td>
							</tr> */}
						</tbody>
					</table>
				</div>
				<Terms_HockeyAndSkating />
			</Container>
		</>
	);
}
