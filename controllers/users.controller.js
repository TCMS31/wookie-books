const userService = require("../dal/users.dao");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
};

async function createUser(req, res) {
  let reqBody = req.body;
  const user = await userService.addUser(reqBody);
  return res.send(user);
}

function getUsers(req, res) {
  res.send(userService.listUsers());
}

function updateUser(req, res) {
  const reqObj = req.body;
  const userId = req.params.id;

  return res.send(userService.updateUser(userId, reqObj));
}

function deleteUser(req, res) {
  const userId = req.params.id;

  return res.send(userService.deleteUser(userId));
}
