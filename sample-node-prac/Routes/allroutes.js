const User = require('../Models/user');
const express = require('express');
const router = express.Router();

//router.use(verifyAuth);

router.get('/signup', (req, res, next) => {
    if (req.query.id) {
        User.findById(req.query.id, (err, user) => {
            if (err) {
                res.status(404).send({
                    error: err.message
                });
            }
            res.send(user);
        });
    } else {
        User.find({}).then((users) => {
            res.send({
                Users: users
            });
        });
    }
});
/*router.get('/',(req,res,next)=>{
  res.sendFile('../signup.html',{root:__dirname});
})*/
router.post('/signup', (req, res, next) => {

    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    console.log(name);
    console.log(email);
    console.log(phone);
    User.create({
        UserName: name,
        Email: email,
        Mobile: phone
    }).then((user) => {
        res.send({
            message: 'User registered successfully',
            details: {
                id: user._id,
                name: user.UserName,
                email: user.Email,
                phone: user.Mobile
            }
        });
    }).catch(next);
});


module.exports = router;
