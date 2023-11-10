import React from "react"
import Container from "components/Container"
import Heading from "components/Heading"
// import Button from 'components/Button'
// import Program from 'components/Program'
import { graphql } from "gatsby"

// // import ExternalLink from 'components/ExternalLink'
// import { PriceContainer, Price } from "components/Price"
import { PrimaryButton } from "components/Button"
import Grid from "components/Grid"

// import SubNav from 'components/SubNav'
// import Verse from 'components/Verse'

// import { PrimaryButton, CTAButton } from 'components/Button'

// import Img from 'gatsby-image'

import Event from "components/Event"
// import Card from 'components/Card'

import { DateTime } from "luxon"
import Img from "gatsby-image"
import { Time } from "components/Time"
import Video from "components/Video"

const frontmatter = {
  title: "Christmas at the Ranch",
  path: "/events/christmas-at-the-ranch/",
}

const pageData = {
  subTitle:
    "Round up your family and celebrate the season at our Christmas at the Ranch event!",
  keywords: "christmas event, christmas with the family",
}

const eventData = {
  title: frontmatter.title,
  description: `Experience a magical day filled with western fun and a very special guest. Families can enjoy a Santa Skate, visit and snap photos right alongside Teen Ranch’s very own Santa, enjoy a hayride through the ranch grounds, and warm up at our outdoor campfire. `,
  venue: {
    name: "Teen Ranch",
    address: {
      address: "20682 Hurontario Street",
      city: "Caledon",
      province: "ON",
      postalCode: "L7K 1X1",
    },
  },
}

export default function Default({ data }) {
  const stripePaymentLink = "https://buy.stripe.com/fZeg2s8tyflCfwQfZ1"
  // process.env.CF_PAGES_BRANCH === "main"
  //   ? "https://buy.stripe.com/9AQ5nO6lqa1i98scMN"
  //   : "https://buy.stripe.com/test_eVabKh7DidOO8dW7st"

  return (
    <>
      <Heading
        // src={`https://teenranch.nyc3.digitaloceanspaces.com/website/assets/familyDay.jpg`}
        src={data.file.childImageSharp.fluid}
        alt={frontmatter.title}
        title={frontmatter.title}
        subtitle={pageData.subTitle}
        metaTitle={pageData.metaTitle || frontmatter.title}
        metaDescription={pageData.metaDescription || pageData.subTitle}
        keywords={pageData.keywords}
      />

      <Container>
        <Grid md={2}>
          <div>
            <h1>{frontmatter.title}</h1>
            <p>
              Round up your family and celebrate the season at our Christmas at
              the Ranch event! Experience a magical day filled with western fun
              and a very special guest. Families can enjoy a Santa Skate, visit
              and snap photos right alongside Teen Ranch’s very own Santa, enjoy
              a hayride through the ranch grounds, and warm up at our outdoor
              campfire. Treat your kids to a special pony ride through our
              Evergreen Forest Trail. Come dressed in your seasonal attire and
              be ready for a festive day of family fun!
            </p>
            <p>
              Christmas trees and evergreen bundles will be available for sale.
            </p>
            <p>Make this your family christmas tree outing!</p>
            <h2>When is it?</h2>
            Saturday, December 9, 2023: <Time>1130</Time> - <Time>1500</Time>.
            Open to all ages
            <h2>Cost</h2>
            <strong>
              $19.95 +HST per person. Children age two and under are free.
            </strong>
            <div>
              <PrimaryButton
                target="_blank"
                rel="noopener noreferrer"
                href={`https://forms.zohopublic.com/teenranch1/form/ChristmasattheRanch2023/formperma/jGJGsyqrGHIP8naStBZ3ZJTKsptVYFdcdnra3mzmcGg?referrername=teenranch.com`}
              >
                Register now
              </PrimaryButton>
            </div>
          </div>
          <div style={{ maxWidth: "315px" }}>
            <Video
              src="https://youtube.com/embed/fhjKXlZUCDY?feature=shared"
              short
            />
          </div>
        </Grid>
        <h2>Event includes:</h2>
        <ul>
          <li>
            Santa Skate - Visit with Santa and snap photos while skating (bring
            your skates / helmets are recommended). Santa will be available to
            visit and take photos at different locations around the event.
          </li>
          <li>Hayride through the ranch grounds</li>
          <li>Christmas Craft </li>
          <li>Outdoor campfire fun</li>
          <li>Hot cocoa and treat </li>
        </ul>
        <h2>Add-ons:</h2>
        <ul>
          <li> Pony rides $10 per person* weather-permitting </li>
          <li> Christmas Trees</li>
          <li>Evergreen and Dogwood bundles </li>
          <li>Snack bar available (drinks, snacks, hot dogs) </li>
        </ul>
        <h2>Schedule</h2>
        <ul>
          <li>11:30 am - 1:00 pm Ice Skating - Santa will join us on ice</li>
          <li>12:00 - 3:00 pm Hayrides </li>
          <li>1:00- 3:00 pm Pony rides and photo opportunity</li>
        </ul>
        *Great photo opportunities with Santa throughout these activities
        <p>
          Contact our office if you have any questions:{" "}
          <a href="mailto:camp@teenranch.com">camp@teenranch.com</a> or{" "}
          <a href="tel:+15199414501">5192163749</a>
        </p>
        <p>
          <sm style={{ fontSize: "9pt" }}>
            Register online. All sales are final.
          </sm>
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            padding: "16rem 8rem",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            <div
              style={{
                fontFamily: "serif",
                fontStyle: "italic",
                fontSize: "16pt",
              }}
            >
              When they saw the star, they rejoiced exceedingly with great joy.
            </div>
            <div>Matthew 2:10 ESV</div>
          </div>
        </div>
        {/* <div style={{ color: "red", fontSize: "2em" }}>
          Family day is full, we are no longer accepting registrations. Thank
          you!
        </div> */}
        {/* <p>
          Less than an hour from Toronto and located in the beautiful Caledon
          Hills, Teen Ranch is thrilled to offer you winter outdoor activities
          to help celebrate your family, Enjoy playing, laughing, and making
          lasting memories together.
        </p>
        <h2>When is it?</h2>
        Monday, February 20, 2023: 10:00am - 1:00pm
        <h2>Who is it for?</h2>
        Open to all Ages
        <h2>Activities include:</h2>
        <ul>
          <li>
            Skating - bring your own skates; helmets are required for ages 8 &
            under; helmets are encouraged for all ages
          </li>
          <li>Hayrides</li>
          <li>Broomball</li>
          <li>Tubing - use our tubes or bring your own</li>
          <li>Snowshoeing - bring yours or use ours (adult sizes only)</li>
          <li>Cross-country skiing - bring your own equipment</li>
          <li>Hiking</li>
          <li>Snow fort building</li>
          <li>Campfire: warm up with hot chocolate & marshmallow roast</li>
        </ul>
        <span style={{ fontStyle: "italic" }}>
          Snow activities and outdoor skating weather permitting
        </span>
        <h2>Pre-registration required</h2>
        <ul>
          <li>$80 +HST: up to 5 family members</li>
          <li>Additional family members: $16/person</li>
          <li>Children age two and under are free</li>
        </ul>
        <PrimaryButton href={stripePaymentLink}>Pre-register now</PrimaryButton> */}
      </Container>

      {/* <Container>
        <h1>Upcoming events</h1>
        <Event
          title={frontmatter.title}
          startDate={"2022-02-21"}
          startTime="10:00:00"
          endDate={"2022-02-21"}
          endTime="13:00:00"
          price={0}
          description={eventData.description}
          venue={eventData.venue}
          images={[data.file.childImageSharp.fluid.src]}
          status={"SCHEDULED"}
        />
      </Container> */}
    </>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "events/nativity.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
