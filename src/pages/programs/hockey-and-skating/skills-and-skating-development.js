import React from "react"
import Container from "components/Container"
import Heading from "components/Heading"
import Button from "components/Button"
import Program from "components/Program"
import { Link } from "gatsby"
import { RinkClosed } from "components/RinkClosed"
import { Time } from "components/Time"
import Card, { CardPadding } from "components/Card"

export default function Default() {
  return (
    <>
      <Heading
        src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/DSC_0513.JPG"
        alt="Smiling kids playing hockey"
        title="Skills & Skating Development"
        subtitle="A six session program designed to get you ready for tryouts or the upcoming season."
        keywords="hockey season preparation, stick handling, power skating"
        metaTitle="Skills & Skating Development"
        metaDescription="A six session program designed to get you ready for tryouts or the upcoming season."
      />
      <Container type="body">
        {/* <Program
          src="https://teenranch.nyc3.digitaloceanspaces.com/website/assets/DSC_0513.JPG"
          name="Skills & Skating Development"
        > */}
          {/* <RinkClosed/> */}
          <p>
            A  program focused on the development of forward and
            backward skating, crossovers, tight-turns, individual shooting,
            stick handling, creativity, passing, as well as game situation type
            skills. For boys and girls ages 6-13.
          </p>
          <h3>Ages 5-13</h3>
          <div className="staffTable">
          <Card>

<CardPadding>
<table>
              <thead>
                <tr>
                  <th>Session #1</th>
                  <th>6:00pm - 6:50pm</th>
                  <th>7:00pm - 7:50pm</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Tuesdays:</strong><br/>September 10, 2024 - October 15, 2024</td>
                  <td>2016, 2017, 2018, 2019</td>
                  <td>2011, 2012, 2013, 2014, 2015</td>
                  <td>$250 +HST</td>
                </tr>
              </tbody>
            </table>


</CardPadding>
            </Card>
                        <Button href="https://register.trmanager.com">Book now</Button>
                        <Card>
                          <CardPadding>
            <table>
              <thead>
                <tr>
                  <th>Session #2</th>
                  <th>6:00pm - 6:50pm</th>
                  <th>7:00pm - 7:50pm</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Tuesdays:</strong><br/>November 12, 2024 - December 17, 2024</td>
                  <td>2017, 2018, 2019</td>
                  <td>2014, 2015, 2016</td>
                  <td>$250 +HST</td>
                </tr>
                <tr>
                  <td><strong>Wednesdays:</strong><br/>November 13, 2024 - December 18, 2024</td>
                  <td>2011, 2012, 2013, 2014</td>
                  <td></td>
                  <td>$250 +HST</td>
                </tr>
              </tbody>
            </table>
 
                          </CardPadding>
                        </Card><Button href="https://register.trmanager.com">Book now</Button>
                        <Card>
                          <CardPadding>

           <table>
              <thead>
                <tr>
                  <th>Session #3</th>
                  <th>6:00pm - 6:50pm</th>
                  <th>7:00pm - 7:50pm</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Tuesdays:</strong><br/>January 14, 2025 - February 18, 2025</td>
                  <td>2017, 2018, 2019</td>
                  <td>2014, 2015, 2016</td>
                  <td>$250 +HST</td>
                </tr>
                <tr>
                  <td><strong>Wednesdays:</strong><br/>January 15, 2025 - February 19, 2025</td>
                  <td>2011, 2012, 2013, 2014</td>
                  <td></td>
                  <td>$250 +HST</td>
                </tr>
              </tbody>
            </table>


                          </CardPadding>
                        </Card><Button href="https://register.trmanager.com">Book now</Button>
                        <Card>
                          <CardPadding>

            <table>
              <thead>
                <tr>
                  <th>Session #4 (Pre-tryout)</th>
                  <th>6:00pm - 6:50pm</th>
                  <th>7:00pm - 7:50pm</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Tuesdays:</strong><br/>March 4, 2025 - April 15, 2025<br/>(No session March 11)</td>
                  <td>2017, 2018, 2019</td>
                  <td>2012, 2013, 2014, 2015, 2016</td>
                  <td>$260 +HST</td>
                </tr>
              </tbody>
            </table>
 
                          </CardPadding>
                        </Card><Button href="https://register.trmanager.com">Book now</Button>
                        <Card>
                          <CardPadding>

           <table>
              <thead>
                <tr>
                  <th>Session #4 (Pre-tryout: REP)</th>
                  <th>6:00pm - 6:50pm</th>
                  <th>7:00pm - 7:50pm</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Wednesdays:</strong><br/>March 5, 2025 - April 9, 2025</td>
                  <td>2014, 2015, 2016</td>
                  <td>2011, 2012, 2013</td>
                  <td>$240 +HST</td>
                </tr>
              </tbody>
            </table>
 
                          </CardPadding>
                        </Card>
         </div>            <Button href="https://register.trmanager.com">Book now</Button>
        {/* </Program> */}
      </Container>
    </>
  )
}


