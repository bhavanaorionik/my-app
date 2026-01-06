//const App = () =>{
 // return(
   // <div>
     // <h1>Hello world..!</h1>
    //</div>
  //)
//}
import React,{useState} from "react";
import "./App.css";

function App(){
  const[count,setCount] = useState(0);

  return(
    <div style={{textAlign: "center", marginTop: "50px"}}>
      <h1 style={{color: "blue"}}>Counter App</h1>
      <h2>{count}</h2>

      <button className="Increase" onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <button  className="Decrease" onClick={() => setCount(count - 1)}>
        Decrease
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
   
    </div>
  );
}
export default App;
