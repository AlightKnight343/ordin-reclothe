const router = require('express').Router();
const Recent = require('../schemas/recentSchema.js');
const { uuid } = require('uuidv4');
const User = require('../schemas/userSchema.js');
const {ensureAuthenticated} = require('../middleware/authenticate')

router.get('/', ensureAuthenticated, async (req, res) => {
    const user = await User.findOne({userId: req.user.userId})
    res.render('pickup/pickup',{user})
})
router.get('/form', ensureAuthenticated, async (req, res) => {
    const user = await User.findOne({userId: req.user.userId})
    res.render('pickup/form',{user})
})

router.post('/', async (req, res) => {
    const {fabric, age, colour, address} = req.body;
    if(!fabric || !age || !colour || !address){
        alert("Please fill out all the fields.")
    }else{
        let recentid = uuid()
        let estimatedValue = 0
        const user = await User.findOne({userId: req.user.userId})
        let recent = new Recent({
                id: recentid,
                fabric,
                age,
                colour, 
                estimatedValue
            })
        user.recent.push(recent)
        user.save().then(() => { res.render("dashboard", {user}) });
    }
    
})

module.exports = router;
