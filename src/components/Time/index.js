import React from "react"
export function Time({ children = "" }) {
  const hour = Number(children.substring(0, 2))
  const minute = children.substring(2)
  return (
    <span title={`24HR: ${children}`}>
      {hour > 12 ? hour - 12 : hour < 1 ? 12 : hour}:{minute}{" "}
      {hour > 11 ? "pm" : "am"}
    </span>
  )
}
