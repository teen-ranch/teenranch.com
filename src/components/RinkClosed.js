import { Icon } from "@iconify/react";
import React from "react";

export function RinkClosed() {
  return (
    <div
      style={{
        background: "red",
        padding: "2rem",
        borderRadius: "4px",
        color: "whitesmoke",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <Icon icon="mdi:alert-circle" fontSize={24} />The arena will be closed May
      24 for 6 weeks of rink maintenance.
    </div>
  );
}
