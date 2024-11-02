// src/UserService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/user';

export const UserService = {
    getAllUsers: () => {
        return axios.get(`${API_URL}/getAllUsers`);
    },
    createUser: (user) => {
        return axios.post(`${API_URL}/postuserrecord`, user);
    },
    updateUser: (userId, user) => {
        return axios.put(`${API_URL}/updateuser/${userId}`, user);
    },
    deleteUser: (userId) => {
        return axios.delete(`${API_URL}/deleteuser/${userId}`);
    }
};
