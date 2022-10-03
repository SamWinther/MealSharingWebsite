//Route /api/reservations 	Respond with the json for all of the reservations

var express = require('express');
var router = express.Router();

var knex = require('../database')

router.get('/api/reservations', async function(req, res, next) {
  console.log('R10_api_reservations.js  =>GET is called');

  try {
    var mealWithID = await knex.select('*').from('reservation');
    res.send(JSON.stringify(mealWithID))
  }
  catch (e) {
    console.log("Something went wrong in file R10_api_reservations.js =>GET route");
    console.log(e);
  }
});

router.post('/api/reservations', async function(req, res, next) {
  console.log('R10_api_reservations.js =>POST is called');
  await knex.raw('SET auto_increment_increment = 1;')
  try {
    await knex('reservation').insert(req.body); 
    let mealWithID = await knex('reservation').orderBy('id', 'desc').limit(5);
    res.send(JSON.stringify(mealWithID));
  }
  catch (e) {
    console.log("Something went wrong in file R10_api_reservations.js =>POST route.");
    console.log(e);
  }
});

module.exports = router;
