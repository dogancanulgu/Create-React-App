import React from 'react';
import './App.css';
import Header from './components/Header';

function App() {

  // return React.createElement("div", null, "Hello");

  // return (
  // <div>
  //   <Header />
  // </div>);
  return (
  <>
    <Header/>
    <p className="xyz">
      lorem
    </p>
    <label htmlFor="myInput">
      Name
    <input id="myInput"/>    
    </label>
  </>
  );
}

export default App;
