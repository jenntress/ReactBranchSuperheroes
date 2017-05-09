import React, { Component } from 'react';
import $ from 'jquery';
import HeroesList from './heroList';

// call this function when comp mounts
// use this new data to update our started
// render a component that displays our data (display something at the end in the render)

class HeroesContainer extends Component {
  state = { // initialize empty state for heroRoutes
    heroes: undefined //using undefined instead of null
  }

  componentDidMount = () => this.loadHeroes()

loadHeroes(){ // create a fucntion() that gets heroes from DB
  $.ajax({
    url:'/api/superheroes',
    method: 'GET'
  }).done((response) => {
      this.setState({ heroes: response })
//    console.log(response); //this is our actual array of heroes (data itself was just an object)
  })
}


  render() {
    return (
        <div>
           { this.state.heroes ? <HeroesList heroes={this.state.heroes}/> : undefined }
        </div>

    );
  }
}

export default HeroesContainer;
