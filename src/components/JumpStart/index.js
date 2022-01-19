import React from "react"
export default function JumpStart() {
  return (
    <div
      style={{
        margin: "4rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.05)",
          padding: "2rem 4rem",
          borderRadius: "1rem",
          textAlign: "center",
          fontStyle: "italic",
          color: "rgba(0,0,0,0.9)",
        }}
      >
        <p>
          Teen Ranch is committed to helping every child attend camp. Please
          contact us for more information on community subsidies as well as
          available scholarships.
        </p>
        {/* <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://jumpstart.canadiantire.ca/pages/individual-child-grants"
        >
          Canadian Tire - Jumpstart Child Grants
        </a> */}
      </div>
    </div>
  )
}
