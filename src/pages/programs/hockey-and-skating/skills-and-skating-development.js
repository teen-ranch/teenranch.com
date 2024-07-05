import React from "react"
import Container from "components/Container"
import Heading from "components/Heading"
import Button from "components/Button"
import Program from "components/Program"
import { Link } from "gatsby"
import { RinkClosed } from "components/RinkClosed"

export default function Default() {
  return (
    <>
      <Heading
        src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/DSC_0513.JPG"
        alt="Smiling kids playing hockey"
        title="Skills & Skating Development"
        subtitle="A six session program designed to get you ready for tryouts or the upcoming season."
        keywords="hockey season preparation, stick handling, power skating"
        metaTitle="Skills & Skating Development"
        metaDescription="A six session program designed to get you ready for tryouts or the upcoming season."
      />
      <Container type="body">
        <Program
          src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/DSC_0513.JPG"
          name="Skills & Skating Development"
        >
          <RinkClosed/>
          <p>
            A six (five sessions for (B-REP)) session program focused on the development of forward and
            backward skating, crossovers, tight-turns, individual shooting,
            stick handling, creativity, passing, as well as game situation type
            skills. For boys and girls ages 6-13.
          </p>
          <h3>Ages 6-13</h3>
          <div style={{ color: "red" }}>
            Please see our current{" "}
            <Link to="/programs/hockey-and-skating/skating-development/">
              Skating Development
            </Link>{" "}
            and{" "}
            <Link to="/programs/hockey-and-skating/skills-development/">
              Skills Development
            </Link>{" "}
            programs.
          </div>
          <div className="staffTable">
            <table>
              <thead>
                <tr>
                  <th>Session</th>
                  <th>Date</th>
                  <th>Age 6-8</th>
                  <th>Age 9-13</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>(Session 1) Pre-season</td>
                  <td>Tuesdays: July 23, 2024 - August 27, 2024 (6 sessions)</td>
                  <td>6:00pm - 6:50pm</td>
                  <td>7:00pm - 7:50pm</td>
                  <td>$260 +HST</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th>Session</th>
                  <th>Date</th>
                  <th>2014, 2015, 2016</th>
                  <th>2011, 2012, 2013</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>(Session 2) Pre-season (REP)</td>
                  <td>Wednesdays: July 24, 2024 - August 28, 2024 (5 sessions)<br/><span style={{color:'red'}}>No session August 14</span></td>
                  <td>6:00pm - 6:50pm</td>
                  <td>7:00pm - 7:50pm</td>
                  <td>$220 +HST</td>
                </tr>
              </tbody>
            </table>
            <div style={{fontSize: '11pt', marginTop: '10px'}}>Note: (B-REP) Skills & Skating participants receive one free ticket to <a href="https://www.hockeynightdc.ca/" target="_blank" rel="noopener noreferrer">Hockey Night in Dufferin-Caledon</a>.</div>
          </div>
          <br />
          <Button href="https://register.trmanager.com">Book now</Button>
        </Program>
      </Container>
    </>
  )
}


