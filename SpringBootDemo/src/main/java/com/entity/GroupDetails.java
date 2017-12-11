package com.entity;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class GroupDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer ownerId;
    private Integer groupId;
    private String groupName;
    private Integer userId;
    private Set<User> user;


    public Integer getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(Integer owner_id) {
        this.ownerId = ownerId;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }


    public Set<User> getUser() {
        return user;
    }

    public void setUser(Set<User> user) {
        this.user = user;
    }

    public Integer getGroupId() {
        return groupId;
    }

    public void setGroupId(Integer groupId) {
        this.groupId = groupId;
    }


}