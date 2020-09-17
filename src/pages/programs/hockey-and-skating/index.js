import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
import Button from 'components/Button'
import Program from 'components/Program'

export const frontmatter = {
    title: 'Hockey & skating',
    path: '/programs/hockey-and-skating/'
}

export default () => {

	return (
        <>
            <Heading
                src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/hockey14.jpg'
                alt='Hockey player stopping at blue line'
				title='Hockey & skating programs'
                subtitle='Hockey, figure skating and leagues for all ages'
                metaDescription='Hockey, figure skating and leagues for all ages'
                keywords='skating development, figure skating, dufferin-peel skating club, power skating, stick handling school, hockey school, hockey school caledon ontario'
			/>
            <Container type='body'>

                <Program src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/DSC_0513.JPG' name='Pre-Season Skills and Skating'>
                    <p>A six week program focused on the development of forward and backward skating, crossovers, tight-turns, individual shooting, stick handling, creativity, passing, as well as game situation type skills. For boys and girls ages 7-13.</p>

                    <Button to="/programs/hockey-and-skating/pre-season-skills-and-skating/">Learn more</Button>
                </Program>

                <Program src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/hockey15.jpg' name="Men's hockey league" swap>
                <p>Summer and Fall hockey leagues for men age 35+</p>

                    <Button to='/programs/hockey-and-skating/mens-hockey-league/'>Learn more</Button>
                </Program>

                <Program src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/figureskating.JPG' name="STARSkate & Competitive Figure Skating">
                <p>Skate Canada STARSkate and Competitive figure skating programs offered in a challenging and supportive team environment.</p>

                    <Button to='/programs/hockey-and-skating/starskate-and-competitive-figure-skating/'>Learn more</Button>
                </Program>

                <Program src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/figureskating.JPG' name="Learn to skate" swap>
                <p>Learn the basics of skating for all ice sports in this fun and fast-paced Teen Ranch Program. Our Learn-to-Skate Programs provide a solid start for participants of all ages and abilities. From the first steps on the ice to forwards, backwards, stops and turns, skaters will improve their balance, control and agility with small group instruction by our fully certified and experienced staff coaches. Progress reports, awards and incentives are included in the program.</p>

                    <Button to='/programs/hockey-and-skating/learn-to-skate/'>Learn more</Button>
                </Program>

                <Program src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/iceCorral1.jpg' name='Ice rental'>
                <p>Sharpen your skates and sharpen your skills. Rent ice or participate in a Teen Ranch
                hockey/figure skating program or private/semi-private lesson.</p>

                    <Button to='/programs/hockey-and-skating/ice-rental/'>Learn more</Button>
                </Program>

            </Container>
        </>
    )
}
