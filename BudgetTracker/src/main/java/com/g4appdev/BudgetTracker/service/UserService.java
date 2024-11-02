package com.g4appdev.BudgetTracker.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.g4appdev.BudgetTracker.entity.UserEntity;
import com.g4appdev.BudgetTracker.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    UserRepository urepo;

    public UserService() {
        super();
    }

    // Create operation of CRUD
    public UserEntity postUserRecord(UserEntity user) {
        return urepo.save(user);
    }

    // Read operation of CRUD
    public List<UserEntity> getAllUsers() {
        return urepo.findAll();
    }
    
}
