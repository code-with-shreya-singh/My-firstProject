import { useState } from "react";
function profile()
{
    const[loggedIn,setLoggedIn]=useState(3)

    return(
        <div>
            loggedIn==1?<h1>Welcome user 1</h1> : loggedIn==2?<h2>Welcome user 2</h2>:<h1> welcome user 3</h1>
        </div>
    )
}
export default profile;