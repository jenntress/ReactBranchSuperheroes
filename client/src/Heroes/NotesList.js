// superheroes-reactify/client/src/Heroes/NotesList.js

import React from 'react';

const NotesList = (props) => (
  <div>
    <h1>Comments</h1>
      { props.notes.map((item, index) => (
          <div key={index}>
            <p>{item.content}</p>
          </div>
        ))
      }
  </div>
)

export default NotesList
