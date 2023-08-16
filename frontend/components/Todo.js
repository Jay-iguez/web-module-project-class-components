import React from 'react'
import styled from 'styled-components'

const StyledItemContainer = styled.div`
  border: .5rem solid grey;
  h1 {
    font-size: 2rem;
    text-align: center;
  }
`

export default class Todo extends React.Component {
  constructor(){
    super()
  }
  render() {
    const {handleClickComplete} = this.props
    return (
      <StyledItemContainer>
        <h1 onClick={() => {handleClickComplete(this.props.item.name)}}>{this.props.item.name}</h1>
      </StyledItemContainer>
    )
  }
}
