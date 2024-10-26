import mongoose from "mongoose";

mongoose.set("strictQuery", true);

mongoose.connect(
  "mongodb+srv://luiz:ptbvnssb@estudos.wne5sdv.mongodb.net/?retryWrites=true&w=majority"
);

let db = mongoose.connection;

export { db };
