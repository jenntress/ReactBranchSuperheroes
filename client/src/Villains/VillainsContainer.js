import React, { Component } from 'react';
import $ from 'jquery';
import VillainsList from './villainList';

// call this function when comp mounts
// use this new data to update our started
// render a component that displays our data (display something at the end in the render)

class VillainsContainer extends Component {
  state = { // initialize empty state for villain routes
    villains: undefined //using undefined instead of null
  }

  componentDidMount = () => this.loadVillains()

loadVillains(){ // create a fucntion() that gets badguys from DB
  $.ajax({
    url:'/api/Villains',
    method: 'GET'
  }).done((response) => {
      this.setState({ villains: response })
    console.log(response); //this is our actual array of badguys (data itself was just an object)
  })
}


  render() {
    return (
        <div>
           { this.state.villains ? <VillainsList villains={this.state.villains}/> : undefined }
        </div>

    );
  }
}

export default VillainsContainer;
