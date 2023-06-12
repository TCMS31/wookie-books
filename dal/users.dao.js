const User = require("../models/user.model");

module.exports = {
    addUser,
    listUsers,
    getUser,
    updateUser,
    deleteUser
}

function addUser(payload) {
    const user = new User(payload);
    return user.save();
}

function listUsers(options) {

}

function getUser(){

}

function updateUser(user) {

}

function deleteUser(user) {

}
