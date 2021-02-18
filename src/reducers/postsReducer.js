import {
  GET_BY_ID,
  LOADING,
  ERROR
} from "../types/postsTypes"

const INITIAL_STATE = {
  posts: [],
  loading: false,
  error: null
}

const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_BY_ID:
      return {
        ...state,
        posts: action.payload,
        load: false,
      }
    case LOADING:
      return {
        ...state,
        load: true,
        error: null
      }
    case ERROR:
      return {
        ...state,
        error: action.payload,
        load: false
      }
    
    default: return state;
  }
}

export default postsReducer