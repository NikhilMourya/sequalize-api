const router = require('express').Router();
const {signUp} = require('../controllers/auth-controller');

router.route('/signup').post(signUp)

module.exports= router