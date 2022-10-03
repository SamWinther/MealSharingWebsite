//Route /api/reservations/:2 	Respond with the json for the reservation that has id=2

var express = require('express');
var router = express.Router();

var knex = require('../database')


router.put('/api/reservations/:id', async function(req, res, next) {
  console.log('R09_api_reservation_id.js =>PUT is called');

  requestedID = req.params.id;  
  try {
    Object.keys(req.body).map(async key =>{
      await knex('reservation').where('id',req.params.id).update(key,req.body[key]);
    });
    var mealWithID = await knex('reservation').where('id', requestedID);
    res.send(JSON.stringify(mealWithID))
  }
  catch (e) {
    console.log("Something went wrong in file R09_api_reservation_id.js =>PUT route");
    console.log(e);
  }
})

module.exports = router;
