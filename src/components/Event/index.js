import React from 'react'
import { DateTime } from 'luxon'

import './event.scss'

const EVENT_TYPE = {
    SCHEDULED: 'EventScheduled',
    MOVED_ONLINE: 'EventMovedOnline',
    POSTPONED: 'EventPostponed',
    RESCHEDULED: 'EventRescheduled',
    CANCELLED: 'EventCancelled'
}

const EVENT_ATTENDANCE_MODE = {
    OFFLINE: 'OfflineEventAttendanceMode',
    ONLINE: 'OnlineEventAttendanceMode',
    MIXED: 'MixedEventAttendanceMode'
}

export default function ({ title, venue, description, startDate, endDate, price, status = 'SCHEDULED', attendanceMode = 'OFFLINE' }){

    const data = {
        "@context": "https://schema.org/",
        "@type": "Event",
        name: title,
        startDate: startDate + '-05:00',
        ...(endDate && { endDate: endDate + '-05:00' }),
        description,
        eventStatus: `https://schema.org/${ EVENT_TYPE[status] }`,
        eventAttendanceMode: `https://schema.org/${ EVENT_ATTENDANCE_MODE[attendanceMode] }`,
        location: {
            "@type": "Place",
            name: venue.name,
            address: {
                "@type": "PostalAddress",
                streetAddress: venue.address.address,
                addressLocality: venue.address.city,
                addressRegion: venue.address.province,
                postalCode: venue.address.postalCode,
                addressCountry: 'CA'
            }
        },
        ...(price && {
            offers: {
                "@type": 'Offer',
                price: price,
                priceCurrency: 'CAD'
            }
        })
        
    }

    return (
        <>
            <div className='eventContainer'>
                <div className='eventCalendar'>
                    <div className='eventCalendarMonth'>{ DateTime.fromISO(startDate).toFormat('LLL') }</div>
                    <div className='eventCalendarDay'>{ DateTime.fromISO(startDate).day }</div>
                </div>
                <div className='eventTitle'>{ title }</div>
                <div >{ startDate }</div>
                {
                    endDate && <div>{ endDate }</div>
                }
                <script type='application/ld+json'
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(data)
                    }}
                />                
            </div>
        </>
    )
}