import React from 'react';

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return <Context.Provider value={{ state }}>{children}</Context.Provider>;
  };

  return { Context, Provider };
};
