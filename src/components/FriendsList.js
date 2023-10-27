import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const FriendsList = () => {

    const [ friends, setFriends ] = useState([]);
    const token = localStorage.getItem("token");

    if(!token) {
        return <Navigate to="/login"/>
    }

    useEffect(() => {
        axios.get('http://localhost:9000/api/friends', {
            headers: {
                authorization: token,
            }
        })
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    return (
    <div>
        <h2>Friends List</h2>
        <ul>
            {friends.map(friend => {
                return <li key={friend.id}>{friend.name} - {friend.age} - {friend.email}</li>
                })}
        </ul>
    </div>
    )
  };


  export default FriendsList;