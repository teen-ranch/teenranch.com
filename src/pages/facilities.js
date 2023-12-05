import React from "react"
import Heading from "components/Heading"
// import Button from 'components/Button'

import Container from "components/Container"

import { graphql } from "gatsby"

import Img from "gatsby-image"

import "./facilities.scss"

export default function Default({ data }) {
  const {
    aerial,
    carriageHouse,
    coachHouse,
    hotel,
    bunkhouses,
    diningRoom,
    iceCorral,
    file,
  } = data

  return (
    <>
      <Heading
        src={file.childImageSharp.fluid}
        alt="Facilities"
        title="Facilities"
        subtitle=""
      />

      <Container>
        <p>
          Teen Ranch offers top-notch facilities for our guests of all seasons.
          With a capacity of over 125 guests for overnight trips, we offer a
          variety of accommodation options to meet the unique needs of groups
          and camps throughout all seasons of the year. Our rooms are inviting,
          clean, comfortably-sized, feature over-sized bunk beds, en-suite
          washrooms and are climate controlled for year-round comfort. Many
          rooms offer an adjacent bunk room or a separate smaller room so that
          supervision is always available when needed.
        </p>

        <h3>The Carriage House</h3>
        <p>
          The Carriage House is a beautiful, two-story building which can house
          up to 58 guests. It boasts a large meeting room with a vaulted wooden
          ceiling, exposed beams and a stone-covered gas fireplace making this a
          timelessly warm space for guests to connect and host meetings in.{" "}
        </p>
        <div className="facilityWrapper">
          {carriageHouse.edges.map(({ node }, i) => {
            return (
              <div key={i} className="facility">
                <Img
                  fluid={node.childImageSharp.fluid}
                  alt="The Carriage House"
                />
              </div>
            )
          })}
        </div>

        <h3>The Coach House</h3>
        <p>
          The Coach House is a bright, cheery, up-to-date accommodation which
          can house over 56 guests along with additional space for supervisors.
          It also contains four meeting room spaces of various sizes which can
          be used for a variety of activities. The spacious central lounge area
          is capable of accommodating well over 60 people, and it’s gas
          fireplace offers and inviting focal point.
        </p>
        <div className="facilityWrapper">
          {coachHouse.edges.map(({ node }, i) => {
            return (
              <div key={i} className="facility">
                <Img fluid={node.childImageSharp.fluid} alt="The Coach House" />
              </div>
            )
          })}
        </div>

        <h3>The Hotel</h3>
        <p>
          The Plough Inn Hotel is a cozy, western style accommodation offering
          comfortably sized hotel rooms including private washrooms and full
          linens and is ideal for single adults, couples and small families.
          This unique space provides a moderate size meeting room great for
          relaxing or for conducting meetings. It’s traditional elements and gas
          fireplace provide warmth all year long.{" "}
        </p>
        <div className="facilityWrapper">
          {hotel.edges.map(({ node }, i) => {
            return (
              <div key={i} className="facility">
                <Img fluid={node.childImageSharp.fluid} alt="The Hotel" />
              </div>
            )
          })}
        </div>

        {/* <h3>The Bunkhouses</h3>
        <p>
          Comfortable and cozy, our western style bunkhouses easily accommodate
          over 64 guests by housing 8-11 guests per room. All bunkhouses are
          winterized and have self contained washrooms.
        </p>
        <div className="facilityWrapper">
          {bunkhouses.edges.map(({ node }, i) => {
            return (
              <div key={i} className="facility">
                <Img fluid={node.childImageSharp.fluid} alt="The Bunkhouses" />
              </div>
            )
          })}
        </div> */}

        <h3>The Dining Room</h3>
        <p>
          The Dining Room is a comfortable space that offers a wonderful,
          western style, sit-down, dining atmosphere. The gas fireplace,
          heritage decor and excellent service offered in this room provide a
          traditional, community focused/or family style dining experience. From
          camps to high end retreats and conferences, the Teen Ranch Dining Room
          provides an environment for connection and enjoyment.
        </p>
        <div className="facilityWrapper">
          {diningRoom.edges.map(({ node }, i) => {
            return (
              <div key={i} className="facility">
                <Img fluid={node.childImageSharp.fluid} alt="The Dining Room" />
              </div>
            )
          })}
        </div>

        <h3>The Ice Corral</h3>
        <p>
          The Teen Ranch Ice Corral is an Olympic-size arena which opened in
          1994. With it's large international ice surface, large dressing rooms,
          meeting rooms and weight room, we accommodate aspiring young hockey
          players from around the world, as well as local teams and groups.
        </p>

        <p>
          NHL teams such as the Ottawa Senators and Toronto Maple Leafs have
          utilized our arena for development camps. The Florida Panthers and St.
          Michael's Majors are our annual guests for their development camps as
          well. National and Olympic teams from Canada, Finland, Russia,
          Germany, Switzerland, Australia and New Zealand add to the list of
          International guests.
        </p>

        <p>
          We conduct our skill development programs and leagues year-round in
          this stunning facility. Portable boards provided by the NHLPA Goals &
          Dreams fund allow us to run 3 on 3 tournaments or provide smaller ice
          surfaces for the tykes.
        </p>

        <p>
          The Hockey Hall of Faith - a unique expression of the Christian faith
          of about 40 NHL players - is a part of the arena lobby.
        </p>
        <p>The Ice Corral seats approximately 900 people. </p>
        <p>Teen Ranch offices are accommodated in the Ice Corral.</p>
        <div className="facilityWrapper">
          {iceCorral.edges.map(({ node }, i) => {
            return (
              <div key={i} className="facility">
                <Img fluid={node.childImageSharp.fluid} alt="The Ice Corral" />
              </div>
            )
          })}
        </div>
        <h3>Historical photos</h3>
        <div className="facilityWrapper">
          {aerial.edges.map(({ node }, i) => {
            return (
              <div key={i} className="facility">
                <Img fluid={node.childImageSharp.fluid} alt="Aerial Photos" />
              </div>
            )
          })}
        </div>
      </Container>
    </>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "facilities/carriageHouse/carriageHouse4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    aerial: allFile(
      filter: { relativeDirectory: { eq: "facilities/aerial" } }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 640, quality: 64) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }

    carriageHouse: allFile(
      filter: { relativeDirectory: { eq: "facilities/carriageHouse" } }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 640, quality: 64) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }

    coachHouse: allFile(
      filter: { relativeDirectory: { eq: "facilities/coachHouse" } }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 640, quality: 64) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }

    hotel: allFile(filter: { relativeDirectory: { eq: "facilities/hotel" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 640, quality: 64) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }

    bunkhouses: allFile(
      filter: { relativeDirectory: { eq: "facilities/bunkhouses" } }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 640, quality: 64) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }

    diningRoom: allFile(
      filter: { relativeDirectory: { eq: "facilities/diningRoom" } }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 640, quality: 64) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }

    iceCorral: allFile(
      filter: { relativeDirectory: { eq: "facilities/iceCorral" } }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 640, quality: 64) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
