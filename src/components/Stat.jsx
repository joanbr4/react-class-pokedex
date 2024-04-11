import { Component } from "react"
import PropTypes from "prop-types"

class Stat extends Component {
  constructor(props) {
    super(props)
    const { item } = props
    this.item = item
  }
  render() {
    console.log(this.item)
    return (
      <li className="pokemon-stat">
        <span className="stat-name">
          <b>{this.item.stat.name}: </b>
        </span>
        <span>{this.item.base_stat}</span>
      </li>
    )
  }
}
Stat.propTypes = {
  item: PropTypes.object.isRequired,
}
export default Stat
