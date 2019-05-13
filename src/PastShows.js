import React, { Component } from 'react'
import styled from 'styled-components'

import Section from './Section'
import Show from './Show'

const MorePastContainer = styled.div`
  display: ${props => (props.show ? 'inline' : 'none')};
`

const MorePastLink = styled.span`
  color: #f5576c;
  font-size: 0.7em;
  cursor: pointer;
  padding: 0 10px 5px 0;
`

const SHOWS = [
  {
    title: 'Hasting Education Foundation Annual Spring Party',
    link: './flyers/HEF2019_flyer.png',
    map:
      'https://www.google.com/maps/place/Saint+Andrews+Golf+Club/@40.9888301,-73.848012,15z/data=!4m2!3m1!1s0x0:0x4b3421ad9f3da2cd?ved=2ahUKEwictrLa_JDhAhVJNd8KHVeKCTUQ_BIwCnoECAsQCA',
    venue: 'Saint Andrews Golf Club',
    date: 'Friday May 10th',
    info: '7pm'
  },
  {
    title: 'Hastings Velo Fundraiser and Award Night',
    map:
      'https://www.google.com/maps/place/Hastings+Velo/@40.9944274,-73.8808345,15z/data=!4m5!3m4!1s0x0:0x463cd53cd10064b3!8m2!3d40.9944274!4d-73.8808345',
    venue: '45 Main St, Hastings-On-Hudson',
    date: 'Saturday Jan 19th',
    info: '7pm'
  },
  {
    title: 'Spooktoberfest',
    link: './flyers/Spooktoberfest_2018.pdf',
    map:
      'https://www.google.com/maps/place/Hart%E2%80%99s+Brook+Park+and+Preserve/@41.0197724,-73.8077669,15z/data=!4m2!3m1!1s0x0:0x27e8a4f624b81cfd?ved=2ahUKEwjYytmzh5HhAhWonuAKHRWABqgQ_BIwEXoECAcQCA',
    venue: "Hart's Brook Park & Reserve",
    date: 'Saturday Oct 20th',
    info: '1pm - 3pm'
  },

  {
    title: 'Hastings Flea Market Acoustic Set',
    map:
      'https://www.google.com/maps/place/Ashford+Park/@41.0037558,-73.8371987,15z/data=!4m5!3m4!1s0x0:0xa80769fb5fe80bfc!8m2!3d41.0037558!4d-73.8371987',
    venue: 'MTA Commuter Lot, Hastsings-On-Hudson',
    date: 'Sunday Oct 14th',
    info: '1:30 - 2:30pm'
  },
  {
    title: 'Alcott Family Harvest Festival',
    map:
      'https://www.google.com/maps/place/Ashford+Park/@41.0037558,-73.8371987,15z/data=!4m5!3m4!1s0x0:0xa80769fb5fe80bfc!8m2!3d41.0037558!4d-73.8371987',
    venue: 'Ashford Park, Ardsley',
    date: 'Saturday Oct 13th',
    info: '2 sets - 11am & 3pm'
  },
  {
    title: ' River Spirit Music & Art Festival',
    link: 'https://riverspiritfestival.com/festival/',
    map:
      'https://www.google.com/maps/dir//Draper+Park,+80+Washington+Ave,+Hastings-On-Hudson,+NY+10706/@40.9916933,-73.8825025,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c2ecf17f80415b:0x63d7ba65a4b8f47!2m2!1d-73.8803138!2d40.9916893',
    venue: 'Draper Park, Hastings-On-Hudson',
    date: 'Saturday Sept 8th'
  },
  {
    title: 'Upstream Gallery',
    map: 'https://goo.gl/maps/ocsGt8BDagB2',
    venue: '8 Main St, Hastings-On-Hudson',
    date: 'Saturday April 28, 7pm'
  }
]

const CUTOFF = 2
class PastShows extends Component {
  aboveFold = SHOWS.splice(0, CUTOFF)
  state = { expand: false }

  render() {
    return (
      <Section title="Past Shows">
        {this.aboveFold.map((s, i) => (
          <Show key={i} {...s} />
        ))}

        <MorePastContainer show={this.state.expand}>
          {SHOWS.map((s, i) => (
            <Show key={i} {...s} />
          ))}
        </MorePastContainer>

        {this.state.expand ? (
          <MorePastLink onClick={() => this.setState({ expand: false })}>Less shows</MorePastLink>
        ) : (
          <MorePastLink onClick={() => this.setState({ expand: true })}>More shows</MorePastLink>
        )}
      </Section>
    )
  }
}

export default PastShows
