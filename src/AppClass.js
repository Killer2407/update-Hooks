import React, { Component } from 'react'

export default class AppClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            age: 26
        }
    }
    increment = () => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }))
      }
    
    decrement = () => {
        this.setState((prevState) =>({
            count: prevState.count - 1
        }))
      }


  render() {
    return (
      <div>
        <p>The count is: {this.state.count}</p>
      <button onClick={this.increment}> + </button>
      <button onClick={this.decrement}> - </button>
      </div>
    )
  }
}
