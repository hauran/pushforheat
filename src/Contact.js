import React from 'react'
import styled from 'styled-components'
import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'

import Section from './Section'

const ContactContainer = styled.div`
  display: flex;
  margin-left: -10px;
  & a {
    margin-right: 5px;
    color: white;
  }
  & a:hover,
  a:active {
    color: #f5576c;
  }

  @media (min-width: 48em) {
    & a {
      padding: 5px 10px;
    }
  }
  @media (max-width: 48em) {
    & a {
      padding: 10px;
    }
  }
`

const Contact = () => {
  return (
    <Section last title="Contact">
      <ContactContainer style={{ marginTop: -15 }}>
        <a href="mailto:hello@pushforheat.com">
          <FaEnvelope />
        </a>
        <a href="https://www.instagram.com/pushforheat/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/pg/pushforheat" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </ContactContainer>
    </Section>
  )
}
export default Contact
