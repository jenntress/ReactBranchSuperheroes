import React, { Component } from 'react';
import $ from 'jquery';
import HeroesList from './heroList';

// call this function when comp mounts
// use this new data to update our started
// render a component that displays our data (display something at the end in the render)

class HeroesContainer extends Component {
  state = { // initialize empty state for heroRoutes
    heroes: undefined, //using undefined instead of null
    text: undefined
  }

  componentDidMount = () => this.loadHeroes()

loadHeroes(){ // create a fucntion() that gets heroes from backend DB
  $.ajax({
    url:'/api/superheroes',
    method: 'GET'
  }).done((response) => {
//     console.log(response)
      this.setState({ heroes: response.data })
//    console.log(response); //this is our actual array of heroes (data itself was just an object)
  })
}

//this keeps track of our current state (keeping track of the state of our input)
//we pass event into this one-liner. and "event handler"
//any time we change the text inside our input field - it will update here
updateText = (event) => this.setState({text: event.target.value})

submitNote = this.submitNote.bind(this)

submitNote(event, _id){
  event.preventDefault();
  let note = {content: this.state.text} //note is our temporary variable that we pass below
  $.ajax({
    url:`/api/superheroes/note/${_id}`,
    method: 'POST',
    data: note
  }).done((response) => this.loadHeroes())
}

  render() {
    return (
        <div>
           { this.state.heroes ? <HeroesList heroes={this.state.heroes}
                                            updateText={this.updateText}
                                            submitNote={this.submitNote} /> : undefined }
        </div>

    );
  }
}

export default HeroesContainer;
