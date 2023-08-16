import React from 'react'

export default class Form extends React.Component {
  render() {
    const {handleSubmitChange, handleClear} = this.props
    return (
      <div>
        <form onSubmit={handleSubmitChange}>
          <input
            type="text"
            placeholder='I know you have things to do...'
            value={this.props.taskName}
            onChange={this.props.handleInputChange}
          />
          <button>Append New Task</button>
        </form>
        <button onClick={handleClear}>Rid tasks done</button>
      </div>
    )
  }
}
