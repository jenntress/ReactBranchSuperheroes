import React from 'react';
import {Link} from 'react-router';

const HeroesList = (props) => (
  <div id="items-box">
  { props.heroes.map((item, index) => (
    <div className="jpanel" key={ index }>
      <h2>{ item.name }</h2>
      <h3>{ item.alterEgo }</h3>
      <p>{ item.superPowers.length ? item.superPowers.join(", ") : '' }</p>
      <p>Weakness: { item.weakness }</p>
      <p>Nemesis: { item.nemesis }</p>
      <p>{ item.universe }</p>
      <img alt="" src={ item.img }/>
      <Link className="btn btn-warning" to={`/heroes/edit/${item._id}`}>Edit</Link>
    </div>
  ))}


  </div>
);


  export default HeroesList;
