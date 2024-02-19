import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Home from './components/Home';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
import  ReactDOM  from "react-dom/client";
import {
 BrowserRouter as Router,
 Routes,
 Route
} from "react-router-dom";





function App() {

  



  
  const [alert, setAlert] = useState(null); 

  const showAlert = (message,type) =>{
    setAlert({
      msg : message,
      type : type

    })
    setTimeout(()=>{
      setAlert(null);
    },1200)
  }
  const [mode, setMode] = useState('light');

  const toggleMode = () =>{
    if(mode == 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success")
      document.title = "TextUtils Light mode"
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode enabled", "success")
      document.title = "TextUtils Dark mode"

      setInterval(()=>{
         document.title = "TextUtils is Awesome"
      },1000);

      setInterval(()=>{
        document.title = "Install TextUtils App"
     },1500);
    }
  }

 

  return (
    <>
      <Router>
     <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/> 
     <Alert alert={alert}/>
     <Routes>
        <Route index path='/' element={<TextForm/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
     </Routes>
  {/* <div className="container"> 
    <TextForm showAlert={showAlert} heading="Enter the text to analyse" />
    <About />
  </div> */}
  </Router>
  </>
  );
}

export default App;


