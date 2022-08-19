const express = require("express");
const router = express.Router();

const Donor = require("./schema");

router.post("/", async (req, res, next) => {
  try {
    let { name, age, address, bloodGroup, preferredDate, gender } = req.body;
    let newDonor = {
      name,
      age,
      address,
      bloodGroup,
      preferredDate,
      gender,
    };

    let donor = await Donor.create(newDonor);

    if (donor) {
      return res.status(200).json(donor);
    } else {
      return res.status(500).json({ message: "Something went wrong" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
});

router.get("/all", async (req, res, next) => {
  try {
    let donors = await Donor.find();

    if (donors) {
      return res.status(200).json({ donors });
    } else {
      return res.status(500).json({ message: "Something went wrong" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = router;
