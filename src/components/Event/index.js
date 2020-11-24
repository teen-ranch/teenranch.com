import React from 'react'
import { DateTime } from 'luxon'

export default function ({ title, venue, startDate }){
    return (
        <>
            <div
                vocab='https://schema.org/'
                typeof='Event'
            >
                <div className='eventTitle' property='name'>{ title }</div>
                <div property='startDate' content=''>{ startDate }</div>
                <div className='eventVenue' property='location' typeof='Place'>
                    <div property='name'>{ venue.name }</div>
                    <div property='address' typeof='PostalAddress'>
                        <div property='streetAddress'>{ venue.address.address }</div>
                        <div property='addressLocality'>{ venue.address.city }</div>
                        <div property='addressRegion'>{ venue.address.province }</div>
                        <div property='postalCode'>{ venue.address.postalCode }</div>
                    </div>
                </div>
            </div>
        </>
    )
}