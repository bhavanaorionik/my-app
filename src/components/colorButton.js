import React from "react";

const ColorButton = ({changeColor}) => {
    return(
        <div style={{marginTop:"20px"}}>
            <button onClick={() => changeColor("red")}>RED</button>
            <button onClick={() => changeColor("yellow")}>YELLOW</button>
            <button onClick={() => changeColor("green")}>GREEN</button>
        </div>
    )
}
export default ColorButton;