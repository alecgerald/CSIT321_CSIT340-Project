package com.g4appdev.BudgetTracker.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.g4appdev.BudgetTracker.entity.UserEntity;
import com.g4appdev.BudgetTracker.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    UserRepository urepo;

    public UserEntity postUserRecord(UserEntity user) {
        return urepo.save(user);
    }

    public List<UserEntity> getAllUsers() {
        return urepo.findAll();
    }
    
    public Optional<UserEntity> updateUser(int userId, UserEntity user) {
        return urepo.findById(userId).map(existingUser -> {
            existingUser.setUsername(user.getUsername());
            existingUser.setPassword(user.getPassword());
            existingUser.setEmail(user.getEmail());
            existingUser.setProfileInformation(user.getProfileInformation());
            return urepo.save(existingUser);
        });
    }

    public boolean deleteUser(int userId) {
        if (urepo.existsById(userId)) {
            urepo.deleteById(userId);
            return true;
        }
        return false;
    }

    public Optional<UserEntity> getUserById(int userId) {
        return urepo.findById(userId);
    }
    
}
