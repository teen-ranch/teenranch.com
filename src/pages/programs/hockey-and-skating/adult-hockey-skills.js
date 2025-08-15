import React from "react";
import Container from "components/Container";
import Heading from "components/Heading";
import Button from "components/Button";
import Program from "components/Program";
import { Terms_HockeyAndSkating } from "components/Terms";

export default function Default() {
	return (
		<>
			<Heading
				src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/hockey15.jpg"
				alt="Smiling kids playing hockey"
				title="Adult hockey skills"
				subtitle="Learn the game or enhance your skating and skills abilities"
				keywords="stick handling, passing skills, game-situation skills, skating development, learn to play hockey for adults"
				metaTitle="Adult hockey skills"
				metaDescription="Looking to learn the game or enhance your skating and skills ability? This is the program for you! Join us Saturday mornings for a co-ed skate ages 18 & up working together on the basic fundamentals of hockey."
			/>
			<Container type="body">
				<Program
					src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/hockey15.jpg"
					name="Adult hockey skills"
				>
					<p>
						Looking to learn the game or enhance your skating and skills
						ability? This is the program for you! Join us Saturday mornings for
						a co-ed skate ages 18 & up working together on the basic
						fundamentals of hockey.
					</p>
					<p>
						<i>
							<strong>Full equipment is required.</strong>
						</i>
					</p>

					<h3>When</h3>

					<p>
						Saturday mornings: (9:00am - 10:00am) October 18, 2025 - March 7,
						2026 (18 sessions)
						<br />
						(No session December 27, January 3 or February 14)
					</p>

					<h3>Cost</h3>
					<p>$475 +HST</p>

					<Button href="https://register.trmanager.com">Book now</Button>
				</Program>
				<Terms_HockeyAndSkating />
			</Container>
		</>
	);
}
