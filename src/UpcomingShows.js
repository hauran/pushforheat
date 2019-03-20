import React from 'react'

import Section from './Section'
import Show from './Show'

const shows = [
  {
    title: 'Hasting Education Foundation Annual Spring Party',
    map:
      'https://www.google.com/maps/place/Saint+Andrews+Golf+Club/@40.9888301,-73.848012,15z/data=!4m2!3m1!1s0x0:0x4b3421ad9f3da2cd?ved=2ahUKEwictrLa_JDhAhVJNd8KHVeKCTUQ_BIwCnoECAsQCA',
    venue: 'Saint Andrews Golf Club',
    date: 'Friday May 10th',
    info: '2 sets - 8 & 10pm'
  }
]

const UpcomingShows = () => {
  return (
    <Section title="Upcoming Shows">
      {shows.map((s, i) => (
        <Show key={i} {...s} />
      ))}
    </Section>
  )
}

export default UpcomingShows
