import React,{useState} from "react";
const Input = () =>{
    const[name, setName] = useState("");
    return(
        <div style={{textAlign: "center", color:"blue"}}>
            <h1>Handling Input</h1>

            <Input type="text" placeholder="Enter Your Name"
             value={name}
             onchange={(e)=>setName(e.target.value)}/>

            <h2>Your Name Is : {name}</h2>
        </div>

    );

}
export default App;