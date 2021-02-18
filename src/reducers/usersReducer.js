import {
 GET_ALL,
 LOADING,
 ERROR
} from "../types/usersTypes"

const INITIAL_STATE = {
  users: [],
  loading: false,
  error: null
}

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        users: action.payload,
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

export default usersReducer