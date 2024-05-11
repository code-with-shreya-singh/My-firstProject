import { useState } from "react";
function StateFunction()
{
    const[data ,setData]=useState("Ankish")

    function UpdateData()
    {
        setData("Kumar")
    }
    
    return(
        <div  className=" StateFunction">
         <h1>{data}</h1>
         <button onClick={UpdateData}>Update Data</button>
        </div>
    )
}
export default StateFunction;