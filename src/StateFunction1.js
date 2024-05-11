import { useState } from "react";
function StateFunction1()
{
    const[data ,setData]=useState(0)

    function UpdateData()
    {
        setData(data+1)
    }
    console.warn("_______________________")
    return(
        <div  className=" StateFunction">
         <h1>{data}</h1>
         <button onClick={UpdateData}>Update Data</button>
        </div>
    )
}
export default StateFunction1;