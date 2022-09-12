//Route /api/reviews/{id} 	Respond with the json for a meal that has id 5

var express = require('express');
var router = express.Router();

var knex = require('../database')

router.get('/api/reviews/:id', async function(req, res, next) {
  console.log('R11_api_reviews_id.js  is called');

  requestedID = req.params.id;  
  try {
    var mealWithID = await knex.select('*').from('review').where('id', requestedID);
    res.send(JSON.stringify(mealWithID))
  }
  catch (e) {
    console.log("Something went wrong in file R11_api_reviews_id.js");
    console.log(e);
  }
});

module.exports = router;
