import React from "react"
import Container from "components/Container"
import Heading from "components/Heading"
import Button from "components/Button"
import Program from "components/Program"
import ExternalLink from "components/ExternalLink"

export default function Default() {
  return (
    <>
      <Heading
        src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/learn%20to%20skate.jpg"
        imageOptions={{ rotate: 90 }}
        alt="Kids having fun skating on the ice"
        title="Learn to skate"
        subtitle="A beginner skating program for all ice sports."
        keywords="starskate, competitive figure skating, dufferin peel skating club"
        metaTitle="DSTARSKATE & Competitive Figure Skating"
        metaDescription="A beginner skating program for all ice sports."
      />
      <Container type="body">
        <Program
          src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/learn%20to%20skate.jpg"
          imageOptions={{ rotate: 90, h: 420 }}
          name="Learn to skate"
        >
          <p>
            <strong>
              COVID MESSAGE: Our COVID safety practices message will be sent to
              skaters & parents before the first class.
            </strong>
          </p>

          <p>
            Learn the basics of skating for all ice sports in this fun and
            fast-paced Teen Ranch Program. Our Learn-to-Skate Programs provide a
            solid start for participants of all ages and abilities. From the
            first steps on the ice to forwards, backwards, stops and turns,
            skaters will improve their balance, control and agility with small
            group instruction by our fully certified and experienced staff
            coaches. Progress reports, awards and incentives are included in the
            program.
          </p>

          <p>
            <i>CSA approved hockey helmets are mandatory.</i>
          </p>
          <Button href="https://register.trmanager.com">Book now</Button>
        </Program>

        <h3>Intro to skating</h3>
        <p>
          This program is for the beginner skater and will focus on the basic
          skills of balance, forward and backward skating and stopping.
        </p>

        <h3>Intro to figure skating</h3>
        <p>
          Skaters that have achieved basic skills and have an interest in figure
          skating will be introduced to edges, turns, crosscuts, spins and
          jumps. A figure skate with good fit and support will speed progress.
          We recommend{" "}
          <ExternalLink href="https://www.skatingboutique.com/">
            skatingboutique.com
          </ExternalLink>{" "}
          When participants have mastered introductory figure skating skills,
          they will be invited to join the Dufferin-Peel Skating Club to pursue
          Skate Canada tests and competitions.
        </p>

        <h3>Intro to hockey skating</h3>
        <p>
          Skaters that have achieved basic skating skills and have an interest
          in hockey will learn edges, turns & crosscuts and focus on developing
          strong skating skills for their game.
        </p>
        <p>
          <i>Hockey equipment may be worn.</i>
        </p>

        <h3>Pleasure skating</h3>
        <p>
          This is the program for skaters that have basic skating skills and
          want to continue learning for fun and fitness.
        </p>

        <h3>2021/2022 Semesters</h3>

        <div className="staffTable">
          <table>
            <thead>
              <tr>
                <th aria-label="Empty cell"></th>
                <th>Fall: Sep. 13 - Nov. 19</th>
                <th>Holiday: Nov. 22 - Mar. 4</th>
                <th>Winter: Mar. 11 - May. 13</th>
                <th>Spring: May 20 - June 24 </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Mondays</strong>
                  <br />
                  On-ice: 6:00pm - 6:50pm
                </td>
                <td>
                  <strong>$280 +HST</strong> (9 sessions)
                  <br />
                  No session Oct. 11
                </td>
                <td>
                  <strong>$250 +HST</strong> (8 sessions)
                  <br />
                  No session Dec. 20, Dec. 27, or Feb. 21
                </td>
                <td>
                  <strong>$250 +HST</strong> (8 sessions)
                  <br />
                  No session Apr. 18
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <strong>Fridays</strong>
                  <br />
                  On-ice: 6:00pm - 6:50pm
                </td>
                <td>
                  <strong>$310 +HST</strong> (10 sessions)
                </td>
                <td>
                  <strong>$280 +HST</strong> (9 sessions)
                  <br />
                  No session Dec. 24 or Dec. 31
                </td>
                <td>
                  <strong>$280 +HST</strong> (9 sessions)
                  <br />
                  No session Apr. 15
                </td>
                <td>
                  <strong>$186 +HST</strong> (6 sessions)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </>
  )
}
