import React from 'react'

const itemsList = [
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

console.log(itemsList)

export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      itemsList: itemsList
    }
  }

  render() {
    return (
      <div>
        Todo App
      </div>
    )
  }
}
