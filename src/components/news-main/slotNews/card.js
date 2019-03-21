import React from 'react';
// import moment from 'moment'
import Moment from 'react-moment';

const Card = ({item}) => (
  <div className="col s4">
    <div className="card">
      <div className="card-image">
      <a href={item.url} target="_blank"><img src={item.urlToImage} alt={item.title}/></a>
      </div>
      <div className="card-content">
  
      <a href={item.url} target="_blank"><p>{item.title}</p></a>
        {/* <p>{moment(item.publishedAt).format()}</p> */}
        <Moment format="LT" >{item.publishedAt}</Moment>
        <p>{item.description}</p>
 
      </div>
      <div className="card-action">
        {/* <a href={item.url} target="_blank">Full article</a> */}
      </div>
    </div>
  </div>
);

export default Card;

