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
    this.state = {
      itemsList: items,
      inputItem: ''
    }
  }

  handleInputChange = (e) => {
    const {value} = e.target
    this.setState({...this.state, inputItem : value})
  }

  handleSubmitChange = (e) => {
    e.preventDefault()
    const nameOfItem = this.state.inputItem
    const newItem = {
      name: nameOfItem,
      id: Date.now(),
      completed: false
    }
    
    this.setState(() => ({
      itemsList : [...this.state.itemsList, newItem],
      inputItem : ''
    }))

    //this.setState({...this.state, itemsList : [...this.state.itemsList, newItem]})
    //this.setState(this.state.inputItem = '')
  }

  handleClickComplete = (name) => {
    const givenName = name

    this.setState({...this.state, itemsList: this.state.itemsList.map((selected) => {
      if (selected.name === givenName) return {...selected, completed : !selected.completed}
      else return selected
    })})
  }

  handleClear = (e) => {
    e.preventDefault()
    this.setState({...this.setState, itemsList : this.state.itemsList.filter((cleared) => {
      if (cleared.completed === false) return cleared
    })})

    console.log('work?')
   
  }

  render() {
    return (
      <TodoList 
      itemsList={this.state.itemsList} 
      handleInputChange={this.handleInputChange}
      taskName={this.state.inputItem} 
      handleSubmitChange={this.handleSubmitChange}
      handleClickComplete={this.handleClickComplete}
      handleClear={this.handleClear}
      />
    )
  }
}
