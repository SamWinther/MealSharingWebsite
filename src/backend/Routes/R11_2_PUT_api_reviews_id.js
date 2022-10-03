//Route /api/reviews/{id} 	Respond with the json for a meal that has id 5

var express = require('express');
var router = express.Router();

var knex = require('../database')

router.put('/api/reviews/:id', async function(req, res, next) {
  console.log('R11_api_reviews_id.js =>PUT is called');

  requestedID = req.params.id;
  try {
    Object.keys(req.body).map(async key =>{
      await knex('review').where('id',req.params.id).update(key,req.body[key]);
    });
    var mealWithID = await knex('review').where('id', requestedID);
    res.send(JSON.stringify(mealWithID))
  }
  catch (e) {
    console.log("Something went wrong in file R11_api_reviews_id.js =>PUT route.");
    console.log(e);
  }
});

module.exports = router;