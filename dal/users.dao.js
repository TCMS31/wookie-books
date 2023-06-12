const User = require("../models/user.model");
const authHelper = require("../utils/authHelper");
const bcrypt = require("bcryptjs");

const omittedUserFields = "-password -salt -createdAt -updatedAt -__v -books";
module.exports = {
  addUser,
  listUsers,
  getUserById,
  updateUser,
  deleteUser,
  findOne,
};

function addUser(payload) {
  payload.salt = authHelper.generateRandomSalt();
  payload.password = bcrypt.hashSync(payload.password + payload.salt, 10);
  const user = new User(payload);
  return user.save();
}

async function listUsers() {
  return User.find().select(omittedUserFields);
}

function getUserById(userId) {
  return User.findById(userId).select(omittedUserFields);
}

function findOne(options) {
  return User.findOne(options);
}

function updateUser(userId, payload) {
  return User.findByIdAndUpdate(userId, payload, { new: true }).select(omittedUserFields);
}

function deleteUser(userId) {
  return User.findByIdAndDelete(userId).select(omittedUserFields);
}
