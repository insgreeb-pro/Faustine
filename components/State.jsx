import { Component, useState } from "react";

export class ClassState extends Component {
  constructor() {
    super();
    this.state = {
      message: "Using state in class component",
    };
  }

  changeMessage() {
    this.setState({
      message: "Must use constructor and super method (i dont understand -_- )",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Henshin</button>
      </div>
    );
  }
}

export function FunctionState() {
  const [Message, setMessage] = useState("Using state in function component");

  function changeMessage() {
    if (Message != "much Simpler") {
      setMessage("much Simpler");
    } else {
      setMessage("Using state in function component");
    }
  }

  return (
    <div>
      <h1>{Message}</h1>
      <button onClick={changeMessage}>Henshin</button>
    </div>
  );
}
