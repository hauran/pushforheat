import React from 'react'
import styled from 'styled-components'

import Section from './Section'

const SubscribeForm = styled.form`
  margin-top: 20px;
  max-width: 700px;
  box-sizing: border-box;
`

const Emailinput = styled.input`
  padding: 10px 15px;
  border: 1px solid #d66363;
  font-size: 1.1em;
  color: #dadada;
  background-color: rgba(70, 53, 53, 0.8);
  box-sizing: border-box;
  width: 100%;
  max-width: 700px;
  flex: 1;
  border-radius: 0px;
`

const Emailgroup = styled.div`
  display: flex;
`

const Subscribebutton = styled.input`
  color: #a5a5a5;
  border-radius: 0px;
  border: 1px solid white;
  font-size: 0.9em;
  border: 1px solid #d66363;
  margin-left: 3px;
  background-color: rgba(70, 53, 53, 0.8);
`

const Copy = styled.div`
  color: #b9b9b9;
  z-index: 1;
  padding: 0;
  margin-top: -8px;
  @media (min-width: 48em) {
  }
  @media (max-width: 48em) {
    font-size: 0.8em;
  }
`

const Subscribe = () => {
  return (
    <Section title="Join our mailing list">
      <Copy>We'll let you know of upcoming shows.</Copy>
      <div id="mc_embed_signup">
        <SubscribeForm
          action="https://pushforheat.us12.list-manage.com/subscribe/post?u=d7f63ec62d0923ab271251031&amp;id=7d21a9d861"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          novalidate
        >
          <Emailgroup className="mc-field-group">
            <Emailinput
              type="email"
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
              placeholder="email"
            />
            <Subscribebutton
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            />
          </Emailgroup>
          <div style={{ position: 'absolute', left: -5000 }} aria-hidden="true">
            <input type="text" name="b_d7f63ec62d0923ab271251031_7d21a9d861" />
          </div>
        </SubscribeForm>
      </div>
    </Section>
  )
}
export default Subscribe
