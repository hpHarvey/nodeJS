let user = {
    name: '',
    age: -1
};

let database= [];


function getAllUsers(request, response){
    response.send(database)
}
//Them user
function addUser(request, response) {
    const name = request.body.name;
    const age = request.body.age;

    user = {
        name: name,
        age: age
    }
    // Them nguoi dung vao database
    database.push(user);

    response.send(user);
}

function FindByName(name) {
    for( let i=0 ; i< database.length ; i++){
       if( database[i].name == name)
        return database[i];
    }
    return null;
}


function findUserByName(request, response) {
    const username = request.query.n;

    const found = FindByName(username);
    if (found === null) {
        response.send("user not found!");
        return;
    }

    response.send(found);
}


// xoa user theo ID
function deleteByID(request, response) {
    const id = request.params.id;

    // Them nguoi dung vao database app
    delete database[id];
   // database.splice(nameDel, 1);

    response.send(database);
}

//Sua user theo ID
function UpdateByID(request, response) {
    const userId = parseInt(request.params.id);
    const newName = request.body.name;
    const newAge = request.body.age;
    
    user.name = newName;
    user.age = newAge;

    // sua thong tin nguoi dung
    database[userId] = user;

    response.send(database);
}
module.exports = {
    findUserByName: findUserByName,
    addUser: addUser,
    FindByName: FindByName,
    deleteByID: deleteByID,
    UpdateByID: UpdateByID,
    getAllUsers: getAllUsers
}