package com.g4appdev.BudgetTracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.g4appdev.BudgetTracker.entity.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {

    // This is a user-defined method to search a user record by username
    public UserEntity findByUsername(String username);

    // You may define more methods for searching, for instance, in this interface

}
