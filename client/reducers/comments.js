function postComments(state = [], action){
  switch(action.type){
    case 'ADD_COMMENT':
      //return the new state with the new comment
      return [...state, {
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT' :
      //return the state without the deleted comment
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]
    default : return state;
  }
  return state;
}

function comments(state = [], action){
  if (typeof action.postId !== 'undefined'){
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;
