import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

const AddUserForm = ({ onClose }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [profileInformation, setProfileInformation] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { username, password, email, profileInformation };
        await axios.post('http://localhost:8080/api/user/postuserrecord', user);
        onClose();
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Typography variant="h5" gutterBottom>Add New User</Typography>
            <TextField label="Username" value={username} onChange={(e) => setUsername(e.target.value)} fullWidth required margin="normal" />
            <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth required margin="normal" />
            <TextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth required margin="normal" />
            <TextField label="Profile Information" value={profileInformation} onChange={(e) => setProfileInformation(e.target.value)} fullWidth margin="normal" />
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                <Button type="submit" variant="contained" color="primary">Submit</Button>
                <Button variant="outlined" color="secondary" onClick={onClose}>Cancel</Button>
            </Box>
        </Box>
    );
};

export default AddUserForm;
