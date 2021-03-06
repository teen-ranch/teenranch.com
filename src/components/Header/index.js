import React, { useState, useEffect } from 'react'

import './hamburger.scss'
import './header.scss'
import Container from 'components/Container'
import { Link } from 'gatsby'

import logo from './teenRanchLogo_lightBGR.svg'

export default function Header({ location }) {

    const [expanded, setExpanded] = useState()

    useEffect(() => {
        setExpanded()
    }, [location])

    return (
        <header>
            <Container type={`header${ expanded ? ' header--expanded' : '' }`}>
                <NavLink to='/'><img className='logo' src={ logo } alt='Teen Ranch Logo' /></NavLink>
                <button className={`hamburgerMenu ${ expanded ? 'hamburgerMenu--active' : '' }`} onClick={() => setExpanded(expanded => !expanded)} aria-label='Navigation menu'>
                    <span className='hamburgerBox'>
                        <span className='hamburgerInner'></span>
                    </span>
                </button>
                <nav className={`menu ${ expanded ? 'menu--expanded' : '' }`}>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        {/* eslint-disable-next-line */}
                        {/* <li><a target="_blank" rel="noopener" href='https://shop.teenranch.com'>Shop</a></li> */}
                        <li><NavLink to="/programs">Programs</NavLink>
                            <ul className='subNav'>
                                <li><NavLink to='/summer-camp/'>Summer camp</NavLink>
                                    <ul className='subSubNav'>
                                        <div className='subNavDivider'>Ultimate day camp</div>
                                        <li><NavLink to='/summer-camp/ultimate-day-camp/'>Overview: Ultimate day camp</NavLink></li>
                                        <li><NavLink to='/summer-camp/ultimate-day-camp/hockey-camps/'>Hockey camps</NavLink></li>
                                        <li><NavLink to='/summer-camp/ultimate-day-camp/horse-camps/'>Horse camps</NavLink></li>
                                        <li><NavLink to='/summer-camp/ultimate-day-camp/bmx-dirt-camp/'>BMX dirt camp</NavLink></li>
                                        <li><NavLink to='/summer-camp/ultimate-day-camp/wham-camp/'>WHAM camp</NavLink></li>
                                        <div className='subNavDivider'>Junior day camp</div>
                                        <li><NavLink to='/summer-camp/junior-day-camp/'>Junior day camp</NavLink></li>
                                        {/* <li><NavLink to='/programs/summer-camp/hockey-camp/'>Figure skating camp</NavLink></li>
                                        <li><NavLink to='/programs/summer-camp/horse-camp/'>Horse camp</NavLink></li>
                                        <li><NavLink to='/programs/summer-camp/horse-camp/'>Adventure camp</NavLink></li>
                                        <li><NavLink to='/programs/summer-camp/hockey-camp/'>BMX dirt camp</NavLink></li>
                                        <li><NavLink to='/programs/summer-camp/hockey-camp/'>WHAM camp</NavLink></li> */}
                                    </ul>
                                </li>
                                <li><NavLink to='/programs/hockey-and-skating/'>Hockey & skating</NavLink>
                                    {/* <div className='subNavDivider'>Summer camp</div> */}
                                    {/* <ul className='subSubNav'>
                                        <li><NavLink to='/programs/summer-camp/hockey-camp/'>Summer hockey camp</NavLink></li>
                                    </ul> */}
                                    <div className='subNavDivider'>Skating</div>
                                    <ul className='subSubNav'>
                                        <li><NavLink to='/programs/hockey-and-skating/learn-to-skate/'>Learn to skate</NavLink></li>
                                        <li><NavLink to='/programs/hockey-and-skating/skating-development/'>Skating development</NavLink></li>
                                        <li><NavLink to='/programs/hockey-and-skating/starskate-and-competitive-figure-skating/'>STARSkate & Competitive Figure Skating</NavLink></li>
                                    </ul>
                                    <div className='subNavDivider'>Skills</div>
                                    <ul className='subSubNav'>
                                        <li><NavLink to='/programs/hockey-and-skating/pre-season-skills-and-skating/'>Pre-season skills & skating</NavLink></li>
                                        <li><NavLink to='/programs/hockey-and-skating/skills-development/'>Skills development</NavLink></li>
                                        <li><NavLink to='/programs/hockey-and-skating/adult-hockey-skills/'>Adult hockey skills</NavLink></li>
                                    </ul>
                                    <div className='subNavDivider'>Leagues</div>
                                    <ul className='subSubNav'>
                                        <li><NavLink to='/programs/hockey-and-skating/mens-hockey-league/'>Men's hockey league</NavLink></li>
                                    </ul>
                                    <div className='subNavDivider'>Recreation</div>
                                    <ul className='subSubNav'>
                                        <li><NavLink to='/programs/hockey-and-skating/pond-hockey/'>Pond hockey</NavLink></li>
                                        <li><NavLink to='/programs/hockey-and-skating/ice-rental/'>Ice rental</NavLink></li>
                                        <li><NavLink to='/programs/hockey-and-skating/public-skating/'>Public skating</NavLink></li>
                                    </ul>
                                </li>
                                <li><NavLink to='/programs/horses/'>Horses</NavLink>
                                    <div className='subNavDivider'>Shows</div>
                                    <ul className='subSubNav'>
                                        <li><NavLink to='/programs/horses/hunter-jumper-shows/'>Hunter / Jumper shows</NavLink></li>
                                    </ul>
                                    <div className='subNavDivider'>Schooling</div>
                                    <ul className='subSubNav'>
                                        <li><NavLink to='/programs/horses/riding-lessons/'>Riding lessons</NavLink></li>
                                        <li><NavLink to='/programs/horses/schooling-ring-rental/'>Schooling ring rental</NavLink></li>
                                    </ul>
                                    <div className='subNavDivider'>Recreation</div>
                                    <ul className='subSubNav'>
                                        <li><NavLink to='/programs/horses/trail-rides/'>Trail rides</NavLink></li>
                                    </ul>
                                </li>
                                <div>
                                    <li>
                                        {/* <NavLink to='/families'>Families</NavLink> */}
                                        {/* Families */}
                                        {/* <ul className='subSubNav'> */}
                                            {/* <li> */}
                                                <NavLink to='/families/family-getaway-weekends'>Family getaway weekends</NavLink>
                                            {/* </li> */}
                                        {/* </ul> */}
                                    </li>
                                    {/* <li><NavLink to='/events'>Events</NavLink>
                                        <ul className='subSubNav'> */}
                                            {/* <li><NavLink to='/events/the-christmas-winter-festival/'>Christmas Winter Festival</NavLink></li> */}
                                            {/* <li><NavLink to='/events/march-april-break-day-camp/'><s>March</s> April Break Day Camp</NavLink></li> */}
                                            {/* <li><NavLink to='/events/family-winter-activity-adventure/'>Winter Activity Adventure</NavLink></li> */}
                                        {/* </ul>
                                    </li> */}
                                    <li><NavLink to='/programs/leadership/'>Leadership & Development</NavLink>
                                        <ul className='subSubNav'>
                                            <li><NavLink to='/programs/leadership/adventure-bible-program/'>Adventure Bible Program</NavLink></li>
                                        </ul>
                                    </li>
                                </div>
                            </ul>
                        </li>
                        <li><NavLink to="/staff/">Staff</NavLink></li>
                        <li><a href="https://teenranchcanada.wordpress.com/" rel='noopener noreferrer'>Blog</a></li>
                        <li><NavLink to="/contact/">Contact</NavLink></li>
                        <li className='giveLink'><NavLink to="/give">Give</NavLink></li>
                        <li><a className='ctaLink' rel="noopener noreferrer" href='https://register.trmanager.com'>Sign up</a></li>
                    </ul>
                </nav>
            </Container>
        </header>
    )

}

// export const NavLink = props => (
//     <RouterLink
//       {...props}
//       getProps={({ isCurrent }) => {
//         // the object returned here is passed to the
//         // anchor element's props
//         return {
//           className: isCurrent ? 'active' : ''
//         };
//       }}
//     />
//   );

const NavLink = ({ children, ...props }) => (
    <Link {...props} activeClassName='active'>{ children }</Link>
)