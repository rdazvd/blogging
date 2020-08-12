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
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => (title, content, callback) => {
  dispatch({ type: 'add_blog_post', payload: { title, content } });
  callback();
};
const deleteBlogPost = (dispatch) => (id) =>
  dispatch({ type: 'delete_blog_post', payload: id });

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost, deleteBlogPost },
  []
);
