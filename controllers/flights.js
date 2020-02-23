const Flight = require("../models/flight");

module.exports = {
  index,
  new: newFlight,
  create
};

function index(req, res) {
  Flight.find({}, function(err, flights) {
    if (err) return next(err);
    res.render("flights/index", { flights });
  });
}

function newFlight(req, res) {
  var newFlight = new Flight();
  var dt = newFlight.departs;
  console.log(dt);
  var destDate = `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()}T${dt
    .getHours()
    .toString()
    .padStart(2, "0")}:${dt
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;
  console.log(dt.getFullYear());
  res.render("flights/new", { destDate });
}

function create(req, res) {
  const flight = new Flight(req.body);
  flight.save(function(err) {
    if (err) return res.render("flights/new");
    res.redirect("flights/");
  });
}