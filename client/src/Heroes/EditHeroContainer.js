import React, { Component } from 'react';
import $ from 'jquery';
import EditHeroForm from './EditHeroForm';


class EditHeroContainer extends Component {
  state = {
    isFetching: true,
    newPower: undefined, //from the function down below
    name: undefined,
    universe: undefined,
    nemesis: undefined,
    weakness: undefined,
    alterEgo: undefined,
    img: undefined
  }

updateField = this.updateField.bind(this);
handleSubmit = this.handleSubmit.bind(this);
componentDidMount = () => this.loadHeroes()

updateField(fieldName, fieldValue) { //update each field at the same time with one function
  const newState ={};
    newState[fieldName] = fieldValue;
    this.setState(newState);
}

loadHeroes() {
  $.ajax({
    url:`/api/superheroes/${this.props.params.heroId}`,
    method: 'GET'
  }).done(response => {
    console.log(response, "CURRENT HERO DATA");
    this.setState({
      name: response.name,
      universe: response.universe,
      nemesis: response.nemesis,
      weakness: response.weakness,
      alterEgo: response.alterEgo,
      img: response.img,
      superPowers: response.superPowers,
      isFetching: false
    });
  })
}

handleSubmit(event){
    event.preventDefault();
  const data = {
    name: this.state.name,
    universe: this.state.universe,
    nemesis: this.state.nemesis,
    weakness: this.state.weakness,
    alterEgo: this.state.alterEgo,
    img: this.state.img
  }
//  console.log("HERE IS THE DATA TO EDIT", data)
  //****This is the PUT ajax******
  $.ajax({
    url: `/api/superheroes/${this.props.params.heroId}`,
    method: 'PUT',
    data: data
  }).done(response => {
//      console.log(response);
    })
}

//****Add and remove a single superpower*****
  //we don't want this thing to submit on loadHeroes.
  updatePowers(event){
    event.preventDefault();
    const tempArray = [];
    tempArray.push(this.state.newPower)//we're pushing in a new power
    this.setState({ superPowers: tempArray });
    this.setState({ newPower: '' })//setting a new string
    console.log(this.state.superPowers);
  }

  //this removes a single power
  removePower(event){
     event.preventDefault();
     let tempArray = this.state.superPowers;
     tempArray = tempArray.length > 0 ? tempArray.splice(-1) : tempArray;
     console.log('tempArray', tempArray)//to make sure our slice worked
     this.setState({ superPowers: tempArray })
     console.log(this.state.superPowers);
  }

  render() {
    return (
      <div>
        { !this.state.isFetching ?
          <EditHeroForm
            handleSubmit={this.handleSubmit}
            updateField={this.updateField}
            superPowers={this.state.superPowers}
            updatePowers={() => this.updatePowers()}
            removePower={() => this.removePower()}
            name={this.state.name}
            universe={this.state.universe}
            nemesis={this.state.nemesis}
            weakness={this.state.weakness}
            alterEgo={this.state.alterEgo}
            img={this.state.img}
            /> : <h3>Loading...</h3>
        }
      </div>
    )
  }
}

export default EditHeroContainer;
