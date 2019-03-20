import React from 'react'
import styled from 'styled-components'

const ShowContainer = styled.div`
  margin-bottom: 20px;
  &:last-of-type {
    margin-bottom: 0px;
  }
`
const Title = styled.div`
  color: ${props => (props.bold ? 'white' : '#b9b9b9')};
  display: block;
  font-weight: ${props => (props.bold ? 600 : 'initial')};
  font-size: ${props => (props.bold ? '1em' : '0.9em')};
`
const Address = styled.a`
  color: ${props => (props.bold ? props.color || 'white' : '#b9b9b9')};
  display: block;
  font-weight: ${props => (props.bold ? 600 : 'initial')};
  font-size: ${props => (props.bold ? '1em' : '0.9em')};
  text-decoration: none;
  &:hover {
    color: #f5576c;
  }
`

const Showinfo = styled.div`
  font-size: 0.85em;
  color: rgba(255, 255, 255, 0.9);
`

const Show = p => {
  return (
    <ShowContainer>
      {p.link ? (
        <Address target="_blank" bold href={p.link}>
          {p.title}
        </Address>
      ) : (
        <Title bold>{p.title}</Title>
      )}

      <Address target="_blank" href={p.map}>
        {p.venue}
      </Address>
      <Showinfo>{p.date}</Showinfo>
      {p.info ? <Showinfo>{p.info}</Showinfo> : null}
    </ShowContainer>
  )
}
export default Show
