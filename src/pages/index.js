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
import { SummerCampRegistrationNotice } from "components/SummerCampRegistrationNotice"

export default function Index({ data }) {
  return (
    <>
      <Heading
        src={data.hockey.childImageSharp.fluid}
        alt="Summer camp"
        title={"Don't miss out on the best week of your life!"}
        subtitle={
          <>
            Build confidence, form friendships and develop skills that will last
            a lifetime.
          </>
        }
        metaTitle="Summer Camp 2023 is ON!!!"
        metaDescription={`Overnight & Ultimate Day Camps`}
      >
        <CTAButton to="/summer-camp/">
          Learn more about Summer Camp 2023
        </CTAButton>
        <h2 style={{ marginTop: "-3rem" }}>
          <p>Registration is now open!</p>
        </h2>

        <div id="mc_embed_signup">
          <form
            action="https://teenranch.us2.list-manage.com/subscribe/post?u=93bbc7a16b1a2719f9690a8b0&amp;id=41cfb19836"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate
          >
            <div id="mc_embed_signup_scroll">
              <h2 style={{ marginTop: "8rem" }}>
                Enter your email address so you don't miss out on any details!
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
          {/* <div
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
            Hockey, Girl's Hockey, Goalie, Elite hockey
            <br />
            English, Western, Rodeo, & Intensive Equestrian
            <br />
            WHAM & Adventure
            <p>Junior Day Camp (ages 5-7)</p>
            <p>
              Details and Registration will be available on our website January
              19, 2022
            </p>
          </div> */}
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

      {/* <Container type="body" style={{ background: "#002146" }}>
        <div className="mel">

          <div className="image">
            <Img
              src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/Mel.jpg"
              options={{ w: 320, h: 320 }}
              alt="Melville Charles Stevens"
            />
          </div>

          <div>
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
      </Container> */}

      {/* <SummerCampRegistrationNotice>
        <br />
        <Button to="/summer-camp/">Learn more about summer camp</Button>
      </SummerCampRegistrationNotice> */}
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

        {/* <Program
          src={data.fatherSon.childImageSharp.fluid}
          name="Father-son hockey weekend"
        >
          <p>
            Do you and your family love hockey? This is an incredibly unique
            opportunity to get away and invest time in one another over a common
            love of this great Canadian sport.
          </p>
          <Button to="/families/father-son-hockey-weekend/">Learn more</Button>
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

        <Program
          src={data.skillsskating.childImageSharp.fluid}
          name="Skills development"
          alt="Skills development"
        >
          <p>
            Join us for a 5 session program focused on the development of
            individual shooting, stick handling, creativity and passing skills,
            as well as game situation type skills. For boys and girls ages 6-13.
          </p>

          <Button to="/programs/hockey-and-skating/skills-development/">
            Learn more
          </Button>

          <h3>Skating Development</h3>
          <p>
            Join us for a 5 session program focused on the development of
            individual shooting, stick handling, creativity and passing skills,
            as well as game situation type skills. For boys and girls ages 6-13.
          </p>

          <Button to="/programs/hockey-and-skating/skating-development/">
            Learn more
          </Button>
        </Program>

        <Program
          src={data.pondHockey.childImageSharp.fluid}
          name="Pond Hockey"
          alt="Pond hockey"
          swap
        >
          <p>A year-long development program for boys and girls ages 5-16+</p>

          <Button to="/programs/hockey-and-skating/pond-hockey/">
            Learn more
          </Button>
        </Program>

        <Program
          src={data.figureSkating.childImageSharp.fluid}
          name="STARSKATE & Competitive Figure Skating"
          alt="Skating development"
        >
          <p>
            Skate Canada STARSkate and Competitive figure skating programs
            offered in a challenging and supportive team environment.
          </p>

          <Button to="/programs/hockey-and-skating/starskate-and-competitive-figure-skating/">
            Learn more
          </Button>

          <h3>Learn to Skate</h3>
          <p>A beginner skating program for all ice sports.</p>

          <Button to="/programs/hockey-and-skating/learn-to-skate/">
            Learn more
          </Button>
        </Program>

        {/* <Program
          src={data.overnightCamp.childImageSharp.fluid}
          name="Overnight summer camp"
          alt="Overnight summer camp"
        >
          <p>
            Our popular overnight camps are back this year and better than ever!
            Campers experience all the fun and adventure of summer camp packed
            into five awesome nights as they enjoy the great outdoors, get
            active and build friendships that can last a lifetime.
          </p>

          <Button to="/summer-camp/overnight-camp/">Learn more</Button>
        </Program>

        <Program
          src={data.ultimateDayCamp.childImageSharp.fluid}
          name="Ultimate day camp"
          alt="Ultimate day camp"
          swap
        >
          <p>
            Sign your child up for ultimate day camp and they will experience
            all the fun and adventure of summer camp packed into five awesome
            days! They’ll enjoy the great outdoors, get active and build
            friendships that last a lifetime.
          </p>

          <Button to="/summer-camp/ultimate-day-camp/">Learn more</Button>
        </Program>

        <Program
          src={data.juniorDayCamp.childImageSharp.fluid}
          name="Junior day camp"
          alt="Junior day camp"
        >
          <p>
            Jump into adventure with our junior day camp program! Designed to
            introduce little ones to the exciting world of camp, kids and their
            leaders travel together around camp to try some of the unique
            activities that Teen Ranch has to offer. Throughout the week they
            make new friends and grow while engaging in games, crafts, swimming,
            pony rides, campfire story time, and more! Join us this summer for a
            week full of friendship and fun!
          </p>

          <Button to="/summer-camp/ultimate-day-camp/">Learn more</Button>
        </Program> */}

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
    hockey: file(relativePath: { eq: "programs/hockey/Michael.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    skillsskating: file(relativePath: { eq: "programs/hockey/IMG_5099.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    pondHockey: file(
      relativePath: { eq: "programs/hockey/tr hockey group.jpg" }
    ) {
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

    figureSkating: file(
      relativePath: { eq: "programs/figureSkating/figureskating.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600, maxHeight: 334, quality: 64) {
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
