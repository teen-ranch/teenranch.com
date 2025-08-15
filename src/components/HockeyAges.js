import React from 'react'
/**
 * 
 * @param {string} years 
 * @example "2012, 2013, 2014"
 * @returns 
 */

function getAge(year) {
  const today = new Date()
  // const birthYear = new Date(year+'-01-02')
  const birthYear = new Date(year)
  console.log(today.getFullYear(), birthYear.getUTCFullYear())
  let age = today.getFullYear() - birthYear.getUTCFullYear()

  return age
}

export function HockeyAges({years}) {
  
  const yearArray = years.split(',').map(val=>val.trim()).sort((a,b) => b-a)
  const firstYear = yearArray[0]
  const lastYear = yearArray[yearArray.length-1]
  const under = getAge(lastYear)+1
  
  let ages = []
  
  yearArray?.map(year => ages.push(getAge(year)))

  return (
    <div>
      <div title={`Age at Dec 31st: ${ages.join(', ')}`}><strong>U{under}:</strong> {lastYear} - {firstYear}</div>
      <div style={{fontSize:'10pt'}}>Age: {ages.join(', ')}</div>
    </div>
  )
}