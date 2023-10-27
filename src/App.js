import React from 'react';
import './App.css';
import {Routes, Route, useNavigate, Link} from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';


function App() {
  return (
      <div className="App">
        <header>
          <h2>Friends Database</h2>
          <Link className="link" to="login">Login.</Link>
          <Link className="link" to="friends">FriendsList.</Link>
          <Link className="link" to="friends/add">AddFriend.</Link>
          <Link className="link" to="logout">Logout</Link>
        </header>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/friends" element={<FriendsList/>}/>
        <Route path="/friends/add" element={<AddFriend/>}/>
        <Route path="/logout" element={<Logout/>}/>
      </Routes>
      </div>
  );
}

export default App;
