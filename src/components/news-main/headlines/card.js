import React from 'react';
import { FaFileAlt } from 'react-icons/fa';
import'./card.css';



const Card = ({item}) => (
  <div className="headlines-single">
   <a href={item.url} target="_blank"> <p><FaFileAlt className="headlines-icon" />{item.title}</p></a>
  </div>
);

export default Card;
