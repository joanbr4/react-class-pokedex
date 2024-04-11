import { Component } from "react"
import PropTypes from "prop-types"
import Stat from "./Stat"
import ErrorPokemon from "../../public/giphy.gif"
import LoadingPokemon from "../../public/giphy2.gif"

class PokedexScreen extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    if (this.error == true) {
      return (
        <div className="pokedex-screen">
          <img
            src={ErrorPokemon}
            alt="Hubo un error buscando tu pokemon"
            className="pokedex-no-screen"
          />
        </div>
      )
    }

    return (
      <div className="pokedex-screen">
        {!this.props.pokemon || this.props.loading ? ( // Si no hay pokemon o si esta cargando
          <img
            src={LoadingPokemon}
            alt="Aún no hay ningun pokemon"
            className="pokedex-no-screen"
          /> // Todo cool, entonces devuelve un lindo pokemon
        ) : (
          <div className="pokemon-info">
            <h2 className="pokemon-name">{this.props.pokemon.name}</h2>
            <h2 className="pokemon-id" style={{ margin: "50" }}>
              Nº {this.props.pokemon.id}
            </h2>

            <img
              className="pokemon-img"
              src={this.props.pokemon.sprites.front_default}
              alt={this.props.pokemon.name}
            />

            <ul className="pokemon-stats">
              {this.props.pokemon.stats &&
                this.props.pokemon.stats.map((item) => (
                  <Stat key={item.stat.name} item={item} />
                ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
PokedexScreen.propTypes = {
  pokemon: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
}
export default PokedexScreen
