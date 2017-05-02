import React from 'react';

const HeroesList = (props) => (
  <div id="BoxOfItems">
  { props.heroes.map((item, index) => (
    <div className="panel" key={ index }>
      <h2>{ item.name }</h2>
      <h3>{ item.alterEgo }</h3>
      <p>Strengths: { item.superPowers.length ? item.superPowers.join(", ") : '' }</p>
      <p>Weakness: { item.weakness }</p>
      <p>Nemesis: { item.nemesis }</p>
      <p>{ item.universe }</p>
      <img alt="" src={ item.img }/>
    </div>
  ))}
  </div>
);


  export default HeroesList;
