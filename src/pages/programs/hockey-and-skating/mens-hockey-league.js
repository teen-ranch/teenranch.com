import React from "react"
import Container from "components/Container"
import Heading from "components/Heading"
import Button from "components/Button"
import Program from "components/Program"

export default function Default() {
  return (
    <>
      <Heading
        src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/hockey15.jpg"
        alt="Men's hockey league"
        title="Men's hockey league"
        subtitle="Summer and Fall hockey leagues for men age 30+"
        keywords="men's hockey leage"
        metaTitle="Men's hockey league"
        metaDescription="Men's hockey leages near Orangeville, Ontario, Canada"
      />
      <Container type="body">
        <Program
          src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/hockey15.jpg"
          name="Men's hockey league"
        >
          {/* <p>Spring and Fall hockey leagues for men age 30+</p> */}

          <h3>Fall hockey league (35+)</h3>
          <p>(12 teams)</p>
          <ul>
            <li>Wednesday nights: 8:00pm and 9:00pm game times</li>
            <li>
              Thursday nights: 7:00pm, 8:00pm, 9:00pm and 10:00pm game times
            </li>
          </ul>
          <ul>
            <li>
              <strong>When:</strong> Starts Wednesday September 21, 2022.
            </li>
            <li>
              <strong>Cost:</strong> $490 +HST
            </li>
          </ul>

          <Button href="https://register.trmanager.com">Book now</Button>

          <h3>Summer hockey league (30+)</h3>
          <p>
            Thursday nights. 8:00pm, 9:00pm, and 10:00 (if needed) game times
            (4-6 teams)
          </p>
          <ul>
            <li>
              <strong>When:</strong> Thursday May 25 - August 24, 2023.
            </li>
            <li>
              <strong>Cost:</strong> $260 +HST (12 games + playoffs)
            </li>
          </ul>

          <Button href="https://register.trmanager.com">Book now</Button>
        </Program>
      </Container>
    </>
  )
}
