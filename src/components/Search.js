import React, { Component } from "react";
import PokeList from "./PokeList";
import DetailView from "./DetailView";
import Pokemon from "../Pokemon";
import Button from "./Button";
import Barre from "./Barre";
import "./styles/Search.css";



class Search extends Component {

    constructor() {
        super();
        this.state = {
            userInput: ""
        };
      }

      onChange(event) {
        this.setState({
            userInput : event.target.value
        }
        //  ,() => console.log(this.state.userInput)
      )
    }

    onClick(event) {
        event.preventDefault();
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.userInput}/`)
          .then(res => res.json())
          .then(data => {
            const pokemon = new Pokemon(data);
            console.log(this.state.userInput);
            this.setState({pokemon});
          })
          .catch(err => console.log(err));  
      }
  

    render(){
        return (
            <div className="container-search">
            <form action="">
            <input value={this.state.userInput} onChange = {this.onChange.bind(this)} className="search" type="text" placeholder="Search your Pokemon"/>
            <button onClick ={this.onClick.bind(this)} className="btn">Ajouter</button>
            </form>
            </div> 
        )
    }
}

export default Search;