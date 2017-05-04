import React, { Component } from 'react';

class EditHeroContainer extends Component {

  render() {
    return (
      <div>
        <h3>{ this.props.params.heroId }</h3>
        <p>Hello, from the EditHeroContainer.js</p>
      </div>
    )
  }

}

export default EditHeroContainer;
