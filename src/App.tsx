import React, { useState } from 'react';
import './App.css';

function App() {
  // let initialCount = 0;  
  const [count, setCount] = useState(0)
  const onClickHandler1 = () => {
    setCount(count+1); 
  }
  const onClickHandler2 = () => {
    setCount(count-1)
  }



  return (
    <div className="App">
     <p>{count}</p>
     <button onClick={onClickHandler1}>+</button>
     <button onClick={onClickHandler2}>-</button>
    </div>
  );
}

export default App;


// function App() {
//   // const subscriber = (name: string) => console.log(name)

//   return (
//     <div className="App">
//       {/* Hello, samurai! Let's go! */}
//       {/* <UniversalButton title={"Youtube-chanel-1"} callBack={() => {subscriber("Anna")}}/>
//       <UniversalButton title={"Youtube-chanel-2"} callBack={() => {subscriber("Viktor")}}/>
//       <UniversalButton title={"Youtube-chanel-3"} callBack={() => {subscriber(" ")}}/> */}
//     </div>
//   );
// }
