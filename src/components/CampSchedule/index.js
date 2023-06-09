import React, { useEffect, useState } from "react"

import "./campSchedule.scss"

export default function CampSchedule({
  type,
  weeks,
  dates,
  discountedWeeks,
  programs,
}) {
  const [capacity, setCapacity] = useState([])
  useEffect(() => {
    getCapacity()
  }, [])

  async function getCapacity() {
    const res = await fetch(
      `${
        process.env.NODE_ENV === "development"
          ? "http://localhost:4000"
          : "https://api.teenranch.com"
      }/capacities`
    ).then(res => res.json())
    setCapacity(res)
  }

  return (
    <div className="schedule__container">
      <div className="schedule__programs">
        {discountedWeeks?.length > 0 && (
          <div className="schedule__spacerDiscount">&nbsp;</div>
        )}
        <div className="schedule__spacer">Program / Date</div>
        {programs.map((program, i) => (
          <div key={i} className="schedule__program">
            {program.name}
          </div>
        ))}
      </div>
      <div className="schedule__dates">
        <div
          className="schedule__row"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${dates.length}, 1fr)`,
          }}
        >
          {discountedWeeks.map((isDiscount, i) => {
            return (
              <div
                key={i}
                className={`schedule__dateDiscount ${
                  isDiscount ? `schedule__dateDiscount--discounted` : ""
                }`}
              >
                {isDiscount ? <div>Discounted</div> : <>&nbsp;</>}
              </div>
            )
          })}
        </div>
        <div
          className="schedule__row"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${dates.length}, 1fr)`,
          }}
        >
          {dates.map((date, i) => {
            const isDiscount = discountedWeeks[i]
            const isPreviousDiscount = discountedWeeks[i - 1]

            return (
              <div
                key={i}
                className={`schedule__date ${
                  isDiscount ? "schedule__date--discount" : ""
                } ${
                  isPreviousDiscount ? "schedule__date--discountPrevious" : ""
                } ${
                  weeks && weeks[i] === "UDC"
                    ? `schedule__date--UDC`
                    : weeks && weeks[i] === "ONC"
                    ? "schedule__date--ONC"
                    : ""
                } ${
                  weeks && type && weeks[i] !== type
                    ? "schedule__date--secondary"
                    : ""
                }`}
              >
                <div>
                  <div className="schedule__dateHeading">{date}</div>
                  {weeks && (
                    <div
                      className={`${
                        weeks && type && weeks[i] !== type
                          ? "schedule__date--secondary"
                          : weeks[i] === "UDC"
                          ? "schedule__dateColor--UDC"
                          : weeks[i] === "ONC"
                          ? "schedule__dateColor--ONC"
                          : ""
                      }`}
                    >
                      {weeks[i]}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
        {programs.map((program, i) => {
          const isLastProgram = i === programs.length - 1

          const programCapacities = capacity
            .filter(currentProgramCapacity =>
              program.ids.includes(currentProgramCapacity.programId)
            )
            .sort((a, b) => a.startDate - b.startDate)

          let realDateIndex = 0

          return (
            <div
              className="schedule__row"
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${dates.length}, 1fr)`,
              }}
            >
              {program.dates.map((ages, i) => {
                const isDiscount = discountedWeeks[i]
                const isPreviousDiscount = discountedWeeks[i - 1]

                const programCapacity = programCapacities[realDateIndex]

                // const programCapacity = programCapacities.find(
                //   currentProgramCapacity => currentProgramCapacity.startDate <
                // )

                const capacityPercentage = Math.round(
                  programCapacity
                    ? (programCapacity.currentCapacity /
                        programCapacity.capacity) *
                        100
                    : 0
                )

                const spotsleft = Number(
                  programCapacity
                    ? programCapacity.capacity - programCapacity.currentCapacity
                    : 0
                )

                if (ages.length > 0) {
                  realDateIndex += 1
                }

                return (
                  <div
                    key={i}
                    style={{
                      ...(spotsleft === 0 && { color: "gray" }),
                    }}
                    className={`schedule__programDate ${
                      !isLastProgram && isDiscount
                        ? "schedule__date--discount"
                        : ""
                    }  ${
                      !isLastProgram && isPreviousDiscount
                        ? "schedule__date--discountPrevious"
                        : ""
                    } ${
                      isLastProgram && isDiscount
                        ? `schedule__date--discountLast`
                        : ""
                    } ${
                      ["UDC", "ONC", "NO CAMP", "TBD"].includes(ages)
                        ? "schedule__programDate--otherCamp"
                        : ages
                        ? weeks && type && weeks[i] !== type
                          ? "schedule__programDate--secondary"
                          : ""
                        : "schedule__programDate--blank"
                    } ${
                      weeks && weeks[i] === "UDC"
                        ? "schedule__programDate--UDC"
                        : weeks && weeks[i] === "ONC"
                        ? "schedule__programDate--ONC"
                        : ""
                    }`}
                    // style={{
                    //   ...(weeks && {
                    //     color: weeks[i] === "UDC" ? "green" : "blue",
                    //   }),
                    // }}
                  >
                    <div>
                      {" "}
                      {["UDC", "ONC", "NO CAMP", "TBD"].includes(ages)
                        ? ages
                        : ages
                        ? `Age: `
                        : ""}
                      {!["UDC", "ONC", "NO CAMP", "TBD"].includes(ages) && ages}
                      {ages && capacityPercentage >= 80 ? (
                        <div
                          style={{
                            fontSize: "1rem",
                            color: spotsleft === 0 ? "red" : "darkred",
                            textTransform: "uppercase",
                            marginTop: ".2rem",
                          }}
                        >
                          {spotsleft > 0 ? (
                            <>
                              {spotsleft} {spotsleft === 1 ? "spot" : "spots"}{" "}
                              remaining
                            </>
                          ) : (
                            <>Program is full</>
                          )}
                        </div>
                      ) : null}
                    </div>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function PreBuiltCampSchedule({ sections, type: defaultType = null }) {
  const [type, setType] = useState(defaultType)
  return (
    <>
      {!sections?.includes("junior") && (
        <>
          <h2>
            Overnight <span style={{ color: "green" }}>(ONC)</span> and Ultimate
            Day Camps <span style={{ color: "blue" }}>(UDC)</span>
          </h2>

          <div className="scheduleFilterContainer">
            Filters:
            <button
              type="button"
              onClick={() => setType("ONC")}
              className={`scheduleFilterButton scheduleFilterButton-ONC ${
                type === "ONC" ? "scheduleFilterButton--selected" : ""
              }`}
            >
              Overnight camps
            </button>
            <button
              type="button"
              onClick={() => setType("UDC")}
              className={`scheduleFilterButton scheduleFilterButton-UDC ${
                type === "UDC" ? "scheduleFilterButton--selected" : ""
              }`}
            >
              Ultimate day camps
            </button>
            <button
              type="button"
              onClick={() => setType(null)}
              className="scheduleFilterButtonClear"
            >
              clear filter
            </button>
          </div>
        </>
      )}
      <div style={{ padding: "1rem 0", color: "red", fontSize: "1.4rem" }}>
        <strong>Discounted week:</strong> (August 7 - 11) Due to the Civic
        Holiday on August 7th, overnight camp will start on Monday.
      </div>
      <CampSchedule
        type={type}
        weeks={["UDC", "ONC", "ONC", "ONC", "ONC", "ONC", "ONC", "UDC", "UDC"]}
        discountedWeeks={[
          false,
          false,
          false,
          false,
          false,
          true,
          false,
          false,
          false,
        ]}
        dates={[
          <>July 3-7</>,
          <>July 9-14</>,
          <>July 16-21</>,
          <>July 23-28</>,
          <>July 30 - Aug. 4</>,
          <>Aug. 7-11</>,
          <>Aug. 13-18</>,
          <>Aug. 21-25</>,
          <>Aug. 28 - Sep. 1</>,
        ]}
        programs={[
          ...(!sections || sections.includes("hockey")
            ? [
                {
                  name: "Hockey camp",
                  dates: [
                    "",
                    "8-12",
                    "",
                    "8-12",
                    "",
                    "8-11",
                    "13-16",
                    "8-13",
                    "8-13",
                  ],
                  ids: [2, 63],
                },
                {
                  ids: [59, 64],
                  name: "Elite hockey camp",
                  dates: [
                    "",
                    "",
                    "",
                    "",
                    <>
                      11-14
                      <br />
                      AA/AAA
                    </>,
                    <>
                      8-11
                      <br />
                      AA/AAA
                    </>,
                    <>
                      13-16
                      <br />
                      All levels
                    </>,
                    <>
                      8-13
                      <br />
                      AA/AAA
                    </>,
                    "",
                  ],
                },
                {
                  ids: [3],
                  name: "Girl's hockey camp",
                  dates: ["", "", "", "8-13", "", "", "", "", ""],
                },
                {
                  ids: [4],
                  name: "Goalie camp",
                  dates: ["", "", "", "", "8-14", "", "", "", ""],
                },
                {
                  ids: [74],
                  name: "Summer drop-in ice time",
                  dates: ["", "", "", "", "", "", "", "", "8-13"],
                },
              ]
            : []),
          ...(!sections || sections.includes("horses")
            ? [
                {
                  ids: [8, 67],
                  name: "Western riding camp",
                  dates: [
                    "8-12",
                    "8-12",
                    "10-14",
                    "8-12",
                    "10-14",
                    "8-12",
                    "13-16",
                    "8-12",
                    "8-12",
                  ],
                },
                {
                  ids: [7, 68],
                  name: "English riding camp",
                  dates: [
                    "8-12",
                    "8-12",
                    "10-14",
                    "8-12",
                    "10-14",
                    "8-12",
                    "13-16",
                    "8-12",
                    "8-12",
                  ],
                },
                {
                  ids: [27],
                  name: "Rodeo camp",
                  dates: ["", "", "", "", "12-16", "", "", "", ""],
                },
                {
                  ids: [9],
                  name: "Intensive equestrian camp",
                  dates: ["", "", "", "", "", "", "12-16", "", ""],
                },
              ]
            : []),
          ...(!sections || sections.includes("wham")
            ? [
                {
                  ids: [70, 73],
                  name: "WHAM camp",
                  dates: [
                    "8-12",
                    "8-12",
                    "10-14",
                    "8-12",
                    "10-14",
                    "8-12",
                    "13-16",
                    "8-12",
                    "8-12",
                  ],
                },
              ]
            : []),
          ...(!sections || sections.includes("adventure")
            ? [
                {
                  ids: [13],
                  name: "Adventure camp",
                  dates: ["", "", "", "", "", "10-12", "", "", ""],
                },
              ]
            : []),
          ...(!sections || sections.includes("junior")
            ? [
                {
                  ids: [15],
                  name: "Junior day camp",
                  dates: [
                    "5-7",
                    "5-7",
                    "5-7",
                    "5-7",
                    "5-7",
                    "5-7",
                    "5-7",
                    "5-7",
                    "5-7",
                  ],
                },
              ]
            : []),
        ]}
      />
    </>
  )
}
