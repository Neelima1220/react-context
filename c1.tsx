import React, { useContext } from 'react';
import { GlobalContext } from './contextCom';
import { C2 } from './c2';

export const C1 = () => {
  const { setCount } = useContext(GlobalContext);
  const decrement = (i) => {
    setCount((prev) => prev - i);
  };
  return (
    <div style={{ backgroundColor: 'red' }}>
      <p>c1 comp </p>
      <C2 />
      <button onClick={() => decrement(5)}>dec</button>
    </div>
  );
};
