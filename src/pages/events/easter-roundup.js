import React from "react";
import Container from "components/Container";
import Heading from "components/Heading";
// import Button from 'components/Button'
// import Program from 'components/Program'
import { graphql } from "gatsby";

// // import ExternalLink from 'components/ExternalLink'
// import { PriceContainer, Price } from "components/Price"
import { PrimaryButton } from "components/Button";
import Grid from "components/Grid";

// import SubNav from 'components/SubNav'
// import Verse from 'components/Verse'

// import { PrimaryButton, CTAButton } from 'components/Button'

// import Img from 'gatsby-image'

import Event from "components/Event";
// import Card from 'components/Card'

import { DateTime } from "luxon";
import Img from "gatsby-image";
import { Time } from "components/Time";

const frontmatter = {
  title: "Teen Ranch - Easter Roundup",
  path: "/events/family-day/",
};

const pageData = {
  subTitle:
    `"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." - John 3:16`,
  keywords: "easter event, what to do on easter",
};

const eventData = {
  title: frontmatter.title,
  description:
    `Less than an hour from Toronto and located in the beautiful Caledon Hills. Mark your calendars for this spring event celebrating the true meaning of Easter and providing springtime fun for the whole family.`,
  venue: {
    name: "Teen Ranch",
    address: {
      address: "20682 Hurontario Street",
      city: "Caledon",
      province: "ON",
      postalCode: "L7K 1X1",
    },
  },
};

export default function Default({ data }) {
  const stripePaymentLink = "https://buy.stripe.com/fZeg2s8tyflCfwQfZ1";
  // process.env.CF_PAGES_BRANCH === "main"
  //   ? "https://buy.stripe.com/9AQ5nO6lqa1i98scMN"
  //   : "https://buy.stripe.com/test_eVabKh7DidOO8dW7st"

  return (
    <>
      <Heading
        src={data.file.childImageSharp.fluid}
        alt={frontmatter.title}
        title={frontmatter.title}
        subtitle={pageData.subTitle}
        metaTitle={pageData.metaTitle || frontmatter.title}
        metaDescription={pageData.metaDescription || pageData.subTitle}
        keywords={pageData.keywords}
      />

      <Container>
        <h1>{frontmatter.title}</h1>
        <p>
          Teen Ranch's much-loved Easter Roundup is back! Mark your calendars
          for this spring event celebrating the true meaning of Easter and
          providing springtime fun for the whole family. Roundup your family and
          friends and join us for a full day of activities including egg hunts,
          petting zoo, pony and trail rides, giant swing, indoor ice skating,
          hayrides, and more!
        </p>
        <p>
          Our beautiful location in the rolling Caledon hills provides the
          perfect backdrop for this outdoor day bringing the community together.
        </p>
        <h2>When is it?</h2>
        Saturday, March 30, 2024: <Time>1300</Time> - <Time>1700</Time>
        <br />
        <br />
        <strong>Indoor Ice Skating:</strong> <Time>1300</Time> -{" "}
        <Time>1500</Time>
        <br />
        <strong>Giant Egg Hunt Times:</strong> <Time>1315</Time>,{" "}
        <Time>1400</Time>, <Time>1500</Time> & <Time>1600</Time>

        <h2>Who is it for?</h2>

        The whole family is invited! Activities for all ages.

        <h2>Cost</h2>
        <strong>$50 (cash) per vehicle</strong>
        <p>
          <strong>Entry includes:</strong>{" "}
          Egg Hunts, Petting Farm, Climbing Wall, Hay Rides, Face Painting,
          Games, Crafts, Balloons, Ice Skating, Treats.
        </p>
        <p>
          <strong>Add-ons include:</strong>
          (cash or card)
        </p>
        <ul>
          <li>Giant Swing $20 </li>
          <li>Trail Rides $20 (ten years and older)</li>
          <li>Pony Rides $5 (9 years and younger)</li>
          <li>Concessions</li>
        </ul>
        <p>
          This is a rain or shine event. Check back here or on Teen Ranch social
          media for any inclement weather notices or closures.
        </p>
        {
          /* <div style={{ color: "red", fontSize: "2em" }}>
          Family day is full, we are no longer accepting registrations. Thank
          you!
        </div> */
        }
        {
          /* <p>
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
        <PrimaryButton href={stripePaymentLink}>Pre-register now</PrimaryButton> */
        }
      </Container>

      {
        /* <Container>
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
      </Container> */
      }
    </>
  );
}

export const query = graphql`
  query {
    file(relativePath: { eq: "events/pisit-heng-ci1F55HaVWQ-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
