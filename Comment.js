import React from 'react';

const Comment = ({text, votes, id, thumbDownComment}) =>
  <li>
    {text} <span>votes: {votes}</span> <button onClick={() => thumbDownComment(id)}>Thumb down</button>
  </li>;

export default Comment;
