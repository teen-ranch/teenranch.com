import React from 'react'
import Container from 'components/Container'

import './footer.scss'

import { useStaticQuery, graphql, Link } from 'gatsby'

export default function Footer() {

    const data = useStaticQuery(query)

    console.log(data)
    
    return (
        <footer>
            <Container type={`footer`}>

                <div className='footer__grid'>

                    <div>
                        <div className='footerTitle'>Hockey & skating</div>
                        <ul className='footerNavigation'>
                            <div className='subNavDivider'>Skating</div>
                                <li><Link to='/programs/hockey-and-skating/learn-to-skate/'>Learn to skate</Link></li>
                                <li><Link to='/programs/hockey-and-skating/skating-development/'>Skating development</Link></li>
                                <li><Link to='/programs/hockey-and-skating/starskate-and-competitive-figure-skating/'>STARSkate & Competitive Figure Skating</Link></li>
                            <div className='subNavDivider'>Skills</div>
                                <li><Link to='/programs/hockey-and-skating/pre-season-skills-and-skating/'>Pre-season skills & skating</Link></li>
                                <li><Link to='/programs/hockey-and-skating/skills-development/'>Skills development</Link></li>
                                <li><Link to='/programs/hockey-and-skating/adult-hockey-skills/'>Adult hockey skills</Link></li>
                            <div className='subNavDivider'>Leagues</div>
                                <li><Link to='/programs/hockey-and-skating/mens-hockey-league/'>Men's hockey league</Link></li>
                            <div className='subNavDivider'>Recreation</div>
                                <li><Link to='/programs/hockey-and-skating/pond-hockey/'>Pond hockey</Link></li>
                                <li><Link to='/programs/hockey-and-skating/ice-rental/'>Ice rental</Link></li>
                                <li><Link to='/programs/hockey-and-skating/public-skating//'>Public skating</Link></li>
                        </ul>
                    </div>

                    <div>
                        <div className='footerTitle'>Horses</div>
                        <ul className='footerNavigation'>
                            <div className='subNavDivider'>Shows</div>
                                <li><Link to='/programs/horses/hunter-jumper-shows/'>Hunter / Jumper shows</Link></li>
                            <div className='subNavDivider'>Schooling</div>
                                <li><Link to='/programs/horses/riding-lessons/'>Riding lessons</Link></li>
                                <li><Link to='/programs/horses/schooling-ring-rental/'>Schooling ring rental</Link></li>
                            <div className='subNavDivider'>Recreation</div>
                                <li><Link to='/programs/horses/trail-rides/'>Trail rides</Link></li>
                        </ul>
                    </div>

                    <div>
                        <div className='footerTitle'>Events</div>
                        <ul className='footerNavigation'>
                            {/* <li><Link to='/events/the-christmas-winter-festival/'>Christmas Winter Festival</Link></li> */}
                            <li><Link to='/events/march-april-break-day-camp/'><s>March</s> April Break Day Camp</Link></li>
                            <li><Link to='/events/family-winter-activity-adventure/'>Winter Activity Adventure</Link></li>
                        </ul>

                        <div className='footerTitle'>Leadership</div>
                        <ul className='footerNavigation'>
                            <li><Link to='/programs/leadership/adventure-bible-program/'>Adventure Bible Program</Link></li>
                        </ul>
                    </div>

                    <div>
                        <div className='footerTitle'>Teen Ranch Canada</div>
                        <ul className='footerNavigation'>
                            {/* <li><Link to='/about-teen-ranch/'>About Teen Ranch</Link></li> */}
                            <li><Link to='/teen-ranch-statement-of-faith/'>Our statement of faith</Link></li>
                            <li><Link to='/facilities/'>Our facilities</Link></li>
                            <li><Link to='/contact/'>Contact Teen Ranch</Link></li>
                        </ul>
                    </div>

                </div>

                <div className='copyright'>Copyright &copy; { new Date().getFullYear() } Teen Ranch.<br/>All rights reserved.</div>
            </Container>
        </footer>
    )
}

const query = graphql`
    query JavascriptFrontmatterQuery {
        frontmatter: allJavascriptFrontmatter {
            edges {
                node {
                    id
                    frontmatter {
                        # title
                        path
                    }
                }
            }
        }
    }
`