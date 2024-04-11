import { Component } from "react"
import PropTypes from "prop-types"

class PokemonForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemon: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (event) => {
    console.log(this.state.pokemon)
    event.preventDefault()
    if (this.state.pokemon !== "") {
      this.props.setError(true)
      this.props.setLoading(true)
      const pokemonID = window.isNaN(parseInt(this.state.pokemon))
        ? this.state.pokemon.toLowerCase()
        : this.state.pokemon
      this.props.setPokemonId(pokemonID)
      this.setState({
        pokemon: "",
      })
      return
    }
    this.props.setError(true) //Si manda el formulario vacío, hay un error
  }
  render() {
    return (
      <form className="pokemon-form" onSubmit={this.handleSubmit}>
        <input
          className="pokemon-input"
          type="text"
          name="pokemon"
          value={this.state.pokemon}
          placeholder="Busca tu pokemon"
          //Actualizas el valor del input cuando el usuario teclea
          onChange={(e) => {
            console.log(this.state.pokemon)
            this.setState({
              pokemon: e.target.value,
            })
          }}
          autoComplete="off"
        />
        <input type="submit" className="pokemon-btn" value="" />
      </form>
    )
  }
}

PokemonForm.propTypes = {
  setPokemonId: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
}

export default PokemonForm
