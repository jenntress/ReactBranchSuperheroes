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

  submitNote = this.submitNote.bind(this)
  loadHeroes = this.loadHeroes.bind(this)// show instantly
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
//we pass event into this one-liner (an "event handler")
//any time we change the text inside our input field - it will update here
updateText = (event) => this.setState({text: event.target.value})

submitNote(event, _id){ //dont' crash the server - prevent peeps from adding blank notes
  event.preventDefault();
   if (!this.state.text || this.state.text.length < 1){
     alert("type in the box first")
   return
   }
  let note = {content: this.state.text} //note is our temporary variable that we pass below
  $.ajax({
    url:`/api/superheroes/note/${_id}`,
    method: 'POST',
    data: note
  }).done((response) => {
     this.setState({text: ""})
     this.loadHeroes()
    }
  )
}

  render() {
    return (
        <div>
           { this.state.heroes ? <HeroesList heroes={this.state.heroes}
                                             text={this.state.text}
                                             updateText={this.updateText}
                                             submitNote={this.submitNote}
                                  /> : undefined }
        </div>

    );
  }
}

export default HeroesContainer;
