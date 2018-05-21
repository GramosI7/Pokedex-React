import React, { Component } from "react";
import "./styles/Search.css";



class Search extends Component {

    constructor() {
        super();
        this.state = {
            input: ""
        };
      }

    inputSearch(event){
        this.setState({
            input : event.target.value
        }
      )
    }

    addTodo(event){
        event.preventDefault();
        this.setState({
            userInput: "",
            items : [...this.state.items, this.state.userInput]
        }
        // , () => console.log(this.state)
    );
    }

    render(){
        return (
            <div className="container-search">
            <form action="">
            <input value={this.state.input} inputSearch={this.inputSearch.bind(this)} className="search" type="text" placeholder="Search your Pokemon"/>
            <button className="btn-primary" onClick={this.addTodo.bind(this)}>Ajouter</button>
            </form>
            </div> 
        )
    }
}

export default Search;