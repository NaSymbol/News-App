import React from 'react';
// import moment from 'moment'
import Moment from 'react-moment';
import'./card.css';


const Card = ({item}) => (
  
    <div className="card">
      <div className="card-image">
      <a href={item.url} target="_blank" rel="noopener noreferrer"><img src={item.urlToImage} alt={item.title}/></a>
      </div>
      <div className="card-content">
  
      <a className="text-link" href={item.url} target="_blank" rel="noopener noreferrer"><p className="card-title">{item.title}</p></a>
        {/* <p>{moment(item.publishedAt).format()}</p> */}
        <p><Moment className="card-time" format="LT" >{item.publishedAt}</Moment>{item.description}</p>
 
      </div>
      <div className="card-action">
        {/* <a href={item.url} target="_blank">Full article</a> */}
      </div>
    </div>

);

export default Card;

