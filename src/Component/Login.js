import {link ,useNavigate} from "react-router-dom"
import {useEffect} from "react";

function Login(Props){
    const Login =()=>{
        localStorage.setItem('Login' ,true);
        Navigate('/')
    }
    const Navigate=useNavigate();
    useEffect( ()=>{
        let Login=localStorage.getItem('login');
        if(Login){
            Navigate('/')
        }
    });
    return(
        <div>
           <h1>Logi page</h1>
           <input  type='text'/><br/>
           <input  type='text'/><br/>
           <input  type='text'/><br/>
           <input  type='text'/><br/>
           <button onClick={Login}>Login</button>
           
        </div>
    )
}
export default Protected;