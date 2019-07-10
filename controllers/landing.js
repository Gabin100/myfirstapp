const models = require('../models');

exports.get_landing = function(req, res, next) {
    res.render('landing', { title: 'Email',user: req.user });
  };

  exports.submit_lead = function(req, res, next) {
    return models.lead.create({
      email: req.body.lead_email
    }).then(lead => {
      res.redirect('/leads');
    });
  };

  exports.show_leads = function(req, res, next) {
    models.lead.findAll().then(leads => {
      res.render('lead/leads', { title: 'Leads' , leads: leads});
    })
    
  };

  exports.show_lead = function(req, res, next) {
    models.lead.findOne({
      where:{
        id: req.params.lead_id
      }
    }).then(lead => {
      res.render('lead/lead', {
        title: 'Lead' , lead: lead
      });
    })
    
  };
  exports.show_edit_lead = function(req, res, next) {
    models.lead.findOne({
      where:{
        id: req.params.lead_id
      }
    }).then(lead => {
      res.render('lead/edit_lead', {
        title: 'Edit Lead' , lead: lead
      });
    })
    
  };
  
  exports.edit_lead = function(req, res, next) {
    return models.lead.update({
      email: req.body.lead_email
    }, { where: {
      id: req.params.lead_id
    }
  }).then(result =>{
    res.redirect('/lead/' + req.params.lead_id)
  })
    
  };

  exports.delete_lead = function(req, res, next) {
    return models.lead.destroy({
      where:{
        id: req.params.lead_id
      }
    }).then(result => {
      res.redirect('/leads');
    })
  };

  exports.delete_lead_json = function(req, res, next) {
    return models.lead.destroy({
      where:{
        id: req.params.lead_id
      }
    }).then(result => {
      res.send({msg: "Success" });
    })
  };