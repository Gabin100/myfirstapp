exports.get_landing = function(req, res, next) {
    res.render('landing', { title: 'Express' });
  };

  exports.submit_lead = function(req, res, next) {
    console.log("Lead E-mail: ", req.body.lead_email);
    res.redirect('/');
  };