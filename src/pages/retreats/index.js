import React from "react"
import Container from "components/Container"
import Heading from "components/Heading"
import Button from "components/Button"

import { Link, graphql } from "gatsby"
import { PhotoGrid } from "components/PhotoGrid"
import { GatsbyImage } from "gatsby-plugin-image"

const frontmatter = {
  title: "Retreats",
  path: "/retreats/",
}

const pageData = {
  subTitle:
    "Teen Ranch’s convenient location within the GTA, nestled in the rolling Caledon hills, provides guests a chance to unplug from screens and technology and engage together, building connections and discovering a world of outdoor play alongside each group's unique retreat goals.",
  metaTitle: "Retreats",
  metaDescription:
    "Teen Ranch’s convenient location within the GTA, nestled in the rolling Caledon hills, provides guests a chance to unplug from screens and technology and engage together, building connections and discovering a world of outdoor play alongside each group's unique retreat goals.",
}

export default function Programs({ data }) {
  const {
    retreats,
    file,
    customization,
    diningRoom,
    activities,
    accomodations,
  } = data

  return <>
    <Heading
      src={file.childImageSharp.gatsbyImageData}
      alt="Group retreat"
      title={frontmatter.title}
      subtitle={pageData.subTitle}
      metaTitle={pageData.metaTitle || frontmatter.title}
      metaDescription={pageData.metaDescription || pageData.subTitle}
      keywords={pageData.keywords}
    />
    <Container type="body">
      <h1>Why host your retreat at Teen Ranch?</h1>
      <p>
        With over 50 years of experience in the hospitality industry, Teen
        Ranch takes great pleasure in providing groups with a versatile,
        all-encompassing retreat experience that is both refreshing and
        enriching.
      </p>
      <p>
        Combining the western-style excitement of a horse ranch with the fun
        of a multi-sport facility, Teen Ranch offers an unparalleled
        experience that seamlessly blends outdoor recreation and a tranquil
        environment within a single, extraordinary setting.
      </p>
      <p>
        Teen Ranch’s convenient location within the GTA, nestled in the
        rolling Caledon hills, provides guests a chance to unplug from screens
        and technology and engage together, building connections and
        discovering a world of outdoor play alongside each group's unique
        retreat goals.
      </p>
      <h2>Host Your Retreat Here</h2>
      <p>
        Round up your group! Teen Ranch is passionate about welcoming and
        hosting retreats of all kinds. From youth retreats, church groups,
        hockey and sports teams, community groups, and more, this is the
        perfect setting to bring your group of any age to experience a getaway
        like no other.
      </p>
      <h2>All-Inclusive Retreat: </h2>
      <ul>
        <li>Accommodation</li>
        <li>Meals and snack</li>
        <li>Meeting Space/Lounge</li>
        <li>A trail ride on horseback </li>
        <li>Hiking trails</li>
        <li>
          Sports Fields and Equipment (volleyball, basketball, tennis, soccer,
          and more)
        </li>
        <li>Campfire Experience </li>
        <li>Tubing Hill*</li>
        <li>Outdoor Pond Skating*</li>
      </ul>
      *Weather permitting
      <p>Indoor Olympic Sized Arena is available for rental.</p>
      <p>
        The self-facilitated retreats offer an array of outdoor activities for
        your group to make use of at their leisure. Each group is offered a
        scheduled trail ride as part of their booking package.{" "}
      </p>
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
        Each group is unique. Our staff will collaborate with you to customize
        your visit and create a memorable retreat for your group with the
        right balance of activity, connection, and the great outdoors.
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
        bunk beds, ensuite washrooms, and rooms are climate-controlled for
        year-round comfort. Our Carriage and Coach House buildings, along with
        our Plough Inn Hotel, each feature a spacious central lounge and
        together provide lodging for over 100 guests. Please visit our{" "}
        <Link to="/facilities/">Facilities</Link> page for more information.
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
        delicious meals for guests as they connect around the tables. A range
        of dietary options are available to book in advance in order to meet
        the specific needs of the group.
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
        <h2>Amenities</h2>
      </div>
      <div style={{ paddingLeft: "76px", marginBottom: "4rem" }}>
        With over 150 acres of space, groups can truly connect with the great
        outdoors. Hiking is available year-round, campfire locations offer
        great areas to connect, sports fields provide ample opportunity for
        activity and friendly competition, and our on-site arena is available
        for energetic groups seeking skating or hockey. WIFI is available
        throughout. Meeting spaces come equipped with a smart TV, whiteboard,
        flip chart, and chairs. Tables are available upon request. Groups must
        supply their own AV equipment.
      </div>
      <p>
        <sm>
          <i>
            Please note: No alcohol is permitted on Teen Ranch Property.
            Smoking is permitted only in a designated location.
          </i>
        </sm>
      </p>
      <p>
        For more information, availability, pricing, and bookings please
        complete the brief form below.
      </p>
      <Button target="_blank" href="https://zfrmz.com/mzrQFTeEN83rgZasxNXV">
        Booking Request Form
      </Button>
    </Container>
    <Container>
      <PhotoGrid srcs={retreats.edges} forceAspectRatio />
    </Container>
  </>;
}

export const query = graphql`{
  file(relativePath: {eq: "retreats/IMG_6890.jpg"}) {
    childImageSharp {
      gatsbyImageData(quality: 64, layout: FULL_WIDTH)
    }
  }
  retreats: allFile(filter: {relativeDirectory: {eq: "retreats"}}) {
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
