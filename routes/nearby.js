const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('nearby')
})

module.exports = router;
