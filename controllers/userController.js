const User = require("../models/users");

let Users = [
    (new User("master", "admin")),
    (new User("black-knight", "1234")),
    (new User("high-priest", "5678"))
]

//Entradas: --
//Devuelve: El arreglo de usuarios
function listUsers (){
    return Users;
}
//Entradas: username, password
//Devuelve: verdadero si hay coincidencias, false si no hay coincidencias
function login (username, password){
    len = Users.length;
    for(i = 0; i < len; i++){
        if(Users.at(i).username == username && Users.at(i).password == password){
            return true;
        }
    }
    return false;
}

//Entradas: username, password
//Devuelve: un nuevo usuario si el nombre no existe. Un mensaje en caso de que el nombre ya exista.
function createUser (username, password){
    len = Users.length;
    for(i = 0; i < len; i++){
        if(Users.at(i).username == username){
            return "Username is being used";
        }//if
    }//for
    Users.push(new User(username, password));
    return Users.at(Users.length-1);
}

//Entradas: username, password
//Devuelve: Si hay coincidencia el usuario con su contraseña nueva. Si no hay coincidencia un mensaje
function updateUser (username, password){
    len = Users.length;
    for(i = 0; i < len; i++){
        if(Users.at(i).username == username){
            Users.at(i).password = password;
            return Users.at(i);//devuelve el usuario con su contraseña nueva
        }//if
    }//for
    return "User not found";
}

//Entradas: username
//Devuelve: Si no hay coincidencia devuelve el mensaje usario no encontrado 
function killUser (username){
    len = Users.length;
    for(i = 0; i < len; i++){
        if(Users.at(i).username == username && Users.at(i).username != 'master'){
            Users.splice(i, 1); //elimina del arreglo al usuario encontrado
            return Users;
        }//if
    }//for
    return "User not found";
}

//Exporta los métodos enlistados
module.exports = {
    listUsers,
    login,
    createUser,
    updateUser,
    killUser
}