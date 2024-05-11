import React from "react";
function Teacher(props)
{
    return(
        <div>
            <h1>User Componenet</h1>
            <button onClick={()=>props.data()}>Call Data Function</button>
        </div>
    )
}
export default Teacher;