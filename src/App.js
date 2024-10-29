import './App.css';
// import About from './components/About';
import NavBar from './components/NavBar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
    //  const [Text,setText]=useState('Dark');
  const [alert,setAlert]=useState(null);  

  const showAlert=(message,type)=>
    {
       setAlert(
        {
          msg: message,
          type: type
        }
       )
       setTimeout(() => {
        setAlert(null);
       }, 2000);
    }
    const toggleMode=()=>{
      if(mode==='light')
      {
        setMode('dark');
        document.body.style.backgroundColor='grey';
        showAlert("Dark Mode has been Enabled","success");
      }
      else
      {
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert("Light Mode has been Enabled","success");
      }
    }
     
  return (
    <div >
    
      <NavBar title="Textify" mode={mode}  toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3"  >
      <TextForm showAlert={showAlert} heading="Enter a text To analysie" mode={mode} /></div>
      {/* <div className="container my-3">
      <button onClick={toggleStyle} style={mode} type="button" className="btn btn-dark">{Text} Mode</button>
    </div> */}
    </div>
  );
}

export default App;




