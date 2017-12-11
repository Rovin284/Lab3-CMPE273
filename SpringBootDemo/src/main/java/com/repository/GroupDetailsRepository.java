package com.repository;

import com.entity.GroupDetails;
import org.springframework.data.repository.CrudRepository;

import java.util.*;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository

public interface GroupDetails extends CrudRepository<User, Long> {
    GroupDetails findByGroupId(Integer group_id);
}

