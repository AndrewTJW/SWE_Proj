import mongoose from "mongoose";

let cached = global.tiktokshop_database; //assigning tiktokshop_database variable to [cached] object
const database_name = "tiktokshop_db"

if (!cached) {
  //if dont have an object
  global.tiktokshop_database = { conn: null, promise: null };
  cached = global.tiktokshop_database;
}

async function connectDB() {
  //if [cached].conn has value return [cached.conn]
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const options = {
      //creates an [option] object
      bufferCommands: false,
    };

    //creates a connection to mongoose if it doesnt have a cached connection
    cached.promise = mongoose
      .connect(`${process.env.MONGODB_URI}/${database_name}?retryWrites=true&w=majority&appName=Cluster0`, options)
      .then((mongoose) => {
        return mongoose;
      });
  }

  cached.conn = await cached.promise; //place the connected database in [cached].conn
  return cached.conn;
}

export default connectDB;
