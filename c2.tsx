import React, { useContext } from 'react';
import { GlobalContext } from './contextCom';
import { C3 } from './c3';

export const C2 = () => {
  const { count } = useContext(GlobalContext);
  return (
    <div style={{ backgroundColor: 'orange' }}>
      <p>c2 comp {count}</p> <C3 />{' '}
    </div>
  );
};
