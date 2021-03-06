import React from 'react'
import { DateTime } from 'luxon'

import './event.scss'
import { useSiteMetadata } from '../../hooks/useSiteMetaData'

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

export default function ({ title, images = [], venue, description, startDate, startTime, endDate, endTime, price, status = 'SCHEDULED', attendanceMode = 'OFFLINE' }){

    const { siteUrl } = useSiteMetadata()

    console.log(startTime, endTime)



    const startsAt = DateTime.fromISO(`${ startDate }${ startTime ? `T${ startTime }` : '' }`, { zone: 'America/Toronto' }).toISO()
    const endsAt = DateTime.fromISO(`${ endDate }${ endTime ? `T${ endTime }` : '' }`, { zone: 'America/Toronto' }).toISO()
    // const startsAt = startDate + (startTime ? 'T' + startTime + '-05:00' : '')
    // const endsAt = endDate + (endTime ? 'T' + endTime + '-05:00' : '')
    

    const image = []
    images.map(src => image.push(`${ siteUrl }${ src }`))

    const data = {
        "@context": "https://schema.org/",
        "@type": "Event",
        name: title,
        startDate: startsAt,
        ...(endDate && { endDate: endsAt }),
        description,
        eventStatus: `https://schema.org/${ EVENT_TYPE[status] }`,
        eventAttendanceMode: `https://schema.org/${ EVENT_ATTENDANCE_MODE[attendanceMode] }`,
        image,
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

    if (DateTime.fromISO(endsAt) < DateTime.local()) return null
console.log(startsAt, DateTime.fromISO(startsAt).toFormat('ccc, LLL d @ t'), DateTime.fromISO(startsAt).zoneName)
    return (
        <>
            <div className={`eventContainer ${ status === 'CANCELLED' ? 'eventContainer--cancelled' : '' }`}>
                <div
                    // style={{
                    //     display: 'flex',
                    //     justifyContent: 'center',
                    //     alignItems: 'center'
                    // }}
                >
                    <div className='eventCalendar'>
                        <div className='eventCalendarMonth'>{ DateTime.fromISO(startsAt).toFormat('LLL') }</div>
                        <div className='eventCalendarDay'>{ DateTime.fromISO(startsAt).day }</div>
                    </div>
                </div>
                <div>
                    <div className='eventDate'>
                        { DateTime.fromISO(startsAt).toFormat('ccc, LLL d @ t') }
                        {
                            endDate && (
                                <>
                                    <span> - </span>
                                    { DateTime.fromISO(endsAt).toFormat(DateTime.fromISO(startDate).toMillis() === DateTime.fromISO(endDate).toMillis() ? 't' : 'ccc, LLL d @ t') }
                                </>
                            )
                        }
                    </div>
                    <div className='eventTitle'>
                        { title }
                    </div>
                    <div className='eventVenue'>
                        <strong>{ venue.name }:</strong> { venue.address.address } { venue.address.city }, { venue.address.province } { venue.address.postalCode }
                    </div>
                </div>
            </div>
            <script type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(data)
                }}
            />                
        </>
    )
}