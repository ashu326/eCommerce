const express = require('express');
const { check, body } = require('express-validator/check');

const authController = require('../controllers/auth');

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.post('/login', authController.postLogin);

router.post('/signup', 
    [
        check('email', "Please enter a valid e-mail").isEmail().normalizeEmail(),
        body('password', "Please use alpha numeric password").isLength({min: 5}).isAlphanumeric().trim(),
        body('confirmPassword').trim().custom((value, {req}) => {
            if(value !== req.body.password) {
                throw new Error("password don't match");
            }
            return true;
        })
    ], authController.postSignup);

router.post('/logout', authController.postLogout);

router.get('/reset', authController.getReset); 

router.post('/reset', authController.postReset);

router.get('/reset/:token', authController.getNewPassword);

router.post('/new-password', authController.postNewPassword);

module.exports = router;