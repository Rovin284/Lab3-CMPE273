const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:8080'

const headers = {
    'Accept': 'application/json'
};

export const doLogin = (payload) =>
    fetch(`${api}/user/login`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res => {
        return res.json()
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });
export const doSignUp = (payload) =>
    fetch(`${api}/user/add`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: (payload)
    }).then(res => {
        return res.status;
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });
export const uploadFile = (payload) =>
    fetch(`${api}/user/upload`, {
        method: 'POST',
        body: payload
    }).then(res => {
        return res.status;
    }).catch(error => {
        console.log("This is error");
        return error;
    });
export const getImages = () =>
    fetch(`${api}/user/getImg`)
        .then(res => res.json())
        .catch(error => {
            console.log("This is error.");
            return error;
        });
export const doLogout = () =>
    fetch(`${api}/user/logout`)
        .then(res => res.status)
        .catch(error => {
            console.log("This is error.");
            return error;
        });


      export const createFolder = (payload) =>
            fetch(`${api}/user/createFolder`, {
                method: 'POST',
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                },
                body: (payload)
            }).then(res => {
                return res.status;
            }).catch(error => {
                console.log("This is error in create folder");
                return error;
            });

            export const createSharedFolder = (payload) =>
                fetch(`${api}/user/createSharedFolder`, {
                    method: 'POST',
                    headers: {
                        ...headers,
                        'Content-Type': 'application/json'
                    },
                    body: (payload)
                }).then(res => {
                    return res.status;
                }).catch(error => {
                    console.log("This is error in creating Shared folder");
                    return error;
                });

                export const deleteFile = (payload) =>
                    fetch(`${api}/users/deleteFile`, {
                        method: 'POST',
                        headers: {
                            ...headers,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(payload)
                    }).then(res => {
                        return res.status;
                    }).catch(error => {
                        console.log("This is error in deleting File");
                        return error;
                    });

                    export const listUserGroups = (payload) =>
                fetch(`${api}/user/listUserGroups`, {
                    method: 'POST',
                    headers: {
                        ...headers,
                        'Content-Type': 'application/json'
                    },
                    body: (payload)
                }).then(res => {
                    return res.status;
                }).catch(error => {
                    console.log("This is error in creating Shared folder");
                    return error;
                });

                export const listGroupMembers = (payload) =>
                    fetch(`${api}/users/listGroupMembers`, {
                        method: 'POST',
                        headers: {
                            ...headers,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(payload)
                    }).then(res => {
                        return res.status;
                    }).catch(error => {
                        console.log("This is error in deleting File");
                        return error;
                    });

        export const addMembersToGroup = (payload) =>
                    fetch(`${api}/users/addMembersToGroup`, {
                        method: 'POST',
                        headers: {
                            ...headers,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(payload)
                    }).then(res => {
                        return res.status;
                    }).catch(error => {
                        console.log("This is error in deleting File");
                        return error;
                    });
