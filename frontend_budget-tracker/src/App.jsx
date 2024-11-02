import React, { useState } from 'react';
import { Container, Typography, Box, Button, CssBaseline } from '@mui/material';
import AddUserForm from './components/AddUserForm';
import UpdateUserForm from './components/UpdateUserForm';
import UserList from './components/UserList';

const App = () => {
    const [userId, setUserId] = useState(null);
    const [isAddFormOpen, setIsAddFormOpen] = useState(false);
    const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false);

    const handleAddUser = () => setIsAddFormOpen(true);
    const handleUpdateUser = (id) => {
        setUserId(id);
        setIsUpdateFormOpen(true);
    };
    const handleCloseForms = () => {
        setIsAddFormOpen(false);
        setIsUpdateFormOpen(false);
        setUserId(null);
    };

    return (
        <Container component="main" maxWidth="md">
            <CssBaseline />
            <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Typography variant="h4" gutterBottom>Budget Tracker - User Management</Typography>
                <Button variant="contained" color="primary" onClick={handleAddUser}>
                    Add New User
                </Button>
            </Box>
            <UserList onEditUser={handleUpdateUser} />
            {isAddFormOpen && <AddUserForm onClose={handleCloseForms} />}
            {isUpdateFormOpen && <UpdateUserForm userId={userId} onUserUpdated={handleCloseForms} onCancel={handleCloseForms} />}
        </Container>
    );
};

export default App;
