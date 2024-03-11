import React, { useEffect, useState } from "react"

import "./campSchedule.scss"
import currency from "currency.js"

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
        process.env.NODE_ENV === "developments"
          ? "http://localhost:4000"
          : "https://api.teenranch.com"
      }/capacities`
    ).then(res => res.json())

    console.log(res)
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
              program?.ids?.includes(currentProgramCapacity.programId)
            )
            .sort((a, b) => a.startDate - b.startDate)
          if (program.ids.includes(59))
            console.log("PROGRAM CAPACITIES", programCapacities)
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

                const price =
                  Number(programCapacity?.programDatePrice) ||
                  Number(programCapacity?.programPrice)

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

                if (program.ids.includes(59)) console.log(ages)

                if (ages) {
                  realDateIndex += 1
                }

                return (
                  <div
                    key={i}
                    style={{
                      ...(spotsleft === 0 && { color: "gray" }),
                    }}
                    className={`schedule__programDate ${
                      isDiscount ? "schedule__date--discount" : ""
                    }  ${
                      isPreviousDiscount
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
                      {ages && price > 0 && (
                        <div style={{ fontSize: "9pt", color: "#666" }}>
                          {currency(price).format()}
                        </div>
                      )}
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
        <strong>Discounted weeks:</strong> 
        <ul><li>(July 2-5) Due to Canada Day (July 1), camp will start on Tuesday.</li>
        <li>(August 5 - 9) Due to the Civic
        Holiday on August 5th, overnight camp will start on Monday, junior day
        camp will start on Tuesday.</li>
        </ul>
      </div>
      <CampSchedule
        type={type}
        weeks={["UDC", "ONC", "ONC", "ONC", "ONC", "ONC", "ONC", "UDC", "UDC"]}
        discountedWeeks={[
          true,
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
          <>July 2-5</>,
          <>July 7-12</>,
          <>July 14-19</>,
          <>July 21-26</>,
          <>July 28 - Aug. 2</>,
          <>Aug. 5-9</>,
          <>Aug. 11-16</>,
          <>Aug. 19-23</>,
          <>Aug. 26-30</>,
        ]}
        programs={[
          ...(!sections || sections.includes("hockey")
            ? [
                {
                  name: "Hockey Camp",
                  dates: [
                    null,
                    null,
                    "10-14",
                    null,
                    null,
                    null,
                    "13-16",
                    "8-12",
                    "10-13",
                  ],
                  ids: [2, 63],
                },
                {
                  ids: [59, 64],
                  name: "Elite Hockey Camp",
                  dates: [
                    null,
                    null,
                    null,
                    null,
                    null,
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
                      8-12
                      <br />
                      AA/AAA
                    </>,
                    null,
                  ],
                },
                {
                  name: "Hawerchuk Strong Hockey",
                  dates: [
                    null,
                    null,
                    null,
                    "13-16",
                    "9-12",
                    null,
                    null,
                    null,
                    "",
                  ],
                  ids: [1000002],
                },
                {
                  ids: [3],
                  name: "Girl's Hockey Camp",
                  dates: [
                    null,
                    null,
                    "10-14",
                    null,
                    null,
                    null,
                    null,
                    null,
                    "",
                  ],
                },
                {
                  ids: [4],
                  name: "Goalie Camp",
                  dates: [null, null, null, null, null, "8-13", null, null, ""],
                },
                {
                  ids: [74],
                  name: "Summer Drop-in Ice Time (Regular Hockey)",
                  dates: [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    "8-12",
                    "10-13",
                  ],
                },
              ]
            : []),
          ...(!sections || sections.includes("horses")
            ? [
                {
                  ids: [8, 67],
                  name: "Western Riding Camp",
                  dates: [
                    "8-12",
                    "8-12",
                    "10-14",
                    "10-14",
                    "8-12",
                    "8-12",
                    "13-16",
                    "8-12",
                    "8-12",
                  ],
                },
                {
                  ids: [7, 68],
                  name: "English Riding Camp",
                  dates: [
                    "8-12",
                    "8-12",
                    "10-14",
                    "10-14",
                    "8-12",
                    "8-12",
                    "13-16",
                    "8-12",
                    "8-12",
                  ],
                },
                {
                  ids: [27],
                  name: "Rodeo Camp",
                  dates: [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    "13-16",
                    null,
                    "",
                  ],
                },
                {
                  ids: [9],
                  name: "Intensive Equestrian Camp",
                  dates: [
                    null,
                    null,
                    null,
                    "12-15",
                    null,
                    null,
                    null,
                    null,
                    "",
                  ],
                },
              ]
            : []),
          ...(!sections || sections.includes("wham")
            ? [
                {
                  ids: [70, 73],
                  name: "WHAM Camp",
                  dates: [
                    "8-12",
                    "8-12",
                    "10-14",
                    "10-14",
                    "8-12",
                    "8-12",
                    "13-16",
                    "8-12",
                    "8-12",
                  ],
                },
              ]
            : []),
          // ...(!sections || sections.includes("adventure")
          //   ? [
          //       {
          //         ids: [13],
          //         name: "Adventure Camp",
          //         dates: [null, null, null, null, null, null, null, null, ""],
          //       },
          //     ]
          //   : []),
          ...(!sections || sections.includes("junior")
            ? [
                {
                  ids: [15],
                  name: "Junior Day Camp",
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
