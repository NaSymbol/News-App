import React from 'react';

const Card = ({item}) => (
  <div className="col s4">
    <div className="card">
      <div className="card-image">
        <img src={item.urlToImage} alt={item.title}/>
        <span className="card-title">{item.source.name}</span>
        <p>{item.source.author}</p>
      </div>
      <div className="card-content">
        <p>{item.title}</p>
        <p><b>{item.author}</b></p>
      </div>
      <div className="card-action">
        <a href={item.url} target="_blank">Full article</a>
      </div>
    </div>
  </div>
);

export default Card;
