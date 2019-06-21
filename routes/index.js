var express = require('express');
var workshops = require('../lib/workshop-definitions');

var router = express.Router();

// use the environment var from Heroku if set
const DEFAULT_HOME = process.env.DEFAULT_HOME || "main";
const DEFAULT_HOME_LAYOUT = process.env.DEFAULT_HOME_LAYOUT || "index";

/* GET home page. */
router.get('/', function(req, res, next) {
  let page = DEFAULT_HOME_LAYOUT;

  let pagename = DEFAULT_HOME + "_layout";
  if (workshops.hasOwnProperty(pagename)) {
    page = workshops[pagename];
  }

  res.render(page, { workshops: workshops.getDefs(workshops[DEFAULT_HOME])});
});

router.get('/:mix', function (req, res, next) {
  if (workshops[req.params.mix]){
    // default page
    let page = DEFAULT_HOME_LAYOUT;

    let pagename = req.params.mix + "_layout";
    if (workshops.hasOwnProperty(pagename)) {
      page = workshops[pagename];
    }

    res.render(page, { workshops: workshops.getDefs(workshops[req.params.mix]) });

  } else {
    res.render('error', { message: `Not found: ${req.params.mix}`, error : { status: 404}});
  }
});

module.exports = router;
