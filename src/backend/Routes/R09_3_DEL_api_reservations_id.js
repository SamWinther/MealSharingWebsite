//Route /api/reservations/:2 	Respond with the json for the reservation that has id=2

var express = require('express');
var router = express.Router();

var knex = require('../database')

router.delete('/api/reservations/:id', async function(req, res, next) {
  console.log('R09_api_reservation_id.js =>DELETE is called');

  requestedID = req.params.id;  
  try {
    await knex('reservation').where('id',req.params.id).delete();
    var mealWithID = await knex.select('*').from('reservation');
    res.send(JSON.stringify(mealWithID))
  }
  catch (e) {
    console.log("Something went wrong in file R09_api_reservation_id.js =>DELETE route");
    console.log(e);
  }
});

module.exports = router;
