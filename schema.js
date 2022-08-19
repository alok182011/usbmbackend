const { model, Schema } = require("mongoose");

const DonorSchema = new Schema({
  name: {
    type: String,
  },
  gender: {
    type: String,
  },
  age: {
    type: String,
  },
  bloodGroup: {
    type: String,
  },
  address: {
    type: String,
  },
  preferredDate: {
    type: String,
  },
});

module.exports = model("Donor", DonorSchema);
