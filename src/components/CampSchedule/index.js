import React, { useEffect, useState } from "react"

import "./campSchedule.scss"
import currency from "currency.js"

const colors ={
  primaryDark: '#002146',
  primaryLight: 'rgb(0, 57, 121)',
  lightGreen: 'rgb(221, 254, 222)',
  lightBlue: 'rgb(223, 238, 255)'
}

function formatDates(startDate, endDate) {
  if (startDate.getMonth() === endDate.getMonth()) {
    return `${new Intl.DateTimeFormat("en-CA", {
      month:'short',
      day:'numeric'
    }).format(startDate)}-${new Intl.DateTimeFormat("en-CA", {
      day:'numeric'
    }).format(endDate)}`
  }
    return `${new Intl.DateTimeFormat("en-CA", {
      month:'short',
      day:'numeric'
    }).format(startDate)} - ${new Intl.DateTimeFormat("en-CA", {
      month:'short',
      day:'numeric'
    }).format(endDate)}`
}

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
      `${process.env.NODE_ENV === "developments"
        ? "http://localhost:4000"
        : "https://api.teenranch.com"
      }/capacities`
    ).then(res => res.json())

    console.log(res)
    setCapacity(res)
  }
  
  if (!capacity) return null

  return (
    <div className="schedule__container">
      <div className="schedule__programs">
        {discountedWeeks?.length > 0 && (
          <div className="schedule__spacerDiscount">&nbsp;</div>
        )}
        <div className="schedule__spacer">Program / Date</div>
        {programs.map((program, i) => (
          <div key={i} 
          // className="schedule__program"
            style={{
              height:'70px',
              borderBottom:`1px solid ${colors.primaryLight}`,
              borderLeft:`1px solid ${colors.primaryLight}`,
              background: colors.primaryDark,
              color:'white',
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              textAlign:'center',
              boxSizing:'border-box',
              padding:'0 8px'
            }}
          >
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
                className={`schedule__dateDiscount ${isDiscount ? `schedule__dateDiscount--discounted` : ""
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
                className={`schedule__date ${isDiscount ? "schedule__date--discount" : ""
                  } ${isPreviousDiscount ? "schedule__date--discountPrevious" : ""
                  } ${weeks && weeks[i] === "UDC"
                    ? `schedule__date--UDC`
                    : weeks && weeks[i] === "ONC"
                      ? "schedule__date--ONC"
                      : ""
                  } ${weeks && type && weeks[i] !== type
                    ? "schedule__date--secondary"
                    : ""
                  }`}
              >
                <div>
                  <div className="schedule__dateHeading">{formatDates(date[0],date[1])}</div>
                  {/* <div className="schedule__dateHeading">{JSON.stringify(date)}</div> */}
                  {weeks && (
                    <div
                      className={`${weeks && type && weeks[i] !== type
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
        {programs.map((program, programIndex) => {
          const isLastProgram = programIndex === programs.length - 1

          const programCapacities = capacity
            .filter(currentProgramCapacity =>
              program?.ids?.includes(currentProgramCapacity.programId)
            )
            .sort((a, b) => a.startDate - b.startDate)
          if (program.ids.includes(59))
            console.log("PROGRAM CAPACITIES", programCapacities)
          let realDateIndex = 0
          
          const programDates = capacity?.filter(date => program.ids.includes(date.programId))

          console.log('dates----',programDates)

          return (
            <div
              className="schedule__row"
              key={programIndex}
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${dates.length}, 1fr)`,
              }}
            >
              
              {dates?.map((date,dateIndex) => {
                const weekLength = Math.floor(
                  Math.abs(
                    date[0].getTime() - date[1].getTime()
                  ) / (1000 * 60 * 60 * 24)
                )
                
                                const isDiscount = discountedWeeks[dateIndex]
                const isPreviousDiscount = discountedWeeks[dateIndex - 1]


                const filteredPrograms = programDates?.filter(programDate => new Date(programDate.startDate) <= date[1] && new Date(programDate.endDate) >= date[0]) 
                const fullWeekProgram = filteredPrograms?.filter(programDate => {
                  const programStartDate = new Date(programDate.startDate)
                  const programEndDate = new Date(programDate.endDate)
                  const days = Math.floor(
                    Math.abs(
                      programStartDate.getTime() - programEndDate.getTime()
                    ) / (1000 * 60 * 60 * 24)
                  )
                  if (days > weekLength/2) return true
                  return false
                })
                                const halfWeekProgram = filteredPrograms?.filter(programDate => {
                  const programStartDate = new Date(programDate.startDate)
                  const programEndDate = new Date(programDate.endDate)
                  const days = Math.floor(
                    Math.abs(
                      programStartDate.getTime() - programEndDate.getTime()
                    ) / (1000 * 60 * 60 * 24)
                  )
                  if (days > weekLength/2) return false
                  return true
                })
                
              //   let weekType = weeks[dateIndex]
              //   if (program?.name?.includes('UDC')) weekType === 'UDC'
              // console.log({programName: program.name})
                
              const weekType = program.overrideType || weeks[dateIndex]

return (
  <div key={dateIndex} 
                    className="schedule__programDate!"
                    style={{
                      display:'grid',
                      height:'70px',
                      // minWidth:halfWeekProgram?.length > 1 ? '140px':'70px',
                      minWidth: '140px',
                      boxSizing:'border-box',
                      borderBottom: '1px solid #efefef',
                      borderRight: '1px solid #efefef',
                      ...(filteredPrograms?.length ===0 && {
                        ...(weekType==='UDC' ? {
                          background:colors.lightBlue
                        }:{
                        background: colors.lightGreen 
                        })
                      }),
                      ...(dateIndex === 0 && {                      
                        borderLeft: '1px solid #efefef'
                      }),
                      ...(programIndex === 0 && {                      
                        borderTop: '1px solid #efefef'
                      }),
                      ...(fullWeekProgram?.length > 0 && halfWeekProgram?.length > 0 && { gridTemplateRows: '1fr 1fr' }),
                      ...(isDiscount && {
                        borderLeft: '1px solid red',
                        ...(programs.length -1 === programIndex && {
                          borderBottom: '1px solid red'
                        }),
                      }),
                      ...(isPreviousDiscount && {
                        borderLeft: '1px solid red'
                      }),
                      ...(type && weekType !== type && filteredPrograms?.length > 0 && {
                        color: 'rgba(0,0,0,0.2)',
                      })
                    }}
  >
                                        {
                      fullWeekProgram?.map((program,programIndex) => {
                        const capacityPercentage = Math.round((program.currentCapacity / program.capacity) * 100)
                        const spotsleft = Number(program.capacity - program.currentCapacity)

                        return (
                          <div key={programIndex}
                            style={{
                              display:'flex',
                              justifyContent:'center',
                              alignItems:'center',
                              flexDirection:'column',
                            }}
                          >
                            <div style={{color:'rgb(102,102,102)', fontSize:'11px',                      ...(type && weekType !== type && filteredPrograms?.length > 0 && {
                        color: 'rgba(0,0,0,0.2)',
                      })
}}>{currency(Number(program.programDatePrice) > 0 ? program.programDatePrice : program.programPrice).format()}</div>
                            <div style={{fontWeight:'bold', fontSize:'11px'}}>Age: {program.ageMin}-{program.ageMax}</div>
                                                  
                       {capacityPercentage >= 80 ? (
                        <div
                          style={{
                            fontSize: "9px",
                            color: spotsleft <1 ? "red" : "darkred",
                            textTransform: "uppercase",
                            marginTop: ".2rem",
                            textAlign:'center',
                            fontWeight:'bold'
                          }}
                        >
                          {spotsleft > 0 ? (
                            <>
                              {spotsleft} {spotsleft === 1 ? "spot" : "spots"}{" "}
                            </>
                          ) : (
                            <>At capacity</>
                          )}
                        </div>
                      ) : null}

                           </div> 
                        )
                      })
                    }
{
  halfWeekProgram?.length > 0 && (
                    <div
                      style={{
                      display:'grid',
                      gridTemplateColumns: `repeat(${halfWeekProgram.length}, 1fr)`,
                      }}
                    >
                    {
                      halfWeekProgram?.map((program,programIndex) => {

                        const capacityPercentage = Math.round((program.currentCapacity / program.capacity) * 100)
                        const spotsleft = Number(program.capacity - program.currentCapacity)

                        return (
                          <div key={programIndex}
                            style={{
                              display:'flex',
                              justifyContent:'center',
                              alignItems:'center',
                              flexDirection:'column',
                              ...(fullWeekProgram?.length > 0 && {
                                borderTop: '1px solid #efefef'
                              }),
                              ...(programIndex > 0 && {
                                borderLeft: '1px solid #efefef'
                              })
                            }}
                          >
                            <div style={{color:'rgb(102,102,102)', fontSize:'11px',                      ...(type && weekType !== type && filteredPrograms?.length > 0 && {
                        color: 'rgba(0,0,0,0.2)',
                      })
}}>{currency(Number(program.programDatePrice) > 0 ? program.programDatePrice : program.programPrice).format()}</div>
                            <div style={{fontWeight:'bold', fontSize:'11px'}}>Age: {program.ageMin}-{program.ageMax}</div>
                                                         {capacityPercentage >= 80 ? (
                        <div
                          style={{
                            fontSize: "9px",
                            color: spotsleft <1 ? "red" : "darkred",
                            textTransform: "uppercase",
                            marginTop: ".2rem",
                            textAlign:'center',
                            fontWeight:'bold'
                          }}
                        >
                          {spotsleft > 0 ? (
                            <>
                              {spotsleft} {spotsleft === 1 ? "spot" : "spots"}{" "}
                            </>
                          ) : (
                            <>At capacity</>
                          )}
                        </div>
                      ) : null}

                           </div> 
                        )
                      })
                    }
                    </div>
  )
}
    </div>
)
              })}

              {1==2&&program.dates.map((ages, i) => {
                                const index = i - (program.discountOffset||0)

                const isDiscount = discountedWeeks[index]
                const isPreviousDiscount = discountedWeeks[index - 1]

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
                
                const isSpan = typeof ages === 'string' && ages.includes(":span")
                if (isSpan) {
                  const [age] = ages.split(":")
                  if (!age) ages =null
                    ages= age
                }
                return (
                  <div
                    key={i}
                    style={{
                      ...(spotsleft === 0 && { color: "gray" }),
                      ...(isSpan && { gridColumn: 'span 2' })
                    }}
                    className={`schedule__programDate ${isDiscount ? "schedule__date--discount" : ""
                      }  ${isPreviousDiscount
                        ? "schedule__date--discountPrevious"
                        : ""
                      } ${isLastProgram && isDiscount
                        ? `schedule__date--discountLast`
                        : ""
                      } ${["UDC", "ONC", "NO CAMP", "TBD"].includes(ages)
                        ? "schedule__programDate--otherCamp"
                        : ages
                          ? weeks && type && weeks[i] !== type
                            ? "schedule__programDate--secondary"
                            : ""
                          : "schedule__programDate--blank"
                      } ${weeks && weeks[i] === "UDC"
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
              className={`scheduleFilterButton scheduleFilterButton-ONC ${type === "ONC" ? "scheduleFilterButton--selected" : ""
                }`}
            >
              Overnight camps
            </button>
            <button
              type="button"
              onClick={() => setType("UDC")}
              className={`scheduleFilterButton scheduleFilterButton-UDC ${type === "UDC" ? "scheduleFilterButton--selected" : ""
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
        <ul>
          <li>(August 2-6) Due to the Civic
            Holiday on August 2nd, overnight camp will start on Monday, junior day
            camp will start on Tuesday.</li>
        </ul>
      </div>
      <CampSchedule
        type={type}
        weeks={["ONC", "ONC", "ONC", "ONC", "ONC", "ONC", "ONC", "UDC", "UDC"]}
        discountedWeeks={[
          false,
          false,
          false,
          false,
          true,
          false,
          false,
          false,
          false,
        ]}
        dates={[
          [new Date('2027-07-04T00:00:00.000-04:00'), new Date('2027-07-09T23:59:59.999-04:00')],
          [new Date('2027-07-11T00:00:00.000-04:00'), new Date('2027-07-16T23:59:59.999-04:00')],
          [new Date('2027-07-18T00:00:00.000-04:00'), new Date('2027-07-23T23:59:59.999-04:00')],
          [new Date('2027-07-25T00:00:00.000-04:00'), new Date('2027-07-30T23:59:59.999-04:00')],
          [new Date('2027-08-02T00:00:00.000-04:00'), new Date('2027-08-06T23:59:59.999-04:00')],
          [new Date('2027-08-08T00:00:00.000-04:00'), new Date('2027-08-13T23:59:59.999-04:00')],
          [new Date('2027-08-15T00:00:00.000-04:00'), new Date('2027-08-20T23:59:59.999-04:00')],
          [new Date('2027-08-23T00:00:00.000-04:00'), new Date('2027-08-27T23:59:59.999-04:00')],
          [new Date('2027-08-30T00:00:00.000-04:00'), new Date('2027-09-03T23:59:59.999-04:00')],
        ]}
        programs={[
          ...(!sections || sections.includes("hockey")
            ? [
              {
                name: "Hockey Camp (ONC)",
                dates: [
                  "8-10",
                  "11-14",
                  "13-16",
                  "11-14",
                  null,
                  "8-10",
                  null,
                  "13-16",
                  null,
                  ":span"
                ],
                ids: [2],
              },
              {
                name: "Hockey Camp (UDC)",
                overrideType: 'UDC',
                dates: [
                  null,
                  null,
                  <>13-16<br/><span style={{fontSize:"9pt", fontWeight:'bold'}}>UDC</span></>,
                  <>11-14<br/><span style={{fontSize:"9pt", fontWeight:'bold'}}>UDC</span></>,
                  <>11-14<br/><span style={{fontSize:"9pt", fontWeight:'bold'}}>MASH UDC</span></>,
                  null,
                  null,
                  null,
                  "8-13",
                  "8-13:span"
                ],
                ids: [63],
              },
              {
                ids: [59,64],
                name: "Elite Hockey Camp",
                dates: [
                  null,
                  null,
                  null,
                  null,
                  "11-14",
                  "8-10",
                  null,
                  "13-16",
                  "8-13",
                  ":span"
                ],
              },
              {
                ids: [3],
                name: "Girl's Hockey Camp",
                dates: [
                  null,
                  null,
                  null,
                  "11-14",
                  null,
                  null,
                  null,
                  null,
                  null,
                  ":span"
                ],
              },
              {
                ids: [4],
                name: "Goalie Camp",
                dates: [null, null, null, null, "11-14", null,  null, null, null,":span"],
              },
              {
                ids: [74],
                name: "Summer Drop-in Ice Time",
                dates: [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  "8-13",
                  "8-13:span",
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
                  "8-10",
                  "11-14",
                  "13-16",
                  "11-14",
                  "11-14",
                  "8-10",
                  "11-14",
                  "13-16",
                  "8-13",
                  ":span"
                ],
              },
              {
                ids: [7, 68],
                name: "English Riding Camp",
                types:['ONC','UDC'],
                dates: [
                  "8-10",
                  "11-14",
                  "13-16",
                  "11-14",
                  "11-14",
                  "8-10",
                  "11-14",
                  "13-16",
                  "8-13",
                  ":span"
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
                  null,
                  "13-16",
                  null,
                  ":span"
                ],
              },
              // {
              //   ids: [9],
              //   name: "Intensive Equestrian Camp",
              //   dates: [
              //     null,
              //     null,
              //     null,
              //     "12-15",
              //     null,
              //     null,
              //     null,
              //     null,
              //     "",
              //   ],
              // },
            ]
            : []),
          ...(!sections || sections.includes("wham")
            ? [
              {
                ids: [70, 73],
                name: "WHAM Camp",
                dates: [
                  "8-10",
                  "11-14",
                  "13-16",
                  "11-14",
                  "11-14",
                  "8-10",
                  "11-14",
                  "13-16",
                  "8-13",
                  "8-13:span"
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
                  "5-8:span",
                  "5-8",
                  "5-8",
                  "5-8",
                  "5-8",
                  "5-8",
                  "5-8",
                  "5-8",
                  "5-8:span",
                ],
              },
              {
                ids: [16],
                name: "Junior Day Camp (Hockey)",
                dates: [
                  null,
                  null,
                  "5-8",
                 null,
                 null,
                 null,
                  "5-8",
                  null,
                  null,
                  "5-8",
                  "5-8",
                ],
              },
            ]
            : []),
        ]}
      />
    </>
  )
}
