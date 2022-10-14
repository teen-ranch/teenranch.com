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
        title="Skills development"
        subtitle="Shooting, stick-handling, passing and game-situation skills"
        keywords="stick handling, passing skills, game-situation skills, skating development"
        metaTitle="Skills development"
        metaDescription="Join us for a 6 session program focused on the development of individual shooting, stick handling, creativity and passing skills, as well as game situation type skills. For boys and girls ages 6-12."
      />
      <Container type="body">
        <Program
          src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/DSC_0513.JPG"
          name="Skills development"
        >
          <p>
            Join us for a 6 session program focused on the development of
            individual shooting, stick handling, creativity and passing skills,
            as well as game situation type skills. For boys and girls ages 6-13.
          </p>
          <p>
            <i>
              <strong>Full equipment is required.</strong>
            </i>
          </p>

          <h3>When</h3>

          <div className="staffTable">
            <table>
              <thead>
                <tr>
                  <th>Session</th>
                  <th>Wednesday evenings</th>
                  <th>Ages 6-8</th>
                  <th>Ages 9-13</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#2</td>
                  <td>November 9, 2022 - December 14, 2022</td>
                  <td>6:00pm - 6:50pm</td>
                  <td>7:00pm - 7:50pm</td>
                </tr>
                <tr>
                  <td>#3</td>
                  <td>January 11, 2023 - February 8, 2023</td>
                  <td>6:00pm - 6:50pm</td>
                  <td>7:00pm - 7:50pm</td>
                </tr>
                {/* <tr>
                  <td>November 10, 2021 - December 15, 2021</td>
                  <td>6:00pm - 6:50pm</td>
                  <td>7:00pm - 7:50pm</td>
                </tr>
                <tr>
                  <td>February 2, 2022 - March 9, 2022</td>
                  <td>6:00pm - 6:50pm</td>
                  <td>7:00pm - 7:50pm</td>
                </tr> */}
              </tbody>
            </table>
          </div>

          <h3>Cost</h3>
          <p>$250 +HST/player</p>

          <Button href="https://register.trmanager.com">Book now</Button>
        </Program>
      </Container>
    </>
  )
}
