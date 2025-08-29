import React from "react";
import Container from "components/Container";
import Heading from "components/Heading";
import Button from "components/Button";
import Program from "components/Program";

export default function Default() {
	return (
		<>
			<Heading
				src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/horse19.jpg"
				alt="Equitation on the flat"
				title="Horse programs"
				subtitle="Trail rides and hunter / jumper shows and more!"
				keywords="trail rides, hunter jumper horse shows, schooling ring rental"
			/>
			<Container type="body">
				<Program
					src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/trailRide2.jpg"
					name="Trail rides"
				>
					<strong style={{ color: "red" }}>
						September through mid-June
						{/* Trail rides will resume in the Fall. */}
					</strong>
					<ul>
						<li>Ages 10+</li>
						<li>One-hour in length</li>
						<li>Walk/trot (if comfortable)</li>
						<li>Max. participant weight of 250lbs</li>
						<li>Pre-booking and pre-payment required</li>
						<li>$65.00 +HST per person</li>
					</ul>

					<Button href="mailto:rachel.stevens@teenranch.com?subject=Trail ride booking inquiry">
						Book a trail ride
					</Button>
				</Program>


				<Program
					src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/hunterJumper16.jpg"
					name="Hunter/Jumper shows"
					swap
				>
					<h4>2025 show dates</h4>
					<ul>
						<li>May 4</li>
						<li>June 8</li>
						<li>July 13</li>
						<li>July 25</li>
						<li>August 10</li>
						<li>September 14</li>
					</ul>

					<Button to="/programs/horses/hunter-jumper-shows/">Learn more</Button>
				</Program>

				<Program
					src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/blu%20flat.jpg"
					name="Schooling ring rental"
				>
					<ul>
						<li>Ring 1, 3 & 4 hunter courses available</li>
						<li>Grass jumper ring available</li>
						<li>Pre-booking and pre-payment required*</li>
						<li>$40.00 +HST per horse per hour of ring time</li>
						<li>Jumps go to a max of 2'9" in Ring #3, 2'6" in Ring #1</li>
					</ul>

					<Button href="mailto:corrie.ensom@teenranch.com?subject=Schooling ring rental">
						Rent a schooling ring
					</Button>
				</Program>
			</Container>
		</>
	);
}
