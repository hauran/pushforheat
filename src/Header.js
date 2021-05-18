import React from 'react'
import styled from 'styled-components'

import Section from './Section'

const Title = styled.div`
  align-items: center;
  white-space: nowrap;
  @media (min-width: 48em) {
    padding: 10px 0 10px 0;
    margin-top: 30px;
  }
  @media (max-width: 48em) {
    padding: 10px 0 0 0;
    margin-top: 10px;
  }
`
const Pfh = styled.h1`
  text-transform: uppercase;
  letter-spacing: -1px;
  color: #f5576c;
  margin: 0;
  z-index: 10;
  display: inline;
`
const Flames = styled.div`
  font-size: 2em;
  display: inline;
  margin-left: 20px;
`

const Bandinfo = styled.div`
  color: #b9b9b9;
  z-index: 1;
  padding: 0;
  @media (min-width: 48em) {
  }
  @media (max-width: 48em) {
    font-size: 0.8em;
  }
`

const Header = () => {
  return (
    <Section>
      <Title>
        <Pfh>Push for Heat</Pfh>
        <Flames>
          <span role="img" aria-label="fire">
            🔥
          </span>
        </Flames>
      </Title>
      <Bandinfo>
        Push for Heat is Heather Campanelli, Kevin Felix, Ahmad Saeed and Sam Simmons.
      </Bandinfo>
    </Section>
  )
}
export default Header
