import api from "../api"

import {
  GET_BY_ID,
  LOADING,
  ERROR
} from "../types/postsTypes"

import * as usersTypes from "../types/usersTypes"

const {GET_ALL: USERS_GET_ALL} = usersTypes

export const getById = (id) => async (dispatch,getState) => {
  dispatch({
    type: LOADING
  })

  const { users } = getState().usersReducer
  const { posts } = getState().usersReducer
  try {
    const data = await api.getPostsByUser(id)
    const update_posts = [
      ...posts,
      data
    ]
    const posts_key = posts.length -1

    const update_users = [...users]
    update_users[id-1] ={
      ...update_users[id-1],
      posts_key
    }
    dispatch({
      type: GET_BY_ID,
      payload: update_posts
    })
    dispatch({
      type: USERS_GET_ALL,
      payload: update_users
    })

  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error
    })
  }
}