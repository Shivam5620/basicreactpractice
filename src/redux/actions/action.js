// postActions.js

import axios from 'axios';

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const REMOVE_POST = 'REMOVE_POST'; // Define the action type for removing a post

export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsFailure = (error) => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});

export const removePost = (id) => ({
  type: REMOVE_POST,
  payload: id, // Pass the id of the post to be removed as payload
});

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostsRequest());
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        const posts = response.data;
        dispatch(fetchPostsSuccess(posts));
      })
      .catch((error) => {
        dispatch(fetchPostsFailure(error.message));
      });
  };
};
