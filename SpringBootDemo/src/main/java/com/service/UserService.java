package com.service;

import com.entity.User;
import com.entity.ShareEntity;
import com.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Set;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public Iterable<User> getAllUsers(){
        return userRepository.findAll();
    }

    public void addUser(User user){
        userRepository.save(user);
    }

    public List<User> login(String email,String password){
        System.out.println("Email : "+email);
        System.out.println("password : "+password);
        List<User> a = userRepository.findByEmailAndPassword(email,password);
        System.out.println(" vk b "+a);
        return userRepository.findByEmailAndPassword(email,password);
    }

    public boolean sharefile(ShareEntity whomStr, String sharePath, int Id) {
        System.out.println(whomStr.getEmailId());
        String userFolder = whomStr.getOwner();//take from session email
        Path getPath = Paths.get(sharePath);
        Path linkinto = Paths.get("./"+sharePath + "/" + whomStr.getFile());
        String[] shareinfo = whomStr.getEmailId().split(",");
        for (String i : shareinfo) {
            Path destinationOfFiles = Paths.get("./" + i + "/" + whomStr.getFile());
            try {
                System.out.println("Inside sharefile Try");
                Files.createSymbolicLink(destinationOfFiles, getPath);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        return false;
    }

    public void createFolder(String folderName, String path){
        new File("./"+path + "/" + folderName.mkdir());
    }

    public boolean deletefile(String filename, String userFolder) {
        boolean retValue = false;
        Path finalPath = Paths.get("./" + userFolder + "/" + filename);
        System.out.println("finalPath is "+finalPath);
        try {
            System.out.println("Inside deletefile Try");
            if (Files.deleteIfExists(finalPath)) {
                return true;
            }

        } catch (IOException e) {
            e.printStackTrace();
        }

        return retValue;
    }

    public boolean createGroup(String emailId, String strgrpName) {
        boolean retVal = false;
        if ( emailId.equals("")) {
            if( strgrpName.equals("")) {
                return retVal;
            }
        } else {
            GroupDetails groupDetails = new GroupDetails();
            groupDetails.setGroupName(groupName);
            User user = userRepository.findByEmail(memberEmail);
            groupDetails.setOwnerId(user.getId());
            retVal = new File("./" + groupDetails.getGroupId()).mkdir();
            if (retVal)
                return true;
            else
                return false;
        }
    }

    public void uploadFile(MultipartFile file, Integer groupId) {

        try {
            byte[] bytes = file.getBytes();

            Path path = Paths.get("./" + groupId);
            Files.write(path, bytes);

        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    public groupDetails[] listUserGroups(String emailIds) {

        if (emailId.equals("")) {
            return new GroupDetails[]{};
        } else {
            User userGroup = userRepository.findByEmail(emailIds);
            return userGroup;
        }
    }

}