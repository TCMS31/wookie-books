const userService = require("../dal/users.dao");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};

async function createUser(req, res) {
  let reqBody = req.body;
  const user = await userService.addUser(reqBody);
  return res.send(user);
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
  
  try {
    const updatedUser = await userService.updateUser(userId, reqBody);
    return res.send(updatedUser);
  } catch (error) {
    return res.send({ message: "Unable to update user.!", error });
  }

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
