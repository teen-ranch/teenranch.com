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
				src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/hockey14.jpg"
				alt="Hockey skater stopping at blue line"
				title="Ice rental"
				subtitle="Rent our olympic-size ice hockey arena."
				keywords="ice rental, ice hockey rental, hockey arena rental, summer ice rental"
				metaTitle="Ice rental"
				metaDescription="Rent our olympic-size ice hockey arena."
			/>
			<Container type="body">
				<Program
					src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/iceCorral1.jpg"
					name="Ice rental"
					swap
				>
					<p>
						Sharpen your skates and sharpen your skills. Contact the Ice Corral
						office for availability and pricing.
					</p>

					<Button href="mailto:icecorral@teenranch.com?subject=Ice rental">
						Book now
					</Button>
				</Program>
				<Terms_HockeyAndSkating />
			</Container>
		</>
	);
}
