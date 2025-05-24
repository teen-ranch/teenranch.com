import React from "react";
import Container from "components/Container";
import Heading from "components/Heading";
// import Button from 'components/Button'
import { graphql } from "gatsby";

import SubNav from "components/SubNav";
import { PrimaryButton, CTAButton, PdfButton } from "components/Button";
import Program, { ProgramContainer } from "components/Program";

// import Grid from 'components/Grid'
// import Coach from 'components/Coach'
import { Link } from "react-scroll";
import { PriceContainer, Price, PriceAddon } from "components/Price";
import Quote from "../../../components/Quote";
import CampSchedule, {
	PreBuiltCampSchedule,
} from "../../../components/CampSchedule";
import Grid from "components/Grid";
// import Sponsor from 'components/Sponsor'
import Img from "gatsby-image";
import { OvernightCampTerms } from "../../../components/Terms";
import JumpStart from "components/JumpStart";
import { Time } from "components/Time";
import { BalancePayments } from "components/BalancePayments";
import { PhotoGrid } from "components/PhotoGrid";

const frontmatter = {
	title: "Horse camps",
	path: "/summer-camp/ultimate-day-camp/horse-camps/",
};

const pageData = {
	subTitle: `Canada's finest horse camp since 1967`,
	keywords:
		"summer horse camp, horse camp ontario, horse camp orangeville, horse camp toronto",
};

export default function Programs({ data }) {
	const { file, western, english, intensive, rodeo, activities } = data;

	return (
		<>
			<Heading
				src={file.childImageSharp.fluid}
				// src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/hockey14.jpg'
				alt="Hockey player taking a slapshot"
				title={frontmatter.title}
				subtitle={pageData.subTitle}
				metaTitle={pageData.metaTitle || frontmatter.title}
				metaDescription={pageData.metaDescription || pageData.subTitle}
				keywords={pageData.keywords}
			/>

			<SubNav>
				<Link to="top" activeClass="active" spy={true}>
					Overview
				</Link>
				<Link to="dates" activeClass="active" spy={true}>
					Dates
				</Link>
				<Link to="pricing" activeClass="active" spy={true}>
					Pricing
				</Link>
			</SubNav>

			<div id="top" style={{ position: "absolute", marginTop: "-120px" }} />

			<Container type="body">
				<h1>Horse camp</h1>

				<p>
					The Teen Ranch horse program is for all ability levels to learn or
					develop their skills on safe, well-schooled horses.
				</p>

				<p>
					Beginner riders start with the basics of position and control.
					Intermediate riders continue to hone the basics while being introduced
					to new skills. Advanced riders will be challenged to perfect their
					jumping position, equitation and effective communication with their
					horse.
				</p>

				<p>
					Teen Ranch instructors are trained according to CHA standards, putting
					the largest emphasis on safety, education and fun. All full-time staff
					are certified in First Aid.
				</p>
			</Container>

			<Container type="body">
				<h1>Overnight camp for outrageous fun</h1>

				<p>
					Overnight campers experience all the fun and adventure a week of
					summer camp has to offer. Campers enjoy the great outdoors, get
					active, and make new friends.
				</p>
				<p>
					In the morning, campers hone skills in their program/sport of choice.
					Afternoons are their chance to enjoy a variety of Teen Ranch
					activities and bunkroom time - a unique opportunity for growth,
					bonding, and overall fun!! Evenings include camp-wide games and
					nightly campfires with engaging, real-life topics shared from a
					biblical perspective.
				</p>
				<p>
					Campers are housed in{" "}
					<a href="/facilities/" target="_blank">
						top-notch facilities
					</a>{" "}
					that include a private washroom and air conditioning.
				</p>
				<p>
					Our well-trained staff are committed to the safety and well-being of
					each camper and aim to come alongside them to challenge, encourage,
					and inspire!
				</p>

				<h3>Weekly overview</h3>
				<p>
					Summer Overnight Camps will run Sunday evenings - Friday evenings
					(August 4-8 week starts Monday).
				</p>
				<ul>
					<li>
						<strong>
							Check-in and BBQ: Sunday, <Time>1630</Time>
						</strong>{" "}
						- Check-in and then visit the snack bar, western store, settle into
						your room and meet your leaders! Camp welcome following BBQ.
					</li>
					<li>
						<strong>
							Parent goodbye: Sunday, <Time>1730</Time>
						</strong>
					</li>
					<li>
						<strong>
							Pick-up: Friday, <Time>1830</Time>
						</strong>
					</li>
				</ul>
				<p>
					<em>Note: See info pack for more details.</em>
				</p>
			</Container>

			<Container type="body">
				<h2>Info pack</h2>
				<div style={{ color: "red" }}>
					Check out our weekly camp themes and details in our camp info pack
					below:
				</div>
				<div>
					<PdfButton
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.canva.com/design/DAGoHIPLEFg/CwRhNWAQ4Q-8uWOaO3XORg/view"
					>
						Overnight camp info pack
					</PdfButton>
				</div>
				<p>
					Families will be notified by email six weeks before the camp start
					date for payment reminders and camp information.
				</p>
			</Container>

			<Container type="body">
				<h1>Who it's for</h1>
				<p>
					Horse camp is perfect for english and western riders of all ability
					levels. We offer a specialized rodeo program in addition to our
					english and western programs.
				</p>

				<ProgramContainer>
					<Program
						small
						name="Western riding camp"
						who="Beginner to advanced (age 8+)"
						src={western.childImageSharp.fluid}
					>
						An excellent place to start for first-time riders or western riding
						enthusiasts.
					</Program>
					<Program
						small
						name="English riding camp"
						who="Beginner to advanced (age 8+)"
						src={english.childImageSharp.fluid}
					>
						For kids of all riding levels to learn or develop new skills.
					</Program>
					{/* <Program */}
					{/*   small */}
					{/*   name="Intensive equestrian camp" */}
					{/*   who="Advanced hunter/jumper (age 12+)" */}
					{/*   src={intensive.childImageSharp.fluid} */}
					{/* > */}
					{/*   For english riders looking to improve their success in the show */}
					{/*   ring. */}
					{/*   {/* <p style={{ fontSize: "1.2rem" }}> */}
					{/*     Application video must be approved to qualify for this program. */}
					{/*   </p> */}
					{/*   {/* <p style={{ color: "red" }}>Applications closed for 2022</p> */}
					{/* </Program> */}
					<Program
						small
						name="Rodeo"
						who="Intermediate to advanced (age 11+)"
						src={rodeo.childImageSharp.fluid}
					>
						For western riders who want a taste of rodeo competition.
					</Program>
				</ProgramContainer>
			</Container>

			<Container type="body">
				<Quote cite="Diane">
					My child loves Teen Ranch and requests to go every year. That says so
					much coming from a kid. It is the only camp she is always eager to
					attend. She loves the horses and horseback riding. She loves the
					diverse activities, the food, and crafts. The staff are wonderful and
					friendly and she can't wait to go again!
				</Quote>
			</Container>

			<Container type="body">
				<h1>Afternoon activities</h1>

				<p>
					Each afternoon, campers get to take their pick from some amazing camp
					activities on 150 beautiful acres including: giant swing, trail rides,
					rock climbing, bouldering, water slide, swimming, water jousting,
					archery, tennis, basketball, volleyball, and more.
				</p>
				<PhotoGrid srcs={activities.edges} />

				{/* <Grid sm={2} md={2} lg={5} xl={5} gap={false}>
          {activities &&
            activities.edges &&
            activities.edges.map((edge, i) => {
              return (
                <div key={i} className="facility">
                  <Img
                    fluid={edge.node.childImageSharp.fluid}
                    alt="Activities"
                  />
                </div>
              )
            })}
        </Grid> */}
			</Container>

			<div id="dates" style={{ position: "absolute", marginTop: "-120px" }} />

			<Container type="body">
				<h1>Camp dates</h1>
				<PreBuiltCampSchedule type="ONC" sections={["horses"]} />

				<CTAButton to="/summer-camp/overnight-camp/">Register now</CTAButton>
			</Container>

			<div id="pricing" style={{ position: "absolute", marginTop: "-180px" }} />

			{/* <Container>
                <h1>Pricing</h1>
            </Container> */}

			<Container type="body">
				<h1>Pricing</h1>
				<OvernightCampTerms />
				<JumpStart />
				<PriceContainer xl={3}>
					<Price
						title={
							<>
								Western riding camp
								<br />
								<br />
							</>
						}
						subTitle={
							<>
								An excellent place to start for first-time riders or western
								riding enthusiasts.
							</>
						}
						who="Beginner to advanced"
						price={1065}
						priceTo={1335}
						term="week"
						includes={[
							"Basic position & control",
							"Lateral movement",
							"Patterns",
							"Games on horseback",
							"Barrel racing (advanced)",
							"Pole bending (advanced)",
							"All meals",
							"All camp activities",
						]}
					>
						<CTAButton href="https://register.trmanager.com">
							Register now
						</CTAButton>
					</Price>
					<Price
						title={
							<>
								English riding camp
								<br />
								<br />
							</>
						}
						subTitle={
							<>For kids of all riding levels to learn or develop new skills.</>
						}
						who="Beginner to advanced"
						price={1065}
						priceTo={1335}
						term="week"
						includes={[
							"Basic position & control",
							"Lateral movement",
							"Games on horseback",
							"Jumping position",
							"Equitation",
							"All meals",
							"All camp activities",
						]}
					>
						<CTAButton href="https://register.trmanager.com">
							Register now
						</CTAButton>
					</Price>
					{/* <Price */}
					{/*   title="Intensive equestrian camp" */}
					{/*   subTitle={ */}
					{/*     <> */}
					{/*       For english riders looking to improve their success in the show */}
					{/*       ring. */}
					{/*       {/* <p style={{ color: "red" }}>Applications closed for 2022</p> */}
					{/*     </> */}
					{/*   } */}
					{/*   who="Advanced hunter/jumper" */}
					{/*   price={1825} */}
					{/*   term="week" */}
					{/*   primary */}
					{/*   includes={[ */}
					{/*     "Minimum of 2 hours in-tack lessons per day", */}
					{/*     "Minimum of 1 hour out-of-tack lesson per day", */}
					{/*     "Off-site outing", */}
					{/*     "Photo shoot with your horse", */}
					{/*     "Free division entry in Sunday on-site hunter/jumper show", */}
					{/*     "All meals", */}
					{/*     "Stay over Friday & Saturday night", */}
					{/*   ]} */}
					{/* > */}
					{/*   <span style={{ fontSize: "1.2rem" }}> */}
					{/*     <center> */}
					{/*       <p> */}
					{/*         Application video must be approved to qualify for this */}
					{/*         program. */}
					{/*       </p> */}
					{/*       <p style={{ textAlign: "justify" }}> */}
					{/*         The application video should showcase short clips of trot, */}
					{/*         sitting trot, canter, jumping 2’3 or higher. Video should show */}
					{/*         ability to recognize and change lead on their own. Videos can */}
					{/*         be sent to{" "} */}
					{/*         <a href="mailto:corrie.ensom@teenranch.com"> */}
					{/*           corrie.ensom@teenranch.com */}
					{/*         </a> */}
					{/*         . */}
					{/*       </p> */}
					{/*     </center> */}
					{/*   </span> */}
					{/*   <CTAButton */}
					{/*     target="_blank" */}
					{/*     href="mailto:camp@teenranch.com?subject=Intensive camp application request" */}
					{/*   > */}
					{/*     Apply now */}
					{/*   </CTAButton> */}
					{/* </Price> */}
					<Price
						title={
							<>
								Rodeo camp
								<br />
								<br />
								<br />
							</>
						}
						subTitle={
							<>For western riders who want a taste of rodeo competition.</>
						}
						who="Intermediate to advanced"
						price={1595}
						term="week"
						includes={[
							"Roping",
							"Barrel racing",
							"Pole bending",
							"Goat tying",
							"Rodeo camp showdown",
							"All meals",
							"All camp activities",
						]}
					>
						<CTAButton href="https://register.trmanager.com">
							Register now
						</CTAButton>
					</Price>
				</PriceContainer>
			</Container>

			<BalancePayments />
		</>
	);
}

// const NavLink = ({ children, ...props }) => (
//     <Link {...props} activeClassName='active'>{ children }</Link>
// )

export const query = graphql`
  query {
    file(relativePath: { eq: "programs/horse/rachel.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    rodeo: file(relativePath: { eq: "programs/horse/Roping (179).jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    english: file(relativePath: { eq: "programs/horse/78.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    western: file(relativePath: { eq: "programs/horse/IMG_8574.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    intensive: file(relativePath: { eq: "programs/horse/rachel.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    activities: allFile(filter: { relativeDirectory: { eq: "activities" } }) {
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
