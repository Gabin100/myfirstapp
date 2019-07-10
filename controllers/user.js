let models = require('../models');
let bcrypt = require('bcrypt');
const passport = require('passport');
const myPassport = require('../passport_setup')(passport);
let flash = require('connect-flash');

const generateHash = function (password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

exports.show_login = function(req, res, next){
    res.render('user/login', {title: 'Login', formData: {}, errors: {}});
}

exports.show_signup = function(req, res, next){
    res.render('user/signup', {title: 'Signup', formData: {}, errors: {}});
}

exports.login = function(req, res, next){
    passport.authenticate('local', {
        successRedirect: "/",
        failureRedirect: "/login",
        failureFlash: true
    })(req, res, next);
    
}

exports.signup = function(req, res, next){
    console.log(req.body.Password1 + " " + req.body.Email1);
    console.log(models.user);
    const newUser = models.user.build({
        email: req.body.Email1,
        password: generateHash(req.body.Password1)  
    });
    return newUser.save().then(result => {
        passport.authenticate('local', {
            successRedirect: "/",
            failureRedirect: "/signup",
            failureFlash: true
        })(req, res, next);
    })
}

exports.logout = function(req, res, next){
    req.logout();
    req.session.destroy();
    res.redirect('/'); 
}