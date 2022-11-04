import React from "react"
import Container from "components/Container"
import Heading from "components/Heading"
import Button from "components/Button"
import Program from "components/Program"

export default function Default() {
  return (
    <>
      <Heading
        src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/hockey14.jpg"
        alt="Spring hockey league"
        title="Spring hockey league"
        subtitle="Spring hockey leagues for kids age 5-14"
        keywords="hockey season preparation, stick handling, power skating"
        metaTitle="Spring hockey league"
        metaDescription="Spring hockey leagues for kids age 5-14"
      />
      <Container type="body">
        <Program
          src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/hockey14.jpg"
          name="Spring hockey league"
        >
          <p>
            Join us for a fun, 9-week recreational program. Sessions will
            consist of ten minutes of skill development followed by a 35-minute
            game. (Two teams per age group with limited spots per team.)
          </p>
          <h3>When</h3>
          <div
            style={{
              padding: "4rem",
              background: "purple",
              borderRadius: "4px",
              color: "#fff",
              textAlign: "center",
              fontSize: "2rem",
            }}
          >
            Returning Summer 2023
          </div>
          <ul>
            <li>
              <strong>U-7 (Age 5-6)</strong>: Tuesdays, 6:00pm - 6:50pm, April -
              June, 2023
            </li>
            <li>
              <strong>U-9 (Age 7-8)</strong>: Tuesdays, 7:00pm - 7:50pm, April -
              June, 2023
            </li>
            <li>
              <strong>U-11 (Age 9-10)</strong>: Wednesdays, 6:00pm - 6:50pm,
              April - June, 2023
            </li>
            <li>
              <strong>U-13/U-15 (Age 11-14)</strong>: Wednesdays, 7:00pm -
              7:50pm, April - June, 2023
            </li>
          </ul>
          {/* <h3>Cost</h3>
          $250 +HST
          <br />
          <Button href="https://register.trmanager.com">Book now</Button> */}
        </Program>
      </Container>
    </>
  )
}
