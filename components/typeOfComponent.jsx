import React, { Component } from 'react'

export const FuncComponent = () => <h1>This is a Functional Component</h1>

export class ClasComponent extends Component {
  render() {
    return <h1>This is a Class Component</h1>
  }
}
