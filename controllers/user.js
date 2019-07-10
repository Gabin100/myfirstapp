
exports.show_login = function(req, res, next){
    console.log('login');
    res.render('user/login', {title: 'Login', formData: {}, errors: {}});
};

exports.show_signup = function(req, res, next){
    res.render('user/signup', {title: 'Signup', formData: {}, errors: {}});
};