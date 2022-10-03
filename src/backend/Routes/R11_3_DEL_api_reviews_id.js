//Route /api/reviews/{id} 	Respond with the json for a meal that has id 5

var express = require('express');
var router = express.Router();

var knex = require('../database')

router.delete('/api/reviews/:id', async function(req, res, next) {
  console.log('R11_api_reviews_id.js =>DELETE is called');

  requestedID = req.params.id;
  try {
    await knex('review').where('id',req.params.id).delete();
    var mealWithID = await knex.select('*').from('review');
    res.send(JSON.stringify(mealWithID))
  }
  catch (e) {
    console.log("Something went wrong in file R11_api_reviews_id.js =>DELETE route.");
    console.log(e);
  }
});

module.exports = router;