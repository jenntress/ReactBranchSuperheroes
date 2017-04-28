import React from 'react';

const HeroesList = (props) => (
  <div id="BoxOfItems">
  { props.heroes.map((item, index) => (
    <div className="panel" key={ index }>
      <h2>{ item.name }</h2>
      <h3>{ item.alterEgo }</h3>
      <h4>Known for: { item.superPower }</h4>
      <img alt="" src={ item.img }/>
    </div>
  ))}
  </div>
);


  export default HeroesList;
