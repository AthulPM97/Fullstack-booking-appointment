const User = require("../models/user");

exports.postAddUser = (req, res, next) => {
  User.create({ ...req.body })
    .then((user) => res.json(user.dataValues))
    .catch((err) => console.log(err));
};

exports.getUsers = (req, res, next) => {
  User.findAll()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => console.log(err));
};

exports.editUser = (req, res, next) => {
  const id = req.params.id;
  const userName = req.body.userName;
  const email = req.body.email;
  User.findByPk(id)
    .then((user) => {
      user.userName = userName;
      user.email = email;
      return user.save();
    })
    .then((data) => res.json(data.dataValues))
    .catch((err) => console.log(err));
};

exports.deleteUser = (req, res, next) => {
  const id = req.params.id;
  User.findByPk(id)
    .then((user) => user.destroy())
    .then(() => {
      console.log("User deleted");
      res.status(200);
    })
    .catch((err) => console.log(err));
};
