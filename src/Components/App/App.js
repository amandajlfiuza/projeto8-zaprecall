import './App.css';
import Start from '../Start/Start';
import Home from '../Home/Home';
import React from 'react';

export default function App() {
  const [tela, setTela] = React.useState(true);
  return (
    <>
      {tela ? <Start tela={tela} setTela={setTela} /> : <Home />}
    </>
  );
}