import React, { useState } from 'react';

function App1() {
  const [count, setCount] = useState(0);
// This Function for increment the number
  const increment = () => {
    setCount(count + 1);
  };
// This Function for decrement the number
  const decrement = () => {
    setCount(count - 1);
  };
// This Function for Reset the number
  const reset = ()=>{
     setCount(0);
  }

  
  

  return (
    <div>
      <h1>React Web: <br></br>
        {count}</h1>
        
      <button className='inc' onClick={increment}>Increment</button>
      
      <button className='dec' onClick={decrement}>Decrement</button>

      <button className='res' onClick={reset}>Reset</button>


    </div>
  );
}

export default App1;
