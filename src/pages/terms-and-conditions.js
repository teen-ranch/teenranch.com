import React from "react";
import Container from "components/Container";
import Heading from "components/Heading";

// import { Link } from '@reach/router'

import "./mel-stevens.scss";

// import Video from 'components/Video'
// import ExternalLink from 'components/ExternalLink'
import { graphql } from "gatsby";
import Terms, { SummerCampTerms } from "components/Terms";

export default function Default({ data }) {
	return <>
        <Heading
            src={data.file.childImageSharp.gatsbyImageData}
            alt="Open Bible"
            title="Terms & Conditions"
            subtitle=""
            keywords="teen ranch terms and conditions"
        />
        <Container type="body" constrain={false}>
            <div
                style={{
                    maxWidth: "680px",
                    margin: "0 auto",
                    fontSize: "18px",
                    color: "rgb(41, 41, 41)",
                    letterSpacing: "0.01em",
                    lineHeight: "26px",
                    padding: "0 2rem",
                }}
            >
                <h2>Terms & Conditions</h2>

                <Terms type="mdee" />
                <Terms type="cfaw" />
                <Terms type="hockeyAndSkating" />
                <SummerCampTerms/>
            </div>
        </Container>
    </>;
}

export const query = graphql`{
  file(relativePath: {eq: "programs/hockey/IMG_3534.JPG"}) {
    childImageSharp {
      gatsbyImageData(quality: 64, layout: FULL_WIDTH)
    }
  }
}`;
