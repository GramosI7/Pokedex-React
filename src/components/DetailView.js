import React from 'react';
import "./styles/DetailView.css";

const DetailView = ({pokemon}) => {
    const { id, name, sprite, type } = pokemon;

    return (
        <section className="detail-view">
        <img src={sprite} className='sprite-image' alt="sprite"/>
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