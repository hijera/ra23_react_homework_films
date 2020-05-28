import React from 'react';
import './App.css';
import Stars from './components/Stars.jsx'
function App() {
  return (
  <>
    <Stars count={5} />
    <Stars count={4} />
    <Stars count={3} />
    <Stars count={2} />
    <Stars count={1} />
    <Stars count={0}/>
    <Stars />
    <Stars count={"abc"} />
  </>
  );
}

export default App;
