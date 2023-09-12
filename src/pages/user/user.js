import React, { useContext } from 'react';

// Create a context
const MyContext = React.createContext();

// Create a provider component
function MyProvider({ children }) {
  const value = 'Hello, world!';

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}

// A consumer component that uses the context value
function MyConsumer() {
  const value = useContext(MyContext);
  return <div>{value}</div>;
}

// Usage
export default function User() {
  return (
    <MyProvider>
      <MyConsumer />
    </MyProvider>
  );
}