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
        subtitle="3 on 3 hockey leagues for kids age 6+"
        keywords="hockey season preparation, stick handling, power skating"
        metaTitle="3 on 3 hockey league"
        metaDescription="3 on 3 hockey leagues for kids age 6+"
      />
      <Container type="body">
        <Program
          src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/hockey14.jpg"
          name="3 on 3 hockey league"
        >
          <h3>When</h3>
          Sunday's, July 10 - August 21 2022 (Excluding July 31, 2022)
          <ul>
            <li>
              <strong>U-7 (Age 5-6)</strong>: 5:30pm - 6:30pm
            </li>
            <li>
              <strong>U-9 (Age 7-8)</strong>: 5:30pm - 6:30pm
            </li>
            <li>
              <strong>U-11 (Age 9-10)</strong>: 6:30pm - 7:30pm
            </li>
            <li>
              <strong>U-13/U-15 (Age 11-14)</strong>: 7:30pm - 8:30pm
            </li>
          </ul>
          <h3>Cost</h3>
          $180 +HST
          <br />
          <Button href="https://register.trmanager.com">Book now</Button>
        </Program>
      </Container>
    </>
  )
}
