import React from 'react';

const EditHeroForm = (props) => (
  <div className="form-group">
    <form onSubmit={(event) => props.handleSubmit(event)}>
      <h3>Make Changes to {props.name} </h3>
        <input type="text" value={props.name} placeholder="Name"
          onChange={(event) => props.updateField('name', event.target.value)}
        />
    <button type="submit" className="btn btn-default">Update</button>

    <div className="col-md-12">
             <div className="row">
               <div className="powerList">{
                 props.superPowers.map((power,index) =>
                   <h3 key={index}>{power}</h3>
                 )
               }
               </div>
               <input type="text" placeholder="Enter hero power" onChange={(event) => props.updateField("newPower",event.target.value)}/>
             </div>
             <div className="row">
             <button onClick={(event) => props.updatePowers(event)} className="btn btn-default">Add Power +</button>
             <button onClick={(event) => props.removePower(event)} className="btn btn-default">Remove Power -</button>
             </div>
            </div>

    </form>
  </div>

)


  export default EditHeroForm;
