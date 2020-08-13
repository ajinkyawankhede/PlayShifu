var express = require("express");
var router = express.Router();
const app = express();
const Authenticate = require("./middleware/index");

const User = require("./api/user");
const Form = require("./api/form");

router.post("/signUp", User.signUp);
router.post("/login", User.login);

router.post("/submitForm", Authenticate.user, Form.saveForms);
router.get("/feedbackForms", Authenticate.user, Form.feedbackForms);
router.post("/deleteFeedback", Authenticate.user, Form.deleteFeedback)

module.exports = router;
