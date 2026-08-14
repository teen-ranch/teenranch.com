import React from "react";
import Container from "components/Container";
import Heading from "components/Heading";
import Button from "components/Button";
import Program from "components/Program";
import { graphql } from "gatsby";
import { Time } from "components/Time";
import { Terms_HockeyAndSkating } from "components/Terms";

export default function Default({ data }) {
	const { file, file2 } = data;
	return (
		<>
			<Heading
				src={file.childImageSharp.fluid}
				alt="Smiling kids playing hockey"
				title="Goalie Clinic"
				subtitle="Focus on skating, tracking the puck, situational awareness, rebound control and more"
				keywords="goalie clinic, goalie camp, goalie hockey school"
				metaTitle="Goalie Clinic"
				metaDescription="Focus on skating, tracking the puck, situational awareness, rebound control and more."
			/>
			<Container type="body">
				<Program src={file2.childImageSharp.fluid} name="Goalie Clinic">
					<p>
						Focus on skating, tracking the puck, situational awareness, rebound
						control and more.
					</p>
					<p>
						<i>
							<strong>Full equipment is required.</strong>
						</i>
					</p>
					<h3>Who it's for</h3>
					<p>Boys and Girls ages 6-14</p>
					<h3>When</h3>
					{/* <p>(8) 1 hr on-ice sessions</p>
          Wednesdays: January 18, 2023 - March 8, 2023
          <br />
          <Time>1700</Time> - <Time>1800</Time> */}
					{/* <p>Thursday's 12:30-2:00pm July 14-September 1</p> */}
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
					<div className="staffTable">
						<table>
							<thead>
								<tr>
									<th>Session</th>
									<th>Date</th>
									<th>Age 6-14</th>
								</tr>
							</thead>
							<tbody>
								{/* <tr>
									<td>Fall Goalie Clinic</td>
									<td>
										<strong>Wednesdays:</strong> September 10, 2025 - October 15, 2025
										<br />
										(6 sessions)
									</td>
									<td>
										<Time>1700</Time> - <Time>1750</Time>
									</td>
								</tr> */}
								{/* <tr>
									<td>Winter Goalie Clinic</td>
									<td>
										<strong>Wednesdays:</strong> February 11, 2026 - March 25, 2026
										<br />
										(6 sessions - no session March 18, 2026)
									</td>
									<td>
										<Time>1700</Time> - <Time>1750</Time>
									</td>
								</tr> */}
								<tr>
									<td>Fall session series</td>
									<td>
										<strong>Wednesdays:</strong> September 16, 2026 - October 21, 2026
										<br />
										(6 sessions)
									</td>
									<td>
										<Time>1700</Time> - <Time>1800</Time>
									</td>
								</tr>
								<tr>
									<td>Winter session series</td>
									<td>
										<strong>Wednesdays:</strong> February 24, 2027 - April 7, 2026
										<br />
										(6 sessions, excluding March 17, 2027)
									</td>
									<td>
										<Time>1700</Time> - <Time>1800</Time>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<h3>Cost</h3>
					<p>
						{/* <strong>Fall Goalie Clinic:</strong> $300 +HST/goalie (6 sessions) */}
						{/* <strong>Winter Goalie Clinic:</strong> $300 +HST/goalie (6 sessions) */}
						<strong>Fall session series:</strong> $350 +HST/goalie (6 sessions)
					</p>
					<p>
						<em>Partnering with MAD Athletic Development</em>
					</p>
					<Button href="https://register.trmanager.com">Book now</Button>
				</Program>
				<Terms_HockeyAndSkating />
			</Container>
		</>
	);
}

export const query = graphql`
  query {
    file(relativePath: { eq: "programs/hockey/goalie.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    file2: file(relativePath: { eq: "programs/hockey/goalie.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
