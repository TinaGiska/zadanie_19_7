import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './reducer.js';


ReactDOM.render(
  <Provider store={store}>,
  <App />,
  </Provider>,
  document.getElementById('root'));

  store.dispatch(addComment('pierwszy komentarz'));
  store.dispatch(addComment('drugi komentarz'));

registerServiceWorker();

const store = createStore(reducer);

const THUMB_DOWN_COMMENT = 'THUMB_UP_COMMENT'

// kreator akcji:
function thumbDownComment(commentId) {
  return {
    type: THUMB_DOWN_COMMENT,
    id: commentId
  }
}

export THUMB_DOWN_COMMENT;
export thumbDownComment;
