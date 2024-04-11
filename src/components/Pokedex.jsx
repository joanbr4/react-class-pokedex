import { Component } from "react"
import "../App.css"
import PokedexScreen from "./PokedexScreen"
import PokemonForm from "./PokemonForm"

class Pokedex extends Component {
  constructor() {
    super()
    this.RandomId = Math.floor(Math.random() * 806 + 1)
    this.state = {
      error: false,
      loading: true,
      pokemon: null,
      pokemonID: this.RandomId,
    }
    this.setPokemonId = this.setPokemonId.bind(this)
    this.setLoading = this.setLoading.bind(this)
    this.setError = this.setError.bind(this)
  }

  componentDidMount() {
    this.fetchPokemonData()
  }

  componentDidUpdate(prevProps, prevState) {
    // Check if pokemonID has changed
    if (prevState.pokemonID !== this.state.pokemonID) {
      this.fetchPokemonData()
    }
  }

  fetchPokemonData() {
    const { pokemonID } = this.state
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        this.setState({
          pokemon: data,
          loading: false,
          error: false,
        })
      })
      .catch((err) => {
        console.log(err)
        this.setState({
          error: true,
          loading: false,
        })
      })
  }

  setPokemonId(pokemonId) {
    console.log("form", pokemonId)
    this.setState({ pokemonID: pokemonId })
    // this.fetchPokemonData()
  }

  setLoading(loading) {
    this.setState({ loading: loading })
  }

  setError(error) {
    this.setState({ error: error })
  }

  render() {
    const { pokemon, loading, error } = this.state
    return (
      <div className="pokedex">
        <div className="pokedex-left">
          <div className="pokedex-left-top">
            <div className="light is-sky is-big" />
            <div className="light is-red" />
            <div className="light is-yellow" />
            <div className="light is-green" />
          </div>
          <div className="pokedex-screen-container">
            <PokedexScreen pokemon={pokemon} loading={loading} error={error} />
          </div>
          <div className="pokedex-left-bottom">
            <div className="pokedex-left-bottom-lights">
              <div className="light is-blue is-medium" />
              <div className="light is-green is-large" />
              <div className="light is-orange is-large" />
            </div>
            <PokemonForm
              setPokemonId={this.setPokemonId}
              setLoading={this.setLoading}
              setError={this.setError}
            />
          </div>
        </div>
        <div className="pokedex-right-front" />
        <div className="pokedex-right-back" />
      </div>
    )
  }
}

export default Pokedex
