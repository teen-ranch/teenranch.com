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
        alt="3 on 3 hockey league"
        title="3 on 3 hockey league"
        subtitle="3 on 3 hockey leagues for kids age 5+"
        keywords="hockey season preparation, stick handling, power skating"
        metaTitle="3 on 3 hockey league"
        metaDescription="3 on 3 hockey leagues for kids age 5+"
      />
      <Container type="body">
        <Program
          src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/hockey14.jpg"
          name="3 on 3 hockey league"
        >
          <p>Join our 3-on-3 Hockey for 7 sessions, played 45 minutes over two periods. Play half-ice on our Olympic-sized ice surface and improve your child's overall skill and game strategy by challenging players both offensively and defensively in this high-tempo, small-area game situation. This popular program fills quickly, limited space available.
          </p>
          <h3>When</h3>
          Sunday's, July 7 - August 25, 2024 (No session August 4, 2024)
          {/* <div
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
          </div> */}
          <ul>
            <li>
              <strong>U-7 (Age 5-6)</strong>: 4:30pm - 5:30pm (4 teams)
            </li>
            <li>
              <strong>U-9 (Age 7-8)</strong>: 5:30pm - 6:30pm (4 teams)
            </li>
            <li>
              <strong>U-11 (Age 9-10)</strong>: 6:30pm - 7:30pm (4 teams)
            </li>
            <li>
              <strong>U-13/U-15 (Age 11-14)</strong>: 7:30pm - 8:30pm (4 teams)
            </li>
          </ul>
          <h3>Cost</h3>
          $225 +HST (jersey included)
          <br />
          <Button href="https://register.trmanager.com">Book now</Button>
        </Program>
      </Container>
    </>
  )
}
