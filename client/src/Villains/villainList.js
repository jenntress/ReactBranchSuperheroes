import React from 'react';

const VillainsList = (props) => (
  <div id="BoxOfItems">
  { props.villains.map((item, index) => (
    <div className="panel" key={ index }>
      <h2>{ item.name }</h2>
      <h3>{ item.alterEgo }</h3>
      <p>Strengths: { item.evilPowers.length ? item.evilPowers.join(", ") : '' }</p>
      <p>Weakness: { item.weakness }</p>
      <p>Nemesis: { item.nemesis }</p>
      <p>{ item.universe }</p>
      <img alt="" src={ item.img }/>
    </div>
  ))}
  </div>
);


  export default VillainsList;
