import React, { useContext } from 'react';
import { UserContext, UserContextProvider } from './UserContextProvider';

export default function UserConsumer() {
  const { username, totalPackages, totalMovies } = useContext(UserContext);

  return (
    <UserContextProvider>
      <h2>Packages Booking for: <strong>{username}</strong> is:</h2>
      <p>Total Packages: <strong>{totalPackages}</strong></p>
      <p>Total Movies: <strong>{totalMovies}</strong></p>
    </UserContextProvider>
  );
}