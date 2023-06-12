const userService = require("../dal/users.dao");
const authHelper = require("../utils/authHelper");

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  login,
};

async function createUser(req, res) {
  let reqBody = req.body;
  const user = await userService.addUser(reqBody);
  let formattedUser = { ...user._doc };
  delete formattedUser.password;
  delete formattedUser.salt;
  delete formattedUser.books;
  return res.send(formattedUser);
}

async function login(req, res) {
  const { user } = req;
  delete user.password;
  delete user.salt;
  const token = authHelper.generateToken(user);

  res.json({ jwt: token });
}

async function getUsers(req, res) {
  const users = await userService.listUsers();
  return res.send(users);
}

async function getUserById(req, res) {
  const userId = req.params.id;

  const user = await userService.getUserById(userId);
  console.log(user);
  return res.send(user);
}

async function updateUser(req, res) {
  const reqBody = req.body;
  const userId = req.params.id;

  const updatedUser = await userService.updateUser(userId, reqBody);
  return res.send(updatedUser);
}

async function deleteUser(req, res) {
  const userId = req.params.id;

  const deletedUser = await userService.deleteUser(userId);
  return res.send(userFormatter(deletedUser?._doc));
}

function userFormatter(user) {
  let formattedUser = { ...user };
  delete formattedUser.password;
  delete formattedUser.salt;
  delete formattedUser.createdAt;
  delete formattedUser.updatedAt;
  delete formattedUser.__v;

  return formattedUser;
}
