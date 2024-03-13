const mongoose = require("mongoose");
async function connect() {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.connectDB , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect successfully");
  } catch (error) {
    console.log(error);
    console.log("Connect failed");
  }
}

module.exports = { connect };