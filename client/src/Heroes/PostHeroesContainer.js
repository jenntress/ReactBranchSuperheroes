import React, { Component } from 'react';
import PostHeroForm from './PostHeroForm';
import $ from 'jquery';
import { browserHistory } from 'react-router';


class PostContainer extends Component { //keeps track of all of our state (stuff to the server)
//define state objects (right now they're undefined because we wrote undefined)
    state={
      name: undefined,
      universe: undefined,
      nemesis: undefined,
      weakness: undefined,
      alterEgo: undefined,
      img: undefined
    }

    handleSubmit=this.handleSubmit.bind(this)//because we're passing it down (keep track of context)

    handleSubmit(event){
      event.preventDefault()
      alert('function triggered')
      console.log( this.state.name, this.state.universe, this.state.nemesis, this.state.weakness, this.state.alterEgo,
        "name and stuff in the state object"
      )

      const hero={
          name:     this.state.name,
          universe: this.state.universe,
          nemesis:  this.state.nemesis,
          weakness: this.state.weakness,
          alterEgo: this.state.alterEgo,
          img:      this.state.img
      }

      $.ajax({
        url:'/api/superheroes',
        method: 'POST',
        data: hero
      }).done((response) => {
        console.log(response)
        browserHistory.push('/heroes')
      })//whatever we get back from our server after posting something
    }

 //an arrow function is auto-binding (so we can skip doing line 12 for this)
    updateName=(event) => this.setState({name: event.target.value})
    updateUniverse=(event) => this.setState({universe: event.target.value})
    updateNemesis=(event) => this.setState({nemesis: event.target.value})
    updateWeakness=(event) => this.setState({weakness: event.target.value})
    updateAlterEgo=(event) => this.setState({alterEgo: event.target.value})
    updateImg=(event) => this.setState({img: event.target.value})


  render() { //renders the PostHeroForm
    return (
      <div>
        <PostHeroForm
           handleSubmit={this.handleSubmit}
           updateName={this.updateName}
           updateUniverse={this.updateUniverse}
           updateNemesis={this.updateNemesis}
           updateWeakness={this.updateWeakness}
           updateAlterEgo={this.updateAlterEgo}
           updateImg={this.updateImg}
        />
        <p>Hello, from the PostHeroesContainer.js</p>
      </div>
    )
  }
}


export default PostContainer;
