const Ticket = require("../models/ticket");

module.exports = {
  create,
  new: newTicket
};

function newTicket(req, res) {
  res.render("tickets/new", { id: req.params.id });
}

function create(req, res) {
  req.body.flight = req.params.id;
  console.log(req.body.flight);
  console.log("FLIGHT^^");
  console.log(req.body.id);
  console.log("req.body.id^^^");
  Ticket.create(req.body, function(err, tickets) {
    res.redirect(`/flights/${req.params.id}`);
  });
}
