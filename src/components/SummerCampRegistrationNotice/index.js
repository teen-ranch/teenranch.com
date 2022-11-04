import React from "react"
import Container from "components/Container"

export function SummerCampRegistrationNotice({ children }) {
  return (
    <Container type="body">
      <div
        style={{
          padding: "4rem",
          background: "purple",
          borderRadius: "4px",
          color: "#fff",
          textAlign: "center",
          fontSize: "2rem",
        }}
      >
        Summer Camp Registration opens Soon
        {children && <div>{children}</div>}
      </div>
    </Container>
  )
}
