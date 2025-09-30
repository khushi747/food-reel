// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri = process.env.MONGODB_URI;
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function connectDB() {
//   try {
//     await client.connect();
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } catch (err) {
//     console.error("Failed to connect to MongoDB Atlas:", err);
//   }
// }
// module.exports = { connectDB, client };
const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Database connected successfully"))
    .catch((e) => console.error("Database connection failed:", e));
}

module.exports = connectDB;
