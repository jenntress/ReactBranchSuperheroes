import React from 'react';

const PostHeroForm = (props) => (
  <div>
    <form onSubmit={(event) => props.handleSubmit(event)}>
      <h3>Post New Hero</h3>
        <input type="text" placeholder="hero name"
          onChange={(event) => props.updateName(event)}
        />
        <input type="text" placeholder="universe"
          onChange={(event) => props.updateUniverse(event)}
        />
        <button type="submit">Post</button>
    </form>
  </div>
)

export default PostHeroForm;
