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
          <div className="staffTable">
            <table>
              <thead>
                <tr>
                  <th>Session</th>
                  <th>Date</th>
                  <th>Age 6-8</th>
                  <th>Age 9-13</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>(A) Pre-tryout session</td>
                  <td>Tuesdays: March 14, 2023 - April 18, 2023</td>
                  <td>6:00pm - 6:50pm</td>
                  <td>7:00pm - 7:50pm</td>
                </tr>
                <tr>
                  <td>
                    <span style={{ color: "red" }}>NEW</span>
                    <br />
                    (B) Spring session
                  </td>
                  <td>Thursdays: May 11, 2023 - June 15, 2023</td>
                  <td>6:00pm - 6:50pm</td>
                  <td>7:00pm - 7:50pm</td>
                </tr>
                <tr>
                  <td>(C) Pre-season session</td>
                  <td>Tuesdays: July 25, 2023 - August 29, 2023</td>
                  <td>6:00pm - 6:50pm</td>
                  <td>7:00pm - 7:50pm</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3>Cost</h3>
          $250 +HST
          <br />
          <Button href="https://register.trmanager.com">Book now</Button>
        </Program>
      </Container>
    </>
  )
}
