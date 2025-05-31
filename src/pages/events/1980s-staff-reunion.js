import React from "react";
import Container from "components/Container";
import Heading from "components/Heading";
// import Button from 'components/Button'
// import Program from 'components/Program'
import { graphql } from "gatsby";

// // import ExternalLink from 'components/ExternalLink'
// import { PriceContainer, Price } from "components/Price"
import Button, { PrimaryButton } from "components/Button";
import Grid from "components/Grid";

// import SubNav from 'components/SubNav'
// import Verse from 'components/Verse'

// import { PrimaryButton, CTAButton } from 'components/Button'

// import Img from 'gatsby-image'

import Event from "components/Event";
// import Card from 'components/Card'

import { DateTime } from "luxon";
import Img from "gatsby-image";
import { Time } from "components/Time";
import Video from "components/Video";

const frontmatter = {
	title: "🎉 80's Camp Staff Reunion Weekend! 🎉",
	path: "/events/1980s-staff-reunion/",
};

const pageData = {
	subTitle: "Reconnect. Reminisce. Relive the 80s.",
	keywords: "1980s staff reunion",
};

const eventData = {
	title: frontmatter.title,
	description: "The 80's are calling! Join us for some old school fun!",
	venue: {
		name: "Teen Ranch",
		address: {
			address: "20682 Hurontario Street",
			city: "Caledon",
			province: "ON",
			postalCode: "L7K 1X1",
		},
	},
};

export default function Default({ data }) {
	return (
		<>
			<Heading
				// src={`https://teenranch.nyc3.digitaloceanspaces.com/website/assets/familyDay.jpg`}
				src={data.file.childImageSharp.fluid}
				alt={frontmatter.title}
				title={frontmatter.title}
				subtitle={pageData.subTitle}
				metaTitle={pageData.metaTitle || frontmatter.title}
				metaDescription={pageData.metaDescription || pageData.subTitle}
				keywords={pageData.keywords}
			/>

			<Container>
				<div>
					<h1>{frontmatter.title}</h1>
					<p>
						We’re bringing it all back—big hair, neon colors, and the
						unforgettable friendships we made at camp. Join us for a weekend of
						laughter, memories, and good times with the crew that made it all so
						special.
					</p>
					<h2>When</h2>
					<p>
						This event runs from Saturday, October 25, 2025 at <Time>1130</Time>{" "}
						to Sunday, October 26, 2025 at <Time>1000</Time>, with a day pass or
						overnight option.
					</p>
					<h2>What's Included</h2>
					<ul>
						<li>Lodging options: Coach House & Carriage House</li>
						<li>Meals Included</li>
						<li>Hiking</li>
						<li>80s Themed Dinner</li>
						<li>Reminiscing with old friends</li>
						<li>Old Time Evening Campfire</li>
					</ul>
					<p>
						80s-themed dinner in the Dining Lounge. Bring your best 80s attire
						(acid wash jeans are permitted, along with wigs)
					</p>
					<p>
						Featuring all of your Ranch favourites and some throwback
						performances by alumni campfire musos and Guest Speaker Bubby
						Stapleton.
					</p>
					<p>
						Confirmed attendees include legendary program directors BJ Bob Johnson,
						Bubby Stapleton, Rob Gerber, Brian Carlson and campfire stars like
						Dave Smylie, Bob Fukumoto, and a growing list of alumni that are
						expected to join in the fun. The infamous songbirds are also included!
					</p>

					<h2>Cost</h2>
					<ul>
						<li>
							<strong>Overnight:</strong> $175 +HST per person (trail ride
							included - optional)
						</li>
						<li>
							<strong>Day Pass:</strong> $89 +HST per person
						</li>
						<li>Trail Ride add-on: $55 +HST per person</li>
					</ul>

					<div>
						<div style={{color:"red", fontWeight:"bold"}}>This event is exclusively for alumni staff from the 1980s. To keep it focused on reconnecting, we're keeping it to alumni only - spouses and children are not permitted.</div>
						<Button href="https://register.trmanager.com">Book now</Button>
					</div>
				</div>

				{/* <div style={{ color: "red", fontSize: "2em" }}>
          Family day is full, we are no longer accepting registrations. Thank
          you!
        </div> */}
				{/* <p>
          Less than an hour from Toronto and located in the beautiful Caledon
          Hills, Teen Ranch is thrilled to offer you winter outdoor activities
          to help celebrate your family, Enjoy playing, laughing, and making
          lasting memories together.
        </p>
        <h2>When is it?</h2>
        Monday, February 20, 2023: 10:00am - 1:00pm
        <h2>Who is it for?</h2>
        Open to all Ages
        <h2>Activities include:</h2>
        <ul>
          <li>
            Skating - bring your own skates; helmets are required for ages 8 &
            under; helmets are encouraged for all ages
          </li>
          <li>Hayrides</li>
          <li>Broomball</li>
          <li>Tubing - use our tubes or bring your own</li>
          <li>Snowshoeing - bring yours or use ours (adult sizes only)</li>
          <li>Cross-country skiing - bring your own equipment</li>
          <li>Hiking</li>
          <li>Snow fort building</li>
          <li>Campfire: warm up with hot chocolate & marshmallow roast</li>
        </ul>
        <span style={{ fontStyle: "italic" }}>
          Snow activities and outdoor skating weather permitting
        </span>
        <h2>Pre-registration required</h2>
        <ul>
          <li>$80 +HST: up to 5 family members</li>
          <li>Additional family members: $16/person</li>
          <li>Children age two and under are free</li>
        </ul>
        <PrimaryButton href={stripePaymentLink}>Pre-register now</PrimaryButton> */}
			</Container>

			{/* <Container>
        <h1>Upcoming events</h1>
        <Event
          title={frontmatter.title}
          startDate={"2022-02-21"}
          startTime="10:00:00"
          endDate={"2022-02-21"}
          endTime="13:00:00"
          price={0}
          description={eventData.description}
          venue={eventData.venue}
          images={[data.file.childImageSharp.fluid.src]}
          status={"SCHEDULED"}
        />
      </Container> */}
		</>
	);
}

export const query = graphql`
  query {
    file(relativePath: { eq: "events/80sReunion.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
