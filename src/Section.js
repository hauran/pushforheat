import React from 'react'
import styled from 'styled-components'

const SectionContainer = styled.div`
  background: ${props =>
    props.last
      ? '-webkit-linear-gradient(top, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0.05))'
      : 'rgba(0,0,0,0.8)'};
  background: ${props =>
    props.last
      ? '-moz-linear-gradient(top, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0.05))'
      : 'rgba(0,0,0,0.8)'};
  z-index: 1;
  color: white;
  @media (min-width: 48em) {
    padding: 0 30px;
    padding-bottom: ${props => (props.last ? '40px' : 0)};
  }
  @media (max-width: 48em) {
    padding: 0 30px;
    padding-bottom: ${props => (props.last ? '20px' : 0)};
  }
`

const Sectionheader = styled.h4`
  color: #f5576c;
  margin: 0;
  padding: 0;
  font-size: 0.9em;
  @media (min-width: 48em) {
    margin-top: 40px;
    margin-bottom: 20px;
  }
  @media (max-width: 48em) {
    margin-top: 30px;
    margin-bottom: 10px;
  }
`

const Section = p => {
  return (
    <SectionContainer>
      <Sectionheader>{p.title}</Sectionheader>
      {p.children}
    </SectionContainer>
  )
}

export default Section
