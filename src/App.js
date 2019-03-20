import React, { Component } from 'react'
import styled from 'styled-components'

import Subscribe from './Subscribe'
import Tracks from './Tracks'
import Header from './Header'
import UpcomingShows from './UpcomingShows'
import PastShows from './PastShows'
import Contact from './Contact'
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`
const Content = styled.div`
  width: 100%;
  max-width: 800px;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
`

const Background = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url('8704.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 100px;
  @media (min-width: 48em) {
    position: absolute;
    background-position-x: -120px;
  }
  @media (max-width: 48em) {
    background-position-x: -85px;
    position: fixed;
  }
`

class App extends Component {
  state = {}

  render() {
    return (
      <Container>
        <Content>
          <Background />
          <Header />
          <Tracks />
          <Subscribe />
          <UpcomingShows />
          <PastShows />
          <Contact />
        </Content>
      </Container>
    )
  }
}

export default App
