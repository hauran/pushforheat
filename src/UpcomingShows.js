import React from 'react'

import Section from './Section'
import Show from './Show'

const shows = [
  {
    title: 'Hastings Velo Award Night',
    link: './flyers/Velo_2020.jpg',
    map:
      'https://www.google.com/maps/place/Hastings+Velo/@40.9944274,-73.8808345,15z/data=!4m5!3m4!1s0x0:0x463cd53cd10064b3!8m2!3d40.9944274!4d-73.8808345',
    venue: '45 Main St, Hastings-On-Hudson',
    date: 'Saturday Jan 25th',
    info: '7pm'
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
