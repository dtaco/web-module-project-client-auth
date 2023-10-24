import React from 'react';
import './App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';


const Login = () => {
  return (<h2>Login</h2>)
}

const FriendsList = () => {
  return (<h2>Friends List</h2>)
}

const AddFriend = () => {
  return (<h2>Add Friend!</h2>)
}



function App() {
  return (
      <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/friends" element={<FriendsList/>}/>
        <Route path="/friendsadd" element={<AddFriend/>}/>
      </Routes>
      </div>
  );
}

export default App;
