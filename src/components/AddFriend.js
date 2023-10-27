import React, { useState } from 'react';

const AddFriend = () => {
    const [form, setForm] = useState({
        name: "",
        age:"",
        email: ""
    })
    return (
        <div>
            <h2>Add Friend!</h2>

            <form>
                <div>
                    <label for="friendname">Friend's Name:</label>
                    <input id="friendname" />
                </div>

                <div>
                    <label for="friendage">Age:</label>
                    <input id="friendage" />
                </div>

                <div>
                    <label for="friendemail">Email:</label>
                    <input type="email" id="friendemail" />
                </div>

                <button>Submit</button>
            </form>
        </div>
    )
  };

export default AddFriend;