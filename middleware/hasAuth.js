let ceateError = require('http-errors');

exports.isLoggedIn = function(req, res, next){
    if(req.user){
        next();
    }else{
        next(ceateError(404, 'Page does not exist.'));
    }
}
exports.hasAuth = function(req, res, next){
    if(req.user &&  req.user.is_amin === true){
        next();
    }else{
        next(ceateError(404, 'Page does not exist.'));
    }
}