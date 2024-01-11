import { useState } from 'react' 

import './App.css'


function App() {
  
  let [count, setCount] = useState(0)
  

  return (
    <div>
      
        <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  )
}

function CustomButton(props){

  return(
    <>
    <h1>{props.count}</h1>
    <br></br>
    <h2>{props.count}</h2>
    <br></br>
    <button onClick={()=>{
      props.setCount(props.count+1)
    }}>Count is {props.count}</button>
    </>
  )

}

  


export default App
