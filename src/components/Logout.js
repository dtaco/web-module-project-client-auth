import React, {useEffect} from 'react';
import axios from 'axios';

const Logout = () => {

    useEffect(()=> {
        const token = localStorage.getItem('token');
        axios.post('http://localhost9000:/api/logout', {}, {
            headers: {
                authorization: token
            }
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return(<div></div>)
}

export default Logout;