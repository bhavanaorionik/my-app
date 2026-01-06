import React,{useState} from "react";

const Counter = ()=>{
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
       <button className="reset" onClick={() => setCount(0)}>
         Reset
       </button>
   
     </div>
    );
}
export default Counter; 