const Flight = require("../models/flight");

module.exports = {
  create,
  new: newTicket
};

function newTicket(req, res) {
  console.log(req.params.id);
  res.render("tickets/new", {id: req.params.id});
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

function create(req, res) {
  Ticket.find(req.params.id, function(err, flight) {
    flight.destinations.push(req.body);
    flight.save(function(err) {
      res.redirect(`/flights/${req.params.id}`);
    });
  });
}
