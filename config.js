const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://thomasmehari2721:PSKVz2VvF1NB1Bar@books-store-mern.oikhe.mongodb.net/?retryWrites=true&w=majority&appName=Books-store-MERN"
    );
    console.log("Database Connected");
  } catch (error) {
    console.error(error);
  }
};
module.exports = connectDatabase;
