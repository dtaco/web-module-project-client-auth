import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';



const AddFriend = () => {

    if(!localStorage.getItem("token")) {
        return <Navigate to="/login"/>
    }

    const [form, setForm] = useState({
        name: "",
        age:"",
        email: ""
    });

    const navigate = useNavigate();

    const handleChange = (evt) => {
        setForm({
            ...form,
            [evt.target.name]: evt.target.value
        })
    } 

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const token = localStorage.getItem("token");
        axios.post('http://localhost:9000/api/friends', form, {
            headers: {
                authorization: token,
            }
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
        setForm({
            name: "",
            age:"",
            email: ""
        });
        navigate('/friends');
    }
    return (
        <div>
            <h2>Add Friend!</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="friendname">Friend's Name:</label>
                    <input onChange={handleChange} name="name" id="friendname" />
                </div>

                <div>
                    <label htmlFor="friendage">Age:</label>
                    <input onChange={handleChange} name="age" id="friendage" />
                </div>

                <div>
                    <label htmlFor="friendemail">Email:</label>
                    <input onChange={handleChange} name="email" type="email" id="friendemail" />
                </div>

                <button>Submit</button>
            </form>
        </div>
    )
  };

export default AddFriend;