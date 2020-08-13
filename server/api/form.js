const Forms = require("../db/form");
const {
  response
} = require("express");
const form = require("../db/form");

module.exports.saveForms = (req, res) => {
  try {
    const form = new Forms({
      name: req.body.name,
      address: req.body.address,
      mobile: req.body.mobile,
      message: req.body.message,
      email: req.user.email,
    });

    form.save(form, (err, svdForm) => {
      if (err) {
        return res.json({
          s: false,
          m: "Tech Error",
        });
      } else {
        return res.json({
          s: true,
          m: "Form Submitted",
        });
      }
    });
  } catch (error) {
    return res.json({
      s: false,
      m: "Something Went Wrong",
    });
  }
};

module.exports.feedbackForms = (req, res) => {
  try {
    Forms.find({}).exec((err, forms) => {
      if (err) {
        return res.json({
          s: false,
          m: "Tech Error",
        });
      } else {
        return res.json({
          s: true,
          m: "Forms",
          d: forms,
        });
      }
    });
  } catch (error) {
    return res.json({
      s: false,
      m: "Something Went Wrong",
    });
  }
};

module.exports.deleteFeedback = (req, res) => {
  try {
    Forms.findOneAndRemove({
      _id: req.body.id
    }).exec((err, form) => {
      if (err) {
        return res.json({
          s: false,
          m: "Tech Error",
        });;
      } else {
        return res.json({
          s: true,
          m: "Feedback Deleted",
          d: form,
        });
      }
    });
  } catch (error) {
    return res.json({
      s: false,
      m: "Something Went Wrong",
    });
  }
};