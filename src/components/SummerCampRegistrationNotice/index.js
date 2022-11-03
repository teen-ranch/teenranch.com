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
        Summer Camp Registration opens January 16, 2023
        {children && <div>{children}</div>}
      </div>
    </Container>
  )
}
