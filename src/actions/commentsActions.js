import api from "../api"

import {
  GET_BY_ID,
  LOADING,
  ERROR
} from "../types/commentsTypes"

import * as postsTypes from "../types/postsTypes"

const {GET_ALL: POSTS_GET_ALL} = postsTypes

export const getById = (id,posts_key,index) => async (dispatch,getState) => {
  dispatch({
    type: LOADING
  })

  const { posts } = getState().postsReducer
  const { comments } = getState().postsReducer
  try {
    const data = await api.getCommentsByPost(id)
    const update_comments = [
      ...comments,
      data
    ]
    const comments_key = comments.length -1

    const update_posts = [...posts]
    update_posts[posts_key][index] ={
      ...update_posts[posts_key][index],
      comments_key
    }
    dispatch({
      type: GET_BY_ID,
      payload: update_comments
    })
    dispatch({
      type: POSTS_GET_ALL,
      payload: update_posts
    })

  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error
    })
  }
}