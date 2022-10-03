//Route /api/meals Respond with the json for all meals
var express = require('express');
var router = express.Router();

var knex = require('../database')

router.post('/api/meals', async function(req, res, next) {
  console.log('R08_api_meals.js => POST is called');
  await knex.raw('SET auto_increment_increment = 1;')
  try {
    await knex('meal').insert(req.body); 
    let mealWithID = await knex('meal').orderBy('id', 'desc').limit(5);
    res.send(JSON.stringify(mealWithID));
  }
  catch (e) {
    console.log("Something went wrong in file R08_api_meals.js =>POST");
    console.log(e);
  }

});

module.exports = router;
