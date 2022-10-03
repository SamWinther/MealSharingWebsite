//Route /api/meals/5 	Respond with the json for a meal that has id 5

var express = require('express');
var router = express.Router();

var knex = require('../database')

router.put('/api/meals/:id', async function(req, res, next) {
  console.log('R07_api_meals_id.js -> PUT route is called');

  requestedID = req.params.id;  
  try {
    Object.keys(req.body).map(async key =>{
      await knex('meal').where('id',req.params.id).update(key,req.body[key]);
    });
    var mealWithID = await knex.select('*').from('meal').where('id', requestedID);
    res.send(JSON.stringify(mealWithID))
  }
  catch (e) {
    console.log("Something went wrong in file R07_api_meals_id.js -> PUT route");
    console.log(e);
  }
});

module.exports = router;
