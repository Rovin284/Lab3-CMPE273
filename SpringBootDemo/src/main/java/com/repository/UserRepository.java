package com.repository;

import com.entity.User;
import org.springframework.data.repository.CrudRepository;

import java.util.*;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository

public interface UserRepository extends CrudRepository<User, Long> {
    List<User> findById(Integer id);
    List<User> findByEmailAndPassword(String email,String password);
}

    GroupT findByGroupId(Integer group_id);