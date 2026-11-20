import React, { useEffect, useState } from "react"

import "./campSchedule.scss"
import currency from "currency.js"
import DateDiff from "date-diff"

const colors ={
  primaryDark: '#002146',
  primaryLight: 'rgb(0, 57, 121)',
  lightGreen: '#ecfdf5',
  lightBlue: '#f0f9ff',
  greenBorder:'#6ee7b7',
  greenBorderAlternate:'#34d399',
  blueBorder:'#7dd3fc',
  blueBorderAlternate:'#38bdf8',
  blueBaseAlternate: '#7dd3fc',
  greenBaseAlternate: '#6ee7b7',
  redBorder:'#ef4444',
redBackground: '#fca5a5',
redBackgroundAlternate: '#dc2626',
redText:'#450a0a',
redTextAlternate:'#fef2f2',


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
  subDates,
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

    // console.log(res)
    setCapacity(res)
  }
  
  if (!capacity) return null

  return (
    <div className="schedule__container">
      <div className="schedule__programs">
        {discountedWeeks?.length > 0 && (
          <div className="schedule__spacerDiscount">&nbsp;</div>
        )}
        <div className="schedule__spacer" style={{borderRadius:'8px 0 0 0'}}>Full Week</div>
        <div className="schedule__spacer" style={{height:'40px', position:'relative'}}>
          Half Week
          <div style={{
            position:'absolute',
            top: '-4px',
            right: '-4px',
            background:colors.redBackgroundAlternate,
            color: colors.redTextAlternate,
            padding:'2px 4px',
            fontSize:'9pt',
           fontWeight:'bold',
            borderRadius:'100px'
          }}>NEW</div>
          </div>
        {programs.map((program, i) => {
          const isLastProgram = i === programs.length -1
          return (
          <div key={i} 
          // className="schedule__program"
            style={{
              height:'56px',
              borderBottom:`1px solid ${colors.primaryLight}`,
              borderLeft:`1px solid ${colors.primaryLight}`,
              background: colors.primaryDark,
              color:'white',
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              textAlign:'center',
              boxSizing:'border-box',
              padding:'0 8px',
              position:'relative',
              ...(isLastProgram && {borderRadius:'0 0 0 8px'})
            }}
          >
            {program.name}
          </div>
        )
        })}
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
                  }`
                }
                style={{
                  fontWeight:'bold',
                  ...(i === dates.length -1 && {borderRadius: '0px 8px 0px 0px'})
                }}
                  // style={{display:'block'}}
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
                  {/* {subDate && (
                    <div style={{borderTop:'1px solid rgba(0,0,0,0.2)', display:'grid', gridTemplateColumns:'1fr 1fr', margin:'0 -10px'}}>
                      {subDate?.map((date,i) => {
                        return (
                          <div key={i}
                            style={{
                              fontSize:'9pt',
                              ...(i > 0 && {borderLeft: '1px solid rgba(0,0,0,0.2)'})
                            }}
                          >
                            {formatDates(date[0], date[1])}
                            </div>
                        )
                      })}
                      </div>
                  )} */}
                </div>
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
            
            const subDate = subDates[i]
            
            const week = weeks[i]
            
            

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
                  }`
                }
                  style={{display:'block', height:'40px', padding:'0', background:  week === 'ONC' ? colors.greenBaseAlternate: colors.blueBaseAlternate, borderLeft: `1px solid ${ (isDiscount || isPreviousDiscount) ? colors.redBorder :week==='ONC' ? colors.greenBorderAlternate:colors.blueBorderAlternate}`, borderTop: `1px solid ${week === 'ONC' ? colors.greenBorderAlternate:colors.blueBorderAlternate}`}}
              >
                <div style={{ width:'100%', height:'100%', fontWeight:'bold'}}>
                {!subDate && <div style={{display:'flex', alignItems:'center',justifyContent:'center', height:'100%', color:'rgba(0,0,0,0.3)'}}>-</div>}
                {subDate &&(
           <>
                             {weeks && (
                    <div
                      className={`${weeks && type && week !== type
                        ? "schedule__date--secondary"
                        : week === "UDC"
                          ? "schedule__dateColor--UDC"
                          : week === "ONC"
                            ? "schedule__dateColor--ONC"
                            : ""
                        }`}
                          style={{height:'100%'}}
                    >
                                        {subDate && (
                    <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', height:'100%'}}>
                      {subDate?.map((date,i) => {
                        return (
                          <div key={i}
                            style={{
                              fontSize:'9pt',
                                      height:'100%',
                                      display:'flex',
                                      justifyContent:'center',
                                      alignItems:'center',
                              ...(i > 0 && {borderLeft: `1px solid ${week === 'ONC' ? colors.greenBorderAlternate:colors.blueBorderAlternate}`})
                            }}
                          >
                            {formatDates(date[0], date[1])}
                            </div>
                        )
                      })}
                      </div>
                  )}

                    </div>
                  )}
</> 
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
          // if (program.ids.includes(59))
          //   console.log("PROGRAM CAPACITIES", programCapacities)
          let realDateIndex = 0
          
          let programDates = capacity?.filter(date => program.ids.includes(date.programId))

          if (program.fullWeek) {
            programDates = programDates?.filter(date => {
              const diff = new DateDiff(new Date(date.endDate), new Date(date.startDate))
              if (diff.days() > 3) return true
            return false
            } )
          }
          if (program.halfWeek) {
            programDates = programDates?.filter(date => {
              const diff = new DateDiff(new Date(date.endDate), new Date(date.startDate))
              if (diff.days() < 3) return true
            return false
            } )
          }

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
                const isLastDate = dateIndex === dates.length -1
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
                      height:'56px',
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
                        borderLeft: '1px solid #ef4444',
                        ...(programs.length -1 === programIndex && {
                          borderBottom: '1px solid #ef4444'
                        }),
                      }),
                      ...(isPreviousDiscount && {
                        borderLeft: '1px solid #ef4444'
                      }),
                      ...(type && weekType !== type && filteredPrograms?.length > 0 && {
                        color: 'rgba(0,0,0,0.2)',
                      }),

                      ...(isLastProgram && isLastDate && {
                        borderRadius:'0 0 8px 0'
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

                // if (program.ids.includes(59)) console.log(ages)

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
        subDates={[
          [
            [new Date('2027-07-04T00:00:00.000-04:00'), new Date('2027-07-06T23:59:59.999-04:00')],
            [new Date('2027-07-07T00:00:00.000-04:00'), new Date('2027-07-09T23:59:59.999-04:00')],
          ],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [
            [new Date('2027-08-30T00:00:00.000-04:00'), new Date('2027-09-01T23:59:59.999-04:00')],
            [new Date('2027-08-30T00:00:00.000-04:00'), new Date('2027-09-03T23:59:59.999-04:00')],
          ],
        ]}
        programs={[
          ...(!sections || sections.includes("hockey")
            ? [
              {
                name: <div>Hockey Camp <br/><span style={{fontSize:'9pt'}}>(ONC)</span></div>,
                ids: [2],
                // fullWeek: true
              },
              // {
              //   name: <div>
              //     Hockey Camp <br/><span style={{fontSize:'9pt'}}>(ONC - Half Week)</span>
              //     <div style={{background:'red', position:'absolute', top:'-5px', right:'-5px', fontSize:'9pt', fontWeight:'bold', padding:'2px 4px', borderRadius:'100px'}}>NEW</div>
              //   </div>,
              //   ids: [2],
              //   halfWeek: true,
              //   new:true
              // },
              {
                name: <div>Hockey Camp<br/><span style={{fontSize:'9pt'}}>(UDC)</span></div>,
                overrideType: 'UDC',
                ids: [63],
              },
              {
                ids: [59,64],
                name: "Elite Hockey Camp",
              },
              {
                ids: [3],
                name: "Girl's Hockey Camp",
              },
              {
                ids: [4],
                name: "Goalie Camp",
              },
              {
                ids: [74],
                name: "Summer Drop-in Ice Time",
              },
            ]
            : []),
          ...(!sections || sections.includes("horses")
            ? [
              {
                ids: [8, 67],
                name: "Western Riding Camp",
                
              },
              {
                ids: [7, 68],
                name: "English Riding Camp",
                types:['ONC','UDC'],
                
              },
              {
                ids: [27],
                name: "Rodeo Camp",
                
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
                name: <div>WHAM Camp</div>,
                // fullWeek: true
              },
//               {
//                 ids: [70, 73],
//                 name: <div >WHAM Camp<br/><span style={{fontSize:'9pt'}}>(Half Week)</span>                 
//                  <div style={{background:'red', position:'absolute', top:'-5px', right:'-5px', fontSize:'9pt', fontWeight:'bold', padding:'2px 4px', borderRadius:'100px'}}>NEW</div>
// </div>,
//                 halfWeek: true
//               },
              
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
                
              },
              {
                ids: [16],
                name: <div>Junior Camp <br/><span style={{fontSize:'9pt'}}>(Hockey)</span></div>,
                // fullWeek: true
              },
              // {
              //   ids: [16],
              //   name: <div >Junior Camp <br/><span style={{fontSize:'9pt'}}>(Hockey - Half Week)</span>
              //                      <div style={{background:'red', position:'absolute', top:'-5px', right:'-5px', fontSize:'9pt', fontWeight:'bold', padding:'2px 4px', borderRadius:'100px'}}>NEW</div>

              //   </div>,
              //   halfWeek: true
              // },
            ]
            : []),
        ]}
      />
    </>
  )
}
