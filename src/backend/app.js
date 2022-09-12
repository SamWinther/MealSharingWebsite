const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");

const mealsRouter = require("./api/meals");
const buildPath = path.join(__dirname, "../../dist");
const port = process.env.PORT || 3000;
const cors = require("cors");

// For week4 no need to look into this!
// Serve the built client html
app.use(express.static(buildPath));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
//******************************************* */

var mealsRoute = require('./Routes/R01_maels');
var cheapMealsRoute = require('./Routes/R02_cheapMaels');
var largeMealsRoute = require('./Routes/R03_largeMaels');
var randomMealRoute = require('./Routes/R04_randomMael');
var reservationsRoute = require('./Routes/R05_reservations');
var randomReservationRoute = require('./Routes/R06_randomReservation');
var api_meals_id = require('./Routes/R07_api_meals_id');
var api_meals = require('./Routes/R08_api_meals');
var api_reservations_id = require('./Routes/R09_api_reservations_id');
var api_reservations = require('./Routes/R10_api_reservations');
var api_rewievs_id = require('./Routes/R11_api_reviews_id');
var api_rewievs = require('./Routes/R12_api_reviews');

var mealWithID = require('./Routes/R99_mealWithID');

app.use(mealsRoute);
app.use(cheapMealsRoute);
app.use(largeMealsRoute);
app.use(randomMealRoute);
app.use(reservationsRoute);
app.use(randomReservationRoute);
app.use(api_meals_id);
app.use(api_meals);
app.use(api_reservations_id);
app.use(api_reservations);
app.use(api_rewievs_id);
app.use(api_rewievs);

app.use(mealWithID);

//Route /*: 	to capture any wrong request.
app.use(function(req, res) {
  let invalidURL = 'This is not a valid address.';
  invalidURL +=  '<br> Try one of these route: ';
  invalidURL +=  '<br>01. /meals';
  invalidURL +=  '<br>02. /cheap-meals';
  invalidURL +=  '<br>03. /large-meals';
  invalidURL +=  '<br>04. /meal';
  invalidURL +=  '<br>05. /reservations';
  invalidURL +=  '<br>06. /reservation';
  invalidURL +=  '<br>07. /api/meals/:id';
  invalidURL +=  '<br>08. /api/meals?title=un&maxprice=17&createdAfter=2022-07-20&limit=1';
  invalidURL +=  '<br>09. /api/reservations/:id';
  invalidURL +=  '<br>10. /api/reservations';
  invalidURL +=  '<br>11. /api/reviews/:id';
  invalidURL +=  '<br>12. /api/reviews';

  res.send(invalidURL);
  // res.send('')
});
//******************************************* */

app.use(cors());

if (process.env.API_PATH) {
  app.use(process.env.API_PATH, router);
} else {
  throw "API_PATH is not set. Remember to set it in your .env file"
}

// for the frontend. Will first be covered in the react class
app.use("*", (req, res) => {
  res.sendFile(path.join(`${buildPath}/index.html`));
});

module.exports = app;
