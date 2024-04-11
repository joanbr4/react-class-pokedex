import React from "react"
import ReactDOM from "react-dom/client"
// import App from "./App.jsx"
import "./index.css"
import Pokedex from "./components/Pokedex.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Pokedex />
    {/* <App /> */}
  </React.StrictMode>
)
