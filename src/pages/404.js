import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
import { Link } from '@reach/router'

import './404.scss'

export default function Default(){
	
	return (
		<>
			<Heading
				src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/wham10.jpg'
				alt='Upside down on the giant swing'
				title='404 Not found'
				metaTitle='404 Not found'
				subtitle="Uh-oh! Looks like the page you were looking for doesn't exist."
				metaDescription="Uh-oh! Looks like the page you were looking for doesn't exist."
			/>

			<Container type='body'>

				<h3 style={{ textAlign: 'center' }}>Temporary programs (COVID-19)</h3>
				
				<div className='fourOhFourGrid'>
					<div>
						<h4>Ice</h4>
						<ul>
							<li><Link to='/programs/hockey-and-skating/'>Hockey & skating programs overview</Link></li>
							<li><Link to='/programs/hockey-and-skating/pre-season-skills-and-skating/'>Pre-season skills and skating</Link></li>
							<li><Link to='/programs/hockey-and-skating/ice-rental/'>Ice rental</Link></li>
						</ul>
					</div>

					<div>
						<h4>Horses</h4>
						<ul>
							<li><Link to='/programs/horses/'>Horse programs overview</Link></li>
							<li><Link to='/programs/horses/trail-rides/'>Trail rides</Link></li>
							<li><Link to='/programs/horses/riding-lessons/'>Riding lessons</Link></li>
							<li><Link to='/programs/horses/hunter-jumper-shows/'>Hunter/Jumper shows</Link></li>
							<li><Link to='/programs/horses/schooling-ring-rental/'>Schooling ring rental</Link></li>
						</ul>
					</div>
				</div>	

				<h3 style={{ textAlign: 'center' }}>Regular programs</h3>
				
				<div className='fourOhFourGrid'>
					<div>
						<h4>Summer camp</h4>
						<ul>
							<li><a rel="noopener noreferrer" href='https://website.teenranch.com/summer-camp'>Summer camp overview</a></li>
							<li><a rel="noopener noreferrer" href='https://website.teenranch.com/summer-camp/hockey-camp'>Hockey camp</a></li>
							<li><a rel="noopener noreferrer" href='https://website.teenranch.com/summer-camp/instar-athletics-figure-skating'>Instar athletics figure skating</a></li>
							<li><a rel="noopener noreferrer" href='https://website.teenranch.com/summer-camp/ninja-warrior-camp'>Ninja warrior camp</a></li>
							<li><a rel="noopener noreferrer" href='https://website.teenranch.com/summer-camp/horse-camp'>Horse camp</a></li>
							<li><a rel="noopener noreferrer" href='https://website.teenranch.com/summer-camp/adventure-camp'>Adventure camp</a></li>
							<li><a rel="noopener noreferrer" href='https://website.teenranch.com/summer-camp/bmx-dirt-camp'>BMX Dirt camp</a></li>
							<li><a rel="noopener noreferrer" href='https://website.teenranch.com/summer-camp/soccer-camp'>Soccer camp</a></li>
							<li><a rel="noopener noreferrer" href='https://website.teenranch.com/summer-camp/wham-week'>WHAM camp</a></li>
							<li><a rel="noopener noreferrer" href='https://website.teenranch.com/summer-camp/summer-day-camp'>Summer day camp</a></li>
						</ul>
					</div>

					<div>
						<h4>Hockey</h4>
						<ul>
							<li><a rel="noopener noreferrer" href='https://website.teenranch.com/hockey-programs'>Hockey programs overview</a></li>
							<li><a rel="noopener noreferrer" href='https://website.teenranch.com/hockey-programs/pre-tryout-skills-skating-development'>Pre-tryout skills & skating</a></li>
							<li><a rel="noopener noreferrer" href='https://website.teenranch.com/hockey-programs/pre-season-skills-skating-development'>Pre-season skills & skating</a></li>
							<li><a rel="noopener noreferrer" href='https://website.teenranch.com/hockey-programs/learn-to-skate'>Learn to skate</a></li>
							<li><a rel="noopener noreferrer" href='https://website.teenranch.com/hockey-programs/skills-development'>Skills development</a></li>
							<li><a rel="noopener noreferrer" href='https://website.teenranch.com/hockey-programs/skating-development'>Skating development</a></li>
							<li><a rel="noopener noreferrer" href='https://website.teenranch.com/hockey-programs/pond-hockey'>Pond hockey</a></li>
							<li><a rel="noopener noreferrer" href='https://website.teenranch.com/hockey-programs/spring-hockey-league'>Spring hockey league</a></li>
							<li><a rel="noopener noreferrer" href='https://website.teenranch.com/hockey-programs/public-skating'>Public skating</a></li>
							<li><a rel="noopener noreferrer" href='https://website.teenranch.com/hockey-programs/mens-hockey-league'>Men's hockey league</a></li>
							<li><a rel="noopener noreferrer" href='https://website.teenranch.com/hockey-programs/3-on-3-hockey'>3 on 3 hockey</a></li>
							<li><a rel="noopener noreferrer" href='https://website.teenranch.com/hockey-programs/adult-hockey-skills-development'>Adult hockey skills development</a></li>
							<li><a rel="noopener noreferrer" href='https://www.sk8dpsc.ca/'>Dufferin-peel skating club</a></li>
						</ul>
					</div>

					<div>
						<h4>Horses</h4>
						<ul>
							<li><a rel="noopener noreferrer" href='https://website.teenranch.com/horse-programs'>Horse programs overview</a></li>
							<li><a rel="noopener noreferrer" href='https://website.teenranch.com/horse-programs/hunter-jumper-horse-shows'>Hunter/Jumper horse shows</a></li>
							<li><a rel="noopener noreferrer" href='https://website.teenranch.com/horse-programs/trail-rides'>Trail rides</a></li>
							<li><a rel="noopener noreferrer" href='https://website.teenranch.com/horse-programs/cha-instructor-clinic'>CHA instructor clinic</a></li>
						</ul>
					</div>

					<div>
						<h4>Day camps</h4>
						<ul>
							<li><a rel="noopener noreferrer" href='https://website.teenranch.com/day-camp/pa-day-camp'>PA day camp</a></li>
							<li><a rel="noopener noreferrer" href='https://website.teenranch.com/day-camp/christmas-day-camp'>Christmas day camp</a></li>
							<li><a rel="noopener noreferrer" href='https://website.teenranch.com/day-camp/school-closure-day-camp'>School closure day camp</a></li>
							<li><a rel="noopener noreferrer" href='https://website.teenranch.com/day-camp/march-break-day-camp'>March break day camp</a></li>
						</ul>
					</div>

					<div>
						<h4>Year-round</h4>
						<ul>
							<li><a rel="noopener noreferrer" href='https://website.teenranch.com/school-programs'>School programs</a></li>
							<li><a rel="noopener noreferrer" href='https://website.teenranch.com/retreat-programs'>Retreat programs</a></li>
						</ul>
					</div>

					<div>
						<h4>Events</h4>
						<ul>
							<li><a rel="noopener noreferrer" href='https://website.teenranch.com/events/family-day'>Family day</a></li>
							<li><a rel="noopener noreferrer" href='https://website.teenranch.com/events/easter'>Easter round up</a></li>
							<li><a rel="noopener noreferrer" href='https://website.teenranch.com/events/spring-classic-golf-tournament'>Spring classic golf tournament</a></li>
							<li><a rel="noopener noreferrer" href='https://website.teenranch.com/events/camp-for-a-weekend'>March break camp for a weekend</a></li>
							<li><a rel="noopener noreferrer" href='https://website.teenranch.com/events/mother-daughter-equine-escape'>Mother/daughter equine escape</a></li>
							<li><a rel="noopener noreferrer" href='https://website.teenranch.com/events/family-camp'>Family camp</a></li>
						</ul>
					</div>
				</div>			

			</Container>
		</>
	)
}