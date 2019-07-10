let models = require('../models');
let validator = require('validator');


const validatCreateUserFields = function(errors, req){
    if (!validator.isEmail(req.body.Email1)){
        errors['Email1'] = "Please use a valid email.";
    }
    if(!validator.isAscii(req.body.Password1)){
        errors['Password1'] = "Invalid password, try Again?";
    }
    if(!validator.isLength(req.body.Password1, {min: 6, max: 25})){
        errors['Password1'] = "Password character Must 8 to 25";
    }
}

exports.validatUser = function(errors, req){
    return new Promise(function(resolve, reject){
        validatCreateUserFields(errors, req);
        return models.user.findOne({
            where: {
                email: req.body.Email1
            }
        }).then(u => {
            if( u !== null){
                errors['Email1'] = "E-mail is in use Please try again later."
            }
            resolve(errors);
        })
    })
}