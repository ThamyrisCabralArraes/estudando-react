import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [message, setMessage] = useState('Helloo');
  return (
    <div className='container'>
      <div>{message}</div>
      <button onClick={() => setMessage('Olaaa')}>mudar frase</button>
    </div>
  );
};

export default App;
