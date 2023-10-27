import React from 'react';
import './App.css';
import {Routes, Route, useNavigate, Link} from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';


function App() {
  return (
      <div className="App">
        <header>
          <h2>Friends Database</h2>
          <Link className="link" to="login">Login.</Link>
          <Link className="link" to="friends">FriendsList.</Link>
          <Link className="link" to="friends/add">AddFriend.</Link>
          <Link className="link" to="login">Logout</Link>
        </header>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/friends" element={<FriendsList/>}/>
        <Route path="/friends/add" element={<AddFriend/>}/>
      </Routes>
      </div>
  );
}

export default App;
