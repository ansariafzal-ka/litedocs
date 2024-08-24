import mongoose from "mongoose";

let isConnected = false;
const connectDb = async () => {
  try {
    if (isConnected) {
      console.log("Already Connected to MongoDb");
      return;
    }
    await mongoose.connect(process.env.MONGODB_URI || "", {
      dbName: "litedocs",
    });
    console.log("Connected to Mongodb");
  } catch (error) {
    console.error("Error connecting to MongoDb", error);
  }
};

export default connectDb;
