const mongoose = require("mongoose");

const connectDb = async () => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("Database is connected");
    })
    .catch((error) => {
      console.log("Error Occurs", error);
    });
};

module.exports = {
  connectDb,
};
