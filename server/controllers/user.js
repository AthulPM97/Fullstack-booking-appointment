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
