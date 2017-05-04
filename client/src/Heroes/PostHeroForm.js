import React from 'react';

const PostHeroForm = (props) => (
  <div className="form-group">
    <form onSubmit={(event) => props.handleSubmit(event)}>
      <h3>Post New Hero</h3>
        <input type="text" placeholder="hero name"
          onChange={(event) => props.updateName(event)}
        />
        <input type="text" placeholder="universe"
          onChange={(event) => props.updateUniverse(event)}
        />
        <input type="text" placeholder="nemesis"
          onChange={(event) => props.updateNemesis(event)}
        />
        <input type="text" placeholder="weakness"
          onChange={(event) => props.updateWeakness(event)}
        />
        <input type="text" placeholder="alter ego"
          onChange={(event) => props.updateAlterEgo(event)}
        />
        <input type="text" placeholder="paste image URL"
          onChange={(event) => props.updateImg(event)}
        />

        <button type="submit" className="btn btn-default">Post</button>
    </form>
  </div>
)

export default PostHeroForm;
