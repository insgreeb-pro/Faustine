import { Component } from 'react'

export const FuncComponent = () => <h1>This is a Functional Component</h1>

export class ClasComponent extends Component {
  render() {
    return (
      <p>
        This paragraph is a Class Component. Since React 16.7.0, functional
        component could also use props and state using Hooks. So i personally
        prefer using functional component due to its simplicity.
      </p>
    )
  }
}
