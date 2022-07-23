const mongoose = require("mongoose");

const password = "4r2HRwr15mmao2TT";

module.exports = () => {
  mongoose.connect(
    `mongodb+srv://ethrift:${password}@cluster0.yhz9krv.mongodb.net/?retryWrites=true&w=majority`
  );
};
