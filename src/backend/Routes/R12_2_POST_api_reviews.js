//Route /api/reviews 	Respond with the json for all of the reviews

var express = require('express');
var router = express.Router();

var knex = require('../database')

router.post('/api/reviews', async function(req, res, next) {
  console.log('R12_api_reviews.js =>POST is called');

  await knex.raw('SET auto_increment_increment = 1;')
  try {
    await knex('review').insert(req.body); 
    let mealWithID = await knex('review').orderBy('id', 'desc').limit(5);
    res.send(JSON.stringify(mealWithID));
  }
  catch (e) {
    console.log("Something went wrong in file R12_api_reviews.js =>POST route.");
    console.log(e);
  }
});

module.exports = router;
