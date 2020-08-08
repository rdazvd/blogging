import React from 'react';

const BlogContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'add_blog_post':
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, []);

  const addBlogPost = () => {
    dispatch({ type: 'add_blog_post' });
  };

  return (
    <BlogContext.Provider value={{ data: state, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
