import Interceptors from './Interceptors';
import Meeting from './components/Meeting';
import React from 'react';
import './App.css';

function App() {
  React.useEffect(() => {
    Interceptors();
  }, [])
  return (
    <div className="App">
      <Meeting />
    </div>
  );
}

export default App;
