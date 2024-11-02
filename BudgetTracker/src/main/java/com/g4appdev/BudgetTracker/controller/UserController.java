package com.g4appdev.BudgetTracker.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.g4appdev.BudgetTracker.entity.UserEntity;
import com.g4appdev.BudgetTracker.service.UserService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/print")
    public String print() {
        return "Hello, Username";
    }

    @PostMapping("/postuserrecord")
    public UserEntity postUserRecord(@RequestBody UserEntity user) {
        return userService.postUserRecord(user);
    }

    @GetMapping("/getAllUsers")
    public List<UserEntity> getAllUsers() {
        return userService.getAllUsers();
    }

    @PutMapping("/updateuser/{userId}")
    public UserEntity updateUser(@PathVariable int userId, @RequestBody UserEntity user) {
        return userService.updateUser(userId, user).orElse(null);
    }

    @DeleteMapping("/deleteuser/{userId}")
    public boolean deleteUser(@PathVariable int userId) {
        return userService.deleteUser(userId);
    }

    @GetMapping("/getUser/{userId}")
    public UserEntity getUserById(@PathVariable int userId) {
        return userService.getUserById(userId).orElse(null);
    }

}
