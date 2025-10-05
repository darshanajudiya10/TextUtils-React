import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import Alert from './components/Alert';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App(props) {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#030554';
    showAlert("Dark mode has been enabled", "success");
    }
    else{
    setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }




  return (
    <>
      {/*
      <BrowserRouter>
        <Navbar
          title="TextUtils2"
          about="Abouts"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route
              exact path="/"
              element={
                <TextFrom
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
      */}

      {/* Non-router rendering while router is commented out */}
      <Navbar
        title="TextUtils2"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-4" mode={mode}>
        <TextFrom
          showAlert={showAlert}
          heading="Enter Text to analyze "
          mode={mode}
        />
      </div>
      
    </>
  );
}

export default App;
