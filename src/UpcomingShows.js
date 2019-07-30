import React from 'react'

import Section from './Section'
import Show from './Show'

const shows = [
  {
    title: 'Spooktoberfest 2019',
    map:
      'https://www.google.com/maps/place/Hart%E2%80%99s+Brook+Park+and+Preserve/@41.0197724,-73.8077669,15z/data=!4m2!3m1!1s0x0:0x27e8a4f624b81cfd?ved=2ahUKEwjYytmzh5HhAhWonuAKHRWABqgQ_BIwEXoECAcQCA',
    venue: "Hart's Brook Park & Reserve",
    date: 'Saturday Oct 19th',
    info: '1pm - 3pm'
  },
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
