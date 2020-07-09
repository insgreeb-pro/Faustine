import { Component } from "react"

const style1 = {
  fontFamily: "Times New Roman",
  backgroundColor: "aquamarine",
  margin: "0px",
  borderRadius: "30px",
  padding: "20px",
}

export const FuncComponent = () => (
  <p style={style1}>This is a Functional Component</p>
)

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
