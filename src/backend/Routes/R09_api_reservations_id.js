//Route /api/reservations/:2 	Respond with the json for the reservation that has id=2

var express = require('express');
var router = express.Router();

var knex = require('../database')

router.get('/api/reservations/:id', async function(req, res, next) {
  console.log('R09_api_reservation_id.js  is called');

  requestedID = req.params.id;  
  try {
    var mealWithID = await knex.select('*').from('reservation').where('id', requestedID);
    res.send(JSON.stringify(mealWithID))
  }
  catch (e) {
    console.log("Something went wrong in file R09_api_reservation_id.js");
    console.log(e);
  }
});

module.exports = router;
