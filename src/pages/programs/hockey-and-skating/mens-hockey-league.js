import React from "react"
import Container from "components/Container"
import Heading from "components/Heading"
import Button from "components/Button"
import Program from "components/Program"
import Card from "components/Card"
import { Time } from "components/Time"

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
        <Card>
          <div style={{ padding: "1rem 4rem", display: "flex", gap: "2rem" }}>
            <h2>Men's league standings</h2>
            <Button href="https://www.hometeamsonline.com/teams/default.asp?u=TEENRANCHHOCKEYLEAGU&s=hockey&p=home">
              View Standings
            </Button>
          </div>
        </Card>

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
              <strong>When:</strong> Starts Wednesday September 20, 2023 &
              Thursday September 21, 2023.
            </li>
            <li>
              <strong>Cost:</strong> $495 +HST
            </li>
          </ul>

          <Button href="https://register.trmanager.com">Book now</Button>
          

          <h3>Summer hockey league (30+)</h3>
          <p>Thursday nights. <Time>2000</Time> - <Time>2300</Time> (6 teams)</p>
          <ul>
            <li>
              <strong>When:</strong> May 9, May 16, May 23, July 11 - September 5, 2024 (shut down for 6 weeks) 
            </li>
            <li>
              <strong>Cost:</strong> $210 +HST (9 games + playoffs)
            </li>
          </ul>

          <Button href="https://register.trmanager.com">Book now</Button>
        </Program>
      </Container>
    </>
  )
}
