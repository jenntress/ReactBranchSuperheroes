import React from 'react';
import { Link } from 'react-router';


const EditHeroForm = (props) => (

  <div className="container">
   <h3>Make changes to {props.name}</h3>
   <img alt="" className="EditHeroDefaultImg" src={ props.img }/>
   <form className="edit-form" onSubmit={(event) => props.handleSubmit(event)}>
      <div className="form-group">
        <label>Hero Name</label>
        <input type="text" className="form-control" value={props.name} placeholder="Name"
          onChange={(event) => props.updateField('name', event.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Universe</label>
        <input type="text" className="form-control" value={props.universe} placeholder="Universe"
          onChange={(event) => props.updateField('universe', event.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Nemesis</label>
        <input type="text" className="form-control" value={props.nemesis} placeholder="Nemesis"
          onChange={(event) => props.updateField('nemesis', event.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Weakness</label>
        <input type="text" className="form-control" value={props.weakness} placeholder="Weakness"
          onChange={(event) => props.updateField('weakness', event.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Image URL</label>
        <input type="text" className="form-control" value={props.img} placeholder="URL"
          onChange={(event) => props.updateField('img', event.target.value)}
        />
      </div>


      <div className="form-group">
         {props.superPowers.map((power,index) => <h3 key={index}>{power}</h3>
                   )
                 }
            <label>Superpowers</label>
            <input type="text" className="form-control" value={props.superPowers} placeholder="Enter power"
               onChange={(event) => props.updateField("newPower",event.target.value)}
            />
               <button onClick={(event) => props.updatePowers(event)} className="btn btn-default">Add Power +</button>
               <button onClick={(event) => props.removePower(event)} className="btn btn-default">Remove Power -</button>
              </div>



      <button type="submit" className="btn btn-default">Save</button>
      <Link className="btn btn-default" to="/heroes">Back to Heroes</Link>
    </form>
  </div>
)

  export default EditHeroForm;
