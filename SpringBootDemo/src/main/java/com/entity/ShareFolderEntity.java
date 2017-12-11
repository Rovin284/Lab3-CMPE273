package com.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class ShareFolderEntity {
    private String folderName;
    private String emailId;
    private String path;
    private String uname;

    public String getFoldername() {
        return foldername;
    }

    public void setFoldername(String foldername) {
        this.foldername = foldername;
    }

    public String getEmailId() {
        return emails;
    }

    public void setEmailId(String emails) {
        this.emails = emails;
    }

    public String getPath() {
        return emails;
    }

    public void setPath(String emails) {
        this.emails = emails;
    }

    public String getUname() {
        return emails;
    }

    public void setUname(String emails) {
        this.emails = emails;
    }


}
