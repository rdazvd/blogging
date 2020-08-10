import React from 'react';
import createDataContext from './createDataContext';

const reducer = (state, action) => {
  switch (action.type) {
    case 'delete_blog_post':
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case 'add_blog_post':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: `Blog Post #${state.length + 1}`,
        },
      ];
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => () => dispatch({ type: 'add_blog_post' });
const deleteBlogPost = (dispatch) => (id) =>
  dispatch({ type: 'delete_blog_post', payload: id });

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost, deleteBlogPost },
  []
);
