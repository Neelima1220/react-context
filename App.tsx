import * as React from 'react';
import './style.css';
import ContextComp from './contextCom';
import { C1 } from './c1';

export default function App() {
  return (
    <ContextComp>
      <p> App </p>
      <C1 />
    </ContextComp>
  );
}
