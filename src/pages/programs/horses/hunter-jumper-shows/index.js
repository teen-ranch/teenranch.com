import React, { useState } from "react";
import Container from "components/Container";
import Heading from "components/Heading";
import Button from "components/Button";
import Program from "components/Program";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Grid from "components/Grid";
import Sponsor from "components/Sponsor";

import "../horses.scss";
import SubNav from "components/SubNav";
import { Link } from "react-scroll";
import Card from "components/Card";
import { Time } from "components/Time";
import { useInterval } from "hooks/useInterval";

export default function Default({ data }) {
	const {
		banner,
		// banners,
		main,
		// image1,
		// image2,
		eliteSponsors,
		// ringSponsors,
		goldSponsors,
		silverSponsors,
		bronzeSponsors,
		prizeSponsors,
		// inkindSponsors,
		// equitationSponsors,
		photographers,
	} = data;

	// const [bannerIndex, setBannerIndex] = useState(0);
	const bannerIndex = 1;

	/* useInterval(() => {
		if (bannerIndex < banners.edges.length - 1) {
			setBannerIndex(bannerIndex + 1);
		} else {
			setBannerIndex(0);
		}
	}, [5000]) */
	console.log('banner----l',banner)

	return (
		<>
			<Heading
				src={banner.childImageSharp.fluid}
				alt="Rider and horse jumping at Teen Ranch"
				title="Hunter / Jumper Shows"
				subtitle="Professional hunter/jumper courses and divisions for first-time competitors to those schooling before Gold Shows."
				keywords="horse shows, schooling horse shows, horse show orangeville ontario, horse show caledon ontario, gta horse show"
				metaTitle="Hunter / Jumper shows"
				metaDescription="Professional hunter/jumper courses and divisions for first-time competitors to those schooling before Gold Shows."
				// hunterJumper
			/>

			<SubNav>
				<Link to="top" activeClass="active" spy={true}>
					Overview
				</Link>
				<Link to="divisions" activeClass="active" spy={true}>
					Divisions & classes
				</Link>
				<Link to="year-end" activeClass="active" spy={true}>
					Year-end awards
				</Link>
				{/* <Link to="rules" activeClass="active" spy={true}>
					Rules & policies
				</Link> */}
				<Link to="sponsors" activeClass="active" spy={true}>
					Sponsors
				</Link>
				<Link to="photographers" activeClass="active" spy={true}>
					Photographers
				</Link>
			</SubNav>

			<div id="top" style={{ position: "absolute", marginTop: "-120px" }} />

			<div
				className="sponsorBarContainer"
				style={{
					maxWidth: "100%",
					overflowX: "auto",
				}}
			>
				<div
					className="sponsorBar"
					style={{
						margin: "0px auto",
						width: "auto",
						// justifyContent: "center",
						gap: "6rem",
						padding: "2rem",
						borderBottom: "1px solid #efefef",
						// overflowX: "auto",
						// width: "100dvw",
						// maxWidth: "100%",
					}}
				>
					{eliteSponsors?.edges?.map((edge, i) => {
						const styles = {};
						if (i === 0) {
							styles.marginLeft = "auto";
						}
						if (i === eliteSponsors?.edges?.length - 1) {
							styles.marginRight = "auto";
						}
						return (
							<div
								key={i}
								style={{ maxWidth: "120px", maxHeight: "100%", ...styles }}
							>
								<Img
									style={{
										maxWidth: "100%",
										maxHeight: "100%",
									}}
									imgStyle={{ objectFit: "contain" }}
									fixed={edge.node.childImageSharp.fixed}
									alt={edge.node.name}
									objectFit="contain"
								/>
							</div>
						);
					})}
				</div>
			</div>
			<Container type="body">
				<h1><center>2026 Hunter / Jumper Shows</center></h1>
				{/* <p>
					2025 Marks our 40th Anniversary – 40 years of hosting this amazing H/J
					Series. Come and see why competitors, families and coaches alike have
					been enjoying this professional, friendly and quality series since
					1985! We are SO excited to announce that our top 7 riders in each
					division will qualify to compete in the ONTARIO FALL FINALS November
					13-16, 2025 in Ancaster, ON at their beautiful indoor facility. See{" "}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://ontariofallfinals.weebly.com"
					>
						ontariofallfinals.weebly.com
					</a>{" "}
					for details!
				</p> */}
				{/* <center>
					<img
						src="https://ontariofallfinals.weebly.com/uploads/1/4/9/0/149072116/img-0073_orig.jpeg"
						width="220"
						alt="Ontario Fall Finals Logo"
					/>
				</center> */}
				<Program
					src={main.childImageSharp.fluid}
					name="2026 Hunter/Jumper Shows"
				>
					<div className="staffTable">
						<table>
							<thead>
								<tr>
									<th>Show date</th>
									<th>Entries due</th>
									<th>Entries</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>May 31, 2026</td>
									<td>May 27, 2026</td>
									<td>
										<Button
											target="_blank"
											href="https://forms.zohopublic.com/teenranch1/form/HorseShowMay312026/formperma/cBobrZzxtJcgDcE9x4I62U1AdCoPnTKlGM-AXFIICeQ"
										>
											Entry form - May 31
										</Button>
									</td>
								</tr>
								<tr>
									<td>June 28, 2026</td>
									<td>June 24, 2026</td>
									<td>
										<Button
											target="_blank"
											href="https://forms.zohopublic.com/teenranch1/form/HorseShowJune282026/formperma/35vQ61Jw2SDpYIfNMpeG2Q14ExgupIIl78yX65Lls-g"
										>
											Entry form - June 28
										</Button>
									</td>
								</tr>
								<tr>
									<td>July 26, 2026</td>
									<td>July 22, 2026</td>
									<td>
										<Button
											target="_blank"
											href="https://forms.zohopublic.com/teenranch1/form/HorseShowJuly262026/formperma/knwXNWHjWUrGGKO2rAKJcFooITrGw6B0zMT6HpKHhdw"
										>
											Entry form - July 26
										</Button>
									</td>
								</tr>
								<tr>
									<td>August 23, 2026</td>
									<td>August 19, 2026</td>
									<td>
										<Button
											target="_blank"
											href="https://forms.zohopublic.com/teenranch1/form/HorseShowAugust232026/formperma/zFwivL_aQlVPGTItCBnCYjIpSztsHd45zz4bO_3Iw0o"
										>
											Entry form - August 23
										</Button>
									</td>
								</tr>
								<tr>
									<td>September 13, 2026</td>
									<td>September 9, 2026</td>
									<td>
										<Button
											target="_blank"
											href="https://forms.zohopublic.com/teenranch1/form/HorseShowSeptember132026/formperma/khzIcy8NJN4zV3Jg6iqNHffE6A-aDzmzrmXic2VEcHg"
										>
											Entry form - September 13
										</Button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					{/* <h3>Stalls</h3>
          <p>
            Stalls will be available at each show for the 2022 season. Priority
            goes to those showing all 6 shows.
          </p>
          <p>
            If anyone is interested in renting stalls for the season, they are
            $575 +HST per stall. We don't make anything on these, so cleaning
            them after each show will be your responsibility. If available,
            stall rental per show will be $100 +HST.
          </p>
          <p>
            Email <a href="mailto:events@teenranch.com">events@teenranch.com</a>{" "}
            if you are interested.
          </p> */}
				</Program>
				<h2>Links</h2>
				<Card style={{ padding: "2rem" }}>
					<div className="showButtons">
						<Button target="_blank" href="https://show.teenranch.com">
							View 2026 Season Standings
						</Button>
						<Button
							target="_blank"
							href="https://assets.teenranch.com/hunterJumperShowProgram_2026_compressed.pdf?v=2"
						>
							View 2026 Prize List
						</Button>
						<Button target="_blank" href="mailto:events@teenranch.com">
							Send us an email
						</Button>
					</div>
				</Card>
			</Container>
			{/* <Program src={image2.childImageSharp.fluid} name="Hunter/Jumper shows">
          <h2>Forms required for entry:</h2>
          <ol>
            <li>Entry form (see below)</li>
            <li>Online covid screening form completed</li>
          </ol>

          <p>
            With covid protocols loosening up, we have now simplified the
            screening process! No Cohort Lists or temp checks required...just
            fill out the covid screening form below and email in before
            Wednesday @ 11:59pm. Thanks!
          </p>
          <Button
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSc4dEIQ-wOrqet3p_YUJBGa4G5d3XvZIYL_Czq-vmqARX8spg/viewform"
          >
            COVID-19 screening form
          </Button>

          <h3>Links</h3>
          <Button target="_blank" href="https://show.teenranch.com">
            View 2021 season standings
          </Button>
          <br />
          <Button to="/programs/horses/hunter-jumper-shows/show-photos/">
            View 2021 show photos
          </Button>
          <br />
          <Button
            target="_blank"
            href="https://teenranch.nyc3.cdn.digitaloceanspaces.com/website/pdf/hunterJumperShowProgram_2021.pdf"
          >
            2021 Show Program
          </Button>
        </Program> */}
			{/* https://teenranch.nyc3.cdn.digitaloceanspaces.com/website/pdf/hjClassDescriptions_2020.pdf */}
			<Container type="body">
				<div
					id="divisions"
					style={{ position: "absolute", marginTop: "-180px" }}
				/>
				<h2>Show Schedule</h2>
				<div className="hunter-jumper-class-grid">
					<Card style={{ padding: "2rem 2rem" }}>
						<h3>
							Ring #4 (<Time>0900</Time> start)
						</h3>
						<small>
							<i>
								This smaller sand ring is designed for beginner-novice riders.
								Lines to be set for an 11' stride. Divisions to be split in half
								by age if there are more than 15 competitors entered.
							</i>
						</small>
						<ul>
							<li>Leadline Division</li>
							<li>Starter Division</li>
							<li>Jr. Beginner Division</li>
							<li>Sr. Beginner Division</li>
							<li>Tyro Division</li>
							<li>Rookie Division</li>
						</ul>
					</Card>
					<Card style={{ padding: "2rem 2rem" }}>
						<h3>
							Ring #1 (<Time>0800</Time> start)
						</h3>
						<small>
							<i>
								All lines in this sand ring are set for an 11' canter stride.
							</i>
						</small>
						<ul>
							<li>1'6" Short Stirrup</li>
							<li>1'9" Novice Hunters</li>
							<li>1'9" / 2' Novice Equitation</li>
							<li>2' / 2'3" Open Equitation <br/><sm>(not to start before 11:30)</sm></li>
							<li>2' Low Hunters</li>
							<li>2'3" / 2'6" High Hunters</li>
						</ul>
					</Card>

					<Card style={{ padding: "2rem 2rem" }}>
						<h3>
							Ring #3 (<Time>0800</Time> start)
						</h3>
						<small>
							<i>
		Large sand ring.
							</i>
						</small>
						<ul>
							<li>Novice Hack Division</li>
							<li>Open Hack Division</li>
							<li>Crossrail Jumpers</li>
							<li>0.6m Jumper</li>
							<li>0.7m / 0.8m Jumper</li>
						</ul>
					</Card>
				</div>
				{/* <Button
					target="_blank"
					href="https://assets.teenranch.com/hunterJumperClassDescriptions_2026.pdf"
				>
					View class descriptions
				</Button> */}
			</Container>
			<Container type="body">
				<h2>Gifts & Awards</h2>
				<ul>
<li>Every entry receives a $10 GIFT CARD sponsored by Bahr Saddlery.</li>
<li>FREE MAGAZINE to every guest sponsored by Canadian Horse Journal.</li>
<li>FREE BOTTLED WATER at each in-gate sponsored by Julie Huppe Real Estate.</li>
<li>TURN OUT AWARD at every show sponsored by Sprucewood Tack Shop.</li>
<li>RIBBONS 1st-8th in each class.</li>
<li>MEDALS 1st-3rd in all equitation classes.</li>
<li>PRIZES & BEAUTIFUL RIBBONS to Champion & Reserve in every division.</li>
<li>OTTB AWARDS given at each show, chosen randomly, sponsored by Cowgirl Up with Green.</li>
<li>PRIZE MONEY AND PURINA TREATS awarded in the Equitation Medal & Jumper Medal Classes sponsored by Marissa Mallais, Sue Stacey, Moon Meadow Stables, Jen Brabant, Wild Mango Marketing, Holly Zold & Sheryl Stevens.</li>
<li>Top 7 in each division qualify to compete at the Ontario Fall Finals.</li>
<li>FOOD TRUCK available for lunch, snack and drink purchases at every show by Kabzza.	</li>
				</ul>
			</Container>
			<Container type="body">
				<h2>Fees</h2>
				<ul>
					<li>
						Per Division fee: $100 +HST (division fee includes a warm-up round)
					</li>
					<li>Back number fee: $10 +HST</li>
					<li>Admin fee: $20 +HST</li>
				</ul>
				<h3>Schooling Ring Rental</h3>
				<div>
					Ring schooling will be available on the Saturday before each show
					only:
				</div>
				<Button to="/programs/horses/schooling-ring-rental/">Learn More</Button>
			</Container>
			<Container type="body">
				<div
					id="year-end"
					style={{ position: "absolute", marginTop: "-180px" }}
				/>
				<h2>Year-end awards 2026</h2>
				{/* <div style={{ color: "red" }}>
					Note: 2025 details will be updated once sponsors are confirmed.
				</div> */}

				<Card style={{ padding: "2rem" }}>
					<ul>
						<li><strong>Beautiful Ribbons and Prizes</strong> to top 7 in each division.</li>
						<li>
							<strong>High Point Male Rider Award</strong> to the male rider earning most points
							in one division. Winner receives an annual and keeper trophy.
							Sponsored by Denworth Equine Mngt.
						</li>
						<li>
							<strong>High point Welsh/Half Welsh Award</strong> to the pony earning the most
							points throughout the season. Photo of papers to be sent to
							events@teenranch.com to qualify. Winner receives a GIANT ribbon
							sponsored by Beaverwood Farm.
						</li>
						<li>
							<strong>High point TB Awards</strong> – Winners in the following categories receive a ribbon & prize
							sponsored by the Jockey Club.
							<ul>
								<li>Hack</li>
								<li>Jumper</li>
								<li>Green</li>
								<li>Jr. Rider</li>
								<li>Sr. Rider</li>
								<li>Equitation Rider</li>
								<li>Babysitter TB (Ring #4/SS)</li>
								<li>Hunter TB (Ring #1)</li>
							</ul>
						</li>

						<li>
							<strong>Barn Challenge Annual Trophy</strong>, ribbons and prize to the stable earning the
							most points this season. Sponsored by Jump Solutions. Send your team list to events@teenranch.com
						</li>
						<li>
							<strong>Sportsmanship Award</strong> to be voted on by competitors, coaches and
							show staff. All nominees get a ribbon, winner receives an annual
							trophy & keeper trophy sponsored by Brian and Cathy Aker, and a
							prize donated by Greenhawk. Send nominations to events@teenranch.com
						</li>
						<li>
							<strong>Tenacity Award</strong> - in memory of Layne Stevens. All nominees get a
							ribbon, winner receives an annual trophy and keeper trophy
							sponsored by Laynlee Collection, as well as a photo package sponsored by Sutherland Images. Send nominations to
							leelee0701@hotmail.com
						</li>
						<li>
							<strong>Horse of the Year</strong> – Horse earning the most points of the season in
							one division receives an annual trophy, a gift certificate from
							Varik Animal Chiropractic and a $200 Gift Certificate to Running
							Fox.
						</li>
						<li>
							<strong>Professional Turnout Award</strong> - winner receives a $200 Gift Card to
							Running Fox and a beautiful cooler from Purina.{" "}
						</li>
						<li>
							<strong>Jumper Champion Trophy</strong> - Year End Jumper Champion receives the annual and keeper Johnny Barkey Memorial Trophy.
						</li>
						<li>
							<strong>High Point Equitation Rider of the Year</strong> - receives a prize package sponsored by Sprucewood Tack Shop.
						</li>
						{/* <li>
							High Point Equitation Rider of the Year – receives a $500 prize
							donated by Antares.
						</li>
						<li>
							Year End Jumper Champion receives the annual and keeper Johnny
							Barkey Memorial Trophy.
						</li>
						<li>
							Year End Green Hunter Champion will receive the annual Christine
							Legare Memorial Trophy.
						</li> */}

						{/* <li>Plan for Year End Celebration TBD.</li>
						<li>Ribbons and Prizes to top 6 in each division.</li>
						<li>
							Professional Turnout - <em>Sponsored by Running Fox.</em>
							<br />
							<em style={{ fontSize: "13px" }}>
								Winner is chosen by show staff and receives a $200 Gift
								Certificate from Running Fox.
							</em>
						</li>
						<li>
							High point Male Rider Award –{" "}
							<em>Sponsored by Denworth Equine Management</em>
							<br />
							<em style={{ fontSize: "13px" }}>
								To the Male rider earning most points in one division this
								season. Winner receives an annual and keeper trophy.
							</em>
						</li>
						<li>
							High point Welsh/Half Welsh –{" "}
							<em>Sponsored by Beaverwood Farm</em>
							<br />
							<em style={{ fontSize: "13px" }}>
								To the pony earning the most points throughout the season.
								Winner receives a GIANT custom ribbon.
							</em>
						</li>

						<li>
							High point TB Awards – <em>Sponsored by the Jockey Club</em>
							<br />
							<em style={{ fontSize: "13px" }}>
								Must submit TIP Card to qualify. All winners receive a ribbon,
								prize, & a gift certificate for TIP apparel sponsored by The
								Jockey Club.
							</em>
							<ul>
								<li>High Point Hack TB</li>
								<li>High Point Jumper TB</li>
								<li>High Point Green TB</li>
								<li>High Point Low Hunter TB (under 2’6)</li>
								<li>High Point High Hunter TB (2’6 & over)</li>
								<li>High Point Jr. Rider</li>
								<li>High Point Sr. Rider</li>
								<li>High Point Equitation Rider</li>
							</ul>
						</li>
						<li>
							Barn Challenge –{" "}
							<em style={{ fontSize: "13px" }}>
								High Point Equestrian Team earning the most points throughout
								the season. All riders receive a ribbon. Coach receives a ribbon
								an annual trophy to display for the year.
							</em>
						</li>
						<li>
							Sportsmanship Award -{" "}
							<em>Sponsored by Greenhawk and Brian & Cathy Aker</em>
							<br />
							<em style={{ fontSize: "13px" }}>
								To be voted on by competitors, coaches and parents. All nominees
								get a ribbon, winner receives an annual trophy and keeper trophy
								sponsored by Brian and Cathy Aker, & a prize donated by
								Greenhawk.
							</em>
						</li>
						<li>
							Tenacity Award –{" "}
							<em>Sponsored by Lee Stevens in memory of Layne Stevens</em>
							<br />
							<em style={{ fontSize: "13px" }}>
								To be voted on by competitors, coaches and parents. All nominees
								get a ribbon, winner receives an annual trophy and keeper trophy
								sponsored by Lee Stevens.
							</em>
						</li>
						<li>
							Horse of the Year – <em>Sponsored by Purina</em>
							<br />
							<em style={{ fontSize: "13px" }}>
								Horse/pony earning the most points of the season. Receives an
								annual trophy, a custom ribbon and a Purina Cooler.
							</em>
						</li>
						<li>
							Volunteer of the Year
							<br />
							<em style={{ fontSize: "13px" }}>
								to the helper or competitor chosen by show staff that has
								contributed to the show’s success. All nominees receive a
								ribbon. Winner receives a prize.{" "}
							</em>
						</li>
						<li>
							Year End Jumper Champion will receive the annual Johnny Barkey
							Memorial Trophy
						</li>
						<li>
							Year End Green Hunter Champion will receive the annual Christine
							Legare Memorial Trophy
						</li> */}
					</ul>
				</Card>
			</Container>
			{/* <Container type="body">
				<div id="rules" style={{ position: "absolute", marginTop: "-180px" }} />
				<h2>Rules & policies</h2>
				<Grid lg={1} xl={1} gap={true}>
					<Card style={{ padding: "2rem" }}>
						<h4>Show rules</h4>
						<ol>
							<li>
								ASTM approved helmets mandatory for all riders. Proper show
								attire required.
							</li>
							<li>
								Back number must be worn and visible at all times while on
								horseback.
							</li>
							
							<li>
							Please read class descriptions to see rules on cross-entering.  We ask that coaches be proactive in organizing order of go when riders/horses have conflicts between rings.  Ring will wait for a max. of 10 minutes.  After 10 minutes, competitor will be scratched with no reimbursement.
							</li>
							<li>
								Entries <strong>MUST</strong> be submitted on the Wednesday 11:59pm before each show.  Late entries must be emailed to <a href="mailto:events@teenranch.com">events@teenranch.com</a> and will be charged a $20 Late Entry Fee.
							</li>
							<li>
								<strong>Hunter Classes</strong> - Flash nose bands and running
								or german martingales are not permitted. Leg protection may be
								worn on horse in warm-up and inclement weather only when
								approved by judge.
							</li>
							<li>
								<strong>Champion/Reserve Champions</strong> at each show are
								calculated as follows: 9,7,6,5,4,3,2,1. Champion Tie-Breakers – In
								the Leadline, Short Stirrup, Starter, Beginner & Rookie
								Division, most points in Equitation wins. In other divisions,
								most points over fences wins. After that or in hack divisions,
								judge may flip a coin or do conformation line up for the winner.
							</li>
							<li>
								<strong>Year-End Awards</strong> 
								<ol style={{listStyle:'lower-alpha'}}>
									<li>
									Must show in at least 3 shows in the division to qualify. Points are awarded to horses in hunter/jumper divisions, the rider in equitation/lead line divisions and horse/rider combinations for the beginner, rookie, and short stirrup divisions. Points are calculated as follows: 9xentries, 7xentries, 6xentries, 5xentries, 4xentries, 3xentries, 2xentries, 1xentries.	
									</li>
									<li>
									Ontario Fall Finals - in Ancaster, ON. Top 7 from each division qualify.
									</li>
								</ol>
							</li>
							<li>
								<strong>Fall of horse or rider</strong> = elimination. Rider
								must exit ring before re-mounting.
							</li>
							<li>
								<strong>Pony Riders</strong> – we don’t set age limits to show
								ponies, as we believe it’s better for ponies to get this time in
								training so they are safe for younger riders later. <br />
								Please be sure the rider is of suitable size for the pony's
								comfort.
							</li>
							<li>
								For all other concerns, EQUINE CANADA RULES APPLY. Please check
								your bit and equipment if questionable.{" "}
							</li>
							<li>
								Teen Ranch accepts no responsibility for damage, theft, loss,
								accident, death or injury.
							</li>
						</ol>
					</Card>
					
				</Grid>
			</Container> */}

			<Container type="body">
				<div
					id="sponsors"
					style={{ position: "absolute", marginTop: "-180px" }}
				/>
				<h2>Sponsors</h2>

				<Card style={{ padding: "2rem" }}>
					<p>
						Teen Ranch is a not for profit organization that has been hosting
						this series of horse shows for the extended community for 40 years
						now! We offer these professional shows with a friendly environment
						to train up riders and horses of all levels. But these shows are
						only possible because of amazingly generous individuals, families
						and companies like you!
					</p>
					<p>
						At each show last year, we averaged hosting about 110 riders, plus
						their coaches, family and friends. The Teen Ranch Website gets
						roughly 4,000 visits/month with 10,000 page views per month. The
						Teen Ranch Hunter/Jumper Series Facebook page reaches over 2,000
						people and we have also started growing our Instagram following in
						the last year with Insta-givaways.
					</p>
					<p>
						Below, you will find the standard Sponsorship Packages ranging from
						$50 to $1,000, as well as a section for Product donations and
						customization. We want this sponsorship to be just as beneficial to
						you as it is to us, so if there is anything you’d like to
						offer/suggest that doesn’t fit into the standard options, we want to
						hear your ideas!
					</p>
					<p>
						We look forward to hearing from you and having you part of the team!
						Thank you for considering supporting this awesome series!
					</p>
				</Card>

				{/* 
        <h3>Many thanks to our sponsors from last season:</h3>

        <Grid lg={2} xl={4} gap={true}>
          <Card style={{ padding: "2rem" }}>
            <div>Bahr Saddlery</div>
            <div>Greenhawk Equestrian</div>
            <div>Running Fox</div>
            <div>MacLeod Vet</div>
            <div>Ferguson Equine Vet</div>
            <div>Oro Medonte Vet</div>
            <div>Denworth Equine Management</div>
            <div>Allied Threaded Products</div>
            <div>Beaverwood</div>
            <div>Canadian Horse Journals</div>
          </Card>
          <Card style={{ padding: "2rem" }}>
            <div>Tracy Lynn Tolfa—Scentsy Rep</div>
            <div>The Jockey Club - TIP</div>
            <div>Pamela Geiger</div>
            <div>Dr. Kristen Varik</div>
            <div>Top of the Hill Farm</div>
            <div>Tarwin Farm</div>
            <div>MF Equine</div>
            <div>HiLo Equestrian</div>
            <div>Tony Wilkin</div>
            <div>Sobeys</div>
          </Card>
          <Card style={{ padding: "2rem" }}>
            <div>Purina</div>
            <div>Julie Huppe Real Estate</div>
            <div>Greyden Equestrian</div>
            <div>Frankie's Horse Treats</div>
            <div>Broadway Engraving</div>
            <div>Kowalsky Farrier Service</div>
            <div>Marissa Mallais</div>
            <div>Carolyn Clarkson</div>
            <div>Half-Cut Candles</div>
          </Card>
          <Card style={{ padding: "2rem" }}>
            <div>Eden Horse Hair Designs</div>
            <div>Dr. Kendra Clark</div>
            <div>Halter Equestrian</div>
            <div>Ringside Ribbons</div>
            <div>MF Equine</div>
            <div>Kuypers Family</div>
            <div>Sew Cathy Quilts</div>
            <div>Laynelee Equestrian Services</div>
            <div>Mark Fisher</div>
          </Card>
        </Grid>
      */}
				<Button
					target="_blank"
					//   href="https://forms.zohopublic.com/teenranch1/form/HorseShowSponsorshipPackage/formperma/F0i3DDm5ylIGPkS4c7JDnMr8oB1UxmOqi-DVzhjNkuM"
					href="https://assets.teenranch.com/hunterJumperSponsorshipPackage_2026.pdf"
				>
					I want to sponsor
				</Button>

				<h3>Elite sponsors</h3>
				<Grid lg={3} xl={3} gap={false}>
					{eliteSponsors?.edges?.map((edge, i) => {
						return (
							<Sponsor key={i}>
								<Img
									fluid={edge.node.childImageSharp.fluid}
									alt={edge.node.name}
								/>
							</Sponsor>
						);
					})}
				</Grid>

				{/* <h3>Ring sponsors</h3> */}
				{/* <Grid lg={2} xl={4} gap={false}> */}
				{/*   {ringSponsors?.edges?.map((edge, i) => { */}
				{/*     return ( */}
				{/*       <Sponsor key={i}> */}
				{/*         <Img */}
				{/*           fluid={edge.node.childImageSharp.fluid} */}
				{/*           alt={edge.node.name} */}
				{/*         /> */}
				{/*       </Sponsor> */}
				{/*     ) */}
				{/*   })} */}
				{/* </Grid> */}

				{/* <h3>Banquet sponsors</h3>
        <Grid lg={4} xl={6} gap={false}>
          {banquetSponsors?.edges?.map((edge, i) => {
            return (
              <Sponsor key={i}>
                <Img
                  fluid={edge.node.childImageSharp.fluid}
                  alt={edge.node.name}
                />
              </Sponsor>
            )
          })}
        </Grid> */}

				<h3>Gold sponsors</h3>
				<Grid lg={3} xl={5} gap={false}>
					{goldSponsors?.edges?.map((edge, i) => {
						return (
							<Sponsor key={i}>
								<Img
									fluid={edge.node.childImageSharp.fluid}
									alt={edge.node.name}
								/>
							</Sponsor>
						);
					})}
				</Grid>
				<h3>Silver sponsors</h3>
				<Grid lg={3} xl={5} gap={false}>
					{silverSponsors?.edges?.map((edge, i) => {
						return (
							<Sponsor key={i}>
								<Img
									fluid={edge.node.childImageSharp.fluid}
									alt={edge.node.name}
								/>
							</Sponsor>
						);
					})}
				</Grid>
				<h3>Bronze sponsors</h3>
				<Grid lg={3} xl={5} gap={false}>
					{bronzeSponsors?.edges?.map((edge, i) => {
						return (
							<Sponsor key={i}>
								<Img
									fluid={edge.node.childImageSharp.fluid}
									alt={edge.node.name}
								/>
							</Sponsor>
						);
					})}
				</Grid>

				{/* <h3>Equitation sponsors</h3>
				<Grid lg={5} xl={7} gap={false}>
					{equitationSponsors?.edges?.map((edge, i) => {
						return (
							<Sponsor key={i}>
								<Img
									fluid={edge.node.childImageSharp.fluid}
									alt={edge.node.name}
								/>
							</Sponsor>
						);
					})}
				</Grid> */}
				<h3>Prize sponsors</h3>
				<Grid lg={5} xl={7} gap={false}>
					{prizeSponsors?.edges?.map((edge, i) => {
						return (
							<Sponsor key={i}>
								<Img
									fluid={edge.node.childImageSharp.fluid}
									alt={edge.node.name}
								/>
							</Sponsor>
						);
					})}
				</Grid>

				{/* <h3>Division sponsors</h3>
        <Grid lg={2} xl={4} gap={false}>
          {divisionSponsors &&
            divisionSponsors.edges &&
            divisionSponsors.edges.map((edge, i) => {
              return (
                <Sponsor key={i}>
                  <Img
                    fluid={edge.node.childImageSharp.fluid}
                    alt={edge.node.name}
                  />
                </Sponsor>
              )
            })}
        </Grid>

        <h3>Prize sponsors</h3>
        <Grid lg={3} xl={5} gap={false}>
          {prizeSponsors &&
            prizeSponsors.edges &&
            prizeSponsors.edges.map((edge, i) => {
              return (
                <Sponsor key={i}>
                  <Img
                    fluid={edge.node.childImageSharp.fluid}
                    alt={edge.node.name}
                  />
                </Sponsor>
              )
            })}
        </Grid> */}
			</Container>
			<Container type="body">
				<div
					id="photographers"
					style={{ position: "absolute", marginTop: "-180px" }}
				/>
				<h2>Photographers</h2>

				<Grid lg={2} xl={3} gap={false}>
					{photographers?.edges
						?.sort((a, b) => a.node.name - b.node.name)
						.map((edge, i) => {
							return (
								<Sponsor key={i}>
									<Img
										fluid={edge.node.childImageSharp.fluid}
										alt={edge.node.name}
									/>
								</Sponsor>
							);
						})}
				</Grid>
			</Container>
		</>
	);
}

export const query = graphql`
  query {
    main: file(relativePath: { eq: "hunter-jumper/Willow and noelle of.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    banner: file(
      relativePath: { eq: "hunter-jumper/Jumper Varielle Canada PACT.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    banners: allFile(
      filter: { relativeDirectory: { eq: "hunter-jumper/banners" } }
    ) {
			edges {
			  node {
					name
          childImageSharp {
            fluid(maxWidth: 1920, quality: 64) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    image1: file(relativePath: { eq: "hunter-jumper/CUTIE PATUTIE.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    image2: file(relativePath: { eq: "hunter-jumper/fiji close up 2020.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    eliteSponsors: allFile(
      filter: { relativeDirectory: { eq: "hunter-jumper/sponsors2026/elite" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
            fixed(height: 80, grayscale: true) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }

    banquetSponsors: allFile(
      filter: {
        relativeDirectory: { eq: "hunter-jumper/sponsors2026/banquet" }
      }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    ringSponsors: allFile(
      filter: { relativeDirectory: { eq: "hunter-jumper/sponsors2026/ring" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    goldSponsors: allFile(
      filter: { relativeDirectory: { eq: "hunter-jumper/sponsors2026/gold" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    silverSponsors: allFile(
      filter: { relativeDirectory: { eq: "hunter-jumper/sponsors2026/silver" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    bronzeSponsors: allFile(
      filter: { relativeDirectory: { eq: "hunter-jumper/sponsors2026/bronze" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    photographers: allFile(
      filter: { relativeDirectory: { eq: "hunter-jumper/photographers2026" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    prizeSponsors: allFile(
      filter: { relativeDirectory: { eq: "hunter-jumper/sponsors2026/prize" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
