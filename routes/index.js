var express = require('express');
var workshops = require('../lib/workshop-definitions');

var router = express.Router();

// use the environment var from Heroku if set
const DEFAULT_HOME = process.env.DEFAULT_HOME || "main";
const DEFAULT_HOME_LAYOUT = process.env.DEFAULT_HOME_LAYOUT || "index";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(DEFAULT_HOME_LAYOUT, { workshops: workshops.getDefs(workshops[DEFAULT_HOME])});
});

router.get('/:mix', function (req, res, next) {
  if (workshops[req.params.mix]){
    // default page
    let page = DEFAULT_HOME_LAYOUT;

    // special cases for adoption pages, which have different treatment
    if (req.params.mix === 'adoption' || req.params.mix === 'df18adoption' || req.params.mix === 'tdx19adoption'){
      page = 'adoption';
    }

    res.render(page, { workshops: workshops.getDefs(workshops[req.params.mix]) });

  } else {
    res.render('error', { message: `Not found: ${req.params.mix}`, error : { status: 404}});
  }
});

module.exports = router;
