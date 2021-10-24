const express = require('express');
const app = express();

app.get('/names', (req, res) => {
   res.send("prod");
})
  
app.listen(4000, () => {
   console.log("Server is running on port 4000");
})

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "./App.css";

function App() {
  const [userName, setUsername] = useState('')
  
  useEffect(() => {
    getNames();
  }, [])

  const getNames = async() => {
    const response = await axios.get('/names');
    console.log(response);
    setUsername(response.data)
  }

  return (
    <>
      <h1>My frentend</h1>
      <h3>Hello {userName}</h3>
    </>
);
}

export default App;
