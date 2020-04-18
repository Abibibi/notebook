const Router = require('express-promise-router');
const router = new Router();

// Controllers
const {
    addThought,
    allThoughts
} = require('../Controllers/thoughtController');


const authMiddleware = require('../utils/authMiddleware');


router.post('/add', authMiddleware, addThought);
router.get('/all', authMiddleware, allThoughts);


module.exports = router;