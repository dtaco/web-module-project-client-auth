import React from 'react';
import './App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';


function App() {
  return (
      <div className="App">
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
