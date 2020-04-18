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

// to check logged status, and for sign up and sign in actions
router.get('/info', authMiddleware, authUserInfo);
router.post('/add', signUp);
router.post('/login', signIn);

module.exports = router;