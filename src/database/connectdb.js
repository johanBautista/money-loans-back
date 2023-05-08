import mongoose from "mongoose";

try {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("😎 ----> DB Up!");
} catch (error) {
  console.log("😒 ----> DB Down" + error);
}
