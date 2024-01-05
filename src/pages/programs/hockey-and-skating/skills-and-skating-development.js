import React from "react"
import Container from "components/Container"
import Heading from "components/Heading"
import Button from "components/Button"
import Program from "components/Program"
import { Link } from "gatsby"

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
          <p>
            A six session program focused on the development of forward and
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
                  <td>(A) Pre-tryout session</td>
                  <td>Tuesdays: March 5, 2024 - April 9, 2024 (6 sessions)</td>
                  <td>6:00pm - 6:50pm</td>
                  <td>7:00pm - 7:50pm</td>
                  <td>$240 +HST</td>
                </tr>
                <tr>
                  <td>(B) Spring session</td>
                  <td>Thursdays: April 18, 2024 - May 23, 2024 (6 sessions)</td>
                  <td>6:00pm - 6:50pm</td>
                  <td>7:00pm - 7:50pm</td>
                  <td>$260 +HST</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          <Button href="https://register.trmanager.com">Book now</Button>
        </Program>
      </Container>
    </>
  )
}
