import React from "react"
import Container from "./Container"
export function BalancePayments() {
  return (
    <Container type="body">
      <div
        style={{
          padding: "4rem",
          background: "#0074F7",
          borderRadius: "4px",
          color: "#fff",
        }}
      >
        <h2 style={{ margin: "0 0 2rem 0" }}>
          Balance payments, info pack, and snackbar:
        </h2>{" "}
        <p>
          6 weeks before your camp check-in date we'll send you an email with:
          all the details you need for camp, a link to pay your remaining
          balance, and set up your snackbar account(s).
        </p>
        <p>
          If you wish to pay the remaining balance by e-transfer, please
          etransfer <u>bookkeeper@teenranch.com</u> and be sure to include your
          child’s name, session date & receipt number.
        </p>
      </div>
    </Container>
  )
}
