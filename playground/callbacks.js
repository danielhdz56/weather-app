var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Daniel'
    };

    setTimeout(() => {
        callback(user);        
    }, 3000);
};

getUser(23, (userObject) => {
    console.log(userObject);
});