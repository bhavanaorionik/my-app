import React,{useState} from "react";

const Input = () =>{
    const[text, setText] = useState("");
    return(

        <div style={{textAlign: "center", color:"blue"}}>

            <h1>Handling Input</h1>

            <Input type="text" placeholder="Type Somthing"
             value={text}
             onChange={(e)=>setText(e.target.value)}/>

            <h2>Your Name Is : {text}</h2>
        </div>

    );

}
export default Input;