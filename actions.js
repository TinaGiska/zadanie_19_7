const ADD_COMMENT = 'ADD_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT'


function addComment(text) {
  return {
    type: ADD_COMMENT,
    id: uuid.v4(),
    text: text
  }
}

function thumbDownComment(commentId) {
  return {
    type: THUMB_DOWN_COMMENT,
    id: commentId
  }
}


export ADD_COMMENT;
export addComment;

export THUMB_DOWN_COMMENT;
export thumbDownComment;
