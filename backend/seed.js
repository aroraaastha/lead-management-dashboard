const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Lead = require("./models/Lead");

dotenv.config();

const leads = [
  { name: "Rahul Sharma", email: "rahul@gmail.com", phone: "9876543210", status: "New" },
  { name: "Priya Singh", email: "priya@gmail.com", phone: "9123456789", status: "Contacted" },
  { name: "Aman Verma", email: "aman@gmail.com", phone: "9988776655", status: "Qualified" },
  { name: "Neha Gupta", email: "neha@gmail.com", phone: "9876501234", status: "New" },
  { name: "Rohit Mehta", email: "rohit@gmail.com", phone: "9000011111", status: "Lost" }
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected for seeding");
    await Lead.deleteMany();
    await Lead.insertMany(leads);
    console.log("✅ Leads inserted");
    process.exit();
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
