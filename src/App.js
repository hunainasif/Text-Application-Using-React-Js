import React, { useState } from "react";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
 const[mode,setMode]=useState('dark');
 const[modeText,setModeText]=useState("Enable Dark Mode");

 const[alert,setAlert]=useState(null);

 const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type

  })
  setTimeout(()=>{
    setAlert(null);
  },1500)
 }
 const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
    setModeText('Enable Light Mode');
    document.body.style.backgroundColor='#243a8d'
   showAlert('Dark Mode Has Successfull Enabled','success')
  }
  else{
    setMode('light');
    setModeText('Enable Dark Mode');
    document.body.style.backgroundColor='white'
    showAlert('Light Mode Has Successfull Enabled','success')

  }
 }
  return (
     <Router>

     <Navbar alert={alert} title="Text-Hub" modeText={modeText} mode={mode} toggleMode={toggleMode}/>

     <Alert alert={alert}/>
     <Switch>
      <Route exact path="/">
     <Textform heading="Enter Text Here To Analyze" mode={mode}/>
     </Route>
     <Route exact path="/about">
            <About />
      </Route>

     </Switch>
     </Router>
  );
}

export default App;
