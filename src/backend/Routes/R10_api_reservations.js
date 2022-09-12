//Route /api/reservations 	Respond with the json for all of the reservations

var express = require('express');
var router = express.Router();

var knex = require('../database')

router.get('/api/reservations', async function(req, res, next) {
  console.log('R10_api_reservations.js  is called');

  try {
    var mealWithID = await knex.select('*').from('reservation');
    res.send(JSON.stringify(mealWithID))
  }
  catch (e) {
    console.log("Something went wrong in file R10_api_reservations.js");
    console.log(e);
  }
});

module.exports = router;
