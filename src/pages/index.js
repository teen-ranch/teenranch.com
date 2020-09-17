import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
// import Button from 'components/Button'
import { Img } from 'components/Tueri'
import { Link } from '@reach/router'

export default () => {
	
	return (
	
		<>
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
						{/* <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/fawcettfuneralhome/posts/3333044543423234">Read the full obituary at Fawcett Funeral Home</a> */}
						<Link to='/in-memory-of-mel-stevens/'>Read the full obituary and watch the recorded service</Link>

					</div>

				</div>

			</Container>

			<Heading
				src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/horse19.jpg'
				alt='Equitation on the flat'
				title={<>A premier sports resort<br/>and retreat centre since 1967</>}
				subtitle={<>Less than an hour from <strong>Toronto</strong> in the heart of <strong>Caledon, Ontario</strong></>}
				metaTitle='A premier sports resort and retreat centre since 1967'
				metaDescription='Less than an hour from Toronto in the heart of Caledon, Ontario'
			/>
		</>
	)
}
