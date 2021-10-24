import React from 'react';
import useInput from "./hooks/useInput";
import Hover from "./components/Hover";
import LoginForm from "./components/LoginForm";

function App() {

  return (
    <div className="App">
        <LoginForm />
        <Hover/>
    </div>
  );
}

export default App;
