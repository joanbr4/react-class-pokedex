import "./App.css"
import { Component } from "react"
// import Pokedex from "./components/Pokedex"

class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      error: "",
    }
    this.sumar = this.sumar.bind(this)
    this.restar = this.restar.bind(this)
    // this.stteerror = ""
  }
  sumar() {
    this.setState({
      count: this.state.count + 1,
      error: "",
    })
  }
  restar() {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      })
    } else {
      this.setState({
        error: "Not avalaible negative number",
      })
    }
  }
  render() {
    return (
      <>
        {/* <Pokedex /> */}
        <div className="card">
          <button onClick={this.sumar}>sum</button>
          <button onClick={this.restar}>rest</button>
          <span>total is: </span>
          <button>{this.state.count}</button>
          <div style={{ color: "red" }}>{this.state.error}</div>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    )
  }
}

export default App
