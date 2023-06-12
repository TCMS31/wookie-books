const User = require("../models/user.model");

const omittedUserFields = '-password -salt -createdAt -updatedAt -__v'
module.exports = {
    addUser,
    listUsers,
    getUserById,
    updateUser,
    deleteUser,

}

function addUser(payload) {
    const user = new User(payload);
    return user.save();
}

function listUsers(options) {
    return User.find();
}

function getUserById(userId){
    return User.findById(userId).select(omittedUserFields)
}

function updateUser(userId, payload) {
    return User.findByIdAndUpdate(userId, payload , {new:true}).select(omittedUserFields);

}

function deleteUser(userId) {
    return User.findByIdAndDelete(userId).select(omittedUserFields);
}
