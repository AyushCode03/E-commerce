import mongoose from "mongoose";

// Async function to establish a connection to the MongoDB database
export const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB using the connection URI from environment variables
    const conn = await mongoose.connect(process.env.MONGO_URI);
    
    // If successful, log the connection host (i.e., MongoDB server hostname)
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    // If an error occurs during the connection attempt, log the error message
    console.log("Error connecting to MONGODB", error.message);
    
    // Exit the process with a non-zero exit code indicating failure
    process.exit(1);
  }
};
