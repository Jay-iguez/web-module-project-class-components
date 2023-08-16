import React from 'react'
import Todo from './Todo'
import Form from './Form'

export default class TodoList extends React.Component {
  constructor(){
    super()
  }

  render() {
    return (
      <>
      <div>
      {
        this.props.itemsList.map(element => {
         return <Todo item={element} handleClickComplete={this.props.handleClickComplete} />
        })
      }
      </div>
      <div>
        <Form 
        handleInputChange={this.props.handleInputChange} 
        handleSubmitChange={this.props.handleSubmitChange} 
        taskName={this.props.taskName} 
        handleClear={this.props.handleClear}
        />
      </div>
      </>
    )
  }
}
