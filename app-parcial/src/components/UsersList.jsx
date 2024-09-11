import axios from 'axios';
import React, { useEffect, useState } from 'react'; 

const API_URL = 'http://ec2-34-201-62-126.compute-1.amazonaws.com:5000/data';

function UsersList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(API_URL)
            .then(response => setUsers(response.data))
            .catch(error => {
                console.error('Error fetching data:', error);
                alert('There was an error fetching the data!');
            });
    }, []);

    return (
        <div>
            <h1>Users List</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.first_name} {user.last_name} - {user.birth_date}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UsersList;

