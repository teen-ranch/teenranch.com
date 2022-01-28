import React, { useEffect, useState } from "react"
import Container from "components/Container"
import Button from "components/Button"
import { Link } from "gatsby"

const updatedAt = "2022-01-28"

export function CovidContainer() {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    const gotIt = localStorage.getItem(`gotIt`)
    if (!gotIt || gotIt !== updatedAt) setIsOpen(true)
  }, [])

  function gotIt() {
    setIsOpen(false)
    localStorage.setItem("gotIt", updatedAt)
  }
  return (
    <div
      style={{
        maxHeight: isOpen ? "500px" : "0px",
        overflow: "hidden",
        transition: "all 500ms",
      }}
    >
      <Container>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h3>Covid-19 update</h3>
          <p>
            The arena is open as of Monday, <strong>January 31, 2022</strong>!
          </p>
          <p>Please check your program for updated dates and information:</p>
          <ul style={{ display: "inline-block", textAlign: "left" }}>
            <li>
              <Link to="/programs/hockey-and-skating/learn-to-skate/">
                Learn to skate
              </Link>
            </li>
            <li>
              <Link to="/programs/hockey-and-skating/starskate-and-competitive-figure-skating/">
                StarSkate
              </Link>
            </li>
            <li>
              <Link to="/programs/hockey-and-skating/public-skating/">
                Public skating
              </Link>
            </li>
            <li>
              <Link to="/programs/hockey-and-skating/skills-development/">
                Skills development
              </Link>
            </li>
            <li>
              <Link to="/programs/hockey-and-skating/skating-development/">
                Skating development
              </Link>
            </li>
            <li>
              <Link to="/programs/hockey-and-skating/pond-hockey/">
                Pond hockey
              </Link>
            </li>
          </ul>
          {/* <p>
            In light of the current Covid-19 announcements here in Ontario,{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://covid-19.ontario.ca/public-health-measures"
            >
              https://covid-19.ontario.ca/public-health-measures
            </a>
            ,<br />
            Teen Ranch is{" "}
            <strong>
              pausing all arena programs and rentals until further notice
            </strong>
            .
            <br />
            We will work out details as mandates unfold, likely extending
            program dates wherever possible.
          </p>
          <p>
            We hope to reopen Monday, <strong>January 31, 2022</strong>. We will
            review our programs and bookings and contact registrants a week
            prior regarding programs reopening.
          </p> */}
          {/* <h3>Summer Camp 2021</h3>
  
            <p>
              "The Ontario Ministry recognizes the importance of camps in general
              to the development, physical, and mental well-being as well as
              long-term resiliency of Ontario’s children and youth."
              <br />
              <em>- Ontario Ministry of Health</em>
            </p>
  
            <table className="covidTable">
              <tr>
                <th>Summer day camp</th>
                <td>OPEN!</td>
              </tr>
              <tr>
                <th>Ultimate day camp</th>
                <td>OPEN!</td>
              </tr>
              <tr>
                <th>Overnight camp</th>
                <td>Not currently open, please check back later</td>
              </tr>
              <tr>
                <th>Family camp (weekends)</th>
                <td>Coming soon!</td>
              </tr>
            </table> */}
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
                       */}
          <div>
            <Button onClick={() => gotIt()}>Got it!</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
