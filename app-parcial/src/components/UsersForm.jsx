import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://ec2-34-225-25-41.compute-1.amazonaws.com:5000/add-user'; // Update this URL to your endpoint

function UsersForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
            first_name: firstName,
            last_name: lastName,
            birth_date: birthDate,
            password: password
        };

        axios.post(API_URL, userData)
            .then(response => {
                alert('User added successfully!');
                setFirstName('');
                setLastName('');
                setBirthDate('');
                setPassword('');
            })
            .catch(error => {
                console.error('Error adding user:', error);
                alert('There was an error adding the user!');
            });
    };

    return (
        <div>
            <h1>Add New User</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Birth Date:</label>
                    <input
                        type="date"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add User</button>
            </form>
        </div>
    );
}

export default UsersForm;
