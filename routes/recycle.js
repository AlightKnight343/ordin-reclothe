const router = require('express').Router();

const User = require('../schemas/userSchema')
router.get('/', async (req, res) => {
    const user = await User.findOne({userId: req.user.userId})
    res.render('recycle', {user})
})

module.exports = router;
