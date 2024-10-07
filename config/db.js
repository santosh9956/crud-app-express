const mongoose = require("mongoose");

// const connectDB = async () => {
//   const mongoUrl =
//     process.env.MONGO_URI ||
//     "mongodb+srv://santoshmandal:Admin@student1.sqhwj.mongodb.net/crud_user?retryWrites=true&w=majority";
//   try {
//     await mongoose.connect(mongoUrl, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.error("MongoDB connection failed:", mongoUrl, error.message);
//     process.exit(1);
//   }
// };

const connectDB = async () => {
  const uri =
    process.env.MONGO_URI ||
    "mongodb+srv://santoshmandal:Admin@student1.sqhwj.mongodb.net/crud_user?retryWrites=true&w=majority";
  try {
    await mongoose.connect(uri, {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
    });
    console.log("Mongo connected!");
  } catch (error) {
    console.log("Error in connecting mongo", error.message);
    process.exit(1);
  }
};

connectDB();

module.exports = mongoose;
