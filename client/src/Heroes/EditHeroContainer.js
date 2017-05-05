import React, { Component } from 'react';
import $ from 'jquery';
import EditHeroForm from './EditHeroForm';



class EditHeroContainer extends Component {
  state = {
    isFetching: true,
    newPower: undefined, //from the function down below
    name: undefined
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
    console.log(response, "SUPER HERO NAME");
    this.setState({
      name: response.name,
      superPowers: response.superPowers,
      isFetching: false
    });
  })
}

handleSubmit(event){
    event.preventDefault();
  const data = {
    name: this.state.name
  }
  console.log("HERE IS THE DATA TO EDIT", data)
  //****This is the PUT ajax******
  $.ajax({
    url: `/api/superheroes/${this.props.params.heroId}`,
    method: 'PUT',
    data: data
  }).done(response => {
      console.log(response);
  })
}

//we don't want this thing to submit on loadHeroes.
updatePowers(event){
  event.preventDefault();
  const tempArray = [];
  tempArray.push(this.state.newPower)//we're pushing in a new power
  this.setState({ superPowers: tempArray });
  this.setState({ newPower: '' })//setting a new string
  console.log(this.state.superPowers);
}

//we're gonna remove a single power
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
        <h3>{ this.props.params.heroId }</h3>
        { !this.state.isFetching ?
          <EditHeroForm
            handleSubmit={this.handleSubmit}
            updateField={this.updateField}
            superPowers={this.state.superPowers}
            updatePowers={() => this.updatePowers()}
            removePower={() => this.removePower()}
            name={ this.state.name } /> :<h3>Still Thinking...</h3>
        }
        <p>Hello, from the EditHeroContainer.js</p>
      </div>
    )
  }
}

export default EditHeroContainer;
