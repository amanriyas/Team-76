import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Routes,Route } from 'react-router-dom'

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/') // Django API endpoint
      .then((response) => setData(response.data.message)) // Access the `message` key
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <div className='flex justify-center items-center h-screen font-bold text-7xl bg-gray-400'>
        <h1>{data}</h1> 
      </div>
    </>
  );
}

export default App;
