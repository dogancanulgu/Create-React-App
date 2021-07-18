import React from 'react';
import './App.css';
import Header from './components/Header';
import User from "./components/User";

// const name = "Doğancan";
// const surname = "Ülgü";
// const isLoggedIn = true;



function App() {

  return (
  <>
    <User 
      name="Doğancan" 
      surname="Ülgü" 
      isLoggedIn={true} 
      age="29"
      friends = {["Ahmet", "Tayfun", "Gökhan", "Ayşe", "Fatma"]}
    />
  </>
  );  


/****************************************/
  // return <>
  //   <h1>
  //   {isLoggedIn ? `Benim Adım ${name}, soyadım ${surname}` : "Giriş yapmadınız."}
  //   </h1>
  // </>;
/****************************************/
  // return <>
  //   <h1>{name} {surname}</h1>
  //   <h1>{`Benim Adım ${name}, soyadım ${surname}`}</h1>
  // </>;
/****************************************/
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
