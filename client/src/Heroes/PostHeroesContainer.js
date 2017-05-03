import React, { Component } from 'react';
import PostHeroForm from './PostHeroForm';
import $ from 'jquery';


class PostContainer extends Component { //keeps track of all of our state (stuff to the server)
//define state objects (right now they're undefined because we wrote undefined)
    state={
      name: undefined,
      universe: undefined
    }

    handleSubmit=this.handleSubmit.bind(this)//because we're passing it down (keep track of context)

    handleSubmit(event){
      event.preventDefault()
      console.log(
        this.state.name,
        this.state.universe,
        "name and universe in the state object"
      )

      const hero={name: this.state.name, universe: this.state.universe}

      $.ajax({
        url:'/api/superheroes',
        method: 'POST',
        data: hero
      }).done((response) => console.log(response))//whatever we get back from our server after posting something
    }

 //an arrow function is auto-binding (so we can skip doing line 12 for this)
    updateName=(event) => this.setState({name: event.target.value})
    updateUniverse=(event) => this.setState({universe: event.target.value})

  render() { //renders the PostHeroForm
    return (
      <div>
        <PostHeroForm
           handleSubmit={this.handleSubmit}
           updateName={this.updateName}
           updateUniverse={this.updateUniverse}
        />
        <h1>Hello, from the PostContainer.js</h1>
      </div>
    )
  }
}


export default PostContainer;
