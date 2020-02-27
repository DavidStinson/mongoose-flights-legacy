const Flight = require("../models/flight");
const Ticket = require("../models/ticket")

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
    Ticket.find({flight: flight._id}, function(err, tickets) {
      console.log(tickets)
      if (err) return next(err);

      res.render("flights/show", { 
        flight,
        tickets });
    })
    
  });
}
