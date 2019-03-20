import React from 'react'
import styled from 'styled-components'

import Section from './Section'

const Track = styled.div`
  @media (min-width: 48em) {
    margin-bottom: 20px;
    width: 700px;
  }
  @media (max-width: 48em) {
    margin-bottom: 15px;
  }
  z-index: 1;
  height: 42px;
  border: 1px solid #d66363;
  &:last-of-type {
    margin-bottom: 0;
  }
  &:iframe {
    z-index: 1;
  }
`

const Tracks = () => {
  return (
    <Section title="Music">
      <Track>
        <iframe
          title="Only Happy when it Rains"
          style={{ border: 0, width: '100%', height: 42 }}
          src="https://bandcamp.com/EmbeddedPlayer/track=2833648154/size=small/bgcol=333333/linkcol=c7c7c7/artwork=none/transparent=false/"
          seamless
        >
          <a href="http://pushforheat.bandcamp.com/track/only-happy-when-it-rains">
            Only Happy When It Rains
          </a>
        </iframe>
      </Track>
      <Track>
        <iframe
          title="Handle with Care"
          style={{ border: 0, width: '100%', height: 42 }}
          src="https://bandcamp.com/EmbeddedPlayer/track=3663888534/size=small/bgcol=333333/linkcol=c7c7c7/artwork=none/transparent=false/"
          seamless
        >
          <a href="http://pushforheat.bandcamp.com/track/handle-with-care">Handle With Care</a>
        </iframe>
      </Track>
      <Track>
        <iframe
          title="Man who Sold the World"
          style={{ border: 0, width: '100%', height: 42 }}
          src="https://bandcamp.com/EmbeddedPlayer/track=454056233/size=small/bgcol=333333/linkcol=c7c7c7/artwork=none/transparent=false/"
          seamless
        >
          <a href="http://pushforheat.bandcamp.com/track/man-who-sold-the-world">
            Man Who Sold the World
          </a>
        </iframe>
      </Track>
    </Section>
  )
}
export default Tracks
