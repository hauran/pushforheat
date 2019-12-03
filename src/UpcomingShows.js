import React from 'react'

import Section from './Section'
import Show from './Show'

const shows = [
  {
    title: 'DoubleDays',
    link: './flyers/DoubleDays_2019_12.png',
    map:'https://goo.gl/maps/7APiWTueFesPjqHDA',
    venue: "DoubleDays, Dobbs Ferry",
    date: 'Saturday Dec 7th',
    info: '9pm'
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
