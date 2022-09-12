//Route /api/reviews 	Respond with the json for all of the reviews

var express = require('express');
var router = express.Router();

var knex = require('../database')

router.get('/api/reviews', async function(req, res, next) {
  console.log('R12_api_reviews.js  is called');

  try {
    var mealWithID = await knex.select('*').from('reservation');
    res.send(JSON.stringify(mealWithID))
  }
  catch (e) {
    console.log("Something went wrong in file R12_api_reviews.js");
    console.log(e);
  }
});

module.exports = router;
