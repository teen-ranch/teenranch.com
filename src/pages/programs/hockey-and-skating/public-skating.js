import React from "react";
import Container from "components/Container";
import Heading from "components/Heading";
// import Button from 'components/Button'
import Program from "components/Program";
import { Time } from "components/Time";
import { Terms_HockeyAndSkating } from "components/Terms";

export default function Default() {
	return (
		<>
			<Heading
				src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/familyDay.jpg"
				alt="Family skating on the ice"
				title="Public skating"
				subtitle="An evening out with your friends or family"
				keywords="public skating, going skating with friends"
				metaTitle="Public skating"
				metaDescription="Public skating is back! It’s a great way to spend time with friends and family while keeping fit! Bring your family, friends...and your own skates!"
			/>
			<Container type="body">
				<Program
					src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/familyDay.jpg"
					name="Public skating"
				>
					{/* <div
            style={{
              border: "1px solid blue",
              borderRadius: "4px",
              padding: "2rem",
            }}
          >
            <h3 style={{ color: "red" }}>Family Day Free Skate</h3>
            <strong>When:</strong> Monday, February 20, 2023: <Time>1000</Time>{" "}
            - <Time>1200</Time> (doors open at <Time>0945</Time>)
            <br />
            <strong>Cost:</strong> FREE
          </div> */}
					<p>
						Public skating is back! It’s a great way to spend time with friends
						and family while keeping fit!
					</p>
					<p>Bring your family, friends...and your own skates!</p>

					<h3>When</h3>

					<p>
						Saturdays: October 10, 2026 - April 10, 2027 (6:30pm - 7:50pm)
						<br />
						<br />
						<strong>
							Public skating is NOT available on:
							<ul>
								<li>October 31, 2026</li>
								<li>December 26, 2026</li>
								<li>January 2, 2027</li>
								<li>March 27, 2027</li>
							</ul>
						</strong>
					</p>

					<h3>Cost</h3>
					<p>$5 +HST/person</p>
					<p>$20 +HST/family maximum</p>

					<p>
						<i>Bring your own skates</i>
					</p>
				</Program>
				<Terms_HockeyAndSkating />
			</Container>
		</>
	);
}
