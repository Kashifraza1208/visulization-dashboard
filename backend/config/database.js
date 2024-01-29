const mongoose = require("mongoose");

const Connection = async (req, res) => {
  try {
    const data = await mongoose.connect(process.env.DB_URL);
    console.log(`Mongodb connected with server: ${data.connection.host}`);
  } catch (error) {
    console.log(`Error while connectiing database`, error);
  }
};

module.exports = Connection;
