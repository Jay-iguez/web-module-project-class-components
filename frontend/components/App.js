import React from 'react'
import TodoList from './TodoList'

const items = [
  {
    name: 'Clean room',
    id: Date.now(),
    completed: false
  },
  {
    name: 'Walk dog',
    id: Date.now(),
    completed: false
  },
  {
    name: 'Buy more cheese',
    id: Date.now(),
    completed: false
  },
  {
    name: 'Buy lock to keep cheese safe from dog',
    id: Date.now(),
    completed: false
  }
]

export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      itemsList: items
    }
  }

  handleInputChange = (e) => {
    const {name, value} = e.target
  }

  handleClickComplete = (name) => {
    const givenName = name

    this.setState({...this.state, itemsList: this.state.itemsList.map((selected) => {
      if (selected.name === givenName) return {...selected, completed : !selected.completed}
      else return selected
    })})
   
  }

  render() {
    return (
      <TodoList itemsList={this.state.itemsList} handleInputChange={this.handleInputChange} handleClickComplete={this.handleClickComplete} />
    )
  }
}
