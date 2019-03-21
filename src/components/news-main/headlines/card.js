import React from 'react';
import { FaFileAlt } from 'react-icons/fa';



const Card = ({item}) => (
  <div className="col s4">
    <div className="card">
      <div className="card-content">
   <a href={item.url} target="_blank"> <p><FaFileAlt />{item.title}</p></a>
      </div>
    </div>
  </div>
);

export default Card;
