const express = require("express");
const router = express.Router();
const flightsCtrl = require("../controllers/flights");

/* GET home page. */
router.get("/", flightsCtrl.index);
router.get("/new", flightsCtrl.new);
router.post("/", flightsCtrl.create);
router.get("/:id", flightsCtrl.show);

module.exports = router;
