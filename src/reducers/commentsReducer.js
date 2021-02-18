import {
  GET_BY_ID,
  LOADING,
  ERROR
} from "../types/commentsTypes"

const INITIAL_STATE = {
  comments: [],
  loading: false,
  error: null
}

const commentsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_BY_ID:
      return {
        ...state,
        comments: action.payload,
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

export default commentsReducer