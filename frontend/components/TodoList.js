import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div>
      {
        this.props.itemsList.map(element => {
         return <Todo item={element} handleClickComplete={this.props.handleClickComplete} />
        })
      }
      </div>
    )
  }
}
