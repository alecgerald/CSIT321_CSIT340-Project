import React, { useEffect, useState } from 'react';
import { Box, List, ListItem, ListItemText, IconButton, Typography } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import axios from 'axios';

const UserList = ({ onEditUser }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get('http://localhost:8080/api/user/getAllUsers');
            setUsers(response.data);
        };
        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8080/api/user/deleteuser/${id}`);
        setUsers(users.filter((user) => user.userId !== id));
    };

    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>User List</Typography>
            <List>
                {users.map((user) => (
                    <ListItem key={user.userId} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <ListItemText primary={user.username} secondary={user.email} />
                        <Box>
                            <IconButton color="primary" onClick={() => onEditUser(user.userId)}>
                                <Edit />
                            </IconButton>
                            <IconButton color="secondary" onClick={() => handleDelete(user.userId)}>
                                <Delete />
                            </IconButton>
                        </Box>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default UserList;
