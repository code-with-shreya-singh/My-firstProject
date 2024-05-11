import  {NavLink} from 'react-router-dom';
function NavBar(){
    return(
        <div>
           <ul className='navbar'>
            <li >< NavLink
            style={({isActive})=>{return {backgroundColor :isActive ? 'greenyellow' : 'red'}}}
             className='nav-bar-link' to="/About"> About</NavLink></li>
            <li >< NavLink
             style={({isActive})=>{return {backgroundColor :isActive ? 'greenyellow' : 'red'}}} 
             className='nav-bar-link'   to="/"> Home</NavLink></li>
            <li >< NavLink
             style={({isActive})=>{return {backgroundColor :isActive ? 'greenyellow' : 'red'}}}
             className='nav-bar-link'   to="/*"> Contact Us</NavLink></li>
            <li >< NavLink 
             style={({isActive})=>{return {backgroundColor :isActive ? 'greenyellow' : 'red'}}}
            className='nav-bar-link'   to="/*"> Career</NavLink></li>
            <li >< NavLink
             style={({isActive})=>{return {backgroundColor :isActive ? 'greenyellow' : 'red'}}}
             className='nav-bar-link'   to="/*"> Apply</NavLink></li>
             {/* <li>< NavLink
              to='/user/anil'>Anil</ NavLink></li>
            <li>< NavLink to='/user/peter'>Peter</ NavLink></li> */}
{/*  
            <li><a href='/'>Home</a></li>
            <li><a href='/'>About</a></li>
            <li><a href='/'>Contact</a></li>
            */}
           </ul> 
        </div>
    )
}
export default  NavBar;