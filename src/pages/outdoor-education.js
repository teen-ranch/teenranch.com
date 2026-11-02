import React from "react"
import Container from "components/Container"
import Heading from "components/Heading"
import Button from "components/Button"

import { Link, graphql } from "gatsby"
import { PhotoGrid } from "components/PhotoGrid"
import Quote from "components/Quote"
import Grid from "components/Grid"
import  { GatsbyImage } from "gatsby-plugin-image"

const frontmatter = {
  title: "Outdoor Education",
  path: "/outdoor-education/",
}

const pageData = {
  subTitle: "Training Future World Leaders",
  metaTitle: "Outdoor Education",
  metaDescription:
    "With over 50 years of experience in outdoor education programming, Teen Ranch has what it takes to give you the most well-rounded outdoor experience that is both unique and enriching.",
}

export default function Programs({ data }) {
  const {
    file,
    outdoorEducation,
    customization,
    diningRoom,
    accomodations,
    activities,
  } = data

  return <>
    <Heading
      src={file.childImageSharp.gatsbyImageData}
      alt="Outdoor Education"
      title={frontmatter.title}
      subtitle={pageData.subTitle}
      metaTitle={pageData.metaTitle || frontmatter.title}
      metaDescription={pageData.metaDescription || pageData.subTitle}
      keywords={pageData.keywords}
    />
    <Container type="body">
      <p>
        With over 50 years of experience in outdoor education programming,
        Teen Ranch has what it takes to give you the most well-rounded outdoor
        experience that is both unique and enriching.
      </p>
      <p>
        Combining the western-style excitement of a horseback riding program
        with the exhilarating fun of a multi-sport facility, Teen Ranch offers
        an unparalleled experience that seamlessly blends outdoor recreation
        with student-focused, hands-on programming that challenges and
        inspires participants in one extraordinary setting.{" "}
      </p>
      <p>
        Teen Ranch’s convenient location within the GTA, nestled in the
        rolling Caledon hills, offers students a chance to unplug from screens
        and technology and engage together, forming connections and
        discovering an exciting world outside the classroom.
      </p>
      <p>Day and Overnight Ventures are available. </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          margin: "2rem 0",
        }}
      >
        <GatsbyImage
          image={customization.childImageSharp.gatsbyImageData}
          alt={"Customization icon"}
        />
        <h2>Customization</h2>
      </div>
      <div style={{ paddingLeft: "76px" }}>
        We believe that each school and class is unique. Our staff will
        collaborate with you to customize your visit and create a unique
        venture for your group with the right balance of adventure, challenge,
        and the great outdoors.
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          margin: "2rem 0",
        }}
      >
        <GatsbyImage
          image={accomodations.childImageSharp.gatsbyImageData}
          alt={"Accomodations icon"}
        />
        <h2>Accommodations</h2>
      </div>
      <div style={{ paddingLeft: "76px" }}>
        Our top-notch accommodations are clean, cozy, and feature over-sized
        bunk beds, ensuite washrooms and are climate-controlled for year-round
        comfort. Our Carriage and Coach House buildings each feature a
        spacious central lounge and provide lodging for over 100 students and
        teachers. Please visit our <Link to="/facilities/">Facilities</Link>{" "}
        page for more information.
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          margin: "2rem 0",
        }}
      >
        <GatsbyImage
          image={diningRoom.childImageSharp.gatsbyImageData}
          alt={"Dining room icon"}
        />
        <h2>Dining Room</h2>
      </div>
      <div style={{ paddingLeft: "76px" }}>
        Our charming western-style dining room provides nutritious and
        delicious meals as students and teachers connect around the tables. A
        range of dietary options are available to book in advance in order to
        meet the specific needs of the group.
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          margin: "2rem 0",
        }}
      >
        <GatsbyImage
          image={activities.childImageSharp.gatsbyImageData}
          alt={"Activities icon"}
        />
        <h2>Activities</h2>
      </div>
      <div style={{ paddingLeft: "76px", marginBottom: "2rem" }}>
        Schools booking our Outdoor Education program are offered a range of
        outdoor and indoor facilitated activities, combined with teacher-led
        options, making for a well-rounded retreat and a high level of group
        bonding. Challenging activities, combined with instruction and
        encouragement, offer students the opportunity for personal growth and
        skill acquisition.
      </div>
      <Grid md={3} lg={3} xl={3}>
        <div>
          <h2>Year-Round Activities</h2>
          <ul>
            <li>Horseback Trail Riding</li>
            <li>Horse Grooming & Saddling</li>
            <li>Skating (Indoor Olympic Sized Rink)</li>
            <li>Initiative Challenges</li>
            <li>Archery </li>
            <li>Woodland Survival Skills</li>
            <li>Instincts for Survival Game</li>
            <li>Map Orienteering</li>
            <li>Souvenir Making Options</li>
            <li>Scavenger Hunts</li>
            <li>Hiking</li>
          </ul>
        </div>
        <div>
          <h2>Spring and Fall Activities</h2>
          <ul>
            <li>Climbing & Bouldering Walls</li>
            <li>Giant 60’ Swing</li>
            <li>Sports Medley</li>
            <li>Field Games</li>
          </ul>
        </div>
        <div>
          <h2>Winter Activities</h2>
          <ul>
            <li>Cross-country Skiing</li>
            <li>Snowshoeing</li>
            <li>Snow Tubing</li>
          </ul>
        </div>
      </Grid>
      <Quote cite="Joe Lionti - St. Jean de Brebeuf, YCDSB">
        “The staff at Teen Ranch truly enhanced the learning of the students
        we brought for the leadership retreat. From the planning phases to the
        day of the activities, the organization and helpful consultation made
        the day run smoothly. We had a large group of 80 students and the
        staff at Teen Ranch had no troubles accommodating, feeding and making
        sure everyone had a great experience that will be filled with life
        long memories.”
      </Quote>
      <p>
        For more information, availability, pricing, and bookings please
        complete the brief form below:
      </p>
      <Button target="_blank" href="https://zfrmz.com/mzrQFTeEN83rgZasxNXV">
        Booking Request Form
      </Button>
    </Container>
    <Container>
      <PhotoGrid srcs={outdoorEducation.edges} forceAspectRatio />
    </Container>
  </>;
}

export const query = graphql`{
  file(relativePath: {eq: "outdoor-education/campFire.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 64, layout: FULL_WIDTH)
    }
  }
  outdoorEducation: allFile(
    filter: {relativeDirectory: {eq: "outdoor-education"}}
  ) {
    edges {
      node {
        name
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
  customization: file(relativePath: {eq: "icons/customization.png"}) {
    childImageSharp {
      gatsbyImageData(width: 64, height: 64, quality: 100, layout: FIXED)
    }
  }
  accomodations: file(relativePath: {eq: "icons/accomodations.png"}) {
    childImageSharp {
      gatsbyImageData(width: 64, height: 64, quality: 100, layout: FIXED)
    }
  }
  diningRoom: file(relativePath: {eq: "icons/diningRoom.png"}) {
    childImageSharp {
      gatsbyImageData(width: 64, height: 64, quality: 100, layout: FIXED)
    }
  }
  activities: file(relativePath: {eq: "icons/activities.png"}) {
    childImageSharp {
      gatsbyImageData(width: 64, height: 64, quality: 100, layout: FIXED)
    }
  }
}`
