let localStrategy = require('passport-local').Strategy;
let bcrypt = require('bcrypt');
let modules = require('./models');


const validPassword = (user, password) => {
    return bcrypt.compareSync(password, user.password);
}

module.exports = function(passport){
    passport.serializeUser(function(user, done){
        done(null, user.id)
    });
    passport.deserializeUser(function(id, done){
        modules.user.findOne({
            where: {
                'id': id
            }
        }).then( user => {
            if(user === null){
                done(new Error('Wrong User Id.'))
            }
            done(null, user);
        })
    });
    passport.use(new localStrategy({
        usernameField: 'Email1',
        passwordField: 'Password1',
        passReqToCallback: true
    }, function(req, email, password, done){
        return modules.user.findOne({
            where:{
                'email': email
            }
        }).then(user => {
            if(user === null){
                req.flash('message', 'Wrong Password or E-mail.');
                return done(null, false);
            }else if(user.password === null || user.password === undefined){
                req.flash('message', 'you must reset your password.');
                return done(null, false);
            }else if(!validPassword(user, password)){
                req.flash('message', 'incorect credentials');
                return done(null, false);
            }
            return done(null, user);
        }).catch(err => {
            done(err, false);
        }) 

    }))
}