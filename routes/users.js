// using express-promise-router to pass in async functions using a router in Express, and handle errors
const Router = require('express-promise-router');
const router = new Router();

// Controllers
const {
    authUserInfo,
    signUp,
    signIn
} = require('../Controllers/userController');

const authMiddleware = require('../utils/authMiddleware');

// to sign up
router.get('/info', authMiddleware, authUserInfo);
router.post('/add', signUp);
router.post('/login', signIn);

// router exported to create related API in app.js which will be made available to the client 
module.exports = router;