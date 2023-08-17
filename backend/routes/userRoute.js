const express = require('express');
const { signupUser, loginUser } = require('../controllers/userController');

const userRouter= express.Router();

// SIGNUP ROUTE
userRouter.post('/signup',signupUser)
//LOGIN ROUTE
userRouter.post('/login',loginUser);
module.exports = userRouter;