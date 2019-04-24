const User = require('../models/User');

exports.getusers = (req, res) => {
    User.find({  }).then(user => {
console.log(12)
console.log(req.user)
        if(req.user.role=='Admin'){
            res.render('dashboard', {
                user: req.user,
                Userdata:req.user
              })
        }else{
            res.render('dashboard', {
                user: req.user,
                Userdata:user
              })
        }
         
    })
};