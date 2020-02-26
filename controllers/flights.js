const Flight = require("../models/flight");

module.exports = {
  index,
  new: newFlight,
  create,
  show
};

function index(req, res) {
  Flight.find({}, function(err, flights) {
    if (err) return next(err);
    res.render("flights/index", { flights });
  });
}

function newFlight(req, res) {
  console.log(req.body);
  // let newFlight = new Flight();
  // let dt = newFlight.departs;
  // // let destDate = `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()}T${dt
  // //   .getHours()
  // //   .toString()
  // //   .padStart(2, "0")}:${dt
  // //   .getMinutes()
  // //   .toString()
  // //   .padStart(2, "0")}`;\
  res.render("flights/new");
}

function create(req, res) {
  console.log(req.body);
  const flight = new Flight(req.body);
  flight.save(function(err) {
    if (err) return res.render("flights/new");
    console.log(flight);
    res.redirect("flights/");
  });
}

function show(req, res) {
  console.log(req.params);
  Flight.findById(req.params.id, function(err, flight) {
    if (err) return next(err);
    res.render("flights/show", { flight });
  });
}
