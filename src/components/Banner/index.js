import React from "react"
import "./banner.scss"
import { Icon } from "@iconify/react"
export function Banner() {
  return (
    <div className="banner__wrapper">
      <div className="banner__container">
        <Icon
          icon={"mdi:file-pdf-box"}
          fontSize={24}
          style={{ color: "red" }}
        />
        <a
          href="/tenReasonsToSendYourKidToCamp.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "underline",
          }}
        >
          10 Reasons Why Camp Kids Excel Beyond Their Peers{" "}
        </a>{" "}
        <span style={{ fontSize: "9pt" }}>(3 Minute Read)</span>
      </div>
    </div>
  )
}
