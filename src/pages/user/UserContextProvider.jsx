import React, { createContext } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const dataObj = {
    username: 'Navneet Kumar From Provider',
    totalPackages: 15,
    totalMovies: 20
  }

  return (
    <UserContext.Provider value={dataObj}>
      {children}
    </UserContext.Provider>
  );
};
