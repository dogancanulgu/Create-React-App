import React from 'react';
import './App.css';
import Header from './components/Header';

const name = "Doğancan";
const surname = "Ülgü"


function App() {

  return <>
    <h1>{name} {surname}</h1>
    <h1>{`Benim Adım ${name}, soyadım ${surname}`}</h1>
  </>;




  // // return React.createElement("div", null, "Hello");

  // // return (
  // // <div>
  // //   <Header />
  // // </div>);
  // return (
  // <>
  //   <Header/>
  //   <p className="xyz">
  //     lorem
  //   </p>
  //   <label htmlFor="myInput">
  //     Name
  //   <input id="myInput"/>    
  //   </label>
  // </>
  // );
}

export default App;
