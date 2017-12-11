package com.controller;

import com.entity.ShareEntity;
import com.entity.User;
import com.service.UserService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.io.File;
import java.util.List;

@Controller    // This means that this class is a Controller
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path="/user") // This means URL's start with /demo (after Application path)
public class UserController {
    @Autowired
    private UserService userService;
    File[] fList;
    @PostMapping(path="/add",consumes = MediaType.APPLICATION_JSON_VALUE) // Map ONLY POST Requests
    public  ResponseEntity<?> addNewUser (@RequestBody User user) {
        System.out.println("Inside Add");
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request
        System.out.println("user add "+user.getEmail());
        userService.addUser(user);
        File theDir = new File("Users/"+user.getEmail());
        theDir.mkdir();
        System.out.println("Saved");
        return new ResponseEntity(null,HttpStatus.OK);
    }

    @GetMapping(path="/all",produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody Iterable<User> getAllUsers() {
        // This returns a JSON with the users
        return userService.getAllUsers();
    }

    @PostMapping(path="/login",consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> login(@RequestBody String user, HttpSession session)
    {
        System.out.println("user "+user);
        JSONObject jsonObject = new JSONObject(user);
        JSONObject retJsonObject = new JSONObject();
        session.setAttribute("name",jsonObject.getString("username"));
        List<User> b = userService.login(jsonObject.getString("username"),jsonObject.getString("password"));
        System.out.println("if "+b.isEmpty());
        File folder = new File("Users/"+jsonObject.getString("username"));
        File[] listOfFiles = folder.listFiles();

        for (int i = 0; i < listOfFiles.length; i++) {
            if (listOfFiles[i].isFile()) {
                System.out.println("File " + listOfFiles[i].getName());
            } else if (listOfFiles[i].isDirectory()) {
                System.out.println("Directory " + listOfFiles[i].getName());
            }
        }
        retJsonObject.put("cols",2);
        retJsonObject.put("starred",false);
        retJsonObject.put("myfileName",listOfFiles);
        if(b.isEmpty()){
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }else {
            return new ResponseEntity(listOfFiles,HttpStatus.OK);
        }
    }
    @PostMapping(path = "/listDir", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> listDir(@RequestBody String path) {
        System.out.println("filename "+path);

        JSONObject jsonObject = new JSONObject(path);
        File directory = new File(jsonObject.getString("path"));
        System.out.println("path "+jsonObject.getString("path"));

        //get all the files from a directory
       /* File directory = new File("C:\\Users\\Karan\\Downloads");*/
        fList = directory.listFiles();
       for (File file : fList){
            System.out.println("test "+file.getName());
        }
        return new ResponseEntity( HttpStatus.OK);
    }

    @GetMapping(path = "/listDirFiles", produces=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> listDirFiles()
    {
        System.out.println("in get");
        int i =0;
        String[] allFiles = new String[fList.length];
        for (File file : fList){
            System.out.println("files"+file.getName());
            allFiles[i] = file.getName();
            i++;
        }
        return new ResponseEntity(allFiles, HttpStatus.OK);
    }

    @PostMapping(path = "/sharing", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> sharefile(@RequestBody ShareEntity whom, HttpSession session) {
        userService.sharefile(whom);
        return new ResponseEntity(HttpStatus.OK);

    }

    @PostMapping(value = "/logout")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public ResponseEntity<?> logout(HttpSession session) {
        System.out.println(session.getAttribute("name"));
        session.invalidate();
        return  new ResponseEntity(HttpStatus.OK);
    }

    @PostMapping(path = "/createfolder", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> createfolder(@RequestBody CreateShareFolder createsharefolder, HttpSession session) {
        userService.createFolder(createsharefolder, session.getAttribute("name").toString());
        return new ResponseEntity(HttpStatus.OK);

    }
    
    @PostMapping("/createGroup")
    public ResponseEntity<?> createGroup(@RequestBody String user,
                                         HttpSession session) {
        String userEmail = session.getAttribute("name").toString();
        JSONObject userObj = new JSONObject(user);
        System.out.println(userObj);

        boolean success = sharefolderservice.createGroup(userObj.getString("groupname"), userEmail);

        if (success) {
            return new ResponseEntity(HttpStatus.OK);
        } else {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping(path = "/delete", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> deletefile(@RequestBody String filename, HttpSession session) {
        System.out.println("Inside Delete");
         userService.deleteFile(filename,session.getAttribute("name").toString());
        return new ResponseEntity(HttpStatus.OK);

    }

    @PostMapping("/uploadfiles")
    public ResponseEntity<?> singleFileUpload(@RequestParam("file") MultipartFile file, HttpSession session) {
        System.out.println("Inside upload files");
       String userfolder = session.getAttribute("name").toString();
        userService.uploader(file, userfolder);
        return new ResponseEntity(HttpStatus.OK);
    }


    @PostMapping("/addMembersToGroup")
    public ResponseEntity<?> addMembersToGroup(@RequestBody String user,
                                               HttpSession session) {
        System.out.println("Inside add to group");
        String userEmail = session.getAttribute("name").toString();
        JSONObject objUsr = new JSONObject(user);
        System.out.println("Inside add to group "+objUsr);

        boolean res = sharefolderservice.addMembersToGroup(Integer.parseInt(objUsr.getString("groupId")), objUsr.getString("memberEmail"));

        if (res) {
            return new ResponseEntity(HttpStatus.OK);
        } else {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/listUserGroups")
    public ResponseEntity<?> listUserGroups(@RequestBody String user,
                                            HttpSession session) {
        System.out.println("Inside listUserGroups");
        String userEmail = session.getAttribute("name").toString();
        JSONObject userObj = new JSONObject(user);
        System.out.println("Inside listUserGroups "+user);
        GroupT[] groupList = sharefolderservice.listUserGroups(userEmail);

        if (groupList.length > 0) {
            return new ResponseEntity(groupList, HttpStatus.OK);
        } else {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/listGroupMembers")
    public ResponseEntity<?> listGroupMembers(@RequestBody String user,
                                              HttpSession session) {
        System.out.println("Inside list group members");
        String userEmail = session.getAttribute("name").toString();
        System.out.println("Inside list group members "+userEmail);

        JSONObject userObj = new JSONObject(user);
        System.out.println(userObj);

        User[] memberList = userService.listGroupMembers(Integer.parseInt(userObj.getString("groupId")));

        if (memberList.length > 0) {
            return new ResponseEntity(memberList, HttpStatus.OK);
        } else {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
    }

}