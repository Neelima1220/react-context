import React, { useContext } from 'react';
import { GlobalContext } from './contextCom';

export const C3 = () => {
  const { count, setCount } = useContext(GlobalContext);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div style={{ backgroundColor: 'green' }}>
      <p>c3 comp </p>
      <button onClick={increment}>inc</button>
    </div>
  );
};
