import { ADD_POST, DELETE_POST, FETCH_POST,FETCH_POSTBYID } from '../actions/types';

export default function postReducer(state = [], action) {
  switch (action.type) {
    case ADD_POST:
      return [...state, action.payload];
    case DELETE_POST:
      return state.filter(post => post._id !== action.payload.id);
      case FETCH_POSTBYID:
      return state.filter(post => post.id === action.payload.id);
      case FETCH_POST:
      return action.posts;
      
    default:
      return state;
  }
}