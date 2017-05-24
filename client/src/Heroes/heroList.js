import React from 'react';
import {Link} from 'react-router';

const HeroesList = (props) => (
  <div id="items-box">
  { props.heroes.map((item, index) => (
    <div className="each-person" key={ index }>
      <h2>{ item.name }</h2>
      <h3>{ item.alterEgo }</h3>
      <p>{ item.superPowers.length ? item.superPowers.join(", ") : '' }</p>
      <p>{ item.weakness }</p>
      <p>Nemesis: { item.nemesis }</p>
      <p>{ item.universe }</p>
      <img alt="" src={ item.img }/>
      <br />
      <Link className="btn btn-success" to={`/heroes/edit/${item._id}`}>Edit</Link>
      <Link className="btn btn-danger" to={`/heroes/delete/${item._id}`}>Delete</Link>

     <form>
      <div>
        <button className="btn btn-success" type="button" onClick={ (event) => props.submitNote(event, item._id)}>Add</button>
        <label>Hero Note</label>
        <input type="text" onChange={ (event) => props.updateText(event)}/>

       </div>
      </form>
    </div>
  ))}
 </div>
);


  export default HeroesList;
