import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer';
import ThumbDownContainer from './ThumbDownContainer';

const App = () => {
  return (
    <div className="App">
      <CommentsListContainer />
      <ThumbDownContainer />
    </div>
  );
};

export default App;
