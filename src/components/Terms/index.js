import React from "react"

export default function Terms({ type }) {
  if (type === "overnight") {
    return (
      <>
        <h3>Terms:</h3>
        <p>
          In order to keep payments as low-risk as possible for you, we are only
          requiring a $100 non-refundable deposit per overnight camp
          registration. The balance will be due 14 days prior to arrival at camp
          and is non-refundable. In the case of absence for any reason during
          the camp week, including homesickness or disciplinary departure, no
          refund will be issued except upon a signed physician’s order. In this
          event, a prorated camp refund will be issued, less the $100
          non-refundable deposit.
        </p>
        <ul>
          <li>$100 non-refundable deposit per overnight camp registration</li>
          <li>
            The balance is due 14 days prior to arrival at camp and is
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
          requiring a $50 non-refundable deposit per ultimate day camp
          registration. The balance will be due 14 days prior to arrival at camp
          and is non-refundable. In the case of absence for any reason during
          the camp week, including homesickness or disciplinary departure, no
          refund will be issued except upon a signed physician’s order. In this
          event, a prorated camp refund will be issued, less the $50
          non-refundable deposit.
        </p>
        <ul>
          <li>$50 non-refundable deposit per ultimate day camp registration</li>
          <li>
            The balance is due 14 days prior to arrival at camp and is
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
          requiring a $50 non-refundable deposit per day camp registration. The
          balance will be due 14 days prior to arrival at camp and is
          non-refundable. In the case of absence for any reason during the camp
          week, including homesickness or disciplinary departure, no refund will
          be issued except upon a signed physician’s order. In this event, a
          prorated camp refund will be issued, less the $50 non-refundable
          deposit.
        </p>
        <ul>
          <li>$50 non-refundable deposit per day camp registration</li>
          <li>
            The balance is due 14 days prior to arrival at camp and is
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
        due 14 days prior to arrival at camp and is non-refundable. In the case
        of absence for any reason during the camp week, including homesickness
        or disciplinary departure, no refund will be issued except upon a signed
        physician’s order. In this event, a prorated camp refund will be issued,
        less the non-refundable deposit.
      </p>
      <ul>
        <li>
          $50 non-refundable deposit per day camp & ultimate day camp
          registration
        </li>
        <li>$100 non-refundable deposit per overnight camp registration</li>
        <li>
          The balance is due 14 days prior to arrival at camp and is
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
