import React from 'react';

const VillainsList = (props) => (
  <div id="BoxOfItems">
  { props.villains.map((item, index) => (
    <div className="panel" key={ index }>
      <h2>{ item.name }</h2>
      <h3>{ item.alterEgo }</h3>
      <h4>Strengths: { item.evilPowers }</h4>
      <h5>Nemesis: { item.nemesis }</h5>
      <img alt="" src={ item.img }/>
    </div>
  ))}
  </div>
);


  export default VillainsList;
