import * as React from 'react';
import './style.css';

export const GlobalContext = React.createContext(null);

const ContextComp = ({ children }) => {
  const [count, setCount] = React.useState(1);
  return (
    <GlobalContext.Provider value={{ count, setCount }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextComp;
