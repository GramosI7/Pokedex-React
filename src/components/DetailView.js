import React from 'react';
import Button from "./Button";
import Search from "./Search";
import "./styles/DetailView.css";

const DetailView = ({pokemon}) => {
    const { id, name, sprite, type } = pokemon;
    console.log(pokemon)

    return (
        <section className="detail-view">
        <Button />
        <img src={sprite} className='sprite-image' alt="sprite"/>
        <Search />
        <div className='data-wrapper'>
          <h1 className='data-name'>{name}</h1>
          <hr/>
          <h3 className='data-id'>ID: {id}</h3>
          <hr/>
          <h4 className="data-char">Type: {type}</h4>
        </div>
      </section>
    );
}

export default DetailView;