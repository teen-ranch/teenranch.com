import React from "react"
import Container from "components/Container"
import Heading from "components/Heading"
import Button, { CTAButton } from "components/Button"
import Program from "components/Program"
import { Price, PriceContainer } from "components/Price"
import Grid from "components/Grid"

export default function Default() {
  return (
    <>
      <Heading
        src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/DSC_0513.JPG"
        alt="Smiling kids playing hockey"
        title="Pond Hockey"
        subtitle="A year-long development program for boys and girls ages 5-16+"
        metaTitle="Pond hockey"
        metaDescription="Pond hockey is a year-long development program for boys and girls ages 5-16+ years old. There are three levels: Learn to Play, Junior and Senior to accommodate all levels of development."
      />
      <Container type="body">
        {/* <Grid md={2} gapSize="8rem"> */}
        <div>
          <h2>Pond hockey</h2>
          <p>
            Pond Hockey is a year-long development program for boys and girls
            ages 5-16+ years old. There are three levels: Learn to Play, Junior
            and Senior to accommodate all levels of development. This is not a
            graduated program, Teen Ranch staff will assess your child and place
            them in an appropriate level. Don't worry! If your skill level
            progresses quickly, the coaching staff may move you to the next
            level. If the level that you are in is too difficult they can
            accommodate your learning needs in a lower level.
          </p>
          {/* <p>
            Junior age players will join Shamrocks Local League players for
            Saturday scrimmages.
          </p> */}
          <p>
            <i>
              <strong>Full equipment is required.</strong>
            </i>
          </p>

          <h3>When</h3>
          <p>
            Saturdays: October 22, 2022 - March 11, 2023 (18 sessions)
            <br />
            <br />
            <strong>No sessions on:</strong>
            <ul>
              <li>December 24, 2022</li>
              <li>December 31, 2022</li>
              <li>February 18, 2023</li>
            </ul>
          </p>

          <div className="staffTable">
            <table>
              <thead>
                <tr>
                  <th>Division</th>
                  <th>Ages</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Learn to play</td>
                  <td>5-8</td>
                  <td>8:00am - 9:00am</td>
                </tr>
                <tr>
                  <td>Junior</td>
                  <td>7-10</td>
                  <td>11:00am, 12:00pm, 1:00pm, or 2:00pm</td>
                </tr>
                <tr>
                  <td>Senior</td>
                  <td>11+</td>
                  <td>10:00am - 11:00am</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* <div>
            <h2>Shamrocks Local League</h2>
            <p>
              The Erin Shamrocks in partnership with @teenranchcanada are proud
              to expand our hockey development program to House League/Local
              League players!
            </p>
            <p>
              Our partnership with Teen Ranch’s world class trainers and
              facilities will provided the best development in the GTA for these
              players at the best cost.
            </p>
            <p>
              All players will receive an average of 2.5 hours of hockey a week,
              lead by elite development coaches, while maintaining the fun and
              recreational values of local small town hockey.
            </p>
            <p>
              We are so excited to continue to grow the great game of hockey!
            </p>
            <p>
              <i>
                <strong>Full equipment is required.</strong>
              </i>
            </p>

            <h3>When</h3>
            <p>
              <ul>
                <li>Every other Tuesday: half-ice team practice</li>
                <li>
                  Wednesdays: Skills & skating development (Novice: 6:00pm -
                  7:00pm, Atom: 7:00pm - 8:00pm)
                </li>
                <li>
                  Saturdays: 1 hour scrimmage, 4 teams per age group, 11:00am -
                  2:00pm game times
                </li>
              </ul>
              Tuesdays (every other), Wednesdays and Saturdays: October 11th,
              12th & 15th, 2022 - March 7th, 8th & 11th, 2023
              <br />
              <br />
              <strong>No sessions on:</strong>
              <ul>
                <li>December 20, 2022</li>
                <li>December 21, 2022</li>
                <li>December 24, 2022</li>
                <li>December 27, 2022</li>
                <li>December 28, 2022</li>
                <li>December 31, 2022</li>
                <li>February 18, 2023</li>
              </ul>
            </p>

            <div className="staffTable">
              <table>
                <thead>
                  <tr>
                    <th>Division</th>
                    <th>Ages</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Junior & Shamrocks Local League</td>
                    <td>7-10</td>
                    <td>11:00am, 12:00pm, 1:00pm, or 2:00pm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div> */}
        {/* </Grid> */}
      </Container>

      <Container type="body">
        <div
          id="pricing"
          style={{ position: "absolute", marginTop: "-180px" }}
        />
        <h1>Pricing</h1>
        <PriceContainer>
          <Price
            title={<>Pond Hockey</>}
            subTitle={`A year-long development program for boys and girls
            ages 5-16+ years old.`}
            who="Learn to play (ages 5-8), Junior (ages 7-10), Senior (ages 11+)"
            price={395}
            term="season"
            includes={["1 hour scrimmage every Saturday"]}
          >
            <CTAButton href="https://register.trmanager.com">
              Register now
            </CTAButton>
          </Price>
          {/* <Price
            title={<>Shamrocks local league</>}
            subTitle={`A high-performance development program.`}
            who="Junior (ages 7-10)"
            price={595}
            term="season"
            includes={[
              `50 hours of ice time`,
              "Skills & skating development on Wednesdays",
              "Half-ice team practice every other Tuesday",
              `1 hour scrimmage every Saturday`,
            ]}
          >
            <CTAButton href="https://register.trmanager.com">
              Register now
            </CTAButton>
          </Price> */}
        </PriceContainer>
      </Container>
    </>
  )
}
