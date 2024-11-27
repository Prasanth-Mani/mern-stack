import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connection = await mongoose.connect("mongodb+srv://prasanthportfolio1998:Prasanth1998@cluster0.kc45z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    // console.log(
    //   `MongoDB connected successfully on host: ${connection.connection.host}, database: ${connection.connection.db.databaseName}`
    // );
    return connection;
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
