import React, { Component } from "react";
import PokeList from "./PokeList";
import DetailView from "./DetailView";

import "./styles/Search.css";



class Search extends Component {

    constructor() {
        super();
        this.state = {
          
        };
      }

    //   onChange(event) {
    //     this.setState({
    //         userInput : event.target.value
    //     }
    //     //  ,() => console.log(this.state.userInput)
    //   )
    // }

    // onClickPokemon(event) {
    //     event.preventDefault();
    //     fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.userInput}/`)
    //       .then(res => res.json())
    //       .then(data => {
    //         const pokemon = new Pokemon(data);
    //         this.setState({pokemon});
    //         console.log(this.state.pokemon)
    //       })
    //       .catch(err => console.log(err));  
    //   }
  

    render(onClickPokemon, onChangePokemon){
        return (
            <div className="container-search">
            <form action="">
            <input 
            value={this.state.userInput} 
            onChange = {this.props.onChangePokemon} 
            className="search" 
            type="text" 
            placeholder="Search your Pokemon"/>
            <button 
            onClick ={this.props.onClickPokemon} 
            className="btn">Search</button>
            </form>
            </div> 
        )
    }
}

export default Search;