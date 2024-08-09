import React from "react"
import Container from "components/Container"
import Heading from "components/Heading"
import Button from "components/Button"
import Program from "components/Program"
import Card, { CardPadding } from "components/Card"
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
          // name="Men's hockey league"
        >
          {/* <p>Spring and Fall hockey leagues for men age 30+</p> */}

<Card>
  <CardPadding>
  
<h3>Men's Recreational League (35+) <sm style={{fontSize: '11pt'}}>(4-6 teams)</sm></h3>
<p><strong>When:</strong> September 24, 2024 - April 8, 2025</p>
<ul>
  <li>Tuesday nights: <Time>2000</Time>, <Time>2100</Time>, and <Time>2200</Time> game times</li>
  <li><strong>Cost:</strong> $450 +HST</li>
</ul>
          <Button href="https://register.trmanager.com">Book now</Button>
          </CardPadding>
</Card>

<Card>
  <CardPadding>
<h3>Sunday League (18+) <sm style={{fontSize: '11pt'}}>(18 teams)</sm></h3>
<p><strong>When: September, 2024 - April, 2025</strong></p>
<ul>
  <li>Sundays: <Time>1330</Time> - <Time>2300</Time> game times</li>
  <li>Full-team entry</li>
</ul>
<strong>Contact <a href="mailto:brent.boschman@teenranch.com">brent.boschman@teenranch.com</a> for team bookings.</strong>
  </CardPadding>
</Card>


<Card>
  <CardPadding>

<h3>Men's League (35+) <sm style={{fontSize: '11pt'}}>(14 teams)</sm></h3>
<p><strong>When: September 18, 2024 - April 17, 2025</strong></p>
<ul>
  <li>Wednesdays: <Time>2000</Time> - <Time>2300</Time> game times</li>
  <li>Thursdays: <Time>1900</Time> - <Time>2300</Time> game times</li>
  <li><strong>Cost:</strong> $495 +HST</li>
  <li>Full-team entry</li>
</ul>
<strong>Contact <a href="mailto:brent.boschman@teenranch.com">brent.boschman@teenranch.com</a> for team bookings.</strong>
  </CardPadding>
</Card>


        </Program>
      </Container>
    </>
  )
}
