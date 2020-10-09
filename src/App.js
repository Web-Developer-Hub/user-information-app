import React, { useState, useEffect } from 'react';
import './App.css';
import data from './data/data.json';
import User from './components/user-data/user.js';


function App() {
const [accounts, setAccounts] = useState([]);

  useEffect( () => {
    setAccounts(data);
  }, []);

  const [user, setUser] = useState([]);

  const handleUser = (users) => {
    const newUser = [...user, users];
    setUser(newUser)
  }

  return (
    <div className="App">
      <h1 className = 'head'>This is my users information site </h1>
      <h2 className ='head'>Total Users : {accounts.length}</h2>
      <h2 className ='head'> New Add Users : {user.length}</h2>
      
      <ul>
        {
          accounts.map(account => <User account = {account} handleUser = {handleUser} ></User> )
        }
      </ul>
    </div>
  );
}

export default App;
