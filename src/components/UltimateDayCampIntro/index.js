import { Time } from "components/Time"
import React from "react"

export default function UltimateDayCampIntro() {
  return (
    <>
      <h1>Ultimate day camp for ultimate kids</h1>

      <p>
        Ultimate day campers experience all the fun and adventure a week of
        summer camp has to offer. Campers enjoy the great outdoors, get active,
        and make new friends.
      </p>

      <p>
        In the morning, campers hone skills in their program/sport of choice.
        Afternoons are their chance to enjoy a variety of activities and daily
        campfires with engaging music and real-life topics shared from a
        biblical perspective.
      </p>

      <p>
        Our well-trained staff are committed to the safety and well-being of
        each camper and aim to come alongside them to challenge, encourage, and
        inspire!
      </p>

      <h3>Weekly overview</h3>
      <p>Summer day camps will run Monday-Friday.</p>
      <ul>
        <li>
          <strong>Drop-off:</strong> <Time>0830</Time> - <Time>0850</Time>
        </li>
        <li>
          <strong>Pick-up:</strong> <Time>1645</Time> - <Time>1700</Time>
        </li>
      </ul>
    </>
  )
}
