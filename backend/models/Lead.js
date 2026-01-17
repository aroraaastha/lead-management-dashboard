import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  stage: String
});

export default mongoose.model("Lead", leadSchema);
