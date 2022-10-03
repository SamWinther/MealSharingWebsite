//Route /api/meals Respond with the json for all meals
var express = require('express');
var router = express.Router();
toLowerKeys = require('../toolbox/toLowerKeys');

var knex = require('../database')

router.get('/api/meals', async function(req, res, next) {
  console.log('R08_api_meals.js =>GET is called');

  var queryparameters = toLowerKeys(req.query);
  console.log(queryparameters);
  var mealWithID = await knex('meal').modify( query => {
    if ('maxprice' in queryparameters) query.where('price', '<', queryparameters.maxprice);
    if ('title' in queryparameters ) query.where('title', 'like' , '%'+queryparameters.title+'%');
    if ('createdafter' in queryparameters) query.where('created_date', '>' , queryparameters.createdafter);
    if ('limit' in queryparameters) query.limit(queryparameters.limit);
  })
  res.send(JSON.stringify(mealWithID));

});

module.exports = router;
