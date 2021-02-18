import api from "../api"

import {
  LOADING,
  ERROR,
  GET_ALL
} from "../types/usersTypes"

export const getAll = () => async (dispatch) => {
  dispatch({
    type: LOADING
  })
  try {
    const users = await api.getAllUsers()
    dispatch({
      type: GET_ALL,
      payload: users
    })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error
    })
  }
}