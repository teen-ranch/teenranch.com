import React, { useState } from "react"
import Container from "components/Container"
import Heading from "components/Heading"
// import Button from 'components/Button'
import { Img } from "components/Tueri"
import { Link } from "@reach/router"
import { graphql } from "gatsby"
import Program from "components/Program"
import Button, { CTAButton } from "components/Button"
import { CovidContainer } from "components/CovidContainer"

export default function Index({ data }) {
  return (
    <>
      <Heading
        src={data.summerCamp.childImageSharp.fluid}
        alt="Summer camp"
        title={"Summer Camp 2022 is ON!!!"}
        subtitle={`Overnight & Ultimate Day Camps - Registration opens January 19, 2022`}
        metaTitle="Summer Camp 2022 is ON!!!"
        metaDescription={`Overnight & Ultimate Day Camps`}
      >
        {/* <CTAButton to='/day-camp/christmas-day-camp/'>Get the details</CTAButton> */}
        <div id="mc_embed_signup">
          <form
            action="https://teenranch.us2.list-manage.com/subscribe/post?u=93bbc7a16b1a2719f9690a8b0&amp;id=fcb1d89647"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate
          >
            <div id="mc_embed_signup_scroll">
              <h2 style={{ marginTop: "8rem" }}>
                Want to be notified as soon as registration opens?
              </h2>

              <div
                style={{ position: "absolute", left: "-5000px" }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_93bbc7a16b1a2719f9690a8b0_41cfb19836"
                  tabIndex="-1"
                  defaultValue=""
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <input
                  type="email"
                  name="EMAIL"
                  className="email"
                  id="mce-EMAIL"
                  placeholder="Your email address"
                  required
                  style={{
                    margin: "1rem 0",
                    borderRadius: "4px 0 0 4px",
                    outline: "none",
                    appearance: "none",
                    border: "none",
                    padding: "1rem",
                  }}
                />
                <div className="clear">
                  <input
                    type="submit"
                    defaultValue="Notify me"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button"
                    style={{
                      borderRadius: "0 4px 4px 0",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  textAlign: "center",
                  color: "rgba(204, 204, 204, 0.95)",
                  fontSize: "1.1rem",
                }}
              >
                We don't like spam either :)
              </div>
            </div>
          </form>
          <div
            style={{
              textAlign: "center",
              color: "white",
              marginTop: "4rem",
            }}
          >
            <p>
              For ages 8 - 16, choose Overnight or Ultimate Day Camp programs
              available on select weeks, including:
            </p>
            Hockey, Girl's Hockey, Goalie, Elite AA/AAA
            <br />
            English, Western, Rodeo, & Intensive Equestrian
            <br />
            WHAM & Adventure
            <p>Junior Day Camp (ages 5-7)</p>
            <p>
              Details and Registration will be available on our website January
              19, 2022
            </p>
          </div>
        </div>
      </Heading>

      {/* <Heading
				src={ data.winterActivityAdventure.childImageSharp.fluid }
				alt='Equitation on the flat'
				title={<>A premier sports resort<br/>and retreat centre since 1967</>}
				subtitle={<>Less than an hour from <strong>Toronto</strong> in the heart of <strong>Caledon, Ontario</strong></>}
				metaTitle='A premier sports resort and retreat centre since 1967'
				metaDescription='Less than an hour from Toronto in the heart of Caledon, Ontario'
			>
				<div id="mc_embed_signup">
					<form action="https://teenranch.us2.list-manage.com/subscribe/post?u=93bbc7a16b1a2719f9690a8b0&amp;id=41cfb19836" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
						<div id="mc_embed_signup_scroll">

						<h2 style={{ marginTop: '8rem' }}>Get inspiring articles and Teen Ranch news delivered straight to your inbox.</h2>
						
						<div style={{ position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_93bbc7a16b1a2719f9690a8b0_41cfb19836" tabIndex="-1" value=""/></div>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center'
							}}
						>
							<input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="Your email address" required
								style={{
									margin: '1rem 0',
									borderRadius: '4px 0 0 4px',
									outline: 'none',
									appearance: 'none',
									border: 'none',
									padding: '1rem'
								}}
							/>
							<div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"
								style={{
									borderRadius: '0 4px 4px 0'
								}}
							/></div>
						</div>
						<div style={{ textAlign: 'center', color: 'rgba(204, 204, 204, 0.95)', fontSize: '1.1rem' }}>We don't like spam either :)</div>
						</div>
					</form>
				</div>
			</Heading> */}

      <Container type="body" style={{ background: "#002146" }}>
        <div className="mel">
          {/* <h3>COVID-19 Announcement</h3>

					<p>Teen Ranch is running a small set of temporary programs.</p>

					<p>We look forward to serving you with more activities as restrictions continue to loosen.</p> */}

          <div className="image">
            <Img
              src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/Mel.jpg"
              options={{ w: 320, h: 320 }}
              alt="Melville Charles Stevens"
            />
          </div>

          <div>
            {/* <h4>March 12th, 1936 - August 8th, 2020</h4> */}
            <h3>In Memory of Melville Charles Stevens</h3>
            <p>
              Mel Stevens, founder and long-time director of Teen Ranch, has
              gone home to be with the LORD.
            </p>
            <p>
              Mel was promoted to glory at Headwaters Health Care Centre on
              August 8, 2020.
            </p>
            <Link to="/in-memory-of-mel-stevens/">
              Read the full obituary and watch the recorded service
            </Link>
          </div>
        </div>
      </Container>

      <Container type="body">
        {/* <Program
					src={ data.christmasDayCamp.childImageSharp.fluid }
					name='Christmas day camp'
					alt='Christmas day camp'
				>
					<p>
						The excitement of the season is multiplied with Teen Ranch's Christmas Winter Break Day Camps! Back this year by popular demand our day camps offer outdoor fun and activity as well as indoor festivities to celebrate the winter season and the magic of Christmas! Treat your kids to a memorable day or bundle package all four days at a daily savings!
					</p>

					<Button to='/day-camp/christmas-day-camp/'>Learn more</Button>
				</Program> */}

        <Program
          src={data.christmasDayCamp.childImageSharp.fluid}
          name="PD/PA day camp"
          alt="Day camp"
          swap
        >
          <p>
            Parents, we've got you covered!! Give your kids adventure and fun on
            their days off with our PD Day Camps! Designed for ample time
            outdoors to explore, play group games, and enjoy the season's best
            activities, these days will be sure to get your kids moving and
            having a blast. For the hockey enthusiast, we offer a hockey option
            on two of our PD Day Camps.
          </p>

          <Button to="/day-camp/pd-pa-day-camp/">Learn more</Button>
        </Program>

        {/* <Program
					src={data.hjShows.childImageSharp.fluid}
					name={<>Hunter/Jumper Show Series</>}
					alt='Hunter/jumper shows'
					swap
				>
					<p>
						This is our 36th consecutive season offering these amazing shows to our extended equine community
                    </p>

					<Button to='/programs/horses/hunter-jumper-shows'>Learn more</Button>
				</Program> */}
        {/* 
				<Program
					src={data.file.childImageSharp.fluid}
					name='Leadership & Development: Adventure Bible Program'
				>
					<p>This solid, Christ-centered experiential program is designed to ground young adults in God's Word and equip them for a vibrant walk with Jesus while challenging them through adventure and outreach.</p>

					<Button to='/programs/leadership/adventure-bible-program'>Learn more</Button>
				</Program> */}
      </Container>
    </>
  )
}

export const query = graphql`
  query {
    summerCamp: file(relativePath: { eq: "summerDayCamp8.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    christmasDayCamp: file(
      relativePath: { eq: "events/winterTobogganing.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    hjShows: file(relativePath: { eq: "hunter-jumper/Jumper grey J_R.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    families: file(relativePath: { eq: "weekendGetaway/smores.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    file(relativePath: { eq: "stock/chang-duong-Sj0iMtq_Z4w-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
