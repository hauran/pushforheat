import React from 'react'

import Section from './Section'
import Show from './Show'

const shows = [
  {
    title: '2019 River Arts Music Tour',
    link: './flyers/2019RiverArts.pdf',
    map:
      'https://www.google.com/maps/place/7+Crossbar+Rd,+Hastings-On-Hudson,+NY+10706/@40.9813614,-73.8770589,17z',
    venue: '7 Crossbar Road, Hastings-On-Hudson',
    date: 'Saturday June 1st',
    info: '4-6pm'
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
