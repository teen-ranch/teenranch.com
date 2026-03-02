import React from "react";
import Container from "components/Container";
import Heading from "components/Heading";
import Button from "components/Button";
import Program from "components/Program";
import Terms, { Terms_HockeyAndSkating } from "components/Terms";

export default function Default() {
	return (
		<>
			<Heading
				src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/hockey14.jpg"
				alt="3 on 3 hockey league"
				title="3 on 3 hockey league"
				subtitle="3 on 3 hockey leagues for kids age 5+"
				keywords="hockey season preparation, stick handling, power skating"
				metaTitle="3 on 3 hockey league"
				metaDescription="3 on 3 hockey leagues for kids age 5+"
			/>
			<Container type="body">
				<Program
					src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/hockey14.jpg"
					name="3 on 3 hockey league"
				>
					<p>
						Join our 3-on-3 Hockey for 7 sessions, played 45 minutes over two
						periods. Play half-ice on our Olympic-sized ice surface and improve
						your child's overall skill and game strategy by challenging players
						both offensively and defensively in this high-tempo, small-area game
						situation. Limited space available.
					</p>
					<h3>When</h3>
					Sunday's, July 5 - August 23, 2026 (No session August 2, 2026)
					{/* <div
            style={{
              padding: "4rem",
              background: "purple",
              borderRadius: "4px",
              color: "#fff",
              textAlign: "center",
              fontSize: "2rem",
            }}
          >
            Returning Summer 2023
          </div> */}
					<ul>
						<li>
							<strong>U-7 (Age 5-6: 2020, 2021)</strong>: 4:30pm - 5:30pm (4
							teams)
						</li>
						<li>
							<strong>U-9 (Age 7-8: 2018, 2019)</strong>: 5:30pm - 6:30pm (4
							teams)
						</li>
						<li>
							<strong>U-11 (Age 9-10: 2016, 2017)</strong>: 6:30pm - 7:30pm (4
							teams)
						</li>
						<li>
							<strong>U-13/U-15 (Age 11-14: 2012, 2013, 2014, 2015)</strong>:
							7:30pm - 8:30pm (4 teams)
						</li>
					</ul>
					<h3>Cost</h3>
					$230 +HST (7 sessions, jersey included)
					<br />
					<br />
				*Number of teams are based on registration numbers.Teams will be evened out in the first two weeks by trades, if necessary.
					<br />
					<Button href="https://register.trmanager.com">Book now</Button>
				</Program>
				<Terms_HockeyAndSkating />
			</Container>
		</>
	);
}
