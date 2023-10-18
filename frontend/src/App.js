import React from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {



  React.useEffect(()=>{
    axios.get('http://localhost:5555/books/').then((response)=> console.log(response))
  },[])
  return (
    <div className="App">
     <h1>Test with CORS policy</h1>

    </div>
  );
}

export default App;
