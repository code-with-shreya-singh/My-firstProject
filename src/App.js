import { BrowserRouter , Routes , Route  , Navigate } from 'react-router-dom';

import './App.css';
import React from 'react';
import Home from './Component/Home';  
import About from './Component/About';
import  NavBar from './Component/NavBar';
import Page404 from './Component/404Page';
import User from './Component/User';
import Contact from './Component/Contact';
import Protected from './Component/Protected';


  function Login(){
    return(
        <div className='Login'>
 
  <BrowserRouter>
  <Page404/>
  <NavBar/>
  <User />
  <Contact/>
  <Protected />
  
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/About" element={<About/>} />
    <Route path='/' element={<Protected Componenet={Home}/>}/>
    {/* <Route path="/*" element={<h1>Page Not Reloaded</h1>} /> */}
    {/* <Route path="/User :Anil" element={<User/>} /> */}
    <Route path='/*' element={<Navigate to="/" />}/>
    <Route path="/Contact/ :company " element={<Contact/>} />
           <Route path='company ' element={<company/>}/>
          <Route path='channel ' element={<channel/>}/>
          <Route path='other ' element={<other/>}/>
  </Routes>
  </BrowserRouter>

        </div>
    )
}
export default Login;