import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');
  const [antimode, antisetMode] = useState('dark');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      antisetMode('light');
      document.body.style.backgroundColor = "grey";
    } else {
      setMode('light');
      antisetMode('dark');
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} antiMode={antimode} />
      <div className="container my-3">
         <TextForm heading="Enter the Text to Analyse it" rows='8' mode={mode} antiMode={antimode} />
      </div>
      </>
  );
}

export default App;
