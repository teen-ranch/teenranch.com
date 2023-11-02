import React from "react"
import Container from "components/Container"
import Heading from "components/Heading"
import Button from "components/Button"
import Program from "components/Program"

export default function Default() {
  return (
    <>
      <Heading
        src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/horse19.jpg"
        alt="Equitation on the flat"
        title="Schooling ring rental"
        subtitle="Outdoor horseback riding arenas for rent"
        keywords="riding arena rental, horseback riding facilities, horseback riding arena caledon ontario"
      />
      <Container type="body">
        <Program
          src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/blu%20flat.jpg"
          name="Schooling ring rental"
        >
          Come and get some extra off property practice. Ring schooling will be
          available on the Saturday before each show only.
          <ul>
            <li>Ring 1, 3 & 4 hunter courses available</li>
            <li>Grass jumper ring available</li>
            <li>Pre-booking and pre-payment required*</li>
            <li>$40.00 +HST per horse per hour of ring time</li>
            <li>Jumps go to a max of 2'9" in Ring #3, 2'6" in Ring #1</li>
          </ul>
          <Button href="mailto:events@teenranch.com?subject=Schooling ring rental">
            Rent a schooling ring
          </Button>
        </Program>
      </Container>
    </>
  )
}
