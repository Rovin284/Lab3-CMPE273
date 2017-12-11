package com.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
/**
 * Created by rovinpatwal on 12/11/17.
 */
public class ShareEntity {

    private String file;
    private String owner;
    private String emailId;
    private String path;

    public String getFile() {
        return file;
    }

    public void setFile(String filename) {
        this.file = file;
    }


    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emails) {
        this.emailId = emailId;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }
}