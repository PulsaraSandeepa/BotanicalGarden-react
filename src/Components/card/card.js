import React from 'react';
import img01 from '../../assets/thumbnails/DSCN0269.jpg';
import './card.css';
const card = ()=>(

<div className="card">
  <img className="card-img-top" src={img01} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

)
export default card



