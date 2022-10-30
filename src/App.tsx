import React from 'react';
import './App.css';
import { Button } from '@mui/material';

import MyName from './components/Name';
import logo from './logo.svg';
export default function App() {
  return (
    <div className="App">
      <header className="App-header">
      <MyName firstname="Jay" middlename="Dinampo" lastname="Nayon" />
      <Button variant="contained">Master Keith Python the best</Button>
      {Apps()}
      </header>
    </div>
  );
}

export function Apps() {
  return (
    <div>
        <h1>Hello Fucking World</h1>
    </div>
  );
}
