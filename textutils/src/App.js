import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About'; 

function App() {

  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#2c1717';
      showAlert("Dark mode has been enabled!", "Success")
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled!", " ")

    }
  }
  return (
    <>

      < Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <TextForm heading="Enter the text to analyze" mode={mode} />
        {/* <About /> */}
      </div>
    </>

  );
}

export default App;
