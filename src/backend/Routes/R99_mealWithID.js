//Route /mealid?id=5: 	Respond with the json for a meal that has id 5
var express = require('express');
var router = express.Router();

var knex = require('../database')

router.get('/mealid', async function(req, res, next) {
  console.log('R99_mealWithID.js  is called');
  var requestedID = req.query.id;
  console.log(requestedID);
  var mealWithID = await knex.select('*').from('meal').where('id', requestedID);
  res.send(JSON.stringify(mealWithID))
});

module.exports = router;
