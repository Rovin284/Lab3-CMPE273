package com.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class Files {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    private String fileNAme;

    private String emailId;

    private String fileLocation;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFileNAme() {
        return fileNAme;
    }

    public void setFileNAme(String fileNAme) {
        this.fileNAme = fileNAme;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getFileLocation() {
        return fileLocation;
    }

    public void setFileLocation(String emailId) {
        this.emailId = emailId;
    }

}