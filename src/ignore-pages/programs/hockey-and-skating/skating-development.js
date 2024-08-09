import React from "react"
import Container from "components/Container"
import Heading from "components/Heading"
import Button from "components/Button"
import Program from "components/Program"

export default function Default() {
  return (
    <>
      <Heading
        src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/DSC_0513.JPG"
        alt="Smiling kids playing hockey"
        title="Skating development"
        subtitle="Forward and backward skating, crossovers, tight-turns and more"
        keywords="power skating, backwards hockey skating, hockey crossovers, skating programs, skating development"
        metaTitle="Skating development"
        metaDescription="Join us for a 6 session program focused on the development of forward and backward skating, crossovers, tight-turns, etc. For boys and girls ages 6-12."
      />
      <Container type="body">
        <Program
          src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/DSC_0513.JPG"
          name="Skating development"
        >
          <p>
            Join us for a 6 session program focused on the development of
            forward and backward skating, crossovers, tight-turns, etc. For boys
            and girls ages 6-13.
          </p>
          <p>
            <i>
              <strong>
                This is not a learn to skate program. Full equipment is
                required.
              </strong>
            </i>
          </p>

          <h3>When</h3>

          <div className="staffTable">
            <table>
              <thead>
                <tr>
                  <th>Session</th>
                  <th>Tuesday evenings</th>
                  <th>2017, 2018, 2019</th>
                  <th>2014, 2015, 2016</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1</td>
                  <td>November 12, 2024 - December 17, 2024</td>
                  <td>6:00pm - 6:50pm</td>
                  <td>7:00pm - 7:50pm</td>
                </tr>
                <tr>
                  <td>#2</td>
                  <td>January 14, 2025 - February 18, 2024</td>
                  <td>6:00pm - 6:50pm</td>
                  <td>7:00pm - 7:50pm</td>
                </tr>

              
              </tbody>
            </table>
          </div>

          <h3>Cost</h3>
          <p>$260 +HST/player</p>

          <Button href="https://register.trmanager.com">Book now</Button>
        </Program>
      </Container>
    </>
  )
}
