import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => (
  <BlogContext.Provider value={[1, 3, 4]}>{children}</BlogContext.Provider>
);

export default BlogContext;
