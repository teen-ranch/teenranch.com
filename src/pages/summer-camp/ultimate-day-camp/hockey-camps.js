import React from "react"
import Container from "components/Container"
import Heading from "components/Heading"
// import Button from 'components/Button'
import { graphql } from "gatsby"

import SubNav from "components/SubNav"
import { PrimaryButton, CTAButton, PdfButton } from "components/Button"
import Program, { ProgramContainer } from "components/Program"

// import Grid from 'components/Grid'
// import Coach from 'components/Coach'
import { Link } from "react-scroll"
import { PriceContainer, Price, PriceAddon } from "components/Price"
import Quote from "../../../components/Quote"
import CampSchedule, {
  PreBuiltCampSchedule,
} from "../../../components/CampSchedule"
import Grid from "components/Grid"
// import Sponsor from 'components/Sponsor'
import Img from "gatsby-image"
import { UltimateDayCampTerms } from "components/Terms"
import { Link as ReachLink } from "@reach/router"
import JumpStart from "components/JumpStart"
import UltimateDayCampIntro from "components/UltimateDayCampIntro"
import { BalancePayments } from "components/BalancePayments"
import { PhotoGrid } from "components/PhotoGrid"

const frontmatter = {
  title: "Hockey camps",
  path: "/summer-camp/ultimate-day-camp/hockey-camps/",
}

const pageData = {
  subTitle: `Canada's finest hockey school since 1971`,
  keywords:
    "summer hockey camp, hockey camp ontario, hockey camp orangeville, hockey camp toronto",
}

export default function Programs({ data }) {
  const {
    brent,
    erik,
    matt,
    file,
    iceCorral,
    hockeyNowWinner,
    hockeyCamp,
    girlsHockeyCamp,
    highPerformanceHockey,
    goalieCamp,
    activities,
  } = data

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
        <h1>Achieve your goals this season</h1>

        <p>
          Teen Ranch has run one of the most exceptional skills & skating
          development hockey programs since 1971! Countless players and coaches
          from all over the world, outstanding professional instructors, and our
          on-site rink with an olympic-size ice surface are integral to making
          this the best place to help you reach your goals both on and off the
          ice.
        </p>

        <p>
          We focus on developing the whole athlete. Teen Ranch is a place where
          hockey players develop not only physically and mentally but develop
          truly life changing friendships and mentorships that last a lifetime.
        </p>
      </Container>

      <Container type="body">
        <UltimateDayCampIntro />
      </Container>

      <Container type="body">
        <h2>Info pack</h2>
        <div>
          <PdfButton
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.canva.com/design/DAGFJIcYvyU/1HdTdbLNfDu487m1nvWzEg/view?utm_content=DAGFJIcYvyU&utm_campaign=summer-camp&utm_medium=link&utm_source=teenranch.com"
          >
            Ultimate day camp / junior day camp info pack
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
          Hockey camp is perfect for players and goalies of all ability levels.
          We offer specialized programs for house league to rep-players.
        </p>

        <ProgramContainer>
          <Program
            small
            name="Hockey day camp"
            who="Players & goalies (co-ed)"
            src={hockeyCamp.childImageSharp.fluid}
          >
            Skills & skating development and full-ice scrimmages for players and
            goalies of all ability levels, with a focus on enjoying the game.
          </Program>
          <Program
            small
            name={`Girl's hockey camp`}
            who="Players & goalies (female)"
            src={girlsHockeyCamp.childImageSharp.fluid}
          >
            For girl's specific camps,{" "}
            <ReachLink to="/summer-camp/overnight-camp/hockey-camps/">
              see our overnight camps
            </ReachLink>
          </Program>
          <Program
            small
            name="Elite hockey day camp"
            who="AA/AAA Players & goalies (co-ed)"
            src={highPerformanceHockey.childImageSharp.fluid}
          >
            For high-performance players focused on advanced skills in skating,
            puck handling, shooting, and passing.
          </Program>
          <Program
            small
            name="Goalie camp"
            who="Goalies (co-ed)"
            src={goalieCamp.childImageSharp.fluid}
          >
            For goalie specific camps,{" "}
            <ReachLink to="/summer-camp/overnight-camp/hockey-camps/">
              see our overnight camps
            </ReachLink>
            .
          </Program>
        </ProgramContainer>
      </Container>

      <Container type="body">
        <div style={{ textAlign: "center" }}>
          <Img
            fixed={hockeyNowWinner.childImageSharp.fixed}
            alt="Best hockey school in Ontario award."
          />
        </div>
        <Quote cite="J R U">
          Best camp for kids in southern Ontario.{" "}
          <strong>Won best hockey school in Ontario.</strong> Beautiful grounds.
          Beautiful staff that really care about kids and their well being.
          Hockey, horses, BMX, skating, adventure, soccer, you name it they
          probably have it. Beautiful meals served three times a day! This place
          is fantastic. An oasis.
        </Quote>
      </Container>

      <Container type="body">
        <h1>Functional fitness program (Elite & Goalie)</h1>

        <p>
          High-performance athletes have exclusive access to our functional
          fitness program designed specifically for hockey players. This program
          is designed to develop strength, explosive power, hand-eye
          coordination, speed & quickness, and endurance.
        </p>
        <p>
          Off-ice circuit training and high tempo plyometrics, aerobic,
          anaerobic workouts, core strengthening, and bodyweight strength
          training.
        </p>

        {/* <PrimaryButton to='/programs/functional-fitness-program/'>Learn more</PrimaryButton> */}
      </Container>

      <Container type="body">
        <h1>Our coaching staff</h1>

        {/* <Grid md='2'> */}

        <Program src={brent.childImageSharp.fluid}>
          <h2>Brent Boschman</h2>
          <h3>Head coach</h3>
          <p>
            Brent is a Liberty University graduate and All-American, the son of
            former Ottawa Senators Captain Laurie Boschman, is a highly regarded
            coach, instructor, and player agent, holding a degree in Sport
            Management and is the Liberty Flames third all-time leading scorer.
          </p>
        </Program>
        <Program src={erik.childImageSharp.fluid} swap>
          <h2>Erik Bradford</h2>
          <h3>Hockey coach</h3>
          <p>
            Joining us again this summer as a full time hockey coach is Erik
            Bradford from Orangeville. Erik played for the Cleveland Monsters of
            the American Hockey League this past season, the AHL affiliate of
            the Columbus Blue Jackets.
          </p>
        </Program>

        <Program src={matt.childImageSharp.fluid}>
          <h2>Matthew Maggio</h2>
          <h3>Guest hockey coach (July 30th - August 4th week)</h3>
          <p>
            Guest coach Matthew Maggio will join us on ice. Matthew was the
            Captain of the Windsor Spitfires and the OHL's leading scorer this
            past season, as well as leading the league in goals scored. He was
            drafted by the New York Islanders in the 5th round of the 2022 NHL
            draft.
          </p>
        </Program>
        {/* <Program src={ eddie.childImageSharp.fluid } swap>
                        <h2>Eddie Davey</h2>
                        <h3>Goalie coach</h3>
                        <p>
                        Eddie Davey played four years of Jr. A hockey in Ontario, winning the MVP of the NOJHL league while setting a league Wins record and leading his team to the Dudley Hewitt Cup his final season. He went on to attend Westfield State University at the NCAA Div. 3 levels where he played for four years and graduated with honors from the criminal justice program with a minor in psychology. Eddie currently resides in Orangeville where he runs the Monarch Goaltending Development school and plays semi-professional for the Shelburne Muskies. 
                        </p>
                    </Program> */}

        <h2>Previous guest instructors</h2>
        <ul>
          <li>James Naylor - Toronto Marlboros Minor Hockey President</li>
          <li>Erik Bradford - Cleveland Monsters - AHL</li>
          <li>Alex Adams – ex. ECHL/USports player</li>
          <li>
            Matthew Maggio - Windsor Spitfires – OHL - 5th round NHL Draft pick
            to the New York Islanders
          </li>
          <li>Brian Stapleton - ex NHL player</li>
          <li>Brenden Miller - Cleveland Monsters - AHL</li>
          <li>Marcus Joughin - Sacred Heart University - NCAA Div 1</li>
          <li>Brendan Kennette - Sacred Heart University - NCAA Div 1</li>
        </ul>

        {/* <Coach name='Brent Boschman' title='Head coach' src={ brent.childImageSharp.fluid }
                        description={
                            <>
                                <p>
                                    Brent is a Liberty University graduate and ALl-American, the son of former Ottawa Senators Captain Laurie Boschman, is a highly regarded coach, instructor, and player agent, holding a degree in Sport Management and is the Liberty Flames third all-time leading scorer. 
                                </p>
                            </>
                        }
                    /> */}
        {/* <Coach name='Eddie Davey' title='Goalie coach' src={ eddie.childImageSharp.fluid }
                        description={<>
                            <p>
                                Eddie Davey played four years of Jr. A hockey in Ontario, winning the MVP of the NOJHL league while setting a league Wins record and leading his team to the Dudley Hewitt Cup his final season. He went on to attend Westfield State University at the NCAA Div. 3 levels where he played for four years and graduated with honors from the criminal justice program with a minor in psychology. Eddie currently resides in Orangeville where he runs the Monarch Goaltending Development school and plays semi-professional for the Shelburne Muskies. 
                            </p>
                        </>} 
                    /> */}
        {/* </Grid> */}
      </Container>

      <Container type="body">
        <h1>Facilities</h1>

        <Program src={iceCorral.childImageSharp.fluid}>
          <h2>The Ice Corral</h2>
          <p>
            Completed in 1995, the Teen Ranch Ice Corral has seating for up to
            1,000 spectators, an <strong>olympic-size ice pad</strong>, and a{" "}
            <strong>sand base</strong> that makes an exceptionally good ice
            surface.
          </p>
          <p>
            We have had the privilege of hosting many pro and semi-pro teams
            including the Toronto Maple Leafs, Montreal Canadians, Ottawa
            Senators, Florida Panthers, Olympic teams from Canada, Finland,
            Russia, Australia, Germany & more, St. Michael's Majors (OHL), and
            Mississauga Ice Dogs (AAA).
          </p>
        </Program>

        <PrimaryButton to="/facilities/">
          See more of our facilities
        </PrimaryButton>
      </Container>

      <Container type="body">
        <h1>Afternoon activities</h1>

        <p>
          Each afternoon, campers get to take their pick from some amazing camp
          activities on 150 beautiful acres including: giant swing, trail rides,
          rock climbing, bouldering, ninja climbing feature (NEW), water slide,
          swimming, water jousting, archery, tennis, basketball, volleyball, and
          more.
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
        <PreBuiltCampSchedule type="UDC" sections={["hockey"]} />

        <p>
          For goalie camp:{" "}
          <ReachLink to="/summer-camp/overnight-camp/">
            see our overnight camps.
          </ReachLink>
        </p>

        <CTAButton to="/summer-camp/ultimate-day-camp/">Register now</CTAButton>
      </Container>

      <div id="pricing" style={{ position: "absolute", marginTop: "-180px" }} />

      {/* <Container>
                <h1>Pricing</h1>
            </Container> */}

      <Container type="body">
        <h1>Pricing</h1>
        <UltimateDayCampTerms />
        <JumpStart />
        <PriceContainer xl={2} lg={2}>
          <Price
            title="Hockey day camp"
            subTitle="Skills & skating development for players and goalies of all ability levels, with a focus on enjoying the game."
            who="Players and goalies (co-ed)"
            price={895}
            term="week"
            includes={[
              "On-site, olympic-size ice rink",
              "Minimum 7.5 hours on-ice per week",
              "Skills development",
              "Skating development",
              "Full-ice scrimmages",
              "Fun-based off-ice program",
              "Jersey included",
              "Lunch & morning snack",
              "Snackbar",
              "All camp activities",
            ]}
          >
            <CTAButton href="https://register.trmanager.com">
              Register now
            </CTAButton>
          </Price>

          <Price
            title={<>Elite hockey day camp</>}
            subTitle="For high-performance players focused on advanced skills in skating, puck handling, shooting, and passing."
            who="Rep-level players (co-ed)"
            price={1100}
            term="week"
            primary
            includes={[
              <>
                Everything in <strong>hockey camp</strong>, plus:
              </>,
              "Minimum 12.5 hours ice time",
              "High-intensity skills development",
              "Power skating",
              "Game-situation skills",
              "Afternoon Full-ice scrimmages",
              "Functional fitness program",
              "T-shirt and shorts included",
            ]}
          >
            <CTAButton href="https://register.trmanager.com">
              Register now
            </CTAButton>
          </Price>
          {/* <Price
            title="Goalie day camp"
            subTitle="Goalie specific training, with a focus on angles, technique, rebound-control, proper form, butterfly and much more."
            who="Goalies (co-ed)"
            price={1050}
            term="week"
            includes={[
              <>
                Everything in <strong>hockey camp</strong>, plus:
              </>,
              "High-intensity skills development",
              "Minimum 12.5 hours ice time",
              "Form & stance",
              "Butterfly",
              "Angles",
              "Rebound-control",
              "Functional fitness program",
              "Free t-shirt and shorts",
              "Afternoon scrimmages",
            ]}
          >
            <CTAButton href="https://register.trmanager.com">
              Register now
            </CTAButton>
          </Price> */}
        </PriceContainer>
      </Container>

      <Container type="body">
        <h2>Additional summer programs:</h2>
        <PriceAddon
          title="Summer drop-in ice time (9:00am - 10:30am)"
          subTitle="Two-weeks only!"
          description={
            <>
              Join in with our regular hockey program for 1.5 hours of ice time
              each morning, Monday - Friday.
            </>
          }
          price={350}
          term="week"
          to="https://register.trmanager.com"
        />
      </Container>

      <Container type="body">
        <h2>Hockey camp add-ons:</h2>
        {/* <PriceAddon
          title="Extended care"
          subTitle="6:00pm late pick-up"
          description={
            <>
              Please contact us for additional options if 6:00pm late pick-up
              doesn't work for your family.
            </>
          }
          price={75}
          term="week"
        /> */}
        <PriceAddon
          title="Semi-private lessons"
          subTitle="Max 4:1 instructor ratio"
          description={
            <>
              Get an edge up on the competition with focused and personalized
              instruction.
              <p>
                <i>As ice-availability permits</i>
              </p>
            </>
          }
          price={100}
          term="hour"
          to="mailto:icecorral@teenranch.com?subject=Semi-private lessons"
        />
      </Container>

      <BalancePayments />
    </>
  )
}

// const NavLink = ({ children, ...props }) => (
//     <Link {...props} activeClassName='active'>{ children }</Link>
// )

export const query = graphql`
  query {
    file(relativePath: { eq: "facilities/iceCorral/hockey9.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    hockeyNowWinner: file(
      relativePath: {
        eq: "programs/hockey/hockeyNow_bestHockeySchoolInOntarioWinner.png"
      }
    ) {
      childImageSharp {
        fixed(height: 180, quality: 64) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }

    hockeyCamp: file(relativePath: { eq: "programs/hockey/IMG_5099.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 600, maxHeight: 334, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    girlsHockeyCamp: file(
      relativePath: { eq: "programs/hockey/tr girls pic.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600, maxHeight: 334, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    highPerformanceHockey: file(
      relativePath: { eq: "facilities/iceCorral/hockey14.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    goalieCamp: file(relativePath: { eq: "programs/hockey/goalie.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    brent: file(relativePath: { eq: "coaches/brent-boschman.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    erik: file(
      relativePath: {
        eq: "coaches/221022_-_W_-_BRADFORD_enters_the_zone_D_AMICO_in_background.webp"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    matt: file(
      relativePath: {
        eq: "coaches/Windsor-Spitfires-Matthew-Maggio-1200x935.webp"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    # eddie: file(relativePath: { eq: "coaches/eddie-davey.jpg" }) {
    #     childImageSharp {
    # 		fluid(maxWidth: 1920 quality: 64) {
    # 			...GatsbyImageSharpFluid_withWebp
    # 		}
    # 	}
    # }

    iceCorral: file(
      relativePath: { eq: "facilities/iceCorral/iceCorral1.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 64) {
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
`
