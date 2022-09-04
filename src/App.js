import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useState} from 'react';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from 'react-router-dom';



function App() {
  const [mode, setmode] = useState('light');
  const EnableMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor= '#01193e';
      showAlert("Dark mode is Enabled","success");

      //if we want to change the title of the page on visiting different page
      //document.title = "Name of the title"
    }else{
      setmode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Light mode is Enabled","success");
    }
  }

  //alert usestate
  const [alert,setalert] = useState(null);
  const showAlert =(message,type)=>{
    setalert({
      msg: message,
      type: type
    })

    setTimeout(()=>{
      setalert(null);
    },1500);
  }

  return (
    <>
      {/*<Router>*/}
      <Navbar title="TextUtiles" aboutText="About" mode={mode} darkmode={EnableMode}/>
        {/*my-3 is the property in the bootstrap to give margin in yaxis by 3*/}
      <Alert Alertmsg={alert}/>
      <div className='container my-3'> 
      {/*<Switch>*/}
            {/*  use "exact path" is the good practice so that react matches the path exactly else 
            it matches partially*/}
            {/*<Route exact path="/">*/}
              <TextForm showAlert={showAlert} heading = "Enter text to analyze" mode={mode}/>
            {/*</Route>*/}
      {/*</Switch>*/}
      </div>
    {/*</Router>*/}
    </>
  );
}

export default App;
