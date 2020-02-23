const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: { type: String, enum: ["American", "Southwest", "United"] },
  flightNo: { type: Number, required: true, min: 10, max: 9999 },
  departs: {
    type: Date,
    default: function() {
      now = new Date();
      oneYearFromNow = now.setFullYear(now.getFullYear() + 1);
      return oneYearFromNow;
    }
  }
});

module.exports = mongoose.model("Flight", flightSchema);
