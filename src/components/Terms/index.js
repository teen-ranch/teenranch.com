import React from "react"

export default function Terms({ type }) {
  if (type === "overnight") {
    return (
      <>
        <h3>Terms:</h3>
        <p>
          In order to keep payments as low-risk as possible for you, we are only
          requiring a $250 non-refundable deposit per overnight camp
          registration. The balance will be due 6 weeks prior to arrival at camp
          and is non-refundable. In the case of absence for any reason during
          the camp week, including illness, homesickness, or disciplinary
          departure, no refund will be issued. In the case of special
          circumstances, contact the camp registrar.
        </p>
        <ul>
          <li>$250 non-refundable deposit per overnight camp registration</li>
          <li>
            The balance is due 6 weeks prior to arrival at camp and is
            non-refundable.
          </li>
        </ul>
      </>
    )
  }

  if (type === "ultimate") {
    return (
      <>
        <h3>Terms:</h3>
        <p>
          In order to keep payments as low-risk as possible for you, we are only
          requiring a $175 non-refundable deposit per ultimate day camp
          registration. The balance will be due 6 weeks prior to arrival at camp
          and is non-refundable. In the case of absence for any reason during
          the camp week, including illness, homesickness, or disciplinary
          departure, no refund will be issued. In the case of special
          circumstances, contact the camp registrar.
        </p>
        <ul>
          <li>
            $175 non-refundable deposit per ultimate day camp registration
          </li>
          <li>
            The balance is due 6 weeks prior to arrival at camp and is
            non-refundable.
          </li>
        </ul>
      </>
    )
  }

  if (type === "day") {
    return (
      <>
        <h3>Terms:</h3>
        <p>
          In order to keep payments as low-risk as possible for you, we are only
          requiring a $100 non-refundable deposit per day camp registration. The
          balance will be due 6 weeks prior to arrival at camp and is
          non-refundable. In the case of absence for any reason during the camp
          week, including illness, homesickness, or disciplinary departure, no
          refund will be issued. In the case of special circumstances, contact
          the camp registrar.
        </p>
        <ul>
          <li>$100 non-refundable deposit per day camp registration</li>
          <li>
            The balance is due 6 weeks prior to arrival at camp and is
            non-refundable.
          </li>
        </ul>
      </>
    )
  }

  return (
    <>
      <p>
        In order to keep payments as low-risk as possible for you, we are only
        requiring a non-refundable deposit per registration. The balance will be
        due 6 weeks prior to arrival at camp and is non-refundable. In the case
        of absence for any reason during the camp week, including illness,
        homesickness, or disciplinary departure, no refund will be issued. In
        the case of special circumstances, contact the camp registrar.
      </p>
      <ul>
        <li>$100 non-refundable deposit per day camp registration</li>
        <li>$175 non-refundable deposit ultimate day camp registration</li>
        <li>$250 non-refundable deposit per overnight camp registration</li>
        <li>
          The balance is due 6 weeks prior to arrival at camp and is
          non-refundable.
        </li>
      </ul>
    </>
  )
}

export function SummerCampTerms() {
  return <Terms />
}

export function OvernightCampTerms() {
  return <Terms type="overnight" />
}

export function DayCampTerms() {
  return <Terms type="day" />
}

export function UltimateDayCampTerms() {
  return <Terms type="ultimate" />
}
