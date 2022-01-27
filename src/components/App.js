import Interceptors from '../Interceptors';
import Meeting from './Meeting';
import React from 'react';
import './App.scss';

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
