import React, { Component } from "react";
import PokeList from "./PokeList";
import DetailView from "./DetailView";
import Pokemon from "../Pokemon";
import Button from "./Button";
import Barre from "./Barre";
import Search from "./Search";

import "./styles/App.css";


class App extends Component {

  constructor() {
    super();
    this.state = {
      pokemon: {},
      userInput: ""
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.onClickPokemon = this.onClickPokemon.bind(this);
    this.onChangePokemon = this.onChangePokemon.bind(this);
  }


  handleOnClick(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(data => {
        const pokemon = new Pokemon(data);

        this.setState({pokemon});
        // console.log(this.state.pokemon)
      })
      .catch(err => console.log(err));
  }

//function for search
onClickPokemon(event) {
  event.preventDefault();
  fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.userInput}/`)
    .then(res => res.json())
    .then(data => {
      const pokemon = new Pokemon(data);
      this.setState({pokemon});
      console.log(this.state.pokemon)
    })
    .catch(err => console.log(err));  
}

onChangePokemon(event) {
  this.setState({
      userInput : event.target.value
  }
   ,() => console.log(this.state.userInput)
)
}

  

  render(){
    return (
      <div className="App">
      <PokeList handleOnClick = {this.handleOnClick} />
      <Barre />
        <DetailView pokemon = {this.state.pokemon}
        onClickPokemon = {this.onClickPokemon}
        onChangePokemon = {this.onChangePokemon} />
        </div>
    );
  }
}

export default App;