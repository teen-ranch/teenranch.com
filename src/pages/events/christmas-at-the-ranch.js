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
import Quote from "components/Quote"

const frontmatter = {
  title: "Christmas at the Ranch",
  path: "/events/christmas-at-the-ranch/",
}

const pageData = {
  subTitle:
  <>Round up your family and friends and celebrate the true meaning of the season with Christmas at the Ranch!<br/><br/>              <em>
  <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            padding: "4rem 0rem",
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
            "For unto us a child is born, unto us a son is given..."
            </div>
            <div>Isaiah 9:6</div>
          </div>
        </div>

  </em>
</>,
  keywords: "christmas event, christmas with the family",
}

const eventData = {
  title: frontmatter.title,
  description: <>Round up your family and friends and celebrate the true meaning of the season with Christmas at the Ranch!<br/><br/>              <em>
                <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            padding: "4rem 2rem",
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
            For unto us a child is born, unto us a son is given...            </div>
            <div>Isaiah 9:6</div>
          </div>
        </div>

  </em>
</>,
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
        lighten
      />

      <Container>
        <Grid md={2}>
          <div>
            <h1>{frontmatter.title}</h1>
            <p>
             Round up your family and friends and celebrate the true meaning of the season with Christmas at the Ranch!
Experience the joy of Christmas with festive fun, western charm, and a special visit from Santa himself.
            </p>
          

            
            <h2>When is it?</h2>
            Saturday, December 6, 2025: <Time>1130</Time> - <Time>1500</Time>.
            Open to all ages
          
          <h2>Families can enjoy</h2>
          <ul style={{listStyle:'none'}}>
            <li>🎅 Santa Skate- Visit with Santa and snap photos while skating (bring your skates / helmets are recommended)</li>
<li>📸 Photos with Santa - Santa will be available to visit and take photos at different locations around the event.</li>
<li>🎨 Christmas Crafts</li>
<li>☕ Hot Chocolate & Holiday Treat</li>
<li>🚜 Hayrides – Cozy up and tour the scenic ranch grounds</li>
<li>🔥 Outdoor Campfire – Warm up and roast some S’mores</li>
<li>An engaging retelling of the First Christmas Story</li>
          </ul>
          
          <p>Put on your christmas sweater and make some holiday memories with us at the ranch.</p>
          
          <h2>Extras</h2>

<ul style={{listStyle:'none'}}>
<li>🐴 Pony rides — $5 per person (weather permitting) through our Evergreen Forest Trail</li>
<li>🎄 Christmas trees for purchase</li>
<li>🌿 Evergreen and Dogwood bundles</li>
<li>🌭 Teen Ranch Snack Bar — hot dogs, fries, drinks, snacks, & more!</li>
</ul>
          
          <h2>Schedule</h2>
          <ul>
<li><Time>1130</Time> - <Time>1500</Time> Ice Skating (Santa Skate between <Time>1200</Time> - <Time>1330</Time>)</li>
<li><Time>1200</Time> - <Time>1500</Time> Hayrides</li>
<li><Time>1300</Time> - <Time>1500</Time> Pony rides & photo opportunity</li>
          </ul>
          
            <h2>Cost</h2>
Children age two and under are free.<br/>
            <strong>Per Person:</strong> $12.00
            <br/>
            <strong>
              Family Pricing:</strong> $40.00 (2 adults, up to 5 kids)
            <br/><br/>
            * All prices include tax.<br/>
            ** Entry fee collected at the gate.

            {/* <div>
              <PrimaryButton
                target="_blank"
                rel="noopener noreferrer"
                href={`https://zfrmz.com/6ioB2cTxo4xf1bucBToT?referrername=teenranch.com`}
              >
                Register now
              </PrimaryButton>
            </div> */}
          </div>
          <div style={{ maxWidth: "315px" }}>
            <Video
              src="https://youtube.com/embed/tflDzyRmV8I?feature=shared"
              short
            />
          </div>
        </Grid>
        {/* *Great photo opportunities with Santa throughout these activities */}
        <p>
          Contact our office if you have any questions:{" "}
          <a href="mailto:camp@teenranch.com">camp@teenranch.com</a> or{" "}
          <a href="tel:+15199414501">519-941-4501</a>
        </p>
        {/* <p>
          <sm style={{ fontSize: "9pt" }}>
            Register online. All sales are final.
          </sm>
        </p> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            padding: "16rem 2rem",
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
            And the angel said unto them, 'Fear not: for, behold, I bring you good tidings of great joy, which shall be to all people.
            </div>
            <div>Luke 2:10</div>
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
    file(relativePath: { eq: "events/christmasAtTheRanch.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
