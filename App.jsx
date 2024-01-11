import { useState } from 'react' 

import './App.css'


function App() {
  
  let [count, setCount] = useState(0)
  // let addValue = ()=> {
  //   //console.log("reaching", count)
  //   //counter=counter+1;
  //   if(count>20) {
  //     alert("cant go beyond 20")
      
  //   }
  //   setCount(count+1);
  // }

  // let decValue = ()=>{

  //    setCount(count-1);
  // }

  return (
    <div>
      
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <h1>{count}</h1>
        <button onClick={()=> {
    //console.log("reaching", count)
    //counter=counter+1;
    if(count>20) {
      alert("cant go beyond 20")
      
    }
    setCount(count+1);
  }
}>Add Value {count}</button>
        <br></br>
        <br></br>
        <button onClick={()=> setCount(++count)}>Decrease Value</button>
        <h2>{count}</h2>
        <br></br>
        <h4>{count}</h4>
        <br></br>
        <p>{count}</p>
    </div>
  )
}

function customButton(){
  
}

export default App
