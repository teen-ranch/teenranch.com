import React, { useState } from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
// import Button from 'components/Button'
import { Img } from 'components/Tueri'
import { Link } from '@reach/router'
import { graphql } from 'gatsby'
import Program from 'components/Program'
import Button, { CTAButton } from 'components/Button'

export default function Index({ data }) {

	return (
	
		<>

			<CovidContainer />

			<Heading
				src={ data.summerCamp.childImageSharp.fluid }
				alt='Summer camp 2021'
				title={<>Summer camp is back!</>}
				subtitle={<>We are working hard to make this your best summer ever!</>}
				metaTitle='Summer camp is back!'
				metaDescription={`We are working hard to make this your best summer ever!`}
			>
				<CTAButton to='/summer-camp/'>Registration is now open</CTAButton>
				{/* <div id="mc_embed_signup">
					<form action="https://teenranch.us2.list-manage.com/subscribe/post?u=93bbc7a16b1a2719f9690a8b0&amp;id=8f481bca1e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
						<div id="mc_embed_signup_scroll">

						<h2 style={{ marginTop: '8rem' }}>Want to be notified as soon as registration opens?</h2>
						
						<div style={{ position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_93bbc7a16b1a2719f9690a8b0_41cfb19836" tabIndex="-1" defaultValue=""/></div>
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
							<div className="clear"><input type="submit" defaultValue="Notify me" name="subscribe" id="mc-embedded-subscribe" className="button"
								style={{
									borderRadius: '0 4px 4px 0'
								}}
							/></div>
						</div>
						<div style={{ textAlign: 'center', color: 'rgba(204, 204, 204, 0.95)', fontSize: '1.1rem' }}>We don't like spam either :)</div>
						</div>
					</form>
				</div> */}
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

			<Container type='body' style={{ background: '#002146' }}>
				
				<div className='mel'>
					{/* <h3>COVID-19 Announcement</h3>

					<p>Teen Ranch is running a small set of temporary programs.</p>

					<p>We look forward to serving you with more activities as restrictions continue to loosen.</p> */}

					<div className='image'>
						<Img src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/Mel.jpg' options={{ w: 320, h: 320 }} alt='Melville Charles Stevens' />
					</div>

					<div>

						{/* <h4>March 12th, 1936 - August 8th, 2020</h4> */}
						<h3>In Memory of Melville Charles Stevens</h3>
						<p>
							Mel Stevens, founder and long-time director of Teen Ranch, has gone home to be with the LORD.
						</p>
						<p>
							Mel was promoted to glory at Headwaters Health Care Centre on August 8, 2020.
						</p>
						<Link to='/in-memory-of-mel-stevens/'>Read the full obituary and watch the recorded service</Link>

					</div>

				</div>

			</Container>

			<Container type='body'>

				<Program
					src={data.summerCamp.childImageSharp.fluid}
					name='Summer day camp!'
					alt='Summer camp'
				>
					<p>
						Summer camp is back!
                    </p>
					<p>
						Sign up now for our ultimate or junior day camps.
					</p>

					<Button to='/summer-camp/'>Learn more</Button>
				</Program>

				<Program
					src={data.hjShows.childImageSharp.fluid}
					name={<>Hunter/Jumper Show Series</>}
					alt='Hunter/jumper shows'
					swap
				>
					<p>
						This is our 36th consecutive season offering these amazing shows to our extended equine community
                    </p>

					<Button to='/programs/horses/hunter-jumper-shows/'>Learn more</Button>
				</Program>

				<Program
					src={data.file.childImageSharp.fluid}
					name='Leadership & Development: Adventure Bible Program'
				>
					<p>This solid, Christ-centered experiential program is designed to ground young adults in God's Word and equip them for a vibrant walk with Jesus while challenging them through adventure and outreach.</p>

					<Button to='/programs/leadership/adventure-bible-program/'>Learn more</Button>
				</Program>

			</Container>

		</>
	)
}

function CovidContainer() {

	const [ isOpen, setIsOpen ] = useState(true)

	return (
		<div
			style={{
				maxHeight: isOpen ? '500px' : '0px',
				overflow: 'hidden',
				transition: 'all 500ms'
			}}
		>
			<Container>
				<div 
					style={{
						textAlign: 'center'
					}}
				>
					<h3>COVID-19 Announcement</h3>

					<h4>The Ontario government will tentatively allow overnight summer camp starting July 5.</h4>
					Would you be most comfortable sending your children to overnight summer camp or an enhanced day camp? <a target="_blank" rel="noreferrer" href="https://www.facebook.com/teenranch">Vote now on our facebook page!</a>


					{/* <p>Ice Arenas in Peel district are now in lockdown and are closed until further notice.</p>
					<p>All ice rentals and program registrations have been paused and will resume when permitted by government mandate.<br/>Credits will be applied for any missed sessions that are not able to be re-scheduled.</p>
					<p>Please check back for updates.</p>
					<table
						className='covidTable'
					>
						<tr><th>Summer camp</th><td>COMING SOON!</td></tr>
						<tr><th>Trail rides</th><td>PAUSED</td></tr>
						<tr><th>Horse programs</th><td>ACTIVE</td></tr>
						<tr><th>Hockey & skating programs</th><td>PAUSED</td></tr>
					</table>

					<div><Button onClick={() => setIsOpen(false)}>Got it!</Button></div> */}
					
				</div>
			</Container>
		</div>
	)

}

export const query = graphql`

    query {

		summerCamp: file(relativePath: { eq: "summerDayCamp8.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}

		hjShows: file(relativePath: { eq: "hunter-jumper/Jumper grey J_R.jpg" }) {
            childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
        }


        file(relativePath: { eq: "stock/chang-duong-Sj0iMtq_Z4w-unsplash.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`