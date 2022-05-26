import React from "react"
import Container from "components/Container"
import Heading from "components/Heading"
import Button from "components/Button"
import Program from "components/Program"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Grid from "components/Grid"
import Sponsor from "components/Sponsor"

import "../horses.scss"
import SubNav from "components/SubNav"
import { Link } from "react-scroll"
import Card from "components/Card"

export default function Default({ data }) {
  const {
    banner,
    main,
    image1,
    image2,
    eliteSponsors,
    ringSponsors,
    banquetSponsors,
    inkindSponsors,
    prizeSponsors,
    photographers,
  } = data

  return (
    <>
      <Heading
        src={banner.childImageSharp.fluid}
        alt="Rider and horse jumping at Teen Ranch"
        title="Hunter / Jumper shows"
        subtitle="Professional courses and divisions for first-time competitors to those schooling before their A Shows."
        keywords="horse shows, schooling horse shows, horse show orangeville ontario, horse show caledon ontario, gta horse show"
        metaTitle="Hunter / Jumper shows"
        metaDescription="Professional courses and divisions for first-time competitors to those schooling before their A Shows."
      />

      <SubNav>
        <Link to="top" activeClass="active" spy={true}>
          Overview
        </Link>
        <Link to="divisions" activeClass="active" spy={true}>
          Divisions & classes
        </Link>
        <Link to="year-end" activeClass="active" spy={true}>
          Year-end awards
        </Link>
        <Link to="rules" activeClass="active" spy={true}>
          Rules & policies
        </Link>
        <Link to="sponsors" activeClass="active" spy={true}>
          Sponsors
        </Link>
        <Link to="photographers" activeClass="active" spy={true}>
          Photographers
        </Link>
      </SubNav>

      <div id="top" style={{ position: "absolute", marginTop: "-120px" }} />

      <Container type="body">
        <h1>2022 Show Series</h1>
        <Program
          src={main.childImageSharp.fluid}
          name="2022 Hunter/Jumper Shows"
        >
          <div className="staffTable">
            <table>
              <thead>
                <tr>
                  <th>Show date</th>
                  <th>Entries due</th>
                  <th>Entries</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>June 5, 2022</td>
                  <td>May 30, 2022</td>
                  <td>
                    {/* <Button target="_blank" href="https://forms.zohopublic.com/teenranch1/form/HorseShowJune62021/formperma/nRrU9I5hIyQphoKEm5zZ8pZ9LZdhiCBq3RfVKJ9Qh-o?referrername=teenranch.com">June 6th entry form</Button>     */}

                    <Button
                      target="_blank"
                      href="https://forms.zohopublic.com/teenranch1/form/HorseShowJune52022/formperma/ryr6HpYngAd_WuiqQ6d8b4Tk4GdKNEKsTAFJl26UGUw?referrername=teenranch.com"
                    >
                      June 5th entry form
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>June 26, 2022</td>
                  <td>June 20, 2022</td>
                  <td>
                    {/* <Button target="_blank" href="https://forms.zohopublic.com/teenranch1/form/HorseShowJune202021/formperma/UCncvQ2Mok0K75neDv4i3iS1G1XMqrLJxkDNatxGfUo?referrername=teenranch.com">June 20th entry form</Button> */}
                    <Button
                      target="_blank"
                      href="https://forms.zohopublic.com/teenranch1/form/HorseShowJune262022/formperma/_o5E_4MQPaEtARDMe2Swc4ep3xHo_eMJ0VacNXSWiKQ?referrername=teenranch.com"
                    >
                      June 26th entry form
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>July 10, 2022</td>
                  <td>July 4, 2022</td>
                  <td>
                    <Button
                      target="_blank"
                      href="https://forms.zohopublic.com/teenranch1/form/HorseShowJuly102022/formperma/JqvcxNiAFSBAzq8Iprj4bgRzMCna3xODEMyEcVHnbm8?referrername=teenranch.com"
                    >
                      July 10th entry form
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>July 24, 2022</td>
                  <td>July 18, 2022</td>
                  <td>
                    <Button
                      target="_blank"
                      href="https://forms.zohopublic.com/teenranch1/form/HorseShowJuly242022/formperma/SzVcZyYCfNyd_Vyk81MqJku0UVGl0NsJEpvlap5jIJM?referrername=teenranch.com"
                    >
                      July 24th entry form
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>August 7, 2022</td>
                  <td>August 1, 2022</td>
                  <td>
                    <Button
                      target="_blank"
                      href="https://forms.zohopublic.com/teenranch1/form/HorseShowAugust72022/formperma/EM5BMnmvGclT71rjp76HZ7bgx0wJ8zCiLPMVFzSKL_o?referrername=teenranch.com"
                    >
                      August 7th entry form
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>August 21, 2022</td>
                  <td>August 15, 2022</td>
                  <td>
                    <Button
                      target="_blank"
                      href="https://forms.zohopublic.com/teenranch1/form/HorseShowAugust212022/formperma/xInGPFl-L-ZvuVXUjbWiUAXkmUPnV1cNW67bcKqkDI4?referrername=teenranch.com"
                    >
                      August 21th entry form
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <h3>Stalls</h3>
          <p>
            Stalls will be available at each show for the 2022 season. Priority
            goes to those showing all 6 shows.
          </p>
          <p>
            If anyone is interested in renting stalls for the season, they are
            $575 +HST per stall. We don't make anything on these, so cleaning
            them after each show will be your responsibility. If available,
            stall rental per show will be $100 +HST.
          </p>
          <p>
            Email <a href="mailto:events@teenranch.com">events@teenranch.com</a>{" "}
            if you are interested.
          </p> */}
        </Program>
        <h2>Links</h2>
        <Card style={{ padding: "2rem" }}>
          <div className="showButtons">
            {/* <Button
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSc4dEIQ-wOrqet3p_YUJBGa4G5d3XvZIYL_Czq-vmqARX8spg/viewform"
            >
              COVID-19 screening form
            </Button> */}
            <Button target="_blank" href="https://show.teenranch.com">
              View 2021 season standings
            </Button>
            <Button to="/programs/horses/hunter-jumper-shows/show-photos/">
              View 2021 show photos
            </Button>
            <Button
              target="_blank"
              href="https://teenranch.nyc3.cdn.digitaloceanspaces.com/website/pdf/hunterJumperShowProgram_2021.pdf"
            >
              2021 Show Program
            </Button>
          </div>
        </Card>
      </Container>
      {/* <Program src={image2.childImageSharp.fluid} name="Hunter/Jumper shows">
          <h2>Forms required for entry:</h2>
          <ol>
            <li>Entry form (see below)</li>
            <li>Online covid screening form completed</li>
          </ol>

          <p>
            With covid protocols loosening up, we have now simplified the
            screening process! No Cohort Lists or temp checks required...just
            fill out the covid screening form below and email in before
            Wednesday @ 11:59pm. Thanks!
          </p>
          <Button
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSc4dEIQ-wOrqet3p_YUJBGa4G5d3XvZIYL_Czq-vmqARX8spg/viewform"
          >
            COVID-19 screening form
          </Button>

          <h3>Links</h3>
          <Button target="_blank" href="https://show.teenranch.com">
            View 2021 season standings
          </Button>
          <br />
          <Button to="/programs/horses/hunter-jumper-shows/show-photos/">
            View 2021 show photos
          </Button>
          <br />
          <Button
            target="_blank"
            href="https://teenranch.nyc3.cdn.digitaloceanspaces.com/website/pdf/hunterJumperShowProgram_2021.pdf"
          >
            2021 Show Program
          </Button>
        </Program> */}
      {/* https://teenranch.nyc3.cdn.digitaloceanspaces.com/website/pdf/hjClassDescriptions_2020.pdf */}
      <Container type="body">
        <div
          id="divisions"
          style={{ position: "absolute", marginTop: "-180px" }}
        />
        <h2>Divisions and classes</h2>
        <div className="hunter-jumper-class-grid">
          <Card style={{ padding: "2rem 2rem" }}>
            <h3>Ring #1 (9:00 am start)</h3>
            <ul>
              <li>Intermediate Hunters</li>
              <li>
                Novice Equitation Division -{" "}
                <em style={{ fontSize: "13px" }}>Simplified courses!</em>
              </li>
              <li>Novice Hack Division</li>
              <li>Green Hunter Division</li>
              <li>
                Short Stirrup Division -{" "}
                <em style={{ fontSize: "13px" }}>
                  Division will be split in half by age if more than 15 entries.
                </em>
              </li>
            </ul>
          </Card>

          <Card style={{ padding: "2rem 2rem" }}>
            <h3>Ring #3 (9:00 am start)</h3>
            <ul>
              <li>Hack Division</li>
              <li>2' Hunter Division</li>
              <li>2'3" Hunter Division</li>
              <li>Amateur Equitation Division</li>
              <li>Hi/Low Hunter Division</li>
            </ul>
          </Card>

          <Card style={{ padding: "2rem 2rem" }}>
            <h3>Ring #4 (8:30 am start)</h3>
            <ul>
              <li>Leadline Division</li>
              <li>
                Beginner Division -{" "}
                <em style={{ fontSize: "13px" }}>
                  Division will be split in half by age if more than 15 entries.
                </em>
              </li>
              <li>
                Rookie Division -{" "}
                <em style={{ fontSize: "13px" }}>
                  Division will be split in half by age if more than 15 entries.
                </em>
              </li>
            </ul>
          </Card>

          <Card style={{ padding: "2rem 2rem" }}>
            <h3>Ring #2 - Grass Ring (Start time not before 12:00pm)</h3>
            <ul>
              <li>
                Jumper Division -{" "}
                <em style={{ fontSize: "13px" }}>
                  Open to all. Choose .75m OR .9m. Both heights are judged
                  together.
                </em>
              </li>
            </ul>
            Will begin at the completion of the Rookie Division. (if shod, it’s
            advised to use corks)
          </Card>
        </div>
        <Button
          target="_blank"
          href="https://teenranch.nyc3.cdn.digitaloceanspaces.com/website/pdf/hjClassDescriptions_2022_V1.pdf"
        >
          View class descriptions
        </Button>
      </Container>
      <Container type="body">
        <h2>Fees</h2>
        <ul>
          <li>Per Division fee: $90 +HST</li>
          <li>Back number fee: $10 +HST</li>
        </ul>
      </Container>
      <Container type="body">
        <div
          id="year-end"
          style={{ position: "absolute", marginTop: "-180px" }}
        />
        <h2>Year-end awards 2022</h2>
        <Card style={{ padding: "2rem" }}>
          <ul>
            <li>Plan for Year End Celebration TBD.</li>
            <li>Ribbons and Prizes to top 6 in each division.</li>
            <li>
              High point Male Rider Award –{" "}
              <em>Sponsored by Denworth Equine Management</em>
              <br />
              <em style={{ fontSize: "13px" }}>
                To the Male rider earning most points in one division this
                season. Winner receives an annual and keeper trophy.
              </em>
            </li>
            <li>
              High point Welsh/Half Welsh –{" "}
              <em>Sponsored by Beaverwood Farm</em>
              <br />
              <em style={{ fontSize: "13px" }}>
                To the pony earning the most points throughout the season.
                Winner receives a GIANT custom ribbon.
              </em>
            </li>
            <li>
              High point TB Awards – <em>Sponsored by the Jockey Club</em>
              <br />
              <em style={{ fontSize: "13px" }}>
                Must submit TIP Card to qualify. All winners receive a ribbon,
                prize, apparel and $50 USD sponsored by The Jockey Club.
              </em>
              <ul>
                <li>High Point Hack TB</li>
                <li>High Point Jumper TB</li>
                <li>High Point Green TB</li>
                <li>High Point Low Hunter TB (under 2’6)</li>
                <li>High Point High Hunter TB (2’6 & over)</li>
                <li>High Point Jr. Rider</li>
              </ul>
            </li>
            <li>
              Barn Challenge –{" "}
              <em style={{ fontSize: "13px" }}>
                High Point Equestrian Team earning the most points throughout
                the season.
              </em>
            </li>
            <li>
              Sportsmanship Award -{" "}
              <em>Sponsored by Greenhawk and Brian & Cathy Aker</em>
              <br />
              <em style={{ fontSize: "13px" }}>
                To be voted on by competitors, coaches and parents. All nominees
                get a ribbon, winner receives an annual trophy and keeper trophy
                sponsored by Brian and Cathy Aker, & a prize donated by
                Greenhawk.
              </em>
            </li>
            <li>
              Tenacity Award –{" "}
              <em>Sponsored by Lee Stevens in memory of Layne Stevens</em>
              <br />
              <em style={{ fontSize: "13px" }}>
                To be voted on by competitors, coaches and parents. All nominees
                get a ribbon, winner receives an annual trophy and keeper trophy
                sponsored by Lee Stevens.
              </em>
            </li>
            <li>
              Horse of the Year – <em>Sponsored by Dr. Kendra Clark</em>
              <br />
              <em style={{ fontSize: "13px" }}>
                Horse/pony earning the most points of the season. Receives an
                annual trophy, a custom ribbon and an equine massage.
              </em>
            </li>
            <li>
              Custom Sponsored Awards –{" "}
              <em style={{ fontSize: "13px" }}>
                If you’d like to nominate someone special, you can sponsor a
                custom award at the Year End Banquet! Contact
                events@teenranch.com with your idea.
              </em>
            </li>
          </ul>
        </Card>
      </Container>
      <Container type="body">
        <div id="rules" style={{ position: "absolute", marginTop: "-180px" }} />
        <h2>Rules & policies</h2>
        <Grid lg={1} xl={2} gap={true}>
          <Card style={{ padding: "2rem" }}>
            <h4>Show rules</h4>
            <ol>
              <li>
                ASTM approved helmets mandatory for all riders. Proper show
                attire required.
              </li>
              <li>
                Back number must be worn and visible at all times while on
                horseback.
              </li>
              <li>
                Covid Protocols in place. See Covid Policy on website for
                details.
              </li>
              <li>
                Please read class descriptions to see rules on cross-entering.
              </li>
              <li>
                <strong>Entries</strong> MUST be submitted on the Monday before
                each show.
              </li>
              <li>
                <strong>Hunter Classes</strong> - Flash nose bands and running
                or german martingales are not permitted. Leg protection may be
                worn on horse in warm-up and inclement weather only when
                approved by judge.
              </li>
              <li>
                <strong>Champion/Reserve Champions</strong> at each show are
                calculated as follows: 7,5,4,3,2,1. Champion Tie-Breakers – In
                the Leadline, Short Stirrup, Beginner & Rookie Division, most
                points in Equitation wins. In other divisions, most points over
                fences wins. After that or in hack divisions, judge may flip a
                coin or do conformation line up for the winner.
              </li>
              <li>
                <strong>Year-End Awards</strong> – Must show in at least 3 shows
                in the division to qualify. Points are awarded to horses in
                hunter/jumper divisions, the rider in equitation/lead line
                divisions and horse/rider combinations for the beginner, rookie,
                and short stirrup divisions. Points are calculated as follows:
                7xentries, 5xentries, 4xentries, 3xentries, 2xentries,
                1xentries.
              </li>
              <li>
                <strong>Fall of horse or rider</strong> = elimination. Rider
                must exit ring before re-mounting.
              </li>
              <li>
                <strong>Pony Riders</strong> – we don’t set age limits to show
                ponies, as we believe it’s better for ponies to get this time in
                training so they are safe for younger riders later.{" "}
              </li>
              <li>
                For all other concerns, EQUINE CANADA RULES APPLY. Please check
                your bit and equipment if questionable.{" "}
              </li>
              <li>
                Teen Ranch accepts no responsibility for damage, theft, loss,
                accident, death or injury.
              </li>
            </ol>
          </Card>
          <Card style={{ padding: "2rem" }}>
            <h4>COVID-19 policy</h4>
            Please self screen. If you have any symptoms, please stay home.
            <p>We are looking forward to a safe and fun competition!</p>
          </Card>
        </Grid>
      </Container>

      <Container type="body">
        <div
          id="sponsors"
          style={{ position: "absolute", marginTop: "-180px" }}
        />
        <h2>Sponsors</h2>

        {/* <Card style={{ padding: "2rem" }}>
          <p>
            Teen Ranch has been hosting a series of horse shows for the extended
            community for 37 years now! Amidst the pandemic, this has been one
            of the only sources of joy, a reason to get out of the house and
            safely feed the mental health of so many. We are so grateful to be a
            part of the joy and goodness in people’s year. But these shows are
            only possible because of amazingly generous individuals, families
            and companies like you! Through the pandemic, we have hosted about
            90 riders each show, plus their coaches, family and friends. Our
            competitors come from Muskoka to Niagara and everywhere in between.
            The Teen Ranch Website gets roughly 4,000 visits/month with 10,000
            page views per month. The Teen Ranch Hunter/Jumper Series Facebook
            page reaches over 2,000 people and we have also started growing our
            Instagram following in the last year.
          </p>
          <p>
            Attached, you will find the standard Sponsorship Packages ranging
            from $85 to $1,000, as well as a section for customization. We want
            this sponsorship to be just as beneficial to you as it is to us, so
            if there is anything you’d like to offer/suggest that doesn’t fit
            into the standard options, we want to hear your ideas! We look
            forward to hearing from you and having you part of the team! Thank
            you for considering supporting this awesome series!
          </p>
        </Card>

        <h3>Many thanks to our sponsors from last season:</h3>

        <Grid lg={2} xl={4} gap={true}>
          <Card style={{ padding: "2rem" }}>
            <div>Bahr Saddlery</div>
            <div>Greenhawk Equestrian</div>
            <div>Running Fox</div>
            <div>MacLeod Vet</div>
            <div>Ferguson Equine Vet</div>
            <div>Oro Medonte Vet</div>
            <div>Denworth Equine Management</div>
            <div>Allied Threaded Products</div>
            <div>Beaverwood </div>
            <div>Canadian Horse Journals</div>
          </Card>
          <Card style={{ padding: "2rem" }}>
            <div>Tracy Lynn Tolfa—Scentsy Rep</div>
            <div>The Jockey Club - TIP</div>
            <div>Pamela Geiger</div>
            <div>Dr. Kristen Varik </div>
            <div>Top of the Hill Farm</div>
            <div>Tarwin Farm</div>
            <div>MF Equine</div>
            <div>HiLo Equestrian</div>
            <div>Tony Wilkin</div>
            <div>Sobeys</div>
          </Card>
          <Card style={{ padding: "2rem" }}>
            <div>Purina</div>
            <div>Julie Huppe Real Estate </div>
            <div>Greyden Equestrian </div>
            <div>Frankie's Horse Treats</div>
            <div>Broadway Engraving</div>
            <div>Kowalsky Farrier Service</div>
            <div>Marissa Mallais</div>
            <div>Carolyn Clarkson</div>
            <div>Half-Cut Candles</div>
          </Card>
          <Card style={{ padding: "2rem" }}>
            <div>Eden Horse Hair Designs</div>
            <div>Dr. Kendra Clark</div>
            <div>Halter Equestrian</div>
            <div>Ringside Ribbons</div>
            <div>MF Equine</div>
            <div>Kuypers Family</div>
            <div>Sew Cathy Quilts</div>
            <div>Laynelee Equestrian Services </div>
            <div>Mark Fisher</div>
          </Card>
        </Grid>

        <Button
          target="_blank"
          //   href="https://forms.zohopublic.com/teenranch1/form/HorseShowSponsorshipPackage/formperma/F0i3DDm5ylIGPkS4c7JDnMr8oB1UxmOqi-DVzhjNkuM"
          href="https://teenranch.nyc3.cdn.digitaloceanspaces.com/website/pdf/Request_pkg_2022.pdf"
        >
          I want to sponsor
        </Button> */}

        <h3>Elite sponsors</h3>
        <Grid lg={2} xl={4} gap={false}>
          {eliteSponsors?.edges?.map((edge, i) => {
            return (
              <Sponsor key={i}>
                <Img
                  fluid={edge.node.childImageSharp.fluid}
                  alt={edge.node.name}
                />
              </Sponsor>
            )
          })}
        </Grid>

        <h3>Ring sponsors</h3>
        <Grid lg={2} xl={4} gap={false}>
          {ringSponsors?.edges?.map((edge, i) => {
            return (
              <Sponsor key={i}>
                <Img
                  fluid={edge.node.childImageSharp.fluid}
                  alt={edge.node.name}
                />
              </Sponsor>
            )
          })}
        </Grid>

        <h3>Banquet sponsors</h3>
        <Grid lg={4} xl={6} gap={false}>
          {banquetSponsors?.edges?.map((edge, i) => {
            return (
              <Sponsor key={i}>
                <Img
                  fluid={edge.node.childImageSharp.fluid}
                  alt={edge.node.name}
                />
              </Sponsor>
            )
          })}
        </Grid>

        <h3>In-kind sponsors</h3>
        <Grid lg={5} xl={7} gap={false}>
          {inkindSponsors?.edges?.map((edge, i) => {
            return (
              <Sponsor key={i}>
                <Img
                  fluid={edge.node.childImageSharp.fluid}
                  alt={edge.node.name}
                />
              </Sponsor>
            )
          })}
        </Grid>

        <h3>Prize sponsors</h3>
        <Grid lg={5} xl={7} gap={false}>
          {prizeSponsors?.edges?.map((edge, i) => {
            return (
              <Sponsor key={i}>
                <Img
                  fluid={edge.node.childImageSharp.fluid}
                  alt={edge.node.name}
                />
              </Sponsor>
            )
          })}
        </Grid>

        {/* <h3>Division sponsors</h3>
        <Grid lg={2} xl={4} gap={false}>
          {divisionSponsors &&
            divisionSponsors.edges &&
            divisionSponsors.edges.map((edge, i) => {
              return (
                <Sponsor key={i}>
                  <Img
                    fluid={edge.node.childImageSharp.fluid}
                    alt={edge.node.name}
                  />
                </Sponsor>
              )
            })}
        </Grid>

        <h3>Prize sponsors</h3>
        <Grid lg={3} xl={5} gap={false}>
          {prizeSponsors &&
            prizeSponsors.edges &&
            prizeSponsors.edges.map((edge, i) => {
              return (
                <Sponsor key={i}>
                  <Img
                    fluid={edge.node.childImageSharp.fluid}
                    alt={edge.node.name}
                  />
                </Sponsor>
              )
            })}
        </Grid> */}
      </Container>
      <Container type="body">
        <div
          id="photographers"
          style={{ position: "absolute", marginTop: "-180px" }}
        />
        <h2>Photographers</h2>

        <Grid lg={2} xl={4} gap={false}>
          {photographers?.edges?.map((edge, i) => {
            return (
              <Sponsor key={i}>
                <Img
                  fluid={edge.node.childImageSharp.fluid}
                  alt={edge.node.name}
                />
              </Sponsor>
            )
          })}
        </Grid>
      </Container>
    </>
  )
}

export const query = graphql`
  query {
    main: file(relativePath: { eq: "hunter-jumper/ZANNA HIGH5 brydon.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    banner: file(relativePath: { eq: "hunter-jumper/Jumper grey J_R.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    image1: file(relativePath: { eq: "hunter-jumper/CUTIE PATUTIE.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    image2: file(relativePath: { eq: "hunter-jumper/fiji close up 2020.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    eliteSponsors: allFile(
      filter: { relativeDirectory: { eq: "hunter-jumper/sponsors2022/elite" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    banquetSponsors: allFile(
      filter: {
        relativeDirectory: { eq: "hunter-jumper/sponsors2022/banquet" }
      }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    ringSponsors: allFile(
      filter: { relativeDirectory: { eq: "hunter-jumper/sponsors2022/ring" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    inkindSponsors: allFile(
      filter: { relativeDirectory: { eq: "hunter-jumper/sponsors2022/inkind" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    photographers: allFile(
      filter: { relativeDirectory: { eq: "hunter-jumper/photographers2022" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    prizeSponsors: allFile(
      filter: { relativeDirectory: { eq: "hunter-jumper/sponsors2022/prize" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
