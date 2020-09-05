import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  return (
    <div>
      <Counter></Counter>
    </div>
  );
}

function Counter(){
  const [count,setCount] = useState(7);
  useEffect(()=>{
    
  },[]);


  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  }; 

  return(
    <div className="text-center py-4">
      <h1>Count : {count}</h1>
      <button className="btn btn-primary mt-3" onClick={handleIncrease}>Increase</button>
    </div>
    
  );
}


export default App;
