import {link ,useNavigate} from "react-router-dom"
import {useEffect} from "react";
function Protected(Props){
    const{Component}=Props;
    const Navigate=useNavigate();
    useEffect( ()=>{
        let Login=localStorage.getItem('login');
        if(!Login){
            Navigate('/Login')
        }
    });
    return(
        <div>
           <Component />
           
        </div>
    )
}
export default Protected;
