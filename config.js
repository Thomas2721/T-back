const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://thomasmehari2721:oaOD6IYFdnClXBz9@cluster0.n0ej9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Database Connected");
  } catch (error) {
    console.error(error);
  }
};
module.exports = connectDatabase;
