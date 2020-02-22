const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: { type: String, enum: ["American", "Southwest", "United"] },
  flightNo: { type: Number, required: true, min: 10, max: 9999 },
  departs: {
    type: Date,
    default: function() {
      return new Date().getFullYear() + 1;
    }
  }

  // 	title: {type: String,
  // 		required: true},
  //   releaseYear: {type: Number, default: function(){
  // 		return new Date().getFullYear()}, min: 1927},
  // 	mpaaRating: {String,
  // 	enum: ["G", "PG", "PG-13", "R"]
  // 	},
  //   cast: [String],
  //   nowShowing: {type: Boolean, deafult: false}
  // }, {
  // 	timestamps: true
});

module.exports = mongoose.model("Movie", movieSchema);
