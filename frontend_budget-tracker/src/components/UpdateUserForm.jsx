import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

const UpdateUserForm = ({ userId, onUserUpdated, onCancel }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [profileInformation, setProfileInformation] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get(`http://localhost:8080/api/user/getUser/${userId}`);
            const user = response.data;
            setUsername(user.username);
            setPassword(user.password);
            setEmail(user.email);
            setProfileInformation(user.profileInformation);
        };

        fetchUser();
    }, [userId]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const user = { username, password, email, profileInformation };
        await axios.put(`http://localhost:8080/api/user/updateuser/${userId}`, user);
        onUserUpdated();
    };

    return (
        <Box component="form" onSubmit={handleUpdate} sx={{ mt: 3 }}>
            <Typography variant="h5" gutterBottom>Update User</Typography>
            <TextField label="Username" value={username} onChange={(e) => setUsername(e.target.value)} fullWidth required margin="normal" />
            <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth required margin="normal" />
            <TextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth required margin="normal" />
            <TextField label="Profile Information" value={profileInformation} onChange={(e) => setProfileInformation(e.target.value)} fullWidth margin="normal" />
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                <Button type="submit" variant="contained" color="primary">Update</Button>
                <Button variant="outlined" color="secondary" onClick={onCancel}>Cancel</Button>
            </Box>
        </Box>
    );
};

export default UpdateUserForm;
