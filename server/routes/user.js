const express = require('express');

const router = express.Router();

const userController = require('../controllers/user');

router.get('/user', userController.getUsers);

router.post('/user/add-user', userController.postAddUser);

router.put('/user/:id',userController.editUser);

router.delete('/user/:id', userController.deleteUser);

module.exports = router;